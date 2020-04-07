import React from "react";
import { ListItems } from "../../../components";
import { CDN_URL } from "../../../constants";

const Analytics = () => {
  return (
    <section id="sec-analytics" className="sec sec-analytics">
      <div className="sec-header">
        <h2>ANALYTICS</h2>
        <p>
          Get instant insights into your platform <br />
          with built-in reporting tools
        </p>
      </div>
      <div className="row sub-sec-1 mb-80">
        <div className="col-md-6 mobile-image">
          <img src={`${CDN_URL}/assets/features/sec-10.png`} alt="image" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-start">
          <ul className="bullet-list">
            <ListItems
              heading="Comprehensive Dashboard"
              para="See a snapshot of customers signups and revenue across a defined time period on your Vonza dashboard."
            />
            <ListItems
              heading="Course-wide User Insights"
              para="Understand your average lecture completion rates and sort by user account type (free, full price, or discounted)."
            />
            <ListItems
              heading="Contact and Revenue Data Exports"
              para="Export your customers contact list or revenue data at any time to perform deeper analysis."
            />
          </ul>
        </div>
      </div>
    </section>
  );
};
export { Analytics };
