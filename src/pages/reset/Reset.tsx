import "../reset/reset.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import Forgot from "../../components/forgot/Forgot";
import ResetForm from "../../components/resetForm/ResetForm";

const Reset: React.FC = () => {
  const [reset, setReset] = useState<boolean>(false);
  return (
    <>
      <div className="container">
        <div className="reset">
          {reset ? <ResetForm /> : <Forgot setReset={setReset} />}
          {!reset ? (
            <Link className="standart_back" to="/">
              <IoIosArrowBack />
              Back
            </Link>
          ) : (
            <button className="standart_back" onClick={() => setReset(false)}>
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

export default Reset;
