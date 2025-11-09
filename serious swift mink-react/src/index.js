import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Index from "./views/index";
import RegisterWithEmail from "./views/register-with-email";
import LogIn from "./views/log-in";
import Home from "./views/home";
import Register from "./views/register";
import NotFound from "./views/not-found";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route component={Index} exact path="/index" />
        <Route
          component={RegisterWithEmail}
          exact
          path="/register-with-email"
          />
        <Route component={LogIn} exact path="/log-in" />
        <Route component={Home} exact path="/" />
        <Route component={Register} exact path="/register" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
    <ToastContainer position="top-right" autoClose={5000}  closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
