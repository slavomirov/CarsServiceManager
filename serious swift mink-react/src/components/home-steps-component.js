import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './home-steps-component.css'

const HomeStepsComponent = (props) => {
  return (
    <div className="home-steps-component-container1 thq-section-padding">
      <div className="home-steps-component-max-width thq-section-max-width">
        <div className="home-steps-component-container2 thq-grid-2">
          <div className="home-steps-component-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="home-steps-component-actions">
              <button className="thq-button-animated thq-button-filled home-steps-component-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="home-steps-component-container3">
            <div className="home-steps-component-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="home-steps-component-text31">
                      Create a Client Profile
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="home-steps-component-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="home-steps-component-text26">
                      Enter client&apos;s details such as name, contact
                      information, and vehicle details.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="home-steps-component-text15 thq-heading-3">
                01
              </label>
            </div>
            <div className="home-steps-component-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="home-steps-component-text27">
                      Schedule Appointment
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="home-steps-component-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="home-steps-component-text32">
                      Select a date and time for the client&apos;s appointment
                      with the mechanic.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="home-steps-component-text18 thq-heading-3">
                02
              </label>
            </div>
            <div className="home-steps-component-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="home-steps-component-text28">
                      Assign Mechanic
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="home-steps-component-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="home-steps-component-text30">
                      Assign a mechanic to the appointment based on availability
                      and expertise.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="home-steps-component-text21 thq-heading-3">
                03
              </label>
            </div>
            <div className="home-steps-component-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="home-steps-component-text25">
                      View and Manage Schedule
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="home-steps-component-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="home-steps-component-text29">
                      Access and update the schedule to ensure smooth
                      operations.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="home-steps-component-text24 thq-heading-3">
                04
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeStepsComponent.defaultProps = {
  step4Title: undefined,
  step1Description: undefined,
  step2Title: undefined,
  step3Title: undefined,
  step4Description: undefined,
  step3Description: undefined,
  step1Title: undefined,
  step2Description: undefined,
}

HomeStepsComponent.propTypes = {
  step4Title: PropTypes.element,
  step1Description: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Description: PropTypes.element,
  step3Description: PropTypes.element,
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
}

export default HomeStepsComponent
