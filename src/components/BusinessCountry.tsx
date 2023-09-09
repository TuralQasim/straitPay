import React from "react";

type BusinessCountryProps = {
  setCurrentStep: any;
};
const BusinessCountry: React.FC<BusinessCountryProps> = ({
  setCurrentStep,
}) => {
  return (
    <>
      <div className="standart_form">
        <button
          className="business_next_btn"
          style={{ backgroundColor: "#544e9e" }}
          onClick={() => setCurrentStep((prevStep: number) => prevStep + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default BusinessCountry;
