import "../businessContact/businessContact.css";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type Data = {
  name: string;
  prefixes: string;
};
type BusinessContactProps = {
  setCurrentStep: any;
};
const BusinessContact: React.FC<BusinessContactProps> = ({
  setCurrentStep,
}) => {
  const countryPhoneData: Data[] = [
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
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const [checkedPrefix, setCheckedPrefix] = useState<string>(
    countryPhoneData[0].prefixes
  );
  const checkCountry = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    e.stopPropagation();
    setDropOpen(false);
    if (text) {
      setCheckedPrefix(text);
    }
  };
  const validationsSchema = yup.object().shape({
    email: yup.string().email("Type correct Email").required("required Input"),
    number: yup
      .number()
      .typeError("Type only number")
      .required("required Input"),
    address: yup
      .string()
      .typeError("Type only number")
      .required("required Input"),
  });
  const numberRef = useRef(null);
  useClickOutSide(numberRef, () => {
    setDropOpen(false);
  });
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          number: "",
          address: "",
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
          <div className="standart_form">
            <label htmlFor="" className="phone_label phone_label_busibess">
              <p>Business Phone Number</p>
              <div className="phone_number">
                <label
                  htmlFor=""
                  className="prefics"
                  onClick={() => setDropOpen((dropOpen) => !dropOpen)}
                >
                  <p>{checkedPrefix}</p>
                  <IoIosArrowDown className={dropOpen ? "rotatedArrow" : ""} />
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
            <label htmlFor="email" className="email_input">
              <p>Email address</p>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email address"
              />
              {touched.email && errors.email && (
                <p className="standart_error_text">{errors.email}</p>
              )}
            </label>
            <label htmlFor="address" className="email_input">
              <p>Business Address</p>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                placeholder="Enter your business Address"
              />
              {touched.address && errors.address && (
                <p className="standart_error_text">{errors.address}</p>
              )}
            </label>
            <p className="business_contact_p">
              Please review our{" "}
              <Link className="standart_link_business" to="">
                Teams and Conditions Policy
              </Link>
            </p>
            <button
              className="business_next_btn"
              style={{ backgroundColor: "#544e9e" }}
              onClick={() => setCurrentStep((prevStep: number) => prevStep + 1)}
            >
              Next
            </button>
          </div>
        )}
      </Formik>
    </>
  );
};

export default BusinessContact;
