import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// Main Router
//import RouterComponent from "./router/Router";

// View components
import Landing from "./views/LandingView/Landing";
import Profile from "./views/ProfileView/Profile";
import Home from "./views/HomeView/HomeView";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/profile" component={Profile} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
