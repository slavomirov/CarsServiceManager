import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './home-testimonial-component.css'

const HomeTestimonialComponent = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="home-testimonial-component-max-width thq-section-max-width">
        <div className="home-testimonial-component-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="home-testimonial-component-text27">
                  Testimonials
                </span>
              </Fragment>
            )}
          </h2>
          <span className="home-testimonial-component-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="home-testimonial-component-text25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card home-testimonial-component-card1"
              >
                <div className="home-testimonial-component-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="home-testimonial-component-image1"
                  />
                  <div className="home-testimonial-component-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="home-testimonial-component-text33">
                            John Doe
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="home-testimonial-component-text36">
                            Client Relations Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="home-testimonial-component-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="home-testimonial-component-text28">
                        The car service management system has greatly improved
                        our efficiency in handling client appointments.
                        It&apos;s user-friendly and has made scheduling a
                        breeze.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card home-testimonial-component-card2"
              >
                <div className="home-testimonial-component-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="home-testimonial-component-image2"
                  />
                  <div className="home-testimonial-component-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="home-testimonial-component-text30">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="home-testimonial-component-text35">
                            Service Coordinator
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="home-testimonial-component-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="home-testimonial-component-text32">
                        I highly recommend this car service management system.
                        It has simplified our workflow and helped us stay
                        organized with our appointments.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card home-testimonial-component-card3"
              >
                <div className="home-testimonial-component-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="home-testimonial-component-image3"
                  />
                  <div className="home-testimonial-component-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="home-testimonial-component-text31">
                            Michael Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="home-testimonial-component-text26">
                            Mechanic Assistant
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="home-testimonial-component-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="home-testimonial-component-text34">
                        Since using this system, our team has been able to
                        handle appointments more efficiently. It&apos;s a
                        game-changer for our daily operations.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card home-testimonial-component-card4"
              >
                <div className="home-testimonial-component-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="home-testimonial-component-image4"
                  />
                  <div className="home-testimonial-component-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="home-testimonial-component-text24">
                            Sarah Williams
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="home-testimonial-component-text37">
                            Operations Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="home-testimonial-component-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="home-testimonial-component-text29">
                        The car service management system has been instrumental
                        in streamlining our scheduling process. It has saved us
                        time and improved customer satisfaction.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeTestimonialComponent.defaultProps = {
  author4Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1628260412297-a3377e45006f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  author1Alt: 'Client Testimonial Image',
  content1: undefined,
  author3Position: undefined,
  heading1: undefined,
  review1: undefined,
  review4: undefined,
  author2Name: undefined,
  author3Alt: 'Mechanic Assistant Testimonial Image',
  author3Name: undefined,
  author4Alt: 'Operations Manager Testimonial Image',
  author2Alt: 'Service Coordinator Testimonial Image',
  author1Src:
    'https://images.unsplash.com/photo-1541112324160-e8a425b58dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  review2: undefined,
  author1Name: undefined,
  review3: undefined,
  author2Position: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1504976640860-42dcbf3a56da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  author1Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1636041282610-781dc189e8fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Position: undefined,
}

HomeTestimonialComponent.propTypes = {
  author4Name: PropTypes.element,
  author2Src: PropTypes.string,
  author1Alt: PropTypes.string,
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  heading1: PropTypes.element,
  review1: PropTypes.element,
  review4: PropTypes.element,
  author2Name: PropTypes.element,
  author3Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Src: PropTypes.string,
  review2: PropTypes.element,
  author1Name: PropTypes.element,
  review3: PropTypes.element,
  author2Position: PropTypes.element,
  author3Src: PropTypes.string,
  author1Position: PropTypes.element,
  author4Src: PropTypes.string,
  author4Position: PropTypes.element,
}

export default HomeTestimonialComponent
