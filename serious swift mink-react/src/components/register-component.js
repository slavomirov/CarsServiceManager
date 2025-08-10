import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './register-component.css'

const RegisterComponent = (props) => {
  return (
    <div className="register-component-container1">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="register-component-sign-up-image thq-img-ratio-16-9"
      />
      <div className="register-component-container2"></div>
      <div className="register-component-max-width thq-section-max-width">
        <div className="register-component-form1 thq-section-padding">
          <div className="register-component-title-root">
            <h2 className="register-component-text10 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="register-component-text20">
                    Create an account
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large register-component-text11">
              Already have an account? Sign in
            </p>
          </div>
          <div className="register-component-container3">
            <button className="register-component-button1 thq-button-outline">
              <svg
                viewBox="0 0 860.0137142857142 1024"
                className="register-component-icon1"
              >
                <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
              </svg>
              <span className="thq-body-small">
                {props.action3 ?? (
                  <Fragment>
                    <span className="register-component-text21">
                      Continue with Google
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="register-component-button2 thq-button-outline">
              <svg
                viewBox="0 0 860.0137142857142 1024"
                className="register-component-icon3"
              >
                <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
              </svg>
              <span className="thq-body-small">
                {props.action31 ?? (
                  <Fragment>
                    <span className="register-component-text24">
                      Continue with Email
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="register-component-divider1">
            <div className="register-component-divider2"></div>
            <p className="thq-body-large">OR</p>
            <div className="register-component-divider3"></div>
          </div>
          <span className="register-component-text15 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="register-component-text22">
                  Enter your email address to create an account
                </span>
              </Fragment>
            )}
          </span>
          <form className="register-component-form2">
            <div className="register-component-email">
              <label htmlFor="thq-sign-up-4-email" className="thq-body-large">
                Email
              </label>
              <input
                type="email"
                id="thq-sign-up-4-email"
                required="true"
                placeholder="Email address"
                className="register-component-textinput thq-body-large thq-input"
              />
            </div>
          </form>
          <div className="register-component-container4">
            <div className="register-component-terms-agree">
              <input
                type="checkbox"
                id="thq-sign-up-4-terms"
                checked="true"
                className="thq-checkbox"
              />
              <label htmlFor="thq-sign-up-4-terms" className="thq-body-large">
                Agree to our Terms of use and Privacy Policy.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
            </div>
            <div className="register-component-newsletter">
              <input
                type="checkbox"
                id="thq-sign-up-4-newsletter"
                checked="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="thq-sign-up-4-newsletter"
                className="thq-body-large"
              >
                Subscribe to our newsletter
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="register-component-button3 thq-button-filled"
          >
            <span className="register-component-text19 thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="register-component-text23">
                    Create an account
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

RegisterComponent.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1645216755684-c946ce202427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1Mzg4ODY3N3w&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
  action3: undefined,
  content1: undefined,
  action1: undefined,
  image1Alt: 'SignUp Image',
  action31: undefined,
}

RegisterComponent.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  action3: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  action31: PropTypes.element,
}

export default RegisterComponent
