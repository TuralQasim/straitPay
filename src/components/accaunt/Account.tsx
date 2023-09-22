import "../../responsive.css";
import "../accaunt/account.css";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Formik } from "formik";
import * as yup from "yup";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type AccountProps = {
  setCurrentStep: any;
};
type valuesType = {
  pass: string | null;
  mail: string | null;
};

const Account: React.FC<AccountProps> = ({ setCurrentStep }) => {
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const [checkedGender, setCheckedGender] = useState<string>("Male");
  const checkGender = (e: any) => {
    e.stopPropagation();
    setDropOpen(false);
    setCheckedGender(e.target.textContent);
  };
  const changStep: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentStep((step: number) => step + 1);
  };
  const validationsSchema = yup.object().shape({
    name: yup
      .string()
      .typeError("Type correct Email")
      .required("required Input"),
    secondName: yup
      .string()
      .typeError("Type correct Email")
      .required("required Input"),
  });
  const genderRef = useRef(null);
  useClickOutSide(genderRef, () => {
    setDropOpen(false);
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          secondName: "",
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
          <form className="standart_form">
            <label htmlFor="name" className="email_input">
              <p>First name</p>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter your first name"
              />
              {touched.name && errors.name && (
                <p className="standart_error_text">{errors.name}</p>
              )}
            </label>
            <label htmlFor="secondName" className="email_input">
              <p>Last name</p>
              <input
                type="text"
                name="secondName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secondName}
                placeholder="Enter phone last name"
              />
              {touched.secondName && errors.secondName && (
                <p className="standart_error_text">{errors.secondName}</p>
              )}
            </label>
            <label htmlFor="">
              <p>Gender</p>
              <div
                className="gender"
                onClick={() => setDropOpen((open) => !open)}
              >
                <p>{checkedGender}</p>
                <IoIosArrowDown className={dropOpen ? "rotatedArrow" : ""} />
                {dropOpen && (
                  <AnimatePresence>
                    <motion.ul
                      initial={{
                        y: "40px",
                      }}
                      animate={{
                        y: 0,
                      }}
                      exit={{
                        y: "40px",
                      }}
                      className="gender_dropdown"
                      ref={genderRef}
                    >
                      <li onClick={checkGender}>Male</li>
                      <li onClick={checkGender}>Famale</li>
                    </motion.ul>
                  </AnimatePresence>
                )}
              </div>
            </label>
            <button onClick={changStep}>Next</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Account;
