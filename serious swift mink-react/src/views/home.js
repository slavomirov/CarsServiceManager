import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import HomeHeaderComponent from '../components/home-header-component'
import HomeHeroComponent from '../components/home-hero-component'
import HomeFeaturesComponent from '../components/home-features-component'
import HomeCTAComponent from '../components/home-cta-component'
import HomeHero2Component from '../components/home-hero2-component'
import HomePricingComponent from '../components/home-pricing-component'
import HomeStepsComponent from '../components/home-steps-component'
import HomeTestimonialComponent from '../components/home-testimonial-component'
import HomeContactUsComponent from '../components/home-contact-us-component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Serious Swift Mink</title>
        <meta property="og:title" content="Serious Swift Mink" />
      </Helmet>
      <HomeHeaderComponent
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#appointments</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Appointments</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact Us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Register</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Log In</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our car service management website
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore the services we offer for your vehicle
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Manage your appointments with ease
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch with us for any inquiries or feedback
            </span>
          </Fragment>
        }
      ></HomeHeaderComponent>
      <HomeHeroComponent
        action1={
          <Fragment>
            <span className="home-text114">Register</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text115">
              Streamline your car service appointments and scheduling with our
              user-friendly platform.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Welcome to Car Service Management
            </span>
          </Fragment>
        }
      ></HomeHeroComponent>
      <HomeFeaturesComponent
        feature1Title={
          <Fragment>
            <span className="home-text117">Interactive Calendar</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text118">Client Communication</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Appointment Scheduling</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text120">
              Visual representation of daily appointments
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text121">
              User-friendly interface for easy client communication
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text122">
              Efficient scheduling of appointments
            </span>
          </Fragment>
        }
      ></HomeFeaturesComponent>
      <HomeCTAComponent
        action1={
          <Fragment>
            <span className="home-text123">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text124">
              Sign up now and start organizing appointments efficiently.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text125">
              Ready to streamline your car service management?
            </span>
          </Fragment>
        }
      ></HomeCTAComponent>
      <HomeHero2Component
        feature1Title={
          <Fragment>
            <span className="home-text126">Client Appointment Management</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text127">User-Friendly Interface</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text128">Automated Reminders</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text129">
              Efficiently manage client appointments and schedules
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text130">
              Intuitive and easy-to-use interface for seamless navigation
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text131">
              Send automated reminders to clients and staff for upcoming
              appointments
            </span>
          </Fragment>
        }
      ></HomeHero2Component>
      <HomePricingComponent
        plan1={
          <Fragment>
            <span className="home-text132">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text133">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text134">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text136">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text138">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text139">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text140">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text141">$29.99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text142">$49.99/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text143">$79.99/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text144">Sign up now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text145">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text146">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text147">Sign up now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text148">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text149">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text150">Sign up now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text151">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text152">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text153">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text154">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text155">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text156">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text157">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text158">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text159">Client appointment management</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text160">Schedule creation</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text161">Automated reminders</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text162">All features in Plan 1</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text163">Advanced reporting</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text164">Customizable templates</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text165">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text166">All features in Plan 2</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text167">Priority support</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text168">
              Integration with payment systems
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
      ></HomePricingComponent>
      <HomeStepsComponent
        step1Title={
          <Fragment>
            <span className="home-text183">Create a Client Profile</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text184">Schedule Appointment</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text185">Assign Mechanic</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text186">View and Manage Schedule</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text187">
              Enter client&apos;s details such as name, contact information, and
              vehicle details.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text188">
              Select a date and time for the client&apos;s appointment with the
              mechanic.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text189">
              Assign a mechanic to the appointment based on availability and
              expertise.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Access and update the schedule to ensure smooth operations.
            </span>
          </Fragment>
        }
      ></HomeStepsComponent>
      <HomeTestimonialComponent
        review1={
          <Fragment>
            <span className="home-text191">
              The car service management system has greatly improved our
              efficiency in handling client appointments. It&apos;s
              user-friendly and has made scheduling a breeze.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text192">
              I highly recommend this car service management system. It has
              simplified our workflow and helped us stay organized with our
              appointments.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text193">
              Since using this system, our team has been able to handle
              appointments more efficiently. It&apos;s a game-changer for our
              daily operations.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text194">
              The car service management system has been instrumental in
              streamlining our scheduling process. It has saved us time and
              improved customer satisfaction.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text195">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text196">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text197">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text198">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text199">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text200">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text201">Client Relations Manager</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text202">Service Coordinator</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">Mechanic Assistant</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text204">Operations Manager</span>
          </Fragment>
        }
      ></HomeTestimonialComponent>
      <HomeContactUsComponent
        content1={
          <Fragment>
            <span className="home-text205">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text206">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text207">123 Main Street, City, Country</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text208">456 Park Avenue, City, Country</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              Visit our main office for inquiries and appointments.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text210">
              Drop by our branch office for quick consultations.
            </span>
          </Fragment>
        }
      ></HomeContactUsComponent>
    </div>
  )
}

export default Home
