import "../peopleItem/peopleItem.css";
import React from "react";

type PeopleItemProps = {
  name: string;
  phar: string;
  src: string;
};
const PeopleItem: React.FC<PeopleItemProps> = ({ name, phar, src }) => {
  return (
    <div className="people_item">
      <p>{phar}</p>
      <div className="people_info">
        <img src={src} alt="" />
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default PeopleItem;
