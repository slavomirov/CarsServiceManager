import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignUpEmail from '../components/sign-up-email'
import './sign-up-with-email.css'

const SignUpWithEmail = (props) => {
  return (
    <div className="sign-up-with-email-container">
      <Helmet>
        <title>Sign-Up-With-Email - Serious Swift Mink</title>
        <meta
          property="og:title"
          content="Sign-Up-With-Email - Serious Swift Mink"
        />
      </Helmet>
      <SignUpEmail
        action1={
          <Fragment>
            <span className="sign-up-with-email-text1">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="sign-up-with-email-text2">
              Join our platform today to streamline your car service operations
              and enhance customer satisfaction.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="sign-up-with-email-text3">
              Sign Up for Car Service Management Solutions
            </span>
          </Fragment>
        }
      ></SignUpEmail>
    </div>
  )
}

export default SignUpWithEmail
