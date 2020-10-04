import React from "react";
import { Route, Switch } from "react-router"; // react-router v4/v5

import SignUp from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
require("dotenv").config();
function App() {
  return (
    <Switch>
      <Route path="/" component={SignUp} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} exact />
    </Switch>
  );
}

export default App;
