import React from "react";
import { ListItems } from "../../../components";
import { CDN_URL } from "../../../constants";

const Customization = () => {
  return (
    <section
      id="sec-customization"
      className="sec sec-custom"
      style={{ paddingTop: "50px" }}
    >
      <div className="section-bg">
        <img src={`${CDN_URL}/assets/features/sec-4.png`} alt="section background" />
      </div>
      <div className="container">
        <div className="sec-header">
          <h2>Customization</h2>
          <p>
            Easily customize your platform to match <br />
            your brand and taste
          </p>
        </div>

        <div className="row mb-80">
          <div className="col-md-5 col-12 d-flex flex-column justify-content-end">
            <ul className="bullet-list">
              <ListItems
                heading="Customizable Site Themes"
                para="Create your own beautiful and profitable website, without knowing any code. Simple drag and drop functionality."
              />

              <ListItems
                heading="Build a Stunning Website with Blog"
                para="Make your site look just the way you want it to. Customize the theme according to your choice of design and colors to create a SEO rich, performing website and blog."
              />

              <ListItems
                heading="Create Engaging Multimedia Lectures"
                para="Add video, image, youtube, text, audio and PDF files. Easily import your content from Dropbox, Google Drive or OneDrive."
              />
            </ul>
          </div>
          <div className="col-md-7 col-12 mobile-image mobilehide">
            <img
              src={`${CDN_URL}/assets/features/sec-customization3.png`}
              alt="section img"
            />
          </div>
        </div>
        <div className="row mb-110 mobile-margin">
          <div className="col-md-7 col-12 mobile-margin">
            <img src={`${CDN_URL}/assets/features/sec-3.png`} alt="section img" />
          </div>
          <div className="col-md-5 col-12 d-flex flex-column justify-content-center">
            <ul className="bullet-list">
              <ListItems
                heading="Fully Mobile-Responsive"
                para="Your website is fully responsive on all devices so users can view your content on their phones, computer and tablets."
              />

              <ListItems
                heading="Intelligent Appointment Scheduling"
                para="Allows scheduling of free or paid one-on-one or multiple meetings. It allows calender integrations, sends confirmations by email, sets daily limits for number of meetings, time zone intelligent."
              />
            </ul>
          </div>
        </div>
        <div className="row mb-80 cust-sec-3">
          <div className="col-md-5 col-12 d-flex flex-column justify-content-between align-items-center quote-holder  deskhide">
            <div className="quote-box">
              <img
                className="img"
                src={`${CDN_URL}/assets/features/feature.png`}
                alt="feature image"
              />
              <img
                className="quotes"
                src={`${CDN_URL}/assets/quote.svg`}
                alt="quote"
              />
              <img
                className="fb-icon"
                src={`${CDN_URL}/assets/features/fb.png`}
                alt="faceboon icon"
              />
              <img
                className="blog-icon"
                src={`${CDN_URL}/assets/features/msg.png`}
                alt="bloc icon"
              />
              <img
                className="link-icon"
                src={`${CDN_URL}/assets/features/link.png`}
                alt="link image"
              />
              <img
                className="twitter-icon"
                src={`${CDN_URL}/assets/features/twitter.png`}
                alt="twitter image"
              />
              <p className="quote-text">
                <span className="comments">
                  “Vonza all-in-one platform gave us the tools and resources we
                  needed to build our online platform and courses”
                </span>
                <span className="author">Cindy Donaldson</span>
                <span className="author">
                  Higher Place Christian University
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-5 col-12 d-flex flex-column justify-content-end">
            <ul className="bullet-list">
              <ListItems
                heading="Custom URL"
                para="Start with your own free domain (yourplatform.vonza.com),
                 use your custom domain (www.yoursite.com) or subdomain (courses.yourplatform.com)"
              />

              <ListItems
                heading="Videos & Files Hosting"
                para="Upload your files and video content right to Vonza. We securely host your files and flawlessly deliver to your customers. Vonza takes care of everything for you."
              />

              <ListItems
                heading="Social Share"
                para="Your online platform, courses and products have in-built social
                 share buttons to help you increase your social exposure."
              />
            </ul>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5 col-12 d-flex flex-column justify-content-between align-items-center quote-holder mobilehide">
            <div className="quote-box">
              <img
                className="img"
                src={`${CDN_URL}/assets/features/feature.png`}
                alt="feature image"
              />
              <img
                className="quotes"
                src={`${CDN_URL}/assets/quote.svg`}
                alt="quote"
              />
              <img
                className="fb-icon"
                src={`${CDN_URL}/assets/features/fb.png`}
                alt="faceboon icon"
              />
              <img
                className="blog-icon"
                src={`${CDN_URL}/assets/features/msg.png`}
                alt="bloc icon"
              />
              <img
                className="link-icon"
                src={`${CDN_URL}/assets/features/link.png`}
                alt="link image"
              />
              <img
                className="twitter-icon"
                src={`${CDN_URL}/assets/features/twitter.png`}
                alt="twitter image"
              />
              <p className="quote-text">
                <span className="comments">
                  “Vonza all-in-one platform gave us the tools and resources we
                  needed to build our online platform and courses”
                </span>
                <span className="author">Cindy Donaldson</span>
                <span className="author">
                  <strong>Higher Place Christian University</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Customization };
