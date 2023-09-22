import "../../responsive.css";
import "../faqsItem/faqsItem.css";
import React from "react";
import { FaPlus } from "react-icons/fa";

type FaqsItemProps = {
  title: string;
  checkModal: (e: React.MouseEvent) => void;
  setModal: (arg: boolean) => void;
  text: string;
};
const FaqsItem: React.FC<FaqsItemProps> = ({
  title,
  checkModal,
  setModal,
  text,
}) => {
  const faqsCheck = (e: React.MouseEvent) => {
    checkModal(e);
    setModal(true);
  };
  return (
    <button className="faqs_item" onClick={faqsCheck}>
      <h5 className="dnone">{text}</h5>
      <p>{title}</p>
      <FaPlus />
    </button>
  );
};

export default FaqsItem;
