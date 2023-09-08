import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { connect } from "react-redux";

type valuesType = {
  pass: string | null;
  mail: string | null;
};
type LoginType = {
  business: boolean;
};
const Login: React.FC<LoginType> = ({ business }) => {
  const [pass, setPass] = useState<boolean>(false);
  const checkPass = () => {
    setPass((pass) => !pass);
  };
  const [values, setValues] = useState<valuesType>({ pass: null, mail: null });
  const changeValues = (e: React.ChangeEvent) => {
    const type = e.target.getAttribute("type");
    setValues((value: valuesType) => {
      const target = e.target as HTMLInputElement;
      const text: string | undefined = target?.value || undefined;
      if (type === "email") {
        const mail = text || "";
        return { ...value, mail };
      } else {
        const pass = text || "";
        return { ...value, pass };
      }
    });
  };
  const [apply, setApply] = useState<boolean>(false);
  const checkApply = () => {
    if (values.pass == "" || values.mail == "") {
      setApply(true);
    } else {
      return;
    }
  };
  return (
    <>
      <div className="container">
        <div className="login">
          <div className="standart_title">
            <h2>Login to Your Account</h2>
            <p>Login your straitPay account to access your dashboard</p>
          </div>
          <div className="standart_form">
            <label htmlFor="">
              <p>Enter Email Address or Phone Number</p>
              <input type="email" value={values.mail} onChange={changeValues} />
            </label>
            <label htmlFor="" className="pass_label">
              <p>Enter PIN</p>
              <input
                type={pass ? "text" : "password"}
                value={values.pass}
                onChange={changeValues}
              />
              {pass ? (
                <BsEye onClick={checkPass} />
              ) : (
                <BsEyeSlash onClick={checkPass} />
              )}
            </label>
            {apply && (
              <h6
                className={
                  business ? "error_text error_text_business" : "error_text"
                }
              >
                Mail or password is incorrect
              </h6>
            )}
            <Link
              className={
                business ? "submit_btn submit_btn_business" : "submit_btn"
              }
              to={values.mail && values.pass ? "/userAccount" : ""}
              onClick={checkApply}
            >
              Login
            </Link>
            <p className="dont_have">
              Don’t have an account?
              <Link to="/register" className={business ? "business_log_link" : ""}>
                Create Account
              </Link>
            </p>
            <Link to="/reset" className={business ? "business_log_link" : ""}>
              Forgot Password?
            </Link>
          </div>
          <Link className="standart_back" to={business ? "/business" : "/"}>
            <IoIosArrowBack />
            Back
          </Link>
          <Link className="standart_close" to={business ? "/business" : "/"}>
            <FaXmark />
          </Link>
        </div>
      </div>
    </>
  );
};

const t = (a) => a;
export default connect(t)(Login);
