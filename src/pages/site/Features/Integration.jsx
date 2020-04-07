import React from "react";
import { ListItems } from "../../../components";
import { CDN_URL } from "../../../constants";

const Integration = () => {
  return (
    <section className="sec sec-custom integration">
      <div className="section-bg">
        <img
          src={`${CDN_URL}/assets/features/sec-4.png`}
          alt="section background"
        />
      </div>
      <div className="container">
        <div className="row mb-80 cust-sec-3">
          <div className="col-md-5 col-12 d-flex flex-column justify-content-end">
            <ul className="bullet-list mobile-checkerr">
              <ListItems
                heading="Integrations & API"
                para="Program your own custom add-ons and code. Our
                  comprehensive API will be your playing field!"
              />
              <div className="col-md-5 col-12 d-flex flex-column justify-content-between align-items-center quote-holder deskhide mb-5">
                <div className="quote-box">
                  <img
                    className="img"
                    src={`${CDN_URL}/assets/features/feature-3.png`}
                    alt="feature image"
                  />
                  <img
                    className="quotes"
                    src={`${CDN_URL}/assets/quote.svg`}
                    alt="quote"
                  />
                  <img
                    className="fb-icon"
                    src={`${CDN_URL}/assets/features/analytics.png`}
                    alt="analytics icon"
                  />
                  <img
                    className="blog-icon"
                    src={`${CDN_URL}/assets/features/lock.png`}
                    alt="lock icon"
                  />
                  <img
                    src={`${CDN_URL}/assets/features/hear.png`}
                    alt="headphone icon"
                    className="hear-icon"
                  />
                  <img
                    src={`${CDN_URL}/assets/features/record.png`}
                    alt="record icon"
                    className="record-icon"
                  />
                  <p className="quote-text">
                    <span className="comments">
                      “Using Funnel by Vonza we grew our revenue by 300% which
                      gave us new access to recurring revenue.”
                    </span>
                    <span className="author">
                      Valerie Reece,{" "}
                      <a href="javascript:void(0)">Mosaic Marketing Group</a>
                    </span>
                  </p>
                </div>
              </div>
              <ListItems
                heading="Funnels & Campaign"
                para=" Craft your funnel flow to convert visitors into leads,
                    leads into customers, and customers into recurring revenue!"
              />

              <ListItems
                heading="Membership"
                para="Give your user access to exclusive content and cultivate a
                    strong community."
              />
            </ul>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5 col-12 d-flex flex-column justify-content-between align-items-center quote-holder mobilehide">
            <div className="quote-box">
              <img
                className="img"
                src={`${CDN_URL}/assets/features/feature-3.png`}
                alt="feature image"
              />
              <img
                className="quotes"
                src={`${CDN_URL}/assets/quote.svg`}
                alt="quote"
              />
              <img
                className="fb-icon"
                src={`${CDN_URL}/assets/features/analytics.png`}
                alt="analytics icon"
              />
              <img
                className="blog-icon"
                src={`${CDN_URL}/assets/features/lock.png`}
                alt="lock icon"
              />
              <img
                src={`${CDN_URL}/assets/features/hear.png`}
                alt="headphone icon"
                className="hear-icon"
              />
              <img
                src={`${CDN_URL}/assets/features/record.png`}
                alt="record icon"
                className="record-icon"
              />
              <p className="quote-text">
                <span className="comments">
                  “Using Funnel by Vonza we grew our revenue by 300% which gave
                  us new access to recurring revenue.”
                </span>
                <span className="author">
                  Valerie Reece,{" "}
                  <a href="javascript:void(0)">Mosaic Marketing Group</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Integration };
