import "../pin/pin.css";
import "../../responsive.css";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

type inputRefsItem = {
  current: any;
};
const PIN: React.FC = () => {
  const inputRefs: inputRefsItem[] = Array.from({ length: 4 }, () =>
    useRef<HTMLInputElement>(null)
  );
  const [values, setValues] = useState<string[]>(["", "", "", ""]);

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
        <h5>
          Enter a 4-digit PIN to keep your account and transaction secured
        </h5>
        <div className="pin-input-container">
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
        <Link className="submit_btn" to="/userAccount">
          Create Pin
        </Link>
      </div>
    </>
  );
};

export default PIN;
