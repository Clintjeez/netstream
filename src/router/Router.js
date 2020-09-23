import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// View components

import Users from "../views/UsersView/Users";
import Home from "../views/HomeView/HomeView";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <switch>
        <Route exact path="/users" component={Users} />
        <Route path="/home" component={Home} />
      </switch>
    </BrowserRouter>
  );
};

export default RouterComponent;
