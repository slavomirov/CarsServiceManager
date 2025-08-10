import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import HomeHeaderComponent from '../components/home-header-component'
import RegisterEmailComponent from '../components/register-email-component'
import './register-with-email.css'

const RegisterWithEmail = (props) => {
  return (
    <div className="register-with-email-container">
      <Helmet>
        <title>Register-With-Email - Serious Swift Mink</title>
        <meta
          property="og:title"
          content="Register-With-Email - Serious Swift Mink"
        />
      </Helmet>
      <HomeHeaderComponent
        action1={
          <Fragment>
            <span className="register-with-email-text10">Register</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="register-with-email-text11">#home</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="register-with-email-text12">Log In</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="register-with-email-text13">
              Manage your appointments with ease
            </span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="register-with-email-text14">Services</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="register-with-email-text15">
              Explore the services we offer for your vehicle
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="register-with-email-text16">Home</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="register-with-email-text17">#appointments</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="register-with-email-text18">
              Welcome to our car service management website
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="register-with-email-text19">Appointments</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="register-with-email-text20">#contact</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="register-with-email-text21">Contact Us</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="register-with-email-text22">
              Get in touch with us for any inquiries or feedback
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="register-with-email-text23">#services</span>
          </Fragment>
        }
      ></HomeHeaderComponent>
      <RegisterEmailComponent
        action1={
          <Fragment>
            <span className="register-with-email-text24">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="register-with-email-text25">
              Join our platform today to streamline your car service operations
              and enhance customer satisfaction.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="register-with-email-text26">
              Register for Car Service Management Solutions
            </span>
          </Fragment>
        }
      ></RegisterEmailComponent>
    </div>
  )
}

export default RegisterWithEmail
