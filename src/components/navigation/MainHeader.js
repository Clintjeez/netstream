import React from "react";
import { Link } from "react-router-dom";

import "./MainHeader.css";

function MainHeader(props) {
  return (
    <div className="main__header">
      <Link to="/">
        <p className="brand">Netstream</p>
      </Link>
    </div>
  );
}

export default MainHeader;
