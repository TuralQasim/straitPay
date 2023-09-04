import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type AccountProps = {
  setCurrentStep: any;
};

const Account: React.FC<AccountProps> = ({ setCurrentStep }) => {
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const [checkedGender, setCheckedGender] = useState<string>("Male");
  const checkGender = (e: any) => {
    e.stopPropagation();
    setDropOpen(false);
    setCheckedGender(e.target.textContent);
  };
  const changStep: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentStep((step: number) => step + 1);
  };
  return (
    <>
      <div className="standart_form">
        <label htmlFor="">
          <p>First name</p>
          <input type="text" placeholder="Enter your first name" />
        </label>
        <label htmlFor="">
          <p>Last name</p>
          <input type="text" placeholder="Enter phone last name" />
        </label>
        <label htmlFor="">
          <p>Last name</p>
          <div className="gender" onClick={() => setDropOpen((open) => !open)}>
            <p>{checkedGender}</p>
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
                  className="gender_dropdown"
                >
                  <li onClick={checkGender}>Male</li>
                  <li onClick={checkGender}>Famale</li>
                </motion.ul>
              </AnimatePresence>
            )}
          </div>
        </label>
        <button onClick={changStep}>Next</button>
      </div>
    </>
  );
};

export default Account;
