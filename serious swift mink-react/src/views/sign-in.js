import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignInComponent from '../components/sign-in-component'
import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>Sign-In - Serious Swift Mink</title>
        <meta property="og:title" content="Sign-In - Serious Swift Mink" />
      </Helmet>
      <SignInComponent
        action1={
          <Fragment>
            <span className="sign-in-text1">Sign In</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="sign-in-text2">Sign In to Your Account</span>
          </Fragment>
        }
      ></SignInComponent>
    </div>
  )
}

export default SignIn
