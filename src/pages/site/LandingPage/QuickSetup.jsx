import React from "react";
import { List } from "../../../components";
import { CDN_URL } from "../../../constants";

function QuickSetup() {
  return (
    <section className="what-make-vonza-unique">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3>Vonza makes the difference</h3>
            <div className="von-unique-img text-right deskhide pb-5">
              <img src={`${CDN_URL}/assets/von-unique-img2.png`} alt="" />
            </div>
            <ul className="unique-list">
              <List
                heading="Easy Setup"
                para=" Within minutes, create a beautiful website and online courses
                  without writing any code."
                img="unique-icon-1.png"
              />
              <List
                heading="Automation and Speed"
                para="Engage and automate your Customers on a platform designed for
                  their success and productivity."
                img="unique-icon-3.png"
              />
              <List
                heading="Secure Payment Gatewayss"
                para="You’ll receive a customizable learning management system,
                  secure payment gateways, and proven marketing tools."
                img="unique-icon-2.png"
              />
            </ul>
          </div>
          <div className="col-md-7 mobilehide">
            <div className="von-unique-img text-right">
              <img src={`${CDN_URL}/assets/von-unique-img2.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickSetup;
