import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './home-pricing.css'

const HomePricing = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="home-pricing-pricing23 thq-section-padding">
      <div className="home-pricing-max-width thq-section-max-width">
        <div className="home-pricing-section-title">
          <span className="home-pricing-text100 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="home-pricing-text188">
                  Choose the perfect plan for you
                </span>
              </Fragment>
            )}
          </span>
          <div className="home-pricing-content">
            <h2 className="home-pricing-text101 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="home-pricing-text167">Pricing plan</span>
                </Fragment>
              )}
            </h2>
            <p className="home-pricing-text102 thq-body-large">
              {props.content2 ?? (
                <Fragment>
                  <span className="home-pricing-text157">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="home-pricing-tabs">
          {isMonthly === true && (
            <button
              onClick={() => setIsMonthly(true)}
              className="home-pricing-button10 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(true)}
              className="home-pricing-button11 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {isMonthly === false && (
            <button
              onClick={() => setIsMonthly(false)}
              className="home-pricing-button12 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly === true && (
            <button
              onClick={() => setIsMonthly(false)}
              className="home-pricing-button13 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly === true && (
          <div className="home-pricing-container1">
            <div className="home-pricing-column1 thq-card">
              <div className="home-pricing-price10">
                <div className="home-pricing-price11">
                  <p className="home-pricing-text107 thq-body-large">
                    {props.plan1 ?? (
                      <Fragment>
                        <span className="home-pricing-text184">Basic plan</span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="home-pricing-text108 thq-heading-3">
                    {props.plan1Price ?? (
                      <Fragment>
                        <span className="home-pricing-text201">
                          $29.99/month
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-large">
                    {props.plan1Yearly ?? (
                      <Fragment>
                        <span className="home-pricing-text175">
                          or $200 yearly
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="home-pricing-list1">
                  <div className="home-pricing-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="home-pricing-text194">
                            Client appointment management
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2 ?? (
                        <Fragment>
                          <span className="home-pricing-text183">
                            Schedule creation
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3 ?? (
                        <Fragment>
                          <span className="home-pricing-text191">
                            Automated reminders
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="home-pricing-button14 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action ?? (
                    <Fragment>
                      <span className="home-pricing-text195">Sign up now</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="home-pricing-column2 thq-card">
              <div className="home-pricing-price12">
                <div className="home-pricing-price13">
                  <p className="home-pricing-text114 thq-body-large">
                    {props.plan2 ?? (
                      <Fragment>
                        <span className="home-pricing-text192">
                          Business plan
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="home-pricing-text115 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="home-pricing-text174">
                          $49.99/month
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-large">
                    {props.plan2Yearly ?? (
                      <Fragment>
                        <span className="home-pricing-text166">
                          or $299 yearly
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="home-pricing-list2">
                  <div className="home-pricing-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature1 ?? (
                        <Fragment>
                          <span className="home-pricing-text172">
                            All features in Plan 1
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature2 ?? (
                        <Fragment>
                          <span className="home-pricing-text187">
                            Advanced reporting
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature3 ?? (
                        <Fragment>
                          <span className="home-pricing-text173">
                            Customizable templates
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature4 ?? (
                        <Fragment>
                          <span className="home-pricing-text181">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="home-pricing-button15 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan2Action ?? (
                    <Fragment>
                      <span className="home-pricing-text203">Sign up now</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="home-pricing-column3 thq-card">
              <div className="home-pricing-price14">
                <div className="home-pricing-price15">
                  <p className="home-pricing-text122 thq-body-large">
                    {props.plan3 ?? (
                      <Fragment>
                        <span className="home-pricing-text186">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <h3 className="home-pricing-text123 thq-heading-3">
                    {props.plan3Price ?? (
                      <Fragment>
                        <span className="home-pricing-text164">
                          $79.99/month
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-large">
                    {props.plan3Yearly ?? (
                      <Fragment>
                        <span className="home-pricing-text182">
                          or $499 yearly
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="home-pricing-list3">
                  <div className="home-pricing-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature1 ?? (
                        <Fragment>
                          <span className="home-pricing-text163">
                            All features in Plan 2
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature2 ?? (
                        <Fragment>
                          <span className="home-pricing-text190">
                            Priority support
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature3 ?? (
                        <Fragment>
                          <span className="home-pricing-text162">
                            Integration with payment systems
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature4 ?? (
                        <Fragment>
                          <span className="home-pricing-text202">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature5 ?? (
                        <Fragment>
                          <span className="home-pricing-text205">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="home-pricing-button16 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan3Action ?? (
                    <Fragment>
                      <span className="home-pricing-text179">Sign up now</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
        {isMonthly === false && (
          <div className="home-pricing-container2">
            <div className="home-pricing-column4 thq-card">
              <div className="home-pricing-price16">
                <div className="home-pricing-price17">
                  <span className="home-pricing-text131 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="home-pricing-text185">Basic plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="home-pricing-text132 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="home-pricing-text180">$200/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="home-pricing-text178">
                          or $20 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="home-pricing-list4">
                  <div className="home-pricing-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="home-pricing-text169">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="home-pricing-text193">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item24">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="home-pricing-text168">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="home-pricing-button17 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="home-pricing-text204">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="home-pricing-column5 thq-card">
              <div className="home-pricing-price18">
                <div className="home-pricing-price19">
                  <span className="home-pricing-text138 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="home-pricing-text199">
                          Business plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="home-pricing-text139 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="home-pricing-text156">$299/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="home-pricing-text176">
                          or $29 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="home-pricing-list5">
                  <div className="home-pricing-list-item25">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="home-pricing-text159">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item26">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="home-pricing-text200">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item27">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="home-pricing-text155">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item28">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="home-pricing-text196">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="home-pricing-button18 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="home-pricing-text189">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="home-pricing-column6 thq-card">
              <div className="home-pricing-price20">
                <div className="home-pricing-price21">
                  <span className="home-pricing-text146 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="home-pricing-text170">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="home-pricing-text147 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="home-pricing-text165">$499/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="home-pricing-text177">
                          or $49 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="home-pricing-list6">
                  <div className="home-pricing-list-item29">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="home-pricing-text161">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item30">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="home-pricing-text171">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item31">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="home-pricing-text197">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item32">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="home-pricing-text158">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="home-pricing-list-item33">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="home-pricing-text160">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="home-pricing-button19 thq-button-animated thq-button-filled">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="home-pricing-text198">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

HomePricing.defaultProps = {
  plan2Feature31: undefined,
  plan2Price1: undefined,
  content2: undefined,
  plan3Feature41: undefined,
  plan2Feature11: undefined,
  plan3Feature51: undefined,
  plan3Feature11: undefined,
  plan3Feature3: undefined,
  plan3Feature1: undefined,
  plan3Price: undefined,
  plan3Price1: undefined,
  plan2Yearly: undefined,
  heading1: undefined,
  plan1Feature31: undefined,
  plan1Feature11: undefined,
  plan31: undefined,
  plan3Feature21: undefined,
  plan2Feature1: undefined,
  plan2Feature3: undefined,
  plan2Price: undefined,
  plan1Yearly: undefined,
  plan2Yearly1: undefined,
  plan3Yearly1: undefined,
  plan1Yearly1: undefined,
  plan3Action: undefined,
  plan1Price1: undefined,
  plan2Feature4: undefined,
  plan3Yearly: undefined,
  plan1Feature2: undefined,
  plan1: undefined,
  plan11: undefined,
  plan3: undefined,
  plan2Feature2: undefined,
  content1: undefined,
  plan2Action1: undefined,
  plan3Feature2: undefined,
  plan1Feature3: undefined,
  plan2: undefined,
  plan1Feature21: undefined,
  plan1Feature1: undefined,
  plan1Action: undefined,
  plan2Feature41: undefined,
  plan3Feature31: undefined,
  plan3Action1: undefined,
  plan21: undefined,
  plan2Feature21: undefined,
  plan1Price: undefined,
  plan3Feature4: undefined,
  plan2Action: undefined,
  plan1Action1: undefined,
  plan3Feature5: undefined,
}

HomePricing.propTypes = {
  plan2Feature31: PropTypes.element,
  plan2Price1: PropTypes.element,
  content2: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2Yearly: PropTypes.element,
  heading1: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan31: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan2Price: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan3Action: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan1: PropTypes.element,
  plan11: PropTypes.element,
  plan3: PropTypes.element,
  plan2Feature2: PropTypes.element,
  content1: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan2: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Action: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan21: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan2Action: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan3Feature5: PropTypes.element,
}

export default HomePricing
