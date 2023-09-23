import "../newsItem/newsItem.css";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { MouseEvent } from "react";

type BlogItemProps = {
  src: string;
  text: string;
  title: string;
  checkModal: (e: MouseEvent) => void;
  value: any;
};
const NewsItem: React.FC<BlogItemProps> = ({
  src,
  text,
  title,
  checkModal,
  value,
}) => {
  return (
    <div className="blog_item">
      <img src={src} alt="" onClick={checkModal} data-value={value} />
      <h4 className="blog_item_text">{text}</h4>
      <h3 className="blog_item_title">{title}</h3>
      <button onClick={checkModal} data-value={value}>
        Read More
        <FiArrowUpRight />
      </button>
    </div>
  );
};

export default NewsItem;
