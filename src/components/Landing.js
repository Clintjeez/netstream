import React from "react";

import "./Landing.css";

import memoji from "../assets/ClintMemoji.png";

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
            {/* Users box */}
            <div className="user-box">
              <div className="avatar-wrapper yellow-bg">
                <img className="user-avatar" src={memoji} alt="clint memoji" />
              </div>
              <h2 className="user-name">ClintJeez</h2>
              <p className="user-timestamp">Last online 3 hours ago</p>
            </div>
            {/* Users box */}
            <div className="user-box">
              <div className="avatar-wrapper green-bg">
                <img className="user-avatar" src={memoji} alt="clint memoji" />
              </div>
              <h2 className="user-name">ClintJeez</h2>
              <p className="user-timestamp">Last online 3 hours ago</p>
            </div>
            {/* Users box */}
            <div className="user-box">
              <div className="avatar-wrapper pink-bg">
                <img className="user-avatar" src={memoji} alt="clint memoji" />
              </div>
              <h2 className="user-name">ClintJeez</h2>
              <p className="user-timestamp">Last online 3 hours ago</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
