import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

type AppState = {
  verified: boolean;
  phone: boolean;
  kyc: boolean;
  transaction: boolean;
  isVerified: boolean;
};
type UserAccountProps = {
  phone: boolean;
  kyc: boolean;
  transaction: boolean;
};
const UserAccount: React.FC<UserAccountProps> = ({
  phone,
  kyc,
  transaction,
}) => {
  const isTrue = phone && kyc && transaction;
  return (
    <>
      <div className="container">
        <div className="hey">
          <img src="./data/user/hey.png" alt="" className="hey_img" />
          <p className="hey_p">Hey Hafeez!, Welcome to straitPay</p>
        </div>
        <div className="wallets">
          <div className="wallet_item wallet_item1">
            <div className="wallet_text">
              <h3>Naira (NGN)</h3>
              {!kyc ? (
                <Link to="" className="standart_link">
                  Activate Wallet
                </Link>
              ) : (
                <h2>N0.00</h2>
              )}
            </div>
            <div className="wallet_img">
              <img src="./icons/flag1.svg" alt="" />
            </div>
          </div>
          <div className="wallet_item wallet_item2">
            <div className="wallet_text">
              <h3>Cedis</h3>
              {!kyc ? (
                <Link to="" className="standart_link">
                  Activate Wallet
                </Link>
              ) : (
                <h2>₵0.00</h2>
              )}
            </div>
            <div className="wallet_img">
              <img src="./icons/flag2.svg" alt="" />
            </div>
          </div>
          <div className="wallet_item wallet_item3">
            <div className="wallet_text">
              <h3>Rand</h3>
              {!kyc ? (
                <Link to="" className="standart_link">
                  Activate Wallet
                </Link>
              ) : (
                <h2>ZAR0.00</h2>
              )}
            </div>
            <div className="wallet_img">
              <img src="./icons/flag3.svg" alt="" />
            </div>
          </div>
          <div className="wallet_item wallet_item4">
            <div className="wallet_text">
              <h3>Kenya</h3>
              {!kyc ? (
                <Link to="" className="standart_link">
                  Activate Wallet
                </Link>
              ) : (
                <h2>$0.00</h2>
              )}
            </div>
            <div className="wallet_img">
              <img src="./icons/flag4.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="account_foot">
          {!isTrue && (
            <div className="complete">
              <h2 className="account_title">COMPLETE ACCOUNT SETUP</h2>
              {!phone && <Link to="/verificate">Verify your phone number</Link>}
              {!kyc && <Link to="/kyc">Complete KYC</Link>}
              {!transaction && (
                <Link to="/transaction">Set Transaction PIN</Link>
              )}
            </div>
          )}
          <div className={isTrue ? "recent_true" : "recent"}>
            <div className="activites">
              <h2 className="account_title">RECENT ACTIVITIES</h2>
              {isTrue ? (
                <div className="for_compelete_activities">
                  <div className="for_complite_item">
                    <div className="for_complite_img">
                      <img src="./icons/check.svg" alt="" />
                    </div>
                    <div className="for_complete_text">
                      <h3>Verified Phone Number</h3>
                      <p>
                        Today <span>.</span> 05:20 am
                      </p>
                    </div>
                  </div>
                  <div className="for_complite_item">
                    <div className="for_complite_img">
                      <img src="./icons/plus.svg" alt="" />
                    </div>
                    <div className="for_complete_text">
                      <h3>Wallet Funded</h3>
                      <p>
                        Jul 30 <span>.</span> 3:56 am
                      </p>
                    </div>
                    <h2>+ £494.75</h2>
                  </div>
                  <div className="for_complite_item">
                    <div className="for_complite_img">
                      <img src="./icons/verified_user.svg" alt="" />
                    </div>
                    <div className="for_complete_text">
                      <h3>Verified ID</h3>
                      <p>
                        Jul 28 <span>.</span> 01:16 pm
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Top up your wallet or make a transfer to see them here.</p>
              )}
            </div>
            <div className="download">
              <h2 className="account_title">DOWNLOAD APP</h2>
              <div className="download_links">
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
          </div>
        </div>
      </div>
    </>
  );
};

const t = (a: AppState) => a;
export default connect(t)(UserAccount);
