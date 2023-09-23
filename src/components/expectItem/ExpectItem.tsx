import "../expectItem/expectItem.css";
import React from "react";

type ExpectItemProps = {
  src: string;
  text: string;
};
const ExpectItem: React.FC<ExpectItemProps> = ({ src, text }) => {
  return (
    <div className="expect_item">
      <div className="expect_item_img">
        <img src={src} alt="" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ExpectItem;
