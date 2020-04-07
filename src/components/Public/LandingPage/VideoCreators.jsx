import React, { Fragment, useState } from "react";
import { CDN_URL } from "../../../constants";
const VideoCreators = ({ img, heading, name, handleShow, videoLink }) => {
  return (
    <>
      <div className="col-lg-3 col-md-4">
        <div
          className="video-testimonail"
          onClick={() => handleShow(videoLink, name)}
        >
          <div className="thumbnail has-play-icon">
            <img src={`${CDN_URL}/assets/${img}`} alt="" />
            <span className="play-btn">
              <i className="von-icon-play"></i>
            </span>
          </div>
          <div className="video-testimonail-content">
            <span className="content-creator-tag">{heading}</span>
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export { VideoCreators };
