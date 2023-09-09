import React, { useState } from "react";

type BusinessDocsProps = {
  setCurrentStep: any;
};
const BusinessDocs: React.FC<BusinessDocsProps> = ({ setCurrentStep }) => {
  const [front, setFront] = useState(false);
  const checkFront = (e: React.ChangeEvent) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    if (text != "") {
      setFront(true);
    }
  };
  const [front1, setFront1] = useState(false);
  const checkFront1 = (e: React.ChangeEvent) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    if (text != "") {
      setFront1(true);
    }
  };
  const [front2, setFront2] = useState(false);
  const checkFront2 = (e: React.ChangeEvent) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.textContent || undefined;
    if (text != "") {
      setFront2(true);
    }
  };
  return (
    <>
      <div className="standart_form standart_form_id">
        <label
          htmlFor=""
          className={front2 ? "id_front_business" : "id_front_business_empty"}
        >
          {!front2 ? (
            <h4 className="id_front_business_h4">
              Upload business registration document <br />
              <span>JPEG & PNG</span>
            </h4>
          ) : (
            <h2 className="id_front_business_h2">
              Business registration doc.JPEG
            </h2>
          )}
          <input type="file" onChange={checkFront2} />
        </label>
        <label
          htmlFor=""
          className={front1 ? "id_front_business" : "id_front_business_empty"}
        >
          {!front1 ? (
            <h4 className="id_front_business_h4">
              Upload tax identification number
              <br />
              <span>JPEG & PNG</span>
            </h4>
          ) : (
            <h2 className="id_front_business_h2">
              Tax identification number.JPEG
            </h2>
          )}
          <input type="file" onChange={checkFront1} />
        </label>
        <label
          htmlFor=""
          className={front ? "id_front_business" : "id_front_business_empty"}
        >
          {!front ? (
            <h4 className="id_front_business_h4">
              Upload bank account and verification info <br />
              <span>JPEG & PNG</span>
            </h4>
          ) : (
            <h2 className="id_front_business_h2">
              Bank account and verification info.JPEG
            </h2>
          )}
          <input type="file" onChange={checkFront} />
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

export default BusinessDocs;
