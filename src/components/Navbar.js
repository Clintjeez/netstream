import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="nav__wrapper">
        <div className="navbar">
          <h1 className="nav-brand">Netstream</h1>
          <ul className="nav">
            <li>
              <NavLink className="nav__link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/">
                Action
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/">
                Comedy
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/">
                Documentary
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/">
                Horror
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/">
                Romance
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
