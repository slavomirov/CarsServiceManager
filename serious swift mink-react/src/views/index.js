import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import IndexHeaderComponent from '../components/index-header-component'
import './index.css'

const Index = (props) => {
  return (
    <div className="index-container">
      <Helmet>
        <title>Index - Serious Swift Mink</title>
        <meta property="og:title" content="Index - Serious Swift Mink" />
      </Helmet>
      <IndexHeaderComponent
        link1={
          <Fragment>
            <span className="index-text1">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="index-text2">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="index-text3">Appointments</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="index-text4">Pricing</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="index-text5">Contact Us</span>
          </Fragment>
        }
      ></IndexHeaderComponent>
    </div>
  )
}

export default Index
