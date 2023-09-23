import "../featuresItem/featuresItem.css";
import React from "react";

type FeaturesItemProps = {
  title: string;
  phar: string;
  src: string;
};
const FeaturesItem: React.FC<FeaturesItemProps> = ({ title, phar, src }) => {
  return (
    <div className="features_item">
      <h2 className="title">{title}</h2>
      <p>{phar}</p>
      <img src={src} alt="" />
    </div>
  );
};

export default FeaturesItem;
