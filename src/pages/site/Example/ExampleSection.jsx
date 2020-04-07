import React from "react";
import { ExampleCards } from "../../../components";
import { CDN_URL } from "../../../constants";
const ExampleSection = () => {
  return (
    <main id="main" className="main">
      <img
        className="exm-swosh-1"
        src={`${CDN_URL}/assets/examples/swosh-1.png`}
        alt="image"
      />
      <img
        className="exm-swosh-2"
        src={`${CDN_URL}/assets/examples/swosh-2.png`}
        alt="image"
      />
      <div className="container">
        <div className="example-section">
          <div className="header">
            <h3 className="section-heading">
              Create a lifestyle business doing what you love.
            </h3>
          </div>
          <div className="row">
            <ExampleCards
              boxName="box-1"
              heading="Penn Online Course Marketplace"
            />
            <ExampleCards
              boxName="box-2"
              heading="Higher Place Christian University"
            />
            <ExampleCards boxName="box-3" heading="Suzanne C. Photography" />
            <ExampleCards boxName="box-4" heading="Zen Marketing Agency" />
            <ExampleCards boxName="box-5" heading="Dr. Faith Abraham" />
            <ExampleCards boxName="box-6" heading="Joy Coaching Systems" />
          </div>
        </div>
      </div>
    </main>
  );
};

export { ExampleSection };
