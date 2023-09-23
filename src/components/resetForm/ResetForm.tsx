import "../resetForm/resetForm.css";
import React from "react";

const ResetForm: React.FC = () => {
  return (
    <>
      <div className="standart_title">
        <h2>Reset PIN</h2>
        <p>Enter reset code and new PIN</p>
      </div>
      <div className="standart_form">
        <label htmlFor="">
          <p>Enter Reset 4-digitCode</p>
          <input type="text" />
        </label>
        <label htmlFor="">
          <p>New PIN</p>
          <input type="text" />
        </label>
        <label htmlFor="">
          <p>Confirm New PIN</p>
          <input type="text" />
        </label>
        <button>Reset PIN</button>
      </div>
    </>
  );
};

export default ResetForm;
