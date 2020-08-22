import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Homescreen from "pages/HomeScreen";
import PageNotFound from "pages/errors/404";
const AppRoute = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homescreen} />
        <Route path="/error/pagenotfound" component={PageNotFound} />
        <Redirect from="*" to="/error/pagenotfound" />
      </Switch>
    </Router>
  );
};

export default AppRoute;
