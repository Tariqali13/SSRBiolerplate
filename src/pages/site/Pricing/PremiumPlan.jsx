import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import LightTooltip from "./Tooltip";
// import LightTooltip from "./BasicPlan";
import { CDN_URL } from "../../../constants";
const PremiumPlan = props => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-3 col-12">
      <div className="payment-plan">
        <div className="payment-plan-header">
          <img src={`${CDN_URL}/assets/pp-3-svg.png`} className="plan-img" />
          <h3>Premium</h3>
          <h4>Experience the Best</h4>
          <div className="price">
            <span>${props.price}</span> / {props.duration}
          </div>
          <Link
            onClick={() => {
              localStorage.setItem("flow", "/payment");
              localStorage.setItem("plan", props.price);
              localStorage.setItem("price", "Premium Plan");
              localStorage.setItem("planId", props.premium_planId);
              localStorage.setItem("billed", props.billed);
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
              No Transaction Fee
              <LightTooltip
                title="No Transaction Fee for this plan"
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
              Unlimited Courses & Products
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
              25 Admin Owners
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
                title="More tools and abilities to make your site look just the way you want it to. Customize the theme according to your choice of design and colors to create a SEO rich, high performing website and blog. Remove Vonza Branding."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>Vonza Scheduling
              <LightTooltip
                title="Allows scheduling of free or paid one-on-one meetings or multiple meetings. It allows calendar integrations, sends confirmations by email, sets daily limits for number of meetings, time zone intelligent. Set minimum scheduling notice, collects payments using credit card or PayPal for paid appointments. Allows customers to schedule directly from your website (Website embed). Collaborate with multiple team members at once. Remove Vonza branding"
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
              Affiliate Program*
              <LightTooltip
                title="Let your friends, family, peers and partners promote your product while Vonza handles the rest"
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
              Advanced Event Management*
              <LightTooltip
                title="Simply create and host your online and offline events. It could be a free or paid event. You can set your event to be on repeat or an interval of your choosing."
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
              Drip (Scheduled) Content
              <LightTooltip
                title="Drip release lets you schedule content to slowly release over time for evergreen (based on a student’s individual sign-up date) and fixed date schedules to keep students coming back."
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
              Unlimited Sales Funnels*
              <LightTooltip
                title="Help prospects to understand your entire sales process so they don't get confused. A sales funnel allows you to nurture leads into customers over time. Provide upsell and downsells. "
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
              Coupons, Bundles, Upsells
              <LightTooltip
                title="Increase revenue by selling packaged course offerings (bundles) and also design promotions to grow your audience and increase sales using coupons. Choose which products your coupons can be used towards."
                placement="top"
              >
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>Vonza Forms
            <LightTooltip title="Create free online forms and publish them. Get an email for each response. Collect data." placement="top">
                <img src="/images/info.svg" alt="" style={{ marginLeft: "3%" }} />
              </LightTooltip>
            </li>
            <li>Third Party Integrations*
              <LightTooltip title="Includes Google Analytics, Mailchimp, ConvertKit, Facebook pixels and more" placement="top">
                <img src="/images/info.svg" alt="" style={{ marginLeft: "3%" }} />
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
            <li>
              Graded Quizzes & Exams
              <LightTooltip
                title="Quiz your students as they progress along the course to improve knowledge retention. "
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
              Course Completion Certificate
              <LightTooltip
                title="Choose from an array of Certificate themes to present to your students."
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
              Custom Domain Name
              <LightTooltip
                title="Personalize your included URL (myacademy.vonza.com) or use your own custom domain name (www.mydomain.com) for a completely branded experience."
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
              Advanced Automation*
              <LightTooltip
                title="Create automated workflows for both prospects and customers. Automate student welcome and completion emails. Select actions and then add conditions."
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
              Unlimited Landing Pages*
              <LightTooltip
                title="Create landing pages which would help for promotions."
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
              100,000 Email Contacts*
              <LightTooltip
                title="Grow your list up to 100,000 contacts to give value and sell more."
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
              Email Marketing*
              <LightTooltip
                title="Optimizing your subscriber list by reaching customers through their inbox."
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
              Live Webinar*
              <LightTooltip title="Live Webinar." placement="top">
                <img
                  src={`${CDN_URL}/assets/info.svg`}
                  alt=""
                  style={{ marginLeft: "3%" }}
                />
              </LightTooltip>
            </li>
            <li>
              Premium Support & Onboarding
              <LightTooltip
                title="Priority support and onboarding call"
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
              Advanced Report & Analytics*
              <LightTooltip
                title="Built-in integrations with marketing and analytics tools help you make the right choices for your business. Integrate with Mixpanel,Facebook pixels, and Google Analytics."
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
              localStorage.setItem("flow", "/payment");
              localStorage.setItem("plan", props.price);
              localStorage.setItem("price", "Premium Plan");
              localStorage.setItem("planId", props.premium_planId);
              localStorage.setItem("billed", props.billed);
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

PremiumPlan.propTypes = {
  price: PropTypes.number.isRequired
};

export default PremiumPlan;
