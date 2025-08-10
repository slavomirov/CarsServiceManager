import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return <div className="component1-container"></div>
}

Component1.defaultProps = {
  text: undefined,
}

Component1.propTypes = {
  text: PropTypes.element,
}

export default Component1
