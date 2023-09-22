import "../../responsive.css";
import "../forgot/forgot.css";
import React from "react";

type ForgotProps = {
  setReset: (arg: boolean) => void;
};
const Forgot: React.FC<ForgotProps> = ({ setReset }) => {
  return (
    <>
      <div className="standart_title">
        <h2>Forgot PIN</h2>
        <p>Enter your email to reset your PIN</p>
      </div>
      <div className="standart_form">
        <label htmlFor="">
          <p>Email Address</p>
          <input type="text" placeholder="nigeria@gmail.com" />
        </label>
        <button
          onClick={() => {
            setReset(true);
          }}
        >
          Reset PIN
        </button>
      </div>
    </>
  );
};

export default Forgot;
