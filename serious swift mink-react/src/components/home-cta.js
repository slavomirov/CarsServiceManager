import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './home-cta.css'

const HomeCTA = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="home-cta-accent2-bg">
          <div className="home-cta-accent1-bg">
            <div className="home-cta-container2">
              <div className="home-cta-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="home-cta-text4">
                        Ready to streamline your car service management?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="home-cta-text6">
                        Sign up now and start organizing appointments
                        efficiently.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="home-cta-actions">
                <button
                  type="button"
                  className="thq-button-filled home-cta-button"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="home-cta-text5">Get Started</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeCTA.defaultProps = {
  heading1: undefined,
  action1: undefined,
  content1: undefined,
}

HomeCTA.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default HomeCTA
