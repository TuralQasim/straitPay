import React from "react";
import { useState } from "react";
import Country from "../components/Country";
import Email from "../components/Email";
import Account from "../components/Account";
import PIN from "../components/PIN";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type AppState = {
  verified: boolean;
  phone: boolean;
  kyc: boolean;
  transaction: boolean;
  isVerified: boolean;
};
type RegisterProps = {
  verified: boolean;
  dispatch: Dispatch;
};
const Register: React.FC<RegisterProps> = ({ verified, dispatch }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps = [
    <Country setCurrentStep={setCurrentStep} />,
    <Email setCurrentStep={setCurrentStep} />,
    <Account setCurrentStep={setCurrentStep} />,
    <PIN />,
  ];
  const checkVerified = () => {
    dispatch({
      type: "VERIFIED",
      payload: !verified,
    });
  };
  return (
    <>
      <div className="container">
        <div className="login">
          {verified ? (
            ""
          ) : currentStep == 0 ? (
            <div className="standart_title">
              <h2>Country of Residence</h2>
            </div>
          ) : currentStep == 1 ? (
            <div className="standart_title">
              <h2>Setup Your Account</h2>
            </div>
          ) : currentStep == 2 ? (
            <div className="standart_title">
              <h2>Create an Acount</h2>
            </div>
          ) : (
            <div className="standart_title">
              <h2>Setup PIN</h2>
            </div>
          )}
          {!verified && (
            <div className="progress_container">
              <div className="progress_line">
                <div
                  className={
                    currentStep == 0
                      ? ""
                      : currentStep == 1
                      ? "fill_line1"
                      : currentStep == 2
                      ? "fill_line2"
                      : "fill_line3"
                  }
                ></div>
              </div>
              <ul className="progress_components">
                <li>Country</li>
                <li className={currentStep >= 1 ? "active_component" : ""}>
                  Email
                </li>
                <li className={currentStep >= 2 ? "active_component" : ""}>
                  Account
                </li>
                <li>PIN</li>
              </ul>
            </div>
          )}
          {steps[currentStep]}
          {currentStep == 0 ? (
            <Link className="standart_back" to="/">
              <IoIosArrowBack />
              Back
            </Link>
          ) : verified ? (
            <button className="standart_back" onClick={checkVerified}>
              <IoIosArrowBack />
              Back
            </button>
          ) : (
            <button
              className="standart_back"
              onClick={() => {
                setCurrentStep((step) => step - 1);
              }}
            >
              <IoIosArrowBack />
              Back
            </button>
          )}
          <Link className="standart_close" to="/">
            <FaXmark />
          </Link>
        </div>
      </div>
    </>
  );
};

const t = (a: AppState) => a;
export default connect(t)(Register);
