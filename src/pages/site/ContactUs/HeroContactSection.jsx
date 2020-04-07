import React from "react";
import { CDN_URL } from "../../../constants";
const HeroContactSection = () => {
  return (
    <section id="hero-block" className="hero-contact">
      <img
        className="swosh-1"
        src={`${CDN_URL}/assets/contact-us/swosh-1.png`}
        alt="image"
      />
      <img
        className="swosh-2"
        src={`${CDN_URL}/assets/contact-us/swosh-2.png`}
        alt="image"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-auto">
            <div className="text-center">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroContactSection };
