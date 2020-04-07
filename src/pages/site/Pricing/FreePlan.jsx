import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import LightTooltip from "./Tooltip";
import { CDN_URL } from "../../../constants";
const FreePlan = props => {
  const dispatch = useDispatch();
  return (
    <div className="col-md-3 col-12  margin-mobiled">
      <div className="payment-plan">
        <div className="payment-plan-header">
          <img src={`${CDN_URL}/assets/pp-1-svg.png`} className="plan-img" />
          <h3>Free</h3>
          <h4>
            Test-drive Vonza for free
          </h4>
          <div className="price">
            <span>
              $0
            </span>
          </div>
          <Link
            onClick={() => {
              localStorage.setItem("price", "Free Plan");
              localStorage.setItem("flow", "/questions");
            }}
            to="/signup"
            title="Sign Up"
            className="btn-orange"
          >
            Choose Plan
          </Link>
        </div>
        <div className="plan-features">
          <ul>
            <li>
              Unlimited Customers
              <LightTooltip
                title="Customers include users, students and those who purchase your courses or products."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              Instant Payout
              <LightTooltip
                title="Applies if you set up Vonza payments. If on Monthly Payment Gateway, receive a PayPal deposit once a month with a 30-day delay."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              Transaction Fee
              <LightTooltip
                title="Free plan has a transaction fee. You only pay when you sell. You dont pay any transaction fee until you sell."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              1 Course & 3 Products
              <LightTooltip
                title="Create engaging courses and products. Add video, image, text, audio and PDF files. Easily import your content from other platforms. With Vonza you can sell more than courses. You can market and sell your physical and digital products and services."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              1 Admin Owner
              <LightTooltip
                title="Have your team manage your online business from a centralized location"
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              Website Builder with Blog
              <LightTooltip
                title="Make your site look just the way you want it to. Customize the theme according to your choice of design and colors to create a SEO rich, high performing website and blog."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              Vonza Scheduling
              <LightTooltip
                title="Allows scheduling of free or paid one-on-one meetings or multiple meetings. It allows calendar integrations, sends confirmations by email, sets daily limits for number of meetings, time zone intelligent. Set minimum scheduling notice, collects payments using credit card or PayPal for paid appointments. Allows customers to schedule directly from your website (Website embed)."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "2%" }}
                />
              </LightTooltip>
            </li>
            <li>
              Vonza Forms
              <LightTooltip
                title="Create free online forms and publish them. Get an email for each response. Collect data."
                placement="top"
              >
                <img
                  src="/images/info.svg"
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              Payment Gateways <br />
              (Stripe & PayPal)
              <LightTooltip
                title="Take payments from 130+ international currencies through Stripe Connect credit card processing or PayPal. You can even accept multiple currencies for a single course or product."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              Access to Vonza Academy
              <LightTooltip
                title="Step-by step training all the way on how to use your Vonza platform to grow your online business."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              Chat Support
              <LightTooltip
                title="Vonza offers live chat, phone and email support from our Member Success team, you'll have the best around-the-clock help in the industry."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
          </ul>
          <Link
            onClick={() => {
              localStorage.setItem("price", "Free Plan");
            }}
            to="/signup"
            title="Sign Up"
            className="btn-orange"
          >
            Choose Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreePlan;
