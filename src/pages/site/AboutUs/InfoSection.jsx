import React from "react";
import { ListItems } from "../../../components";
import { CDN_URL } from "../../../constants";
const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 col-12">
            <ul className="bullet-list named-aboutlist">
              <ListItems heading="Our Motto" para="BE DIFFERENT" />
              <ListItems
                heading="Our Mission"
                para="Empowering people to easily grow their online business."
              />
              <ListItems
                heading="Our Story"
                para="Vonza was created because of our founder's passion to help people succeed in business and life."
                para2="Before Vonza was created, people and companies were overwhelmed with running their business. Wasting thousands of dollars, using various tools and multiple software subscriptions to juggle their online business, at the same time dealing with annoying tech people, instead of serving their customers and enjoying the freedom of entrepreneurship. It was the same pain the founders of Vonza had."
                para3="The founders realized many other online entrepreneurs share the same frustrations, and they set out to create the solution. Vonza is the solution. Now, you don’t need annoying programmers and plugins. You don’t need to write any code. You don’t need to remember 20 different passwords. You don’t even need to worry about software or tools, you get to focus on your customer and business. To crown it all, you also get to save both money and time."
                para4="Vonza gives you all the tools you need to grow your online business all in one place, instead of being all over the place"
                para5="Within minutes, you will get a fully functioning online website platform with the features and tools you need to run a successful online business. One simple login and the world is your audience. We welcome you to Vonza!"
              />
            </ul>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-5 col-12 d-flex flex-column justify-content-between align-items-center quote-holder">
            <div className="quote-box">
              <img
                style={{ width: "100%" }}
                className="img"
                src={`${CDN_URL}/assets/about/vonza-office.jpg`}
                alt="people image"
              />
              <img
                className="quotes"
                src={`${CDN_URL}/assets/quote.svg`}
                alt="quote"
              />
              <p className="text">
                Join today, create your Vonza platform, and serve your
                customers.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="/signup" className="btn btn-primary radius">
            Start Your Vonza Account
          </a>
        </div>
      </div>
    </div>
  );
};

export { InfoSection };
