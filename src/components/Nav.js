import React, { useEffect, useState } from "react";

import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h1 className="nav__brand">Netstream</h1>
      <ul className="nav__links">
        <li>Home</li>
        <li>Tv Shows</li>
        <li>Movies</li>
      </ul>
      <div className="options__wrapper">
        <p>Profile</p>
      </div>
    </div>
  );
}

export default Nav;
