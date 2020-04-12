import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Browse from "../components/Browse";
import Profile from "../components/Profile";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Browse} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  </Router>
);
