import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { GrFormClose } from "react-icons/gr";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "react";
type HeaderType = {
  dispatch: any;
};
const Header: React.FC<HeaderType> = ({ dispatch }) => {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);
  const forCloseBurger = () => {
    const burger = document.querySelector(".burger");
    if (burger) {
      burger.classList.add("burger_hidden");
    }
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
  const { hash } = useLocation();
  const { pathname } = useLocation();
  const changeBusinessTrue = () => {
    dispatch({
      type: "BUSINESS",
      payload: true,
    });
  };
  const changeBusinessFalse = () => {
    dispatch({
      type: "BUSINESS",
      payload: false,
    });
  };
  return (
    <>
      <div className="container">
        <header>
          <Link className="logo" to="/">
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
          <ul className="navbar">
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
            <NavLink to="/faqs">FAQs</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </ul>
          <div className="sign_in_up">
            <Link className="sign_in" to="/login">
              Sign In
            </Link>
            <Link className="sign_up" to="/register">
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
                  className="burger"
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
                    <NavLink to="/" onClick={() => setBurgerOpen(false)}>
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
                    <NavLink to="/faqs" onClick={() => setBurgerOpen(false)}>
                      FAQs
                    </NavLink>
                    <NavLink to="/blog" onClick={() => setBurgerOpen(false)}>
                      Blog
                    </NavLink>
                  </ul>
                  <div className="sign_in_up">
                    <Link
                      className="sign_in"
                      to="/login"
                      onClick={() => setBurgerOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to=""
                      className="sign_up"
                      onClick={() => setBurgerOpen(false)}
                    >
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

const t = (a) => a;
export default connect(t)(Header);
