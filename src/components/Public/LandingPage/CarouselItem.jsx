import React from "react";
import { CDN_URL } from "../../../constants";

const CarouselItem = ({ img, heading1, heading2, para, toggleCarousel }) => {
  return (
    <div className="testimonail-holder">
      <div className="container">
        <div className="testimonials-list">
          <div className="testimonail-item">
            <div className="row">
              <div className="col-md-5">
                <img
                  style={{ borderRadius: "20px" }}
                  src={`${CDN_URL}/assets/${img}`}
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <div className="testimonail-content">
                  <p>{para}</p>
                  <h3>{heading1}</h3>
                  <h4>{heading2}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CarouselItem };
