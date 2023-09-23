import React, { useState, useRef } from "react";
import "../businessPIN/businessPIN.css";

type BusinessPINProps = {
  setCurrentStep: any;
};
type inputRefsItem = {
  current: any;
};
type inputRefs1Item = {
  current: any;
};
const BusinessPIN: React.FC<BusinessPINProps> = ({ setCurrentStep }) => {
  const [values, setValues] = useState<string[]>(["", "", "", ""]);
  const [values1, setValues1] = useState<string[]>(["", "", "", ""]);
  const inputRefs: inputRefsItem[] = Array.from({ length: 4 }, () =>
    useRef<HTMLInputElement>(null)
  );
  const inputRefs1: inputRefs1Item[] = Array.from({ length: 4 }, () =>
    useRef<HTMLInputElement>(null)
  );
  const handlePinChange1 = (event: React.ChangeEvent, index: number) => {
    const target = event.target as HTMLInputElement;
    let value: string;
    if (target) {
      value = target.value;
      if (/^\d*$/.test(value) && value.length <= 1) {
        const newValues = [...values1];
        newValues[index] = value;
        setValues1(newValues);

        if (value.length === 1 && index < inputRefs1.length - 1) {
          inputRefs1[index + 1].current.focus();
        }

        if (value.length === 0 && index > 0) {
          inputRefs1[index - 1].current.focus();
        }
      }
    }
  };
  const handlePinChange = (event: React.ChangeEvent, index: number) => {
    const target = event.target as HTMLInputElement;
    let value: string;
    if (target) {
      value = target.value;
      if (/^\d*$/.test(value) && value.length <= 1) {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (value.length === 1 && index < inputRefs.length - 1) {
          inputRefs[index + 1].current.focus();
        }

        if (value.length === 0 && index > 0) {
          inputRefs[index - 1].current.focus();
        }
      }
    }
  };

  return (
    <>
      <div className="standart_form">
        <h5>Create PIN</h5>
        <div className="pin-input-container pin-input-container-business">
          {inputRefs.map((ref, index) => (
            <div key={index} className="pin-input-wrapper">
              <input
                ref={ref}
                type="text"
                maxLength={1}
                value={values[index]}
                onChange={(event) => handlePinChange(event, index)}
                className="pin-input"
              />
              <span className="pin-dot">{values[index] ? "" : "."}</span>
            </div>
          ))}
        </div>
        <h5>Confirm PIN</h5>
        <div className="pin-input-container pin-input-container-business">
          {inputRefs1.map((ref, index) => (
            <div key={index} className="pin-input-wrapper">
              <input
                ref={ref}
                type="text"
                maxLength={1}
                value={values1[index]}
                onChange={(event) => handlePinChange1(event, index)}
                className="pin-input"
              />
              <span className="pin-dot">{values1[index] ? "" : "."}</span>
            </div>
          ))}
        </div>
        <button
          className="business_next_btn"
          style={{ backgroundColor: "#544e9e" }}
          onClick={() => setCurrentStep((prevStep: number) => prevStep + 1)}
        >
          Create PIN
        </button>
      </div>
    </>
  );
};

export default BusinessPIN;
