import "../career/career.css";
import React, { useState, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import Transact from "../../components/transact/Transact";
import { FaAngleDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type dropOpenType = {
  category: boolean;
  job: boolean;
};
type checkedValueType = {
  category: string;
  job: string;
};
const Career: React.FC = () => {
  const [dropOpen, setDropOpen] = useState<dropOpenType>({
    category: false,
    job: false,
  });
  const [checkedValue, setCheckedValue] = useState<checkedValueType>({
    category: "All Category",
    job: "All Job Types",
  });
  const checkValueCat = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    e.stopPropagation();
    if (text) {
      setCheckedValue((prev) => {
        let newCat = { ...prev, category: text };
        return newCat;
      });
    }
    setDropOpen((drop) => {
      let newDrop = { ...drop, category: false };
      return newDrop;
    });
  };
  const checkValueJob = (e: any) => {
    e.stopPropagation();
    setCheckedValue((prev) => {
      let newCat = { ...prev, job: e.target.textContent };
      return newCat;
    });
    setDropOpen((drop) => {
      let newDrop = { ...drop, job: false };
      return newDrop;
    });
  };
  const catRef = useRef<HTMLUListElement>(null);
  const jobRef = useRef<HTMLUListElement>(null);
  useClickOutSide(catRef, () => {
    if (dropOpen.category) {
      setDropOpen((drop) => {
        let newDrop = { ...drop, category: !drop.category };
        return newDrop;
      });
    }
  });
  useClickOutSide(jobRef, () => {
    if (dropOpen.job) {
      setDropOpen((drop) => {
        let newDrop = { ...drop, job: !drop.job };
        return newDrop;
      });
    }
  });
  const ScrollRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    ScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="container">
        <div className="career_hero">
          <h2>Take a leap and Let Us Make a difference Together</h2>
          <p>
            At straitPay, We believe in Africa and we believe that there is a
            lot of potential on the African continent.
          </p>
          <button onClick={handleClick}>
            See Open Positions
            <FaArrowDown />
          </button>
        </div>
        <div className="who">
          <div className="who_text">
            <h2>Who Are We?</h2>
            <p>
              We are a UK-based Fin-tech company with a mission to make spending
              and investing in Africa much easier and more convenient for anyone
              living outside of Africa. straitpay was founded to encourage
              financial prosperity and boost Africa's economic growth in all
              fields. At the heart of our business is offering a way for our
              customers to pay bills, buy airtime, invest, and interact with
              Africa in their preferred local currency from the comfort of their
              location. 
            </p>
            <h4>JOIN US ON THIS THRILLING ADVENTURE</h4>
          </div>
          <div className="who_img">
            <img src="./data/career/who.png" alt="" />
          </div>
        </div>
        <div className="life">
          <h2>Life at straitPay</h2>
          <p>
            We're a fast-paced, ever-changing environment where employees are
            encouraged to question everything around them and focus on producing
            genuine value rather than their job title. We define success in
            terms of business effect, self-motivation, positive energy, and
            flexibility. We are continuously evolving, and we require our people
            to adapt swiftly to those changes. We are ambitious, daring, and
            driven by a strong sense of urgency. 
          </p>
          <p>
            We are not restricted to a specific location. As a result, we are a
            100% remote company, and our employees can work from anywhere.
            Simply put, work is wherever you are.
          </p>
        </div>
        <div className="perk">
          <h2>Perks & Benefits</h2>
          <div className="perk_items">
            <h4>Competitive Salary</h4>
            <h4>Flexible Work Environment</h4>
            <h4>Health Insurance</h4>
            <h4>Career Development</h4>
            <h4>
              A chance to do impactful work and make a difference on the
              continent
            </h4>
          </div>
        </div>
        <div className="roles" ref={ScrollRef}>
          <div className="roles_title">
            <h2>Check Out The Open Roles</h2>
          </div>
          <div className="roles_selects">
            <label
              htmlFor=""
              className="roles_category"
              onClick={() => {
                setDropOpen((drop) => {
                  let newDrop = { ...drop, category: !drop.category };
                  return newDrop;
                });
              }}
            >
              <p className="checkedCat">{checkedValue.category}</p>
              <FaAngleDown
                className={dropOpen.category ? "rotate" : "checkedArrow"}
              />
              {dropOpen.category && (
                <AnimatePresence>
                  <motion.ul
                    initial={{
                      y: 50,
                    }}
                    animate={{
                      y: 0,
                    }}
                    exit={{
                      y: 50,
                    }}
                    className="roles_category_dropdown"
                    onClick={checkValueCat}
                    ref={catRef}
                  >
                    <li>All Category</li>
                    <li>Support</li>
                    <li>Product</li>
                    <li>Operation</li>
                    <li>Engineering</li>
                  </motion.ul>
                </AnimatePresence>
              )}
            </label>
            <label
              htmlFor=""
              className="roles_job"
              onClick={() => {
                setDropOpen((drop) => {
                  let newDrop = { ...drop, job: !drop.job };
                  return newDrop;
                });
              }}
            >
              <p className="checkedJob">{checkedValue.job}</p>
              <FaAngleDown
                className={dropOpen.job ? "rotate" : "checkedArrow"}
              />
              {dropOpen.job && (
                <AnimatePresence>
                  <motion.ul
                    initial={{
                      y: 50,
                    }}
                    animate={{
                      y: 0,
                    }}
                    exit={{
                      y: 50,
                    }}
                    className="roles_job_dropdown"
                    onClick={checkValueJob}
                    ref={jobRef}
                  >
                    <li>All Job Types</li>
                    <li>Customer support specialist, Technical support</li>
                    <li>Product manager, Product intern</li>
                    <li>Operations Specialist, Accountant</li>
                    <li>Full stack developer, Data analyst</li>
                  </motion.ul>
                </AnimatePresence>
              )}
            </label>
          </div>
          <div className="roles_items">
            <h2>No open roles at the moment.</h2>
          </div>
        </div>
        <Transact />
      </div>
    </>
  );
};

export default Career;
