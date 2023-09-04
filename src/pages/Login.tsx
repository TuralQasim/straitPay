import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

type valuesType = {
  pass: string;
  mail: string;
};
const Login: React.FC = () => {
  const [pass, setPass] = useState<boolean>(false);
  const checkPass = () => {
    setPass((pass) => !pass);
  };
  const [values, setValues] = useState<valuesType>({ pass: "", mail: "" });
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
              <h6 className="error_text">Mail or password is incorrect</h6>
            )}
            <Link
              className="submit_btn"
              to={values.mail && values.pass ? "/userAccount" : ""}
              onClick={checkApply}
            >
              Login
            </Link>
            <p className="dont_have">
              Don’t have an account?
              <Link to="/register">Create Account</Link>
            </p>
            <Link to="/reset">Forgot Password?</Link>
          </div>
          <Link className="standart_back" to="/">
            <IoIosArrowBack />
            Back
          </Link>
          <Link className="standart_close" to="/">
            <FaXmark />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
