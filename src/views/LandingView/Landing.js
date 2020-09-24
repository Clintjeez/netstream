import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import requests from "../../api/request";
import axios from "../../api/axios";

import movie1 from "../../assets/netflixBg.jpg";

import "./Landing.css";
import "../../../node_modules/uikit/dist/css/uikit.min.css";
import "../../../node_modules/uikit/dist/js/uikit";
import "../../../node_modules/uikit/dist/js/uikit-icons";

const LandingView = () => {
  return (
    <div className="landing">
      <div className="container">
        <header className="landing__header">
          <p className="brand">Netstream</p>
          <buuton className="header__btn">Signin</buuton>
        </header>
        <div className="landing__contents">
          <h1 className="landing__title">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="landing__subtitle">Watch anywhere. Cancel anytime.</p>
          <p className="landing__txt">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <form className="landing__form">
            <div className="grid">
              <div className="col">
                <span className="uk-form-icon" uk-icon="icon: user"></span>
                <input className="uk-input landing__input" type="text" />
              </div>
              <div className="col">
                <Link to="/profile">
                  <button className="landing__btn">Get Started</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingView;
