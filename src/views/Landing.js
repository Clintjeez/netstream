import React from "react";
import LandingCards from "../components/landingCards";

import "./Landing.css";

import memoji from "../assets/ClintMemoji.png";
import userIcon from "../assets/user.svg";
import userGuest from "../assets/guest-user.svg";
import winnieImg from "../assets/winnieImg.png";
import ebenImg from "../assets/ebenImg.gif";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container">
        <header className="header-wrapper">
          <p>Netstream</p>
        </header>
        <section className="content-wrapper">
          <h1 className="landing-title">View for your pleasure</h1>
          <div className="box-wrapper">
            <LandingCards
              src={userIcon}
              title="Create user"
              text="Add a new user"
            />
            <LandingCards
              className="yellow-bg"
              src={memoji}
              title="ClintJeez"
              text="Last seen 3 hours ago"
            />
            <LandingCards
              className="purple-bg"
              src={ebenImg}
              title="Eben"
              text="Last seen 600 years ago"
            />
            <LandingCards
              className="pink-bg"
              src={winnieImg}
              title="Winnie Bae"
              text="Last seen 2 months ago"
            />
            <LandingCards
              src={userGuest}
              title="View as guest"
              text="Data will not be stored"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
