import React from "react";
import { CDN_URL } from "../../../constants";

function TopExperiecneSection() {
  return (
    <section className="get-started-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 respond deskhide">
            <img
              src={`${CDN_URL}/assets/step-2-imgss.png`}
              className="mobile-responsive"
              alt="Get Started"
            />
          </div>
          <div className="col-md-6">
            <h2>
              Provide a top-notch <br />
              experience for your Customers{" "}
            </h2>
            <p className="pb-4">
              Thousands of entrepreneurs and small businesses use
              <br />
              Vonza to help them deliver exceptional experiences.{" "}
            </p>
            <a
              href="#"
              className="btn-orange-r-25 btn-orange-r-2566  active"
              title="Get Started Now"
            >
              Get Started Now
            </a>
          </div>
          <div className="col-md-6  respond mobilehide">
            <img
              style={{ width: "100%", borderRadius: "30px" }}
              src={`${CDN_URL}/assets/step-2-imgss.png`}
              className="mobile-responsive"
              alt="Get Started"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopExperiecneSection;
