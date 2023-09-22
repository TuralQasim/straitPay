import "../../responsive.css";
import "../kyc/kyc.css";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  useState,
  useRef,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import { AllContext, AllContextType } from "../../context/AllContext";

type AppState = {
  phone: boolean;
  kyc: boolean;
  transaction: boolean;
  isVerified: boolean;
};
type KycType = {
  verified: boolean;
  setVerified: Dispatch<SetStateAction<boolean>>;
};
const KYC: React.FC = () => {
  const { kyc, setKyc } = useContext<AllContextType>(AllContext);
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const [checkedId, setCheckedId] = useState<string>("National ID Card");
  const checkID = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropOpen(false);
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    if (text) {
      setCheckedId(text);
    }
  };
  const checkIDVerified = () => {
    setKyc(true);
  };
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const checkFront = (e: React.ChangeEvent) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    if (text != "") {
      setFront(true);
    }
  };
  const checkBack = (e: React.ChangeEvent) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    if (text != "") {
      setBack(true);
    }
  };
  const idRef = useRef(null);
  useClickOutSide(idRef, () => {
    setDropOpen(false);
  });
  return (
    <>
      <div className="container">
        <div className="login">
          <div className="standart_title">
            <h2>Upload Proof of Identity</h2>
            <p>
              straitPay requires you to upload a valid ID (driver licence,
              international passport or national ID) to activate your wallet.
            </p>
          </div>
          <div className="standart_form">
            <label htmlFor="">
              <p>What’s your primary country of residence?</p>
              <div
                className="country"
                onClick={() => setDropOpen((dropOpen) => !dropOpen)}
              >
                <h6>{checkedId}</h6>
                <IoIosArrowDown className={dropOpen ? "rotatedArrow" : ""} />
                {dropOpen && (
                  <AnimatePresence>
                    <motion.ul
                      initial={{
                        y: "40px",
                      }}
                      animate={{
                        y: 0,
                      }}
                      exit={{
                        y: "40px",
                      }}
                      className="country_dropdown id_dropdown"
                      ref={idRef}
                    >
                      <li onClick={checkID}>National ID Card</li>
                      <li onClick={checkID}>Pasport</li>
                    </motion.ul>
                  </AnimatePresence>
                )}
              </div>
            </label>
            <label htmlFor="" className={front ? "id_front" : "id_front_empty"}>
              {front ? (
                <h4>(Front) National ID Card.jpeg</h4>
              ) : (
                <div className="id_front_text">
                  <h2>Upload Front Side</h2>
                  <p>
                    Upload the front side of your ID. Supports{" "}
                    <span>JPEG, PNG & PDF</span>
                  </p>
                </div>
              )}
              <input type="file" onChange={checkFront} />
            </label>
            <label htmlFor="" className={back ? "id_back" : "id_back_empty"}>
              {back ? (
                <h4>(Back) National ID Card.jpeg</h4>
              ) : (
                <div className="id_back_text">
                  <h2>Upload Back Side</h2>
                  <p>
                    Upload the back side of your ID. Supports{" "}
                    <span>JPEG, PNG & PDF</span>
                  </p>
                </div>
              )}
              <input type="file" onChange={checkBack} />
            </label>
            <Link
              to="/userAccount"
              className="submit_btn"
              onClick={checkIDVerified}
            >
              Submit
            </Link>
          </div>
          <Link className="standart_close" to="/userAccount">
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

export default KYC;
