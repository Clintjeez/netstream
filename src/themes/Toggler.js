import React from "react";
import { func, string } from "prop-types";

const Toggler = ({ theme, toggleTheme }) => {
  return <button>Switch theme</button>;
};
Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggler;
