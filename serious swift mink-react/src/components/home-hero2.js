import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './home-hero2.css'

const HomeHero2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="home-hero2-container2 thq-section-max-width">
        <div className="home-hero2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="home-hero2-tab-horizontal1"
          >
            <div className="home-hero2-divider-container1">
              {activeTab === 0 && <div className="home-hero2-container3"></div>}
            </div>
            <div className="home-hero2-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="home-hero2-text6">
                      Client Appointment Management
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="home-hero2-text3">
                      Efficiently manage client appointments and schedules
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="home-hero2-tab-horizontal2"
          >
            <div className="home-hero2-divider-container2">
              {activeTab === 1 && <div className="home-hero2-container4"></div>}
            </div>
            <div className="home-hero2-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="home-hero2-text1">
                      User-Friendly Interface
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="home-hero2-text2">
                      Intuitive and easy-to-use interface for seamless
                      navigation
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="home-hero2-tab-horizontal3"
          >
            <div className="home-hero2-divider-container3">
              {activeTab === 2 && <div className="home-hero2-container5"></div>}
            </div>
            <div className="home-hero2-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="home-hero2-text4">
                      Automated Reminders
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="home-hero2-text5">
                      Send automated reminders to clients and staff for upcoming
                      appointments
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="home-hero2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="home-hero2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="home-hero2-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="home-hero2-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

HomeHero2.defaultProps = {
  feature2Title: undefined,
  feature1ImgAlt: 'Client Appointment Management Image',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1562003094-faf334018903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0N3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Description: undefined,
  feature2ImgAlt: 'User-Friendly Interface Image',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1548672150-6d77dcc2639d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0N3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1733684264580-25defee2e7c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0N3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Description: undefined,
  feature3ImgAlt: 'Automated Reminders Image',
  feature3Title: undefined,
  feature3Description: undefined,
  feature1Title: undefined,
}

HomeHero2.propTypes = {
  feature2Title: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default HomeHero2
