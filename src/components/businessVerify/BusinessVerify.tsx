import "../businessVerify/businessVerify.css";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

type BusinessVerifyProps = {
  setCurrentStep: any;
};
const BusinessVerify: React.FC<BusinessVerifyProps> = ({ setCurrentStep }) => {
  const validationsSchema = yup.object().shape({
    number: yup
      .number()
      .typeError("Type only number")
      .required("required Input"),
  });
  return (
    <>
      <Formik
        initialValues={{
          number: "",
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
            <label htmlFor="number" className="email_input">
              <p>4-digit verification code</p>
              <input
                type="number"
                name="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
                placeholder="Enter verification code"
              />
              {touched.number && errors.number && (
                <p className="standart_error_text">{errors.number}</p>
              )}
            </label>
            <button className="standart_link_business">
              I didn’t receive a code
            </button>
            <button
              className="business_next_btn"
              style={{ backgroundColor: "#544e9e" }}
              onClick={() => setCurrentStep((prevStep: number) => prevStep + 1)}
            >
              Submit
            </button>
          </div>
        )}
      </Formik>
    </>
  );
};

export default BusinessVerify;
