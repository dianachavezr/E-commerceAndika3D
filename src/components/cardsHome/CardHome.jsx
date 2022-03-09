import React from "react";
import "./cardsHome.css";

const CardHome = ({ title, description, image }) => {
  return (
    <div className="cardHome">
      <img className="cardHomeImage" src={image} />
      <div className="cardHomeDescription">
        <h3 className="cardHomeTitle">{title}</h3>
        <p className="cardHomeParagraph">{description}</p>
      </div>
    </div>
  );
};

export default CardHome;
