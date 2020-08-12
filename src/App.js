import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import { lightTheme, darkTheme } from "./themes/themes";

// UI COMPONENTS
import Landing from "./views/Landing";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <React.Fragment>
        <GlobalStyles />
        {/* <button onClick={themeToggler}>Switch theme</button> */}
        <Landing />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
