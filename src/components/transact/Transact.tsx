import "../../responsive.css";
import "../transact/transact.css";
import React from "react";
import { Link } from "react-router-dom";

const Transact: React.FC = () => {
  return (
    <div className="transact">
      <div className="transact_left">
        <h2>Transact & Invest in Africa</h2>
        <p>
          We simply believe in Mama Africa. So every time you choose straitPay,
          you are contributing to Africa in a meaningful way.{" "}
        </p>
        <div className="transact_items">
          <div className="transact_item">
            <img src="./icons/transact1.svg" alt="" />
            <p>NIGERIA</p>
          </div>
          <div className="transact_item">
            <img src="./icons/transact2.svg" alt="" />
            <p>GHANA</p>
          </div>
          <div className="transact_item">
            <img src="./icons/transact3.svg" alt="" />
            <p>SOUTH AFRICA</p>
          </div>
          <div className="transact_item">
            <img src="./icons/transact4.svg" alt="" />
            <p>KENYA</p>
          </div>
        </div>
      </div>
      <div className="transact_right">
        <Link to="" className="google_play">
          <img src="./icons/google_play.svg" alt="" />
          Get on Play Store
        </Link>
        <Link to="">
          <img src="./icons/app_store.svg" alt="" />
          Get on App Store
        </Link>
      </div>
    </div>
  );
};

export default Transact;
