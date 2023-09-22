import "../../responsive.css";
import "../login/login.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { Formik } from "formik";
import * as yup from "yup";
import { AllContext, AllContextType } from "../../context/AllContext";
type valuesType = {
  pass: string | null;
  mail: string | null;
};

type FormikProps = {
  email: string;
  pass: string;
};
const Login: React.FC = () => {
  const { business, setBusiness } = useContext<AllContextType>(AllContext);
  const validationsSchema = yup.object().shape({
    email: yup.string().email("Type correct Email").required("required Input"),
    pass: yup.string().typeError("").required("required Input"),
  });
  const [pass, setPass] = useState<boolean>(false);
  const [to, setTo] = useState<boolean>(false);
  const checkPass = () => {
    setPass((pass) => !pass);
  };

  return (
    <>
      <div className="container">
        <div className="login">
          <div className="standart_title">
            <h2>Login to Your Account</h2>
            <p>Login your straitPay account to access your dashboard</p>
          </div>
          <Formik
            initialValues={{
              email: "",
              pass: "",
            }}
            validateOnBlur
            onSubmit={(values) => {
              setTo(true);
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
              <form className="standart_form">
                <label htmlFor="email" className="email_input">
                  <p>Enter Email Address or Phone Number</p>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    // value={values.mail}
                    // onChange={changeValues}
                  />
                  {touched.email && errors.email && (
                    <p className="standart_error_text">{errors.email}</p>
                  )}
                </label>
                <label htmlFor="pass" className="pass_label">
                  <p>Enter PIN</p>
                  <input
                    type={pass ? "text" : "password"}
                    value={values.pass}
                    name="pass"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {pass ? (
                    <BsEye onClick={checkPass} />
                  ) : (
                    <BsEyeSlash onClick={checkPass} />
                  )}
                  {touched.pass && errors.pass && (
                    <p className="standart_error_text">{errors.pass}</p>
                  )}
                </label>
                <Link
                  disabled={!isValid && !dirty}
                  className={
                    business ? "submit_btn submit_btn_business" : "submit_btn"
                  }
                  to={to ? "/userAccount" : ""}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </Link>
                <p className="dont_have">
                  Don’t have an account?
                  <Link
                    to="/register"
                    className={business ? "business_log_link" : ""}
                  >
                    Create Account
                  </Link>
                </p>
                <Link
                  to="/reset"
                  className={business ? "business_log_link" : ""}
                >
                  Forgot Password?
                </Link>
              </form>
            )}
          </Formik>
          <Link className="standart_back" to={business ? "/business" : "/"}>
            <IoIosArrowBack />
            Back
          </Link>
          <Link className="standart_close" to={business ? "/business" : "/"}>
            <FaXmark />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
