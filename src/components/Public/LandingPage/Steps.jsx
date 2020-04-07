import React from "react";
import { CDN_URL } from "../../../constants";

const Steps = ({ img, heading, strong, conjunction }) => {
  return (
    <div className="col-md-3">
      <div className="get-start-step">
        <img src={`${CDN_URL}/assets/${img}`} alt="Step" />
        <h3>
          {" "}
          {heading} <br />
          {conjunction}
          <strong> {strong}</strong>
        </h3>
      </div>
    </div>
  );
};
export { Steps };
