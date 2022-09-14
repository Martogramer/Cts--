
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import ContratistasHome from "views/examples/ContratistasHome.js";
import Nosotros from "views/examples/Nosotros.js";
import RegisterPage from "views/examples/RegisterPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <ContratistasHome {...props} />}
      />
      <Route
        path="/nosotros"
        render={(props) => <Nosotros {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </Router>
);
