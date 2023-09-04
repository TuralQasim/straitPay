import React, { useState } from "react";
import { connect } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";

type AppState = {
  verified: boolean;
  phone: boolean;
  kyc: boolean;
  transaction: boolean;
  isVerified: boolean;
};

type TransactionProps = {
  dispatch: Dispatch;
};
const Transaction: React.FC<TransactionProps> = ({ dispatch }) => {
  const setTransaction = () => {
    dispatch({
      type: "TRANSACT",
      payload: true,
    });
  };
  return (
    <>
      <div className="container">
        <div className="login">
          <div className="standart_title">
            <h2>Set Transaction PIN</h2>
            <p>Enter 4-digit PIN to secure your transactions</p>
          </div>
          <div className="standart_form">
            <label htmlFor="">
              <p>New PIN</p>
              <input type="text" />
            </label>
            <label htmlFor="">
              <p>Confirm New PIN</p>
              <input type="text" />
            </label>
            <Link
              to="/userAccount"
              className="submit_btn"
              onClick={setTransaction}
            >
              Set Tranaction PIN
            </Link>
          </div>
          <Link className="standart_close" to="/">
            <FaXmark />
          </Link>
          <Link className="standart_back" to="/userAccount">
            <IoIosArrowBack />
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

const t = (a: AppState) => a;
export default connect(t)(Transaction);
