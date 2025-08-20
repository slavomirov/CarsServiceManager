import React, { Fragment } from "react";

import { Helmet } from "react-helmet";

import HomeHeaderComponent from "../components/home-header-component";
import LogInComponent from "../components/log-in-component";
import "./log-in.css";

const LogIn = (props) => {
  return (
    <div className="log-in-container">
      <Helmet>
        <title>Log-In - Serious Swift Mink</title>
        <meta property="og:title" content="Log-In - Serious Swift Mink" />
      </Helmet>
      <HomeHeaderComponent
        action1={
          <Fragment>
            <span className="log-in-text18">Register</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="log-in-text19">Log In</span>
          </Fragment>
        }
      ></HomeHeaderComponent>
      <LogInComponent
        action1={
          <Fragment>
            <span className="log-in-text24">Log In</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="log-in-text25">Log In to Your Account</span>
          </Fragment>
        }
      ></LogInComponent>
    </div>
  );
};

export default LogIn;
