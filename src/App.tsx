import "./container.css";
import { lazy, Suspense} from "react";
import Header from "./components/header/Header";
import Header2 from "./components/header2/Header2";
import Header3 from "./components/header3/Header3";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loading from "./components/Loading";
const Home = lazy(() => import("./pages/home/Home"));
const Company = lazy(() => import("./pages/company/Company"));
const Career = lazy(() => import("./pages/career/Career"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Faqs = lazy(() => import("./pages/faqs/Faqs"));
const Login = lazy(() => import("./pages/login/Login"));
const Reset = lazy(() => import("./pages/reset/Reset"));
const Register = lazy(() => import("./pages/register/Register"));
const UserAccount = lazy(() => import("./pages/userAccount/UserAccount"));
const Verificate = lazy(() => import("./pages/verificate/Verificate"));
const Transaction = lazy(() => import("./pages/transaction/Transaction"));
const KYC = lazy(() => import("./pages/kyc/KYC"));
const BlogNews = lazy(() => import("./pages/blogNews/BlogNews"));
const FaqsBusiness = lazy(() => import("./pages/faqsBusiness/FaqsBusiness"));
const Business = lazy(() => import("./pages/business/Business"));
const BusinessRegister = lazy(
  () => import("./pages/businessRegister/BusinessRegister")
);

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
