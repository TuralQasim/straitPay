import "../header3/header3.css";
import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { GrFormClose } from "react-icons/gr";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { AllContext, AllContextType } from "../../context/AllContext";

const Header3: React.FC = () => {
  const { business, setBusiness } = useContext<AllContextType>(AllContext);
  const { coming, setComing } = useContext<AllContextType>(AllContext);
  const { pathname } = useLocation();
  const { hash } = useLocation();
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const forCloseBurger = () => {
    const burger2 = document.querySelector(".burger2");
    burger2?.classList.add("burger_hidden");
    setTimeout(() => {
      setBurgerOpen(false);
    }, 300);
  };
  function disableScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = null;
  }
  if (burgerOpen) {
    disableScroll();
  } else {
    enableScroll();
  }
  const changeBusinessTrue = () => {
    setBusiness(true);
  };
  const changeBusinessFalse = () => {
    setBusiness(false);
  };
  const openComing = (e) => {
    e.preventDefault();
    setBurgerOpen(false);
    setComing(true);
  };
  return (
    <>
      <div className="container">
        <header>
          <Link className="logo" to="/business">
            <img src="./icons/logo.svg" alt="" />
          </Link>
          <div className="pers_business">
            <NavLink
              to="/"
              onClick={changeBusinessFalse}
              className={
                pathname != "/business" && pathname != "/faqs-business"
                  ? "personal_link"
                  : ""
              }
            >
              Personal
            </NavLink>
            <NavLink
              to="/business"
              onClick={changeBusinessTrue}
              className={
                pathname == "/business" || pathname == "/faqs-business"
                  ? "business_link"
                  : ""
              }
            >
              Business
            </NavLink>
          </div>
          <ul className="navbar navbar2">
            <div className="chechedCompany">
              <p>Company</p>
              <div className="company_dropdown">
                <NavHashLink
                  to="/company#history_title_id"
                  smooth
                  className={
                    hash == "#history_title_id" ? "active_hash" : "not_active"
                  }
                >
                  Our Story
                </NavHashLink>
                <NavHashLink
                  to="/company#mission_title_id"
                  smooth
                  className={
                    hash == "#mission_title_id" ? "active_hash" : "not_active"
                  }
                >
                  Our Mission
                </NavHashLink>
                <NavLink to="/career">Career</NavLink>
              </div>
            </div>
            <NavLink to="/faqs-business">FAQs</NavLink>
            <NavLink to="/userAccount">Account</NavLink>
          </ul>
          <div className="sign_in_up">
            <Link onClick={openComing} className="sign_in" to="#">
              Sign In
            </Link>
            <Link
              onClick={openComing}
              className="sign_up sign_up_business"
              to="#"
            >
              Sign Up
            </Link>
          </div>
          <GiHamburgerMenu
            className="burger_btn"
            onClick={() => {
              setBurgerOpen(true);
            }}
          />
          {burgerOpen && (
            <div className="burger_menu">
              <AnimatePresence>
                <motion.div
                  initial={{
                    y: "-100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  exit={{
                    y: "-100%",
                  }}
                  className="burger burger3"
                >
                  <GrFormClose
                    className="burger_close_btn"
                    onClick={forCloseBurger}
                  />
                  <ul className="resp_navbar">
                    <div className="pers_business">
                      <NavLink
                        to="/"
                        onClick={changeBusinessFalse}
                        className={
                          pathname != "/business" &&
                          pathname != "/faqs-business"
                            ? "personal_link"
                            : ""
                        }
                      >
                        Personal
                      </NavLink>
                      <NavLink
                        to="/business"
                        onClick={changeBusinessTrue}
                        className={
                          pathname == "/business" ||
                          pathname == "/faqs-business"
                            ? "business_link"
                            : ""
                        }
                      >
                        Business
                      </NavLink>
                    </div>
                    <NavLink
                      to="/business"
                      onClick={() => setBurgerOpen(false)}
                    >
                      Home
                    </NavLink>
                    <NavHashLink
                      to="/company#history_title_id"
                      smooth
                      onClick={() => setBurgerOpen(false)}
                      className={
                        hash == "#history_title_id"
                          ? "active_hash"
                          : "not_active"
                      }
                    >
                      Our Story
                    </NavHashLink>
                    <NavHashLink
                      to="/company#mission_title_id"
                      smooth
                      onClick={() => setBurgerOpen(false)}
                      className={
                        hash == "#mission_title_id"
                          ? "active_hash"
                          : "not_active"
                      }
                    >
                      Our Mission
                    </NavHashLink>
                    <NavLink to="/career" onClick={() => setBurgerOpen(false)}>
                      Career
                    </NavLink>
                    <NavLink
                      to="/faqs-business"
                      onClick={() => setBurgerOpen(false)}
                    >
                      FAQs
                    </NavLink>
                    <NavLink to="/account" onClick={() => setBurgerOpen(false)}>
                      Account
                    </NavLink>
                  </ul>
                  <div className="sign_in_up">
                    <Link className="sign_in" to="#" onClick={openComing}>
                      Sign In
                    </Link>
                    <Link to="#" className="sign_up" onClick={openComing}>
                      Sign Up
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="burger_overlay" onClick={forCloseBurger}></div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Header3;
