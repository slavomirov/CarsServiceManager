import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import IndexHeader from '../components/index-header'
import './index-page.css'

const IndexPage = (props) => {
  return (
    <div className="index-page-container">
      <Helmet>
        <title>Index-Page - Serious Swift Mink</title>
        <meta property="og:title" content="Index-Page - Serious Swift Mink" />
      </Helmet>
      <IndexHeader
        link1={
          <Fragment>
            <span className="index-page-text1">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="index-page-text2">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="index-page-text3">Appointments</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="index-page-text4">Pricing</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="index-page-text5">Contact Us</span>
          </Fragment>
        }
      ></IndexHeader>
    </div>
  )
}

export default IndexPage
