import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../../constants";
const LeftSideBar = props => {
  return (
    <div className="col-lg-5 col-md-6 col-12 left-panel h-100 equal-rows">
      <div className="left-panel-header">
        <div className="left-logo">
          <a href="/" className="d-inline-block">
            {" "}
            <img
              src={`${CDN_URL}/assets/logo-transparent.png`}
              alt="Vonza"
            />{" "}
          </a>
        </div>
      </div>
      <div className="left-panel-content">
        <div className="text-holder">
          <p>{props.para}</p>
        </div>
      </div>
      <div className="left-panel-footer">
        <div className="mt-auto">
          <img src={`${CDN_URL}/assets/${props.img}`} alt="Security Icon" />
        </div>
      </div>
    </div>
  );
};

export { LeftSideBar };
