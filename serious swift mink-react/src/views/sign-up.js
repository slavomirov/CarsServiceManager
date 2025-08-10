import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignUpComponent from '../components/sign-up-component'
import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className="sign-up-container">
      <Helmet>
        <title>Sign-Up - Serious Swift Mink</title>
        <meta property="og:title" content="Sign-Up - Serious Swift Mink" />
      </Helmet>
      <SignUpComponent
        action1={
          <Fragment>
            <span className="sign-up-text1">Create an account</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="sign-up-text2">Continue with Facebook</span>
          </Fragment>
        }
        action3={
          <Fragment>
            <span className="sign-up-text3">Continue with Google</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="sign-up-text4">
              Enter your email address to create an account
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="sign-up-text5">Create an account</span>
          </Fragment>
        }
      ></SignUpComponent>
    </div>
  )
}

export default SignUp
