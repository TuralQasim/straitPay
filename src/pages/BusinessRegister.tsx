import React from "react";
import { Dispatch } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import BusinessInfo from "../components/BusinessInfo";
import BusinessContact from "../components/BusinessContact";
import BusinessCountry from "../components/BusinessCountry";
import BusinessVerify from "../components/BusinessVerify";
import BusinessPIN from "../components/BusinessPIN";
import BusinessDocs from "../components/BusinessDocs";
import BusinessCurrency from "../components/BusinessCurrency";
import BusinessSuccess from "../components/BusinessSuccess";

type BusinessRegisterType = {};

const BusinessRegister: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const steps = [
    <BusinessInfo setCurrentStep={setCurrentStep} />,
    <BusinessContact setCurrentStep={setCurrentStep} />,
    <BusinessCountry setCurrentStep={setCurrentStep} />,
    <BusinessVerify setCurrentStep={setCurrentStep} />,
    <BusinessPIN setCurrentStep={setCurrentStep} />,
    <BusinessDocs setCurrentStep={setCurrentStep} />,
    <BusinessCurrency />,
    <BusinessSuccess />,
  ];
  return (
    <>
      <div className="container">
        <div className="login">
          {currentStep == 0 ? (
            <div className="standart_title">
              <h2>Business Info</h2>
              <p>Please provide following details for your new account</p>
            </div>
          ) : currentStep == 1 ? (
            <div className="standart_title">
              <h2>Contact Info</h2>
              <p>Please provide your business contact information.</p>
            </div>
          ) : currentStep == 2 ? (
            <div className="standart_title standart_title_country">
              <h2>Which African countries you intend to do business with?</h2>
              <p>You can select more than one country. </p>
            </div>
          ) : currentStep == 3 ? (
            <div className="standart_title">
              <h2>Verify Account</h2>
              <p>
                Enter 4-digit code we have sent to +27 1234567890{" "}
                <Link to="" className="standart_link_business">
                  Change phone number
                </Link>{" "}
              </p>
            </div>
          ) : currentStep == 4 ? (
            <div className="standart_title standart_title_country">
              <h2>Setup PIN</h2>
            </div>
          ) : currentStep == 5 ? (
            <div className="standart_title standart_title_country">
              <h2>Upload Business Documents</h2>
            </div>
          ) : (
            ""
          )}
          {steps[currentStep]}
          {currentStep == 0 ? (
            <Link
              className="standart_back standart_back_business"
              to="/business"
            >
              <IoIosArrowBack />
              Back
            </Link>
          ) : (
            <button
              className="standart_back standart_back_business"
              onClick={() => {
                setCurrentStep((step) => step - 1);
              }}
            >
              <IoIosArrowBack />
              Back
            </button>
          )}
          <Link className="standart_close standart_close_business" to="/">
            <FaXmark />
          </Link>
        </div>
      </div>
    </>
  );
};

const t = (a) => a;
export default BusinessRegister;
