import React from "react";
import { NavLink, Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <div className="container">
        <footer>
          <div className="footer_top">
            <div className="foot1">
              <img src="./icons/logo.svg" alt="" />
              <p>
                straitPay is a financial technology company that offers its
                products and services in partnership with licenced entities in
                their respective jurisdictions. In the USA, our services &
                products are only available to residents in the state of
                Georgia.
              </p>
            </div>
            <div className="foot2">
              <h2 className="foot_title">Company</h2>
              <ul className="foot_ul">
                <li>
                  <NavLink to="">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="">Our Story</NavLink>
                </li>
                <li>
                  <NavLink to="">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="">FAQs</NavLink>
                </li>
                <li>
                  <NavLink to="">Partners</NavLink>
                </li>
                <li>
                  <NavLink to="">Career</NavLink>
                </li>
              </ul>
            </div>
            <div className="foot3">
              <h2 className="foot_title">Legal</h2>
              <ul className="foot_ul">
                <li>
                  <NavLink to="">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="">Terms of Service</NavLink>
                </li>
                <li>
                  <NavLink to="">Cookies Policy</NavLink>
                </li>
              </ul>
            </div>
            <div className="foot4">
              <h2 className="foot_title">Contact</h2>
              <ul className="foot_ul">
                <li>
                  <Link to="">support@straitpay.com</Link>
                </li>
                <li>
                  <Link to="">
                    Instagram <img src="./icons/arrow_right_top.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    Facebook <img src="./icons/arrow_right_top.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    LinkedIn <img src="./icons/arrow_right_top.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    Twitter <img src="./icons/arrow_right_top.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom">
            <ul>
              <li>6402 Atlantic Blvd. ste 210 tucker ga 30071</li>
              <li>128 City Road, London, EC1V2NX</li>
              <li>20 Park Lane, Lagos, Nigeria</li>
              <li>© 2023 straitPay</li>
            </ul>
            <p>© 2023 straitPay</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
