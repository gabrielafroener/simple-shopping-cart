import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import Checkout from "./pages/checkout";

import "./index.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
