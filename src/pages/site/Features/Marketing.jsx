import React from "react";
import { ListItems } from "../../../components";
import { CDN_URL } from "../../../constants";

const Marketing = () => {
  return (
    <section id="sec-marketing" className="sec sec-marketing">
      <div className="sec-header">
        <h2>Marketing</h2>
        <p>
          Leverage a wide variety of built-in marketing <br />
          tools to grow your business
        </p>
      </div>
      <div className="row sub-sec-3 mb-80">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <ul className="bullet-list">
            <ListItems
              heading="Coupons and Promotions"
              para="Incentivize enrollments by creating dollar-amount or
                percentage-off coupons with custom expiration times."
            />

            <ListItems
              heading="Advanced Pricing Options"
              para="Charge a one-time fee, sell a subscription, or set up a
                payment plan, and offer individual or bundled courses and products. Easily upsell and downsell to your customers."
            />

            <ListItems
              heading="Your Own Affiliate Program"
              para="Reward others for sharing your courses and products. and track their results with the built-in affiliate marketing feature."
            />

            <ListItems
              heading="Customizable Sales Pages"
              para="Use our conversion-optimized sales page template, or create your own custom landing pages."
            />
          </ul>
        </div>
        <div className="col-md-6 mobile-image mobilehide">
          <img src={`${CDN_URL}/assets/features/sec-7.png`} alt="image" />
        </div>
      </div>
      <div className="sub-sec-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 mobile-image">
              <img
                src={`${CDN_URL}/assets/features/mobile.png`}
                alt="mobile image"
              />
            </div>
            <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
              <ul className="bullet-list">
                <ListItems
                  heading="Accept International Payments"
                  para="Take payments from 130+ international currencies through Stripe Connect credit card processing or PayPal. You can even accept multiple currencies for a single course or product."
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Marketing };
