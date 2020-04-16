import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Browse from "../components/Browse";
import Profile from "../components/Profile";
import SingleMeal from "../components/SingleMeal";
import NewMeal from "../components/NewMeal";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Browse} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/meal/:id" exact component={SingleMeal} />
      <Route path="/create" exact component={NewMeal} />
    </Switch>
  </Router>
);
