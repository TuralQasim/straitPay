import "../businessCurrency/businessCurrency.css";
import { useState } from "react";

type BusinessCurrencyProps = {
  setCurrentStep: any;
};
const BusinessCurrency: React.FC<BusinessCurrencyProps> = ({
  setCurrentStep,
}) => {
  const [currentFlag, setCurrentFlag] = useState(1);
  const checkValue = (e: any) => {
    const target = e.target;
    const value = target.dataset.value;
    setCurrentFlag(value);
  };
  return (
    <>
      <div className="standart_form">
        <div className="flags">
          <div
            className={
              currentFlag == 1 ? "flag_item flag_item_active" : "flag_item"
            }
            data-value="1"
            onClick={checkValue}
          >
            <img src="./icons/flag1.svg" alt="" />
          </div>
          <div
            className={
              currentFlag == 2 ? "flag_item flag_item_active" : "flag_item"
            }
            data-value="2"
            onClick={checkValue}
          >
            <img src="./icons/flag2.svg" alt="" />
          </div>
          <div
            className={
              currentFlag == 3 ? "flag_item flag_item_active" : "flag_item"
            }
            data-value="3"
            onClick={checkValue}
          >
            <img src="./icons/flag3.svg" alt="" />
          </div>
          <div
            className={
              currentFlag == 4 ? "flag_item flag_item_active" : "flag_item"
            }
            data-value="4"
            onClick={checkValue}
          >
            <img src="./icons/flag4.svg" alt="" />
          </div>
          <div
            className={
              currentFlag == 5 ? "flag_item flag_item_active" : "flag_item"
            }
            data-value="5"
            onClick={checkValue}
          >
            <img src="./icons/flag5.svg" alt="" />
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

export default BusinessCurrency;
