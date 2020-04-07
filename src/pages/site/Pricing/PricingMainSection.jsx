import React, { useState } from "react";
import Faq from "./Faq";
import BasicPlan from "./BasicPlan";
import ProPlan from "./ProPlan";
import PremiumPlan from "./PremiumPlan";
import FreePlan from "./FreePlan";
function PricingMainSection() {
  const [active, setActive] = useState(false);
  const [bills, setBills] = useState({
    basic: process.env.YEARLY_BASIC_PRICE,
    pro: process.env.YEARLY_PRO_PRICE,
    premiumPlan: process.env.YEARLY_PREMIUM_PRICE,
    basic_planId: process.env.YEARLY_BASIC_PLAN,
    pro_planId: process.env.YEARLY_PRO_PLAN,
    premium_planId: process.env.YEARLY_PREMIUM_PLAN,
    billed: "Yearly",
    duration: "Month (Billed annually)"
  });
  return (
    <div>
      <section id="pricing-main" className="pt-140">
        <div className="container">
          <div className="pricing-header">
            <h2>Start Now</h2>
            <p>
              Simple and streamlined platform to help you grow a profitable
              online business.
            </p>
            <ul className="pricing-tabs-nav">
              <li className="nav-item">
                {" "}
                <a
                  onClick={() => {
                    setActive(!active);
                    setBills({
                      basic: process.env.MONTHLY_BASIC_PRICE,
                      pro: process.env.MONTHLY_PRO_PRICE,
                      premiumPlan: process.env.MONTHLY_PREMIUM_PRICE,
                      basic_planId: process.env.MONTHLY_BASIC_PLAN,
                      pro_planId: process.env.MONTHLY_PRO_PLAN,
                      premium_planId: process.env.MONTHLY_PREMIUM_PLAN,
                      billed: "Monthly",
                      duration: "Month"
                    });
                  }}
                  style={{ cursor: "pointer" }}
                  className={active ? "active" : null}
                >
                  <i className="svg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">
                      <defs></defs>
                      <title>Calendar Monthly</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <g
                            id="Shape_2"
                            data-name="Calander Year"
                            className="cls-1"
                          >
                            <path
                              className="cls-2"
                              d="M14,2H13V0H11V2H5V0H3V2H2A2,2,0,0,0,0,4V16a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V4A2,2,0,0,0,14,2Zm0,14H2V6H14ZM5.9,9.61,7.59,14h.8l1.7-4.41V14H11V8H9.75L8,12.58,6.23,8H5v6h.9Z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>
                  Monthly
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  onClick={() => {
                    setActive(!active);
                    setBills({
                      basic: process.env.YEARLY_BASIC_PRICE,
                      pro: process.env.YEARLY_PRO_PRICE,
                      premiumPlan: process.env.YEARLY_PREMIUM_PRICE,
                      basic_planId: process.env.YEARLY_BASIC_PLAN,
                      pro_planId: process.env.YEARLY_PRO_PLAN,
                      premium_planId: process.env.YEARLY_PREMIUM_PLAN,
                      billed: "Yearly",
                      duration: "Month (Billed annually)"
                    });
                  }}
                  style={{ cursor: "pointer" }}
                  className={!active ? "active" : null}
                >
                  <i className="svg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">
                      <defs></defs>
                      <title>Calendar Year</title>
                      <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <g
                            id="Shape_2_copy_2"
                            data-name="Calander Monthly"
                            className="cls-2"
                          >
                            <path
                              className="cls-2"
                              d="M14,2H13V0H11V2H5V0H3V2H2A2,2,0,0,0,0,4V16a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V4A2,2,0,0,0,14,2Zm0,14H2V6H14ZM7.4,14H8.57V11.46L11,8H9.69L8,10.51,6.37,8H5L7.4,11.46Z"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </i>
                  Annual
                </a>
              </li>
            </ul>
            <p>Save 10% with Annual Billing and get surprise bonuses.</p>
          </div>
          <div className="pricing-tabs-holder">
            <div id="monthly" className="activesection">
              <div className="row">
                <FreePlan
                  price={bills.pro}
                  duration={bills.duration}
                  pro_planId={bills.pro_planId}
                  billed={bills.billed}
                />

                <BasicPlan
                  price={bills.basic}
                  duration={bills.duration}
                  basic_planId={bills.basic_planId}
                  billed={bills.billed}
                />
                <ProPlan
                  price={bills.pro}
                  duration={bills.duration}
                  pro_planId={bills.pro_planId}
                  billed={bills.billed}
                />
                <PremiumPlan
                  price={bills.premiumPlan}
                  duration={bills.duration}
                  premium_planId={bills.premium_planId}
                  billed={bills.billed}
                />
              </div>
            </div>
          </div>
          <Faq />
        </div>

        <div className="container pt-140">
          <div className="pricing-header">
            <h2>See How much You are Saving With Vonza</h2>
          </div>
          <div className="col-md-5 col-12" style={{ margin: "0 auto" }}>
            <div className="plan-features">
              <ul>
                <li>
                  Website Builder{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $20/month
                  </span>
                </li>
                <li>
                  Premier Managed Hosting{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $35/month
                  </span>
                </li>
                <li>
                  Email Marketing{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $49/month
                  </span>
                </li>
                <li>
                  Marketing Automation Suite{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $199/month
                  </span>
                </li>
                <li>
                  Membership Management{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $99/month
                  </span>
                </li>
                <li>
                  Learning Management{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $149/month
                  </span>
                </li>
                <li>
                  Customer Relationship Management{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $99/month
                  </span>
                </li>
                <li>
                  Affilicate Management{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $97/month
                  </span>
                </li>
                <li>
                  Ecommerce Suite{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $99/month
                  </span>
                </li>
                <li>
                  Support Ticket System{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $99/month
                  </span>
                </li>
                <li>
                  Opt-in Tools{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $39/month
                  </span>
                </li>
                <li>
                  Video Hosting{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $99/month
                  </span>
                </li>
                <li>
                  Appointment Scheduling{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $45/month
                  </span>
                </li>
                <li>
                  Sales Funnel{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $99/month
                  </span>
                </li>
                <li>
                  Event Management{" "}
                  <span style={{ fontWeight: "bold", float: "right" }}>
                    $99/month
                  </span>
                </li>
                <li>
                  {" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      float: "right",
                      fontSize: "20px",
                      textDecoration: "line-through red"
                    }}
                  >
                    $1326/month
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="generate-profit-form generate-profit-form-2"
        style={{ padding: "30px 0" }}
      >
        <div className="container">
          <h2>Get Started Today with only $179/month (when paid annually)</h2>
          <a
            href="/signup"
            className="btn-orange-r-25 btn-orange-r-2566  active"
            title="Sign Up Now"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      <section className="generate-profit-form">
        <div className="container">
          <p className="r-ready">
            * Disclaimers Note: This feature is currently in development. It is
            set to release on or before 04/2020. Subscribe at current rates to
            secure pricing as increase in pricing may occur upon release.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PricingMainSection;
