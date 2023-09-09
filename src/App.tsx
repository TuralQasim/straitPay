import "./App.css";
import "./responsive.css";
import React from "react";
import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loading from "./components/Loading";
const Home = lazy(() => import("./pages/Home"));
const Company = lazy(() => import("./pages/Company"));
const Career = lazy(() => import("./pages/Career"));
const Blog = lazy(() => import("./pages/Blog"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Login = lazy(() => import("./pages/Login"));
const Reset = lazy(() => import("./pages/Reset"));
const Register = lazy(() => import("./pages/Register"));
const UserAccount = lazy(() => import("./pages/UserAccount"));
const Verificate = lazy(() => import("./pages/Verificate"));
const Transaction = lazy(() => import("./pages/Transaction"));
const KYC = lazy(() => import("./pages/KYC"));
const BlogNews = lazy(() => import("./pages/BlogNews"));
const FaqsBusiness = lazy(() => import("./pages/FaqsBusiness"));
const Business = lazy(() => import("./pages/Business"));
const BusinessRegister = lazy(() => import("./pages/BusinessRegister"));

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = [
    "/login",
    "/reset",
    "/register",
    "/verificate",
    "/transaction",
    "/kyc",
    "/business-register",
  ];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );
  const header2Visible =
    location.pathname == "/blog" || location.pathname == "/blog-news";
  const header3Visible =
    location.pathname == "/business" || location.pathname == "/faqs-business";
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/business-register",
      element: <BusinessRegister />,
    },
    {
      path: "/kyc",
      element: <KYC />,
    },
    {
      path: "/business",
      element: <Business />,
    },
    {
      path: "/faqs-business",
      element: <FaqsBusiness />,
    },
    {
      path: "/blog-news",
      element: <BlogNews />,
    },
    {
      path: "/transaction",
      element: <Transaction />,
    },
    {
      path: "/verificate",
      element: <Verificate />,
    },
    {
      path: "/userAccount",
      element: <UserAccount />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/reset",
      element: <Reset />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/company",
      element: <Company />,
    },
    {
      path: "/faqs",
      element: <Faqs />,
    },
    {
      path: "/career",
      element: <Career />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ];
  return (
    <>
      {header3Visible ? (
        <Header3 />
      ) : header2Visible ? (
        <Header2 />
      ) : !shouldHideHeaderFooter ? (
        <Header />
      ) : (
        ""
      )}
      <Routes>
        {routes.map((t) => (
          <Route
            path={t.path}
            key={t.path}
            element={<Suspense fallback={<Loading />}>{t.element}</Suspense>}
          />
        ))}
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default App;