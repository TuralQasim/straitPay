import "../../responsive.css";
import "../businessInfo/businessInfo.css";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Formik } from "formik";
import * as yup from "yup";
import { useClickOutSide } from "../../hooks/useClickOutSide";

type BusinessInfo = {
  setCurrentStep: any;
};
type dropOpenType = {
  type: boolean;
  activity: boolean;
  country: boolean;
};
type checkedCountryType = {
  type: string;
  activity: string;
  country: string;
};
const BusinessInfo: React.FC<BusinessInfo> = ({ setCurrentStep }) => {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic of the",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const [checkedCountry, setCheckedCountry] = useState<checkedCountryType>({
    type: "Private",
    activity: "Finance",
    country: countries[0],
  });
  const [dropOpen, setDropOpen] = useState<dropOpenType>({
    type: false,
    activity: false,
    country: false,
  });
  const checkCountry = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    e.stopPropagation();
    const value = target.dataset.value;
    if (text) {
      if (value == "type") {
        setCheckedCountry((checkedCountry) => {
          const newObj = { ...checkedCountry, type: text };
          return newObj;
        });
        setDropOpen({
          type: false,
          activity: false,
          country: false,
        });
      }
      if (value == "activity") {
        setCheckedCountry((checkedCountry) => {
          const newObj = { ...checkedCountry, activity: text };
          return newObj;
        });
        setDropOpen({
          type: false,
          activity: false,
          country: false,
        });
      }
      if (value == "country") {
        setCheckedCountry((checkedCountry) => {
          const newObj = { ...checkedCountry, country: text };
          return newObj;
        });
        setDropOpen({
          type: false,
          activity: false,
          country: false,
        });
      }
    }
  };
  const checkDropOpen = (e: any) => {
    const target = e.target;
    const value = target.dataset.value;
    if (value == "country") {
      setDropOpen((dropOpen) => {
        const country = dropOpen.country;
        const newObj = {
          type: false,
          activity: false,
          country: !country,
        };
        return newObj;
      });
    }
    if (value == "activity") {
      const activity = dropOpen.activity;
      setDropOpen((dropOpen) => {
        const newObj = {
          type: false,
          activity: !activity,
          country: false,
        };
        return newObj;
      });
    }
    if (value == "type") {
      const type = dropOpen.type;
      setDropOpen((dropOpen) => {
        const newObj = {
          type: !type,
          activity: false,
          country: false,
        };
        return newObj;
      });
    }
  };
  const validationsSchema = yup.object().shape({
    name: yup.string().required("required Input"),
  });
  const countryRef = useRef(null);
  useClickOutSide(countryRef, () => {
    setDropOpen({
      type: false,
      activity: false,
      country: false,
    });
  });
  const typeRef = useRef(null);
  useClickOutSide(typeRef, () => {
    setDropOpen({
      type: false,
      activity: false,
      country: false,
    });
  });
  const activityRef = useRef(null);
  useClickOutSide(activityRef, () => {
    setDropOpen({
      type: false,
      activity: false,
      country: false,
    });
  });
  return (
    <>
      <div className="standart_form standart_form_margin">
        <Formik
          initialValues={{
            name: "",
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
            <label htmlFor="name" className="email_input">
              <p>Business Name</p>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="business_name"
                placeholder="Type business name"
              />
              {touched.name && errors.name && (
                <p className="standart_error_text">{errors.name}</p>
              )}
            </label>
          )}
        </Formik>
        <label htmlFor="">
          <p>Business Type</p>
          <div className="country" onClick={checkDropOpen} data-value="type">
            <h6>{checkedCountry.type}</h6>
            <IoIosArrowDown className={dropOpen.type ? "rotatedArrow" : ""} />
            {dropOpen.type && (
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
                  className="country_dropdown"
                  ref={typeRef}
                >
                  <li data-value="type" onClick={checkCountry}>
                    Private
                  </li>
                  <li data-value="type" onClick={checkCountry}>
                    Public
                  </li>
                </motion.ul>
              </AnimatePresence>
            )}
          </div>
        </label>
        <label htmlFor="">
          <p>Business Activity</p>
          <div
            className="country"
            onClick={checkDropOpen}
            data-value="activity"
          >
            <h6>{checkedCountry.activity}</h6>
            <IoIosArrowDown
              className={dropOpen.activity ? "rotatedArrow" : ""}
            />
            {dropOpen.activity && (
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
                  className="country_dropdown"
                  ref={activityRef}
                >
                  <li data-value="activity" onClick={checkCountry}>
                    Finance
                  </li>
                  <li data-value="activity" onClick={checkCountry}>
                    else
                  </li>
                </motion.ul>
              </AnimatePresence>
            )}
          </div>
        </label>
        <label htmlFor="">
          <p>What’s your primary country of residence?</p>
          <div className="country" data-value="country" onClick={checkDropOpen}>
            <h6>{checkedCountry.country}</h6>
            <IoIosArrowDown
              className={dropOpen.country ? "rotatedArrow" : ""}
            />
            {dropOpen.country && (
              <AnimatePresence>
                <motion.ul
                  initial={{
                    y: "20px",
                  }}
                  animate={{
                    y: 0,
                  }}
                  exit={{
                    y: "20px",
                  }}
                  className="country_dropdown"
                  ref={countryRef}
                >
                  {countries.map((a, i) => {
                    return (
                      <li data-value="country" key={i} onClick={checkCountry}>
                        {a}
                      </li>
                    );
                  })}
                </motion.ul>
              </AnimatePresence>
            )}
          </div>
        </label>
        <button
          className="business_next_btn"
          style={{ backgroundColor: "#544e9e" }}
          onClick={() => setCurrentStep((prevStep: number) => prevStep + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default BusinessInfo;
