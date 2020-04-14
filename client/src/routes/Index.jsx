import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Browse from "../components/Browse";
import Profile from "../components/Profile";
import SingleMeal from "../components/SingleMeal";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Browse} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/meal/:id" exact component={SingleMeal} />
    </Switch>
  </Router>
);
