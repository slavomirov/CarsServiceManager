import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './home-hero-component.css'

const HomeHeroComponent = (props) => {
  return (
    <div className="home-hero-component-header78">
      <div className="home-hero-component-column thq-section-padding thq-section-max-width">
        <div className="home-hero-component-content1">
          <h1 className="home-hero-component-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="home-hero-component-text5">
                  Welcome to Car Service Management
                </span>
              </Fragment>
            )}
          </h1>
          <p className="home-hero-component-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="home-hero-component-text4">
                  Streamline your car service appointments and scheduling with
                  our user-friendly platform.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="home-hero-component-actions">
          <button className="thq-button-filled home-hero-component-button">
            <Link
              to="/register"
              className="home-hero-component-text3 thq-body-small"
            >
              {props.action1 ?? (
                <Fragment>
                  <span className="home-hero-component-text6">Register</span>
                </Fragment>
              )}
            </Link>
          </button>
        </div>
      </div>
      <div className="home-hero-component-content2">
        <div className="home-hero-component-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="home-hero-component-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="home-hero-component-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="home-hero-component-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="home-hero-component-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="home-hero-component-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="home-hero-component-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="home-hero-component-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="home-hero-component-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="home-hero-component-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="home-hero-component-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="home-hero-component-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="home-hero-component-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="home-hero-component-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="home-hero-component-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="home-hero-component-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="home-hero-component-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="home-hero-component-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="home-hero-component-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="home-hero-component-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="home-hero-component-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="home-hero-component-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="home-hero-component-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="home-hero-component-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="home-hero-component-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="home-hero-component-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="home-hero-component-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

HomeHeroComponent.defaultProps = {
  image10Alt: 'Hero Image',
  content1: undefined,
  image7Src:
    'https://images.unsplash.com/photo-1653432085209-18f6717d8649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0N3w&ixlib=rb-4.1.0&q=80&w=1080',
  image8Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1610888662651-05dbdec7cfae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image12Src:
    'https://images.unsplash.com/photo-1723988432637-b3621dfcfd39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0OHw&ixlib=rb-4.1.0&q=80&w=1080',
  heading1: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1642618717985-a681a41d04bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image10Src:
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0OXw&ixlib=rb-4.1.0&q=80&w=1080',
  image9Alt: 'Hero Image',
  image6Src:
    'https://images.unsplash.com/photo-1628189242023-dc38aab0f561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0N3w&ixlib=rb-4.1.0&q=80&w=1080',
  image3Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1646764578980-65dbce171e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1687845542172-977c123c65f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0OHw&ixlib=rb-4.1.0&q=80&w=1080',
  action1: undefined,
  image12Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1533749047139-189de3cf06d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image6Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1654166602082-d18e7cd4bdac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0OXw&ixlib=rb-4.1.0&q=80&w=1080',
  image11Src:
    'https://images.unsplash.com/photo-1716242898445-e44218f77bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0N3w&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Car Service Management',
  image2Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1613142029305-356cbbcc5c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzczNjQ0OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image4Alt: 'Hero Image',
  image11Alt: 'Hero Image',
}

HomeHeroComponent.propTypes = {
  image10Alt: PropTypes.string,
  content1: PropTypes.element,
  image7Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image12Src: PropTypes.string,
  heading1: PropTypes.element,
  image3Src: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image8Src: PropTypes.string,
  action1: PropTypes.element,
  image12Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image11Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image11Alt: PropTypes.string,
}

export default HomeHeroComponent
