import React from "react";
import { Cards } from "../../../components";
const Features = () => {
  return (
    <>
      <section id="sec-aio" className="sec features-section">
        <div className="container">
          <div className="section-header">
            <h2>Start Now</h2>
            <p>
              All the features you need to share your knowledge and sell to
              millions of people all around the world
            </p>
          </div>
          <div className="row">
            <Cards
              img="feature-2.png"
              heading="Online Courses"
              para="Create engaging courses. Add video, image, text, audio and PDF files. Easily import your content from other platforms."
            />

            <Cards
              img="feature-1.png"
              heading="Branded Website"
              para="Use your own domain name. Build and design a beautiful website and membership pages with blog. Hosting Included."
            />

            <Cards
              img="feature-3.png"
              heading="Sell Products*"
              para="With Vonza you can sell more than courses. You can market and sell your physical and digital products and services."
            />

            <Cards
              img="feature-6.png"
              heading="Email Marketing*"
              para=" Stay in touch with your audience by sending interactive and animated email broadcasts."
            />

            <Cards
              img="feature-7.png"
              heading="Sales Funnel*"
              para="Convert your website visitors into leads and quickly grow your audience into paying customers."
            />

            <Cards
              img="calendar.png"
              heading="Vonza Scheduling*"
              para="Make it easy for your customers to schedule free or paid one-on-one or multiple meetings that are synched to calenders."
            />

            <Cards
              img="calendar.png"
              heading="University Management*"
              para="Vonza offers schools and university solution to help you manage higher education degrees, student information, staff, professors, schedules, admissions, transcript, curriculum, reporting and finance, smoothly."
            />

            <Cards
              img="feature-5.png"
              heading="Landing Pages*"
              para="Generate leads for your business. Quickly capture information on website visitors, and convert your visitors into paying customers."
            />

            <Cards
              img="feature-5.png"
              heading="Vonza Forms*"
              para="Create forms with your own custom fields with powerful tagging and automation rules for use on your Vonza platform or elsewhere."
            />

            <Cards
              img="feature-5.png"
              heading="Membership Site*"
              para="Create exclusive subscription based contents and deepen relationship with your users in your members area."
            />

            <Cards
              img="feature-8.png"
              heading="Event Management*"
              para="Simply create and host your Online and Offline events. It could be free or paid event."
            />

            <Cards
              img="feature-4.png"
              heading="Automated Webinars*"
              para="Seamless built-in live and automated online webinars and events."
            />
          </div>
        </div>
      </section>
      <section
        className="generate-profit-form generate-profit-form-2"
        style={{ padding: "5px 0" }}
      >
        <div className="container">
          <a
            href="/signup"
            className="btn-orange-r-25 btn-orange-r-2566  active"
            title="Create your Platform"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};
export { Features };
