import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

type BusinessCountryProps = {
  setCurrentStep: any;
};
const BusinessCountry: React.FC<BusinessCountryProps> = ({
  setCurrentStep,
}) => {
  const [currentFlag, setCurrentFlag] = useState(3);
  const incValue = (e: any) => {
    if (currentFlag == 5) {
      setCurrentFlag(1);
    } else {
      setCurrentFlag((step: number) => {
        return step + 1;
      });
    }
  };
  const decValue = (e: any) => {
    if (currentFlag == 1) {
      setCurrentFlag(5);
    } else {
      setCurrentFlag((step: number) => {
        return step - 1;
      });
    }
  };
  return (
    <>
      <div className="standart_form">
        <div className="flaqs_wrapper">
          <div className="previous_flag_btn" onClick={decValue}>
            <IoIosArrowBack />
          </div>
          <div className="flags flags_country">
            <div
              className={
                currentFlag == 1 ? "flag_item flag_item_active_country" : "flag_item"
              }
              data-value="1"
            >
              <img src="./icons/flag1.svg" alt="" />
            </div>
            <div
              className={
                currentFlag == 2 ? "flag_item flag_item_active_country" : "flag_item"
              }
              data-value="2"
            >
              <img src="./icons/flag2.svg" alt="" />
            </div>
            <div
              className={
                currentFlag == 3 ? "flag_item flag_item_active_country" : "flag_item"
              }
              data-value="3"
            >
              <img src="./icons/flag3.svg" alt="" />
            </div>
            <div
              className={
                currentFlag == 4 ? "flag_item flag_item_active_country" : "flag_item"
              }
              data-value="4"
            >
              <img src="./icons/flag4.svg" alt="" />
            </div>
            <div
              className={
                currentFlag == 5 ? "flag_item flag_item_active_country" : "flag_item"
              }
              data-value="5"
            >
              <img src="./icons/flag5.svg" alt="" />
            </div>
          </div>
          <div className="next_flag_btn" onClick={incValue}>
            <IoIosArrowForward />
          </div>
        </div>

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
