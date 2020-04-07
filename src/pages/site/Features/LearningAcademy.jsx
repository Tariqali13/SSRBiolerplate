import React from "react";
import { ListItems } from "../../../components";
import { CDN_URL } from "../../../constants";

const LearningAcademy = () => {
  return (
    <>
      <section id="sec-learning" className="sec sec-learning">
        <div className="sec-header">
          <h2>LEARNING ACADEMY</h2>
          <p>
            Engage and empower your users on a<br />
            platform designed for their success
          </p>
        </div>
        <div className="row sub-sec-1 mb-200">
          <div className="col-md-6 mobile-image">
            <img src={`${CDN_URL}/assets/features/sec-5.png`} alt="image" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <ul className="unique-list">
              <li>
                <span className="unique-list-img">
                  <img
                    src={`${CDN_URL}/assets/features/icon-3.png`}
                    alt="icon"
                  />
                </span>
                <h4>Live Webinar Training</h4>
                <p>
                  You can host live teachings and training on our platform.
                  Requires premium plan membership.
                </p>
              </li>
              <li>
                <span className="unique-list-img">
                  <img
                    src={`${CDN_URL}/assets/features/icon-2.png`}
                    alt="icon"
                  />
                </span>
                <h4>Discussion Forums</h4>
                <p>
                  Make it easy for your customers to interact with you and each
                  other with our superb discussion forum system.
                </p>
              </li>
              <li>
                <span className="unique-list-img">
                  <img
                    src={`${CDN_URL}/assets/features/icon-1.png`}
                    alt="icon"
                  />
                </span>
                <h4>Course Completion Certificates</h4>
                <p>
                  Reward your students when they finish your course with
                  customized completion pages and completion certificates.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="sub-sec-2 mb-80">
          <div className="container">
            <div className="row mb-80 learning-sec-2">
              <div className="col-md-5 col-12 d-flex flex-column justify-content-between align-items-center quote-holder">
                <div className="quote-box">
                  <img
                    className="img"
                    src={`${CDN_URL}/assets/features/feature-2.png`}
                    alt="feature image"
                  />
                  <img
                    className="quotes"
                    src={`${CDN_URL}/assets/quote.svg`}
                    alt="quote"
                  />
                  <img
                    src={`${CDN_URL}/assets/features/dice.png`}
                    alt="dice image"
                    className="dice"
                  />
                  <img
                    src={`${CDN_URL}/assets/features/share.png`}
                    alt="share image"
                    className="share"
                  />
                  <img
                    src={`${CDN_URL}/assets/features/exchange.png`}
                    alt="exchange image"
                    className="exchange"
                  />
                  <img
                    src={`${CDN_URL}/assets/features/gear.png`}
                    alt="gear image"
                    className="gear"
                  />
                  <p className="quote-text">
                    <span className="comments">
                      “We use Vonza to host our internal training videos and
                      onboard our new hires. It’s pretty easy to use and
                      everyone on our team loves the platform.”
                    </span>
                    <span className="author">Mike Huckey</span>
                    <span className="author">
                      <strong>Avanos Consulting Group</strong>
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-2"></div>

              <div className="col-md-5 col-12 d-flex flex-column justify-content-end">
                <ul className="bullet-list">
                  <ListItems
                    heading="Quizzes"
                    para=" Create quizzes and assessments to test your users
                    learning progress."
                  />

                  <ListItems
                    heading="Downloads"
                    para="Easily add files downloads to your courses, files, products and content. Make your content valuable to all types of customers."
                  />

                  <ListItems
                    heading="Support Integrations"
                    para="Our platform has several integration and support tools
                     to help your maximize your online platform."
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="generate-profit-form generate-profit-form-2"
        style={{ padding: "30px 0" }}
      >
        <div className="container">
          <a
            href="/signup"
            className="btn-orange-r-25 btn-orange-r-2566  active"
            title="Create your Platform"
          >
            Create your Platform
          </a>
        </div>
      </section>
    </>
  );
};
export { LearningAcademy };
