import React from "react";
import { CDN_URL } from "../../../constants";

function OnlineSupport() {
  return (
    <section className="support-section">
      <section className="container">
        <div className="support-section-widget">
          <img src={`${CDN_URL}/assets/img-support-section.png`} alt="" />
          <div className="support-widget-content">
            <i className="vonza-support-icon"></i>
            <h2>24/7 Support</h2>
            <p>
              Talk to a real human being via phone, live chat and email support.
              Your success is our success.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default OnlineSupport;
