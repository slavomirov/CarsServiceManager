import React, { useState, Fragment } from 'react'

import { Helmet } from 'react-helmet'

import HomeHeaderComponent from '../components/home-header-component'
import SignUp5 from '../components/sign-up5'
import './register.css'

const Register = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - Serious Swift Mink</title>
        <meta property="og:title" content="Register - Serious Swift Mink" />
      </Helmet>
      <HomeHeaderComponent
        action1={
          <Fragment>
            <span className="register-text10">Register</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="register-text11">#home</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="register-text12">Log In</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="register-text13">
              Manage your appointments with ease
            </span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="register-text14">Services</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="register-text15">
              Explore the services we offer for your vehicle
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="register-text16">Home</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="register-text17">#appointments</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="register-text18">
              Welcome to our car service management website
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="register-text19">Appointments</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="register-text20">#contact</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="register-text21">Contact Us</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="register-text22">
              Get in touch with us for any inquiries or feedback
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="register-text23">#services</span>
          </Fragment>
        }
      ></HomeHeaderComponent>
      <SignUp5
        action3={
          <Fragment>
            <span className="register-text24">Continue with Google</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="register-text25">Sign up with email</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="register-text26">
              Sign up for free and create your first project
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="register-text27">Create an account</span>
          </Fragment>
        }
      ></SignUp5>
    </div>
  )
}

export default Register
