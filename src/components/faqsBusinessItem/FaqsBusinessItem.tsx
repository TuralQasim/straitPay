import "../../responsive.css";
import "../faqsBusinessItem/faqsBusinessItem.css";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { BiMinus } from "react-icons/bi";

type FaqsBusinessItemProps = {
  title: string;
  checkOpen: (i: number) => void;
  open: null | number;
  content: string;
  index: number;
};
const FaqsBusinessItem: React.FC<FaqsBusinessItemProps> = ({
  title,
  checkOpen,
  open,
  content,
  index,
}) => {
  return (
    <>
      <div className="faqs_item_hero">
        <button
          className="faqs_item faqs_business_item"
          onClick={() => checkOpen(index)}
          data-value="business_faqs"
        >
          <p>{title}</p>
          {open == index ? <BiMinus /> : <FaPlus />}
        </button>
        <h5
          className={
            open == index
              ? "faqs_business_item_text"
              : "faqs_business_item_text dnone"
          }
        >
          {content}
        </h5>
      </div>
    </>
  );
};

export default FaqsBusinessItem;
