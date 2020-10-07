import React from "react";
import { Link, NavLink } from "react-router-dom";

import MainHeader from "./MainHeader";

import "./MainNavigation.css";

function MainNavigation() {
  return (
    <MainHeader>
      <span>
        <h1>
          <Link className="brand" to="/">
            Netstream
          </Link>
        </h1>
      </span>
      <nav></nav>
    </MainHeader>
  );
}

export default MainNavigation;
