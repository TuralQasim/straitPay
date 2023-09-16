import React, { useState, useRef, useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { Formik } from "formik";
import * as yup from "yup";
import { useClickOutSide } from "../hooks/useClickOutSide";
import { PhoneContext, PhoneContextType } from "../context/PhoneContext";
import {
  IsVerificateContext,
  IsVerificateContextType,
} from "../context/IsVerificateContext";

const Verificate: React.FC = () => {
  const { isVerified, setIsVerified } =
    useContext<IsVerificateContextType>(IsVerificateContext);
  const { phone, setPhone } = useContext<PhoneContextType>(PhoneContext);
  const countryPhoneData = [
    { name: "Afghanistan", prefixes: "+93" },
    { name: "Albania", prefixes: "+355" },
    { name: "Algeria", prefixes: "+213" },
    { name: "Andorra", prefixes: "+376" },
    { name: "Angola", prefixes: "+244" },
    { name: "Antigua and Barbuda", prefixes: "+1" },
    { name: "Argentina", prefixes: "+54" },
    { name: "Armenia", prefixes: "+374" },
    { name: "Australia", prefixes: "+61" },
    { name: "Austria", prefixes: "+43" },
    { name: "Azerbaijan", prefixes: "+994" },
    { name: "Bahamas", prefixes: "+1" },
    { name: "Bahrain", prefixes: "+973" },
    { name: "Bangladesh", prefixes: "+880" },
    { name: "Barbados", prefixes: "+1" },
    { name: "Belarus", prefixes: "+375" },
    { name: "Belgium", prefixes: "+32" },
    { name: "Belize", prefixes: "+501" },
    { name: "Benin", prefixes: "+229" },
    { name: "Bhutan", prefixes: "+975" },
    { name: "Bolivia", prefixes: "+591" },
    { name: "Bosnia and Herzegovina", prefixes: "+387" },
    { name: "Botswana", prefixes: "+267" },
    { name: "Brazil", prefixes: "+55" },
    { name: "Brunei", prefixes: "+673" },
    { name: "Bulgaria", prefixes: "+359" },
    { name: "Burkina Faso", prefixes: "+226" },
    { name: "Burundi", prefixes: "+257" },
    { name: "Cabo Verde", prefixes: "+238" },
    { name: "Cambodia", prefixes: "+855" },
    { name: "Cameroon", prefixes: "+237" },
    { name: "Canada", prefixes: "+1" },
    { name: "Central African Republic", prefixes: "+236" },
    { name: "Chad", prefixes: "+235" },
    { name: "Chile", prefixes: "+56" },
    { name: "China", prefixes: "+86" },
    { name: "Colombia", prefixes: "+57" },
    { name: "Comoros", prefixes: "+269" },
    { name: "Congo, Democratic Republic of the", prefixes: "+243" },
    { name: "Congo, Republic of the", prefixes: "+242" },
    { name: "Costa Rica", prefixes: "+506" },
    { name: "Cote d'Ivoire", prefixes: "+225" },
    { name: "Croatia", prefixes: "+385" },
    { name: "Cuba", prefixes: "+53" },
    { name: "Cyprus", prefixes: "+357" },
    { name: "Czech Republic", prefixes: "+420" },
    { name: "Denmark", prefixes: "+45" },
    { name: "Djibouti", prefixes: "+253" },
    { name: "Dominica", prefixes: "+1" },
    { name: "Dominican Republic", prefixes: "+1" },
    { name: "Ecuador", prefixes: "+593" },
    { name: "Egypt", prefixes: "+20" },
    { name: "El Salvador", prefixes: "+503" },
    { name: "Equatorial Guinea", prefixes: "+240" },
    { name: "Eritrea", prefixes: "+291" },
    { name: "Estonia", prefixes: "+372" },
    { name: "Eswatini", prefixes: "+268" },
    { name: "Ethiopia", prefixes: "+251" },
    { name: "Fiji", prefixes: "+679" },
    { name: "Finland", prefixes: "+358" },
    { name: "France", prefixes: "+33" },
    { name: "Gabon", prefixes: "+241" },
    { name: "Gambia", prefixes: "+220" },
    { name: "Georgia", prefixes: "+995" },
    { name: "Germany", prefixes: "+49" },
    { name: "Ghana", prefixes: "+233" },
    { name: "Greece", prefixes: "+30" },
    { name: "Grenada", prefixes: "+1" },
    { name: "Guatemala", prefixes: "+502" },
    { name: "Guinea", prefixes: "+224" },
    { name: "Guinea-Bissau", prefixes: "+245" },
    { name: "Guyana", prefixes: "+592" },
    { name: "Haiti", prefixes: "+509" },
    { name: "Honduras", prefixes: "+504" },
    { name: "Hungary", prefixes: "+36" },
    { name: "Iceland", prefixes: "+354" },
    { name: "India", prefixes: "+91" },
    { name: "Indonesia", prefixes: "+62" },
    { name: "Iran", prefixes: "+98" },
    { name: "Iraq", prefixes: "+964" },
    { name: "Ireland", prefixes: "+353" },
    { name: "Israel", prefixes: "+972" },
    { name: "Italy", prefixes: "+39" },
    { name: "Jamaica", prefixes: "+1" },
    { name: "Japan", prefixes: "+81" },
    { name: "Jordan", prefixes: "+962" },
    { name: "Kazakhstan", prefixes: "+7" },
    { name: "Kenya", prefixes: "+254" },
    { name: "Kiribati", prefixes: "+686" },
    { name: "Korea, North", prefixes: "+850" },
    { name: "Korea, South", prefixes: "+82" },
    { name: "Kosovo", prefixes: "+383" },
    { name: "Kuwait", prefixes: "+965" },
    { name: "Kyrgyzstan", prefixes: "+996" },
    { name: "Laos", prefixes: "+856" },
    { name: "Latvia", prefixes: "+371" },
    { name: "Lebanon", prefixes: "+961" },
    { name: "Lesotho", prefixes: "+266" },
    { name: "Liberia", prefixes: "+231" },
    { name: "Libya", prefixes: "+218" },
    { name: "Liechtenstein", prefixes: "+423" },
    { name: "Lithuania", prefixes: "+370" },
    { name: "Luxembourg", prefixes: "+352" },
    { name: "Madagascar", prefixes: "+261" },
    { name: "Malawi", prefixes: "+265" },
    { name: "Malaysia", prefixes: "+60" },
    { name: "Maldives", prefixes: "+960" },
    { name: "Mali", prefixes: "+223" },
    { name: "Malta", prefixes: "+356" },
    { name: "Marshall Islands", prefixes: "+692" },
    { name: "Mauritania", prefixes: "+222" },
    { name: "Mauritius", prefixes: "+230" },
    { name: "Mexico", prefixes: "+52" },
    { name: "Micronesia", prefixes: "+691" },
    { name: "Moldova", prefixes: "+373" },
    { name: "Monaco", prefixes: "+377" },
    { name: "Mongolia", prefixes: "+976" },
    { name: "Montenegro", prefixes: "+382" },
    { name: "Morocco", prefixes: "+212" },
    { name: "Mozambique", prefixes: "+258" },
    { name: "Myanmar", prefixes: "+95" },
    { name: "Namibia", prefixes: "+264" },
    { name: "Nauru", prefixes: "+674" },
    { name: "Nepal", prefixes: "+977" },
    { name: "Netherlands", prefixes: "+31" },
    { name: "New Zealand", prefixes: "+64" },
    { name: "Nicaragua", prefixes: "+505" },
    { name: "Niger", prefixes: "+227" },
    { name: "Nigeria", prefixes: "+234" },
    { name: "North Macedonia", prefixes: "+389" },
    { name: "Norway", prefixes: "+47" },
    { name: "Oman", prefixes: "+968" },
    { name: "Pakistan", prefixes: "+92" },
    { name: "Palau", prefixes: "+680" },
    { name: "Palestine", prefixes: "+970" },
    { name: "Panama", prefixes: "+507" },
    { name: "Papua New Guinea", prefixes: "+675" },
    { name: "Paraguay", prefixes: "+595" },
    { name: "Peru", prefixes: "+51" },
    { name: "Philippines", prefixes: "+63" },
    { name: "Poland", prefixes: "+48" },
    { name: "Portugal", prefixes: "+351" },
    { name: "Qatar", prefixes: "+974" },
    { name: "Romania", prefixes: "+40" },
    { name: "Russia", prefixes: "+7" },
    { name: "Rwanda", prefixes: "+250" },
    { name: "Saint Kitts and Nevis", prefixes: "+1" },
    { name: "Saint Lucia", prefixes: "+1" },
    { name: "Saint Vincent and the Grenadines", prefixes: "+1" },
    { name: "Samoa", prefixes: "+685" },
    { name: "San Marino", prefixes: "+378" },
    { name: "Sao Tome and Principe", prefixes: "+239" },
    { name: "Saudi Arabia", prefixes: "+966" },
    { name: "Senegal", prefixes: "+221" },
    { name: "Serbia", prefixes: "+381" },
    { name: "Seychelles", prefixes: "+248" },
    { name: "Sierra Leone", prefixes: "+232" },
    { name: "Singapore", prefixes: "+65" },
    { name: "Slovakia", prefixes: "+421" },
    { name: "Slovenia", prefixes: "+386" },
    { name: "Solomon Islands", prefixes: "+677" },
    { name: "Somalia", prefixes: "+252" },
    { name: "South Africa", prefixes: "+27" },
    { name: "South Sudan", prefixes: "+211" },
    { name: "Spain", prefixes: "+34" },
    { name: "Sri Lanka", prefixes: "+94" },
    { name: "Sudan", prefixes: "+249" },
    { name: "Suriname", prefixes: "+597" },
    { name: "Sweden", prefixes: "+46" },
    { name: "Switzerland", prefixes: "+41" },
    { name: "Syria", prefixes: "+963" },
    { name: "Taiwan", prefixes: "+886" },
    { name: "Tajikistan", prefixes: "+992" },
    { name: "Tanzania", prefixes: "+255" },
    { name: "Thailand", prefixes: "+66" },
    { name: "Timor-Leste", prefixes: "+670" },
    { name: "Togo", prefixes: "+228" },
    { name: "Tonga", prefixes: "+676" },
    { name: "Trinidad and Tobago", prefixes: "+1" },
    { name: "Tunisia", prefixes: "+216" },
    { name: "Turkey", prefixes: "+90" },
    { name: "Turkmenistan", prefixes: "+993" },
    { name: "Tuvalu", prefixes: "+688" },
    { name: "Uganda", prefixes: "+256" },
    { name: "Ukraine", prefixes: "+380" },
    { name: "United Arab Emirates", prefixes: "+971" },
    { name: "United Kingdom", prefixes: "+44" },
    { name: "United States", prefixes: "+1" },
    { name: "Uruguay", prefixes: "+598" },
    { name: "Uzbekistan", prefixes: "+998" },
    { name: "Vanuatu", prefixes: "+678" },
    { name: "Vatican City", prefixes: "+379" },
    { name: "Venezuela", prefixes: "+58" },
    { name: "Vietnam", prefixes: "+84" },
    { name: "Yemen", prefixes: "+967" },
    { name: "Zambia", prefixes: "+260" },
    { name: "Zimbabwe", prefixes: "+263" },
  ];
  const [checkedPrefix, setCheckedPrefix] = useState(
    countryPhoneData[0].prefixes
  );
  const [dropOpen, setDropOpen] = useState(false);
  const checkCountry = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    e.stopPropagation();
    setDropOpen((dropOpen) => !dropOpen);
    if (text) {
      setCheckedPrefix(text);
    }
  };
  const checkIsVerified = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVerified((isVerified) => !isVerified);
  };
  const checkPhoneVerified = () => {
    setPhone((phone) => !phone);
  };
  const validationsSchema = yup.object().shape({
    number: yup
      .number()
      .typeError("Type only number")
      .required("required Input"),
    num: yup.number().typeError("Type only number").required("required Input"),
  });
  const numberRef = useRef(null);
  useClickOutSide(numberRef, () => {
    setDropOpen(false);
  });
  return (
    <>
      <div className="container">
        <div className="login">
          {!isVerified ? (
            <div className="standart_title">
              <h2>Verify Your Phone Number</h2>
              <p>Enter reset code and new PIN</p>
            </div>
          ) : (
            <div className="standart_title">
              <h2>Verify Phone Number</h2>
              <p>
                We sent it to +234815678986513.{" "}
                <Link to="" className="standart_link">
                  Change phone number
                </Link>
              </p>
            </div>
          )}
          {!isVerified ? (
            <Formik
              initialValues={{
                number: "",
              }}
              validateOnBlur
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={validationsSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
                dirty,
              }) => (
                <form className="standart_form">
                  <label htmlFor="" className="phone_label">
                    <p>Phone Number</p>
                    <div className="phone_number">
                      <label
                        htmlFor=""
                        className="prefics"
                        onClick={() => setDropOpen((dropOpen) => !dropOpen)}
                      >
                        <p>{checkedPrefix}</p>
                        <IoIosArrowDown
                          className={dropOpen ? "rotatedArrow" : ""}
                        />
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
                              className="prefics_dropdown"
                              ref={numberRef}
                            >
                              {countryPhoneData.map((a, i) => {
                                return (
                                  <li key={i} onClick={checkCountry}>
                                    {a.prefixes}
                                  </li>
                                );
                              })}
                            </motion.ul>
                          </AnimatePresence>
                        )}
                      </label>
                      <label htmlFor="number" className="phone_input">
                        <input
                          type="number"
                          name="number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.number}
                          placeholder="Enter phone number"
                        />
                        {touched.number && errors.number && (
                          <p className="standart_error_text">{errors.number}</p>
                        )}
                      </label>
                    </div>
                  </label>
                  <button onClick={checkIsVerified}>Next</button>
                </form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{
                num: "",
              }}
              validateOnBlur
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={validationsSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
                dirty,
              }) => (
                <form className="standart_form">
                  <label htmlFor="num" className="email_input">
                    <p>4-digit verification code</p>
                    <input
                      type="number"
                      name="num"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.num}
                      placeholder="Enter verification code"
                    />
                    {touched.num && errors.num && (
                      <p className="standart_error_text">{errors.num}</p>
                    )}
                  </label>
                  <button className="standart_link">
                    I didn’t receive a code
                  </button>
                  <Link
                    to="/userAccount"
                    className="submit_btn"
                    onClick={checkPhoneVerified}
                  >
                    Submit
                  </Link>
                </form>
              )}
            </Formik>
          )}
          {!isVerified ? (
            <Link className="standart_back" to="/userAccount">
              <IoIosArrowBack />
              Back
            </Link>
          ) : (
            <button className="standart_back" onClick={checkIsVerified}>
              <IoIosArrowBack />
              Back
            </button>
          )}
          <Link className="standart_close" to="/">
            <FaXmark />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Verificate;
