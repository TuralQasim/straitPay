import "../../responsive.css";
import "../register/register.css";
import React from "react";
import { useState, useContext, SetStateAction } from "react";
import Country from "../../components/country/Country";
import Email from "../../components/email/Email";
import Account from "../../components/accaunt/Account";
import PIN from "../../components/pin/PIN";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { AllContext, AllContextType } from "../../context/AllContext";

const Register: React.FC = () => {
  const { verified, setVerified } = useContext<AllContextType>(AllContext);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps = [
    <Country setCurrentStep={setCurrentStep} />,
    <Email setCurrentStep={setCurrentStep} />,
    <Account setCurrentStep={setCurrentStep} />,
    <PIN />,
  ];
  const checkVerified = () => {
    setVerified((verified) => !verified);
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

export default Register;
