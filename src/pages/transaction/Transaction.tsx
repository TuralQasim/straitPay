import "../../responsive.css";
import "../transaction/transaction.css";
import React, { useContext, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { AllContext, AllContextType } from "../../context/AllContext";

const Transaction: React.FC = () => {
  const { transaction, setTransaction } =
    useContext<AllContextType>(AllContext);
  const changeTransaction = () => {
    setTransaction((transaction) => !transaction);
  };
  const validationsSchema = yup.object().shape({
    pin: yup.number().typeError("Type only number").required("required Input"),
    confirmPin: yup
      .number()
      .oneOf([yup.ref("pin")], "Password mismatch")
      .required("required Input"),
  });
  return (
    <>
      <div className="container">
        <div className="login">
          <div className="standart_title">
            <h2>Set Transaction PIN</h2>
            <p>Enter 4-digit PIN to secure your transactions</p>
          </div>
          <Formik
            initialValues={{
              pin: "",
              confirmPin: "",
            }}
            validateOnBlur
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={validationsSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <div className="standart_form">
                <label htmlFor="pin" className="email_input">
                  <p>New PIN</p>
                  <input
                    type="number"
                    name="pin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pin}
                  />
                  {touched.pin && errors.pin && (
                    <p className="standart_error_text">{errors.pin}</p>
                  )}
                </label>
                <label
                  htmlFor="confirmPin"
                  className="email_input email_input_margin"
                >
                  <p>Confirm New PIN</p>
                  <input
                    type="number"
                    name="confirmPin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPin}
                  />
                  {touched.confirmPin && errors.confirmPin && (
                    <p className="standart_error_text">{errors.confirmPin}</p>
                  )}
                </label>
                <Link
                  to="/userAccount"
                  className="submit_btn"
                  onClick={changeTransaction}
                >
                  Set Tranaction PIN
                </Link>
              </div>
            )}
          </Formik>

          <Link className="standart_close" to="/">
            <FaXmark />
          </Link>
          <Link className="standart_back" to="/userAccount">
            <IoIosArrowBack />
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Transaction;
