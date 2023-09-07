import React from "react";
import ExpectItem from "../components/ExpectItem";
import { Link } from "react-router-dom";

function Business() {
  return (
    <>
      <div className="business_hero_bg">
        <img src="./icons/businessMap.svg" alt="" className="business_bg_img" />
        <div className="container">
          <div className="business_hero">
            <h2>
              Empowering Businesses for Seamless Financial Transactions Across
              Borders
            </h2>
            <p>
              Simplify Cross-Border Payments, Boost Efficiency, and Expand the
              Global Reach of your Business with straitPay.
            </p>
            <img src="./icons/countries.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="business_features">
          <div className="business_features_title">
            <h2>Our features</h2>
            <p>
              Tailored Solutions Crafted for Your Global Ambitions -Seamlessly
              Navigate International Markets and Operate Locally with straitPay
            </p>
          </div>
          <div className="business_features_hero">
            <div className="business_features_item">
              <h2>Multi -currency Freedom</h2>
              <p>
                Seamlessly create and Swap Currencies with our wallets and
                Optimize International Transactions with straitPay.
              </p>
            </div>
            <div className="business_features_item">
              <h2>Instant Payment</h2>
              <p>
                Effortless and Cost-Effective Cross-Border Transactions Across
                Africa 
              </p>
            </div>
            <div className="business_features_item">
              <h2>Payment Links</h2>
              <p>Simplify Payments for Your Business with straitPay.</p>
            </div>
            <div className="business_features_item">
              <h2>Cards</h2>
              <p>Your Passport to Seamless Payments Worldwide.</p>
            </div>
            <div className="business_features_item">
              <h2>Automated Payment Scheduling</h2>
              <p>
                Put Your Payments on Autopilot with straitPay Business where
                Precision Meets Convenience.
              </p>
            </div>
            <div className="business_features_item">
              <h2>Payment Tracking</h2>
              <p>Track & Trace for Payment Transparency</p>
            </div>
          </div>
        </div>
        <div className="expect">
          <div className="expect_title">
            <h2>What You Can Expect</h2>
            <p>
              We are committed to Business-Centric Solutions for Seamless Access
              to the African Market 
            </p>
          </div>
          <div className="expect_hero expect_business_hero">
            <ExpectItem
              src="./icons/businessExpect1.svg"
              text="Open a free straitPay business account and start transacting in minutes."
            />
            <ExpectItem
              src="./icons/businessExpect2.svg"
              text="Manage your business account wherever you are with just a click."
            />
            <ExpectItem
              src="./icons/businessExpect3.svg"
              text="Give customers simple ways to pay online."
            />
            <ExpectItem
              src="./icons/businessExpect4.svg"
              text="Get notified the second you pay, or get paid."
            />
            <ExpectItem
              src="./icons/businessExpect5.svg"
              text="Two-factor authentication to avoid unauthorized access."
            />
            <ExpectItem
              src="./icons/businessExpect6.svg"
              text="Great customer service experience."
            />
          </div>
        </div>
        <div className="awards">
          <div className="awards_title">
            <h2>Awards</h2>
            <p>StartUp Award 2023</p>
          </div>
          <div className="awards_hero awards_business_hero">
            <div className="awards_left">
              <img src="./data/home/awards1.png" alt="" />
              <p>StartUp Award 2023</p>
            </div>
            <div className="awards_right">
              <img src="./data/home/awards2.png" alt="" />
              <p>StartUp Award 2023</p>
            </div>
          </div>
        </div>
        <div className="business_transact">
          <div className="business_transact_top">
            <div className="business_transact_text">
              <h2>Transact & Invest in Africa</h2>
              <p>
                We simply believe in Mama Africa. So every time you choose
                straitPay, you are contributing to Africa in a meaningful way.{" "}
              </p>
            </div>
            <div className="business_transact_btns">
              <Link to="" className="business_create_btn">
                Create Business Account
              </Link>
              <Link to="" className="business_contact_btn">
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="business_transact_bottom">
            <div className="business_transact_item">
              <img src="./icons/transact1.svg" alt="" />
              <p>NIGERIA</p>
            </div>
            <div className="business_transact_item">
              <img src="./icons/transact2.svg" alt="" />
              <p>GHANA</p>
            </div>
            <div className="business_transact_item">
              <img src="./icons/transact3.svg" alt="" />
              <p>SOUTH AFRICA</p>
            </div>
            <div className="business_transact_item">
              <img src="./icons/transact4.svg" alt="" />
              <p>KENYA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
