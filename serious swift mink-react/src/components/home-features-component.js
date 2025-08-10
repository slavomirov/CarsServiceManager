import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './home-features-component.css'

const HomeFeaturesComponent = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="home-features-component-container2 thq-section-max-width">
        <div className="home-features-component-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="home-features-component-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="home-features-component-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="home-features-component-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="home-features-component-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="home-features-component-tab-horizontal1"
          >
            <div className="home-features-component-divider-container1">
              {activeTab === 0 && (
                <div className="home-features-component-container3"></div>
              )}
            </div>
            <div className="home-features-component-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="home-features-component-text6">
                      Interactive Calendar
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="home-features-component-text3">
                      Visual representation of daily appointments
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="home-features-component-tab-horizontal2"
          >
            <div className="home-features-component-divider-container2">
              {activeTab === 1 && (
                <div className="home-features-component-container4"></div>
              )}
            </div>
            <div className="home-features-component-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="home-features-component-text5">
                      Client Communication
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="home-features-component-text2">
                      User-friendly interface for easy client communication
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="home-features-component-tab-horizontal3"
          >
            <div className="home-features-component-divider-container3">
              {activeTab === 2 && (
                <div className="home-features-component-container5"></div>
              )}
            </div>
            <div className="home-features-component-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="home-features-component-text4">
                      Appointment Scheduling
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="home-features-component-text1">
                      Efficient scheduling of appointments
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeFeaturesComponent.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1597386601945-8980df52c3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0N3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature2ImgAlt: 'Communication icon',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1580452000584-749ffc0e2734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3Description: undefined,
  feature3ImgAlt: 'Clock icon',
  feature1ImgAlt: 'Calendar icon',
  feature2Description: undefined,
  feature1Description: undefined,
  feature3Title: undefined,
  feature2Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1688679391702-a03a59866dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0N3w&ixlib=rb-4.1.0&q=80&w=1080',
  feature1Title: undefined,
}

HomeFeaturesComponent.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
}

export default HomeFeaturesComponent
