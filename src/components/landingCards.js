import React from "react";

import "./landingCards.css";

import memoji from "../assets/ClintMemoji.png";

function landingCards({ className, src, title, text }) {
  return (
    <div className="user-box">
      <div className={`avatar-wrapper ${className}`}>
        <img className="user-avatar" src={`${src}`} alt="clint memoji" />
      </div>
      <h2 className="user-name">{`${title}`}</h2>
      <p className="user-timestamp">{`${text}`}</p>
    </div>
  );
}

export default landingCards;
