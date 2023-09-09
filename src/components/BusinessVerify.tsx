import React from "react";

type BusinessVerifyProps = {
  setCurrentStep: any;
};
const BusinessVerify: React.FC<BusinessVerifyProps> = ({ setCurrentStep }) => {
  return (
    <>
      <div className="standart_form">
        <label htmlFor="">
          <p>4-digit verification code</p>
          <input type="text" placeholder="Enter verification code" />
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
    </>
  );
};

export default BusinessVerify;
