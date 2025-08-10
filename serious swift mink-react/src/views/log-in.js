import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import HomeHeaderComponent from '../components/home-header-component'
import LogInComponent from '../components/log-in-component'
import './log-in.css'

const LogIn = (props) => {
  return (
    <div className="log-in-container">
      <Helmet>
        <title>Log-In - Serious Swift Mink</title>
        <meta property="og:title" content="Log-In - Serious Swift Mink" />
      </Helmet>
      <HomeHeaderComponent
        link1={
          <Fragment>
            <span className="log-in-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="log-in-text11">#services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="log-in-text12">#appointments</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="log-in-text13">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="log-in-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="log-in-text15">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="log-in-text16">Appointments</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="log-in-text17">Contact Us</span>
          </Fragment>
        }
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
        page1Description={
          <Fragment>
            <span className="log-in-text20">
              Welcome to our car service management website
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="log-in-text21">
              Explore the services we offer for your vehicle
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="log-in-text22">
              Manage your appointments with ease
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="log-in-text23">
              Get in touch with us for any inquiries or feedback
            </span>
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
  )
}

export default LogIn
