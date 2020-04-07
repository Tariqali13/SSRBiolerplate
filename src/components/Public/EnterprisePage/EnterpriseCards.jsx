import React from "react";
import { CDN_URL } from "../../../constants";
const EnterpriseCards = ({ heading, img, width }) => {
  return (
    <div className="col-md-2 col-12">
      {heading != null || width != null || img != null ? (
        <div className="box">
          <img
            width={width}
            src={`${CDN_URL}/assets/${img}`}
            alt="settings image"
          />
          <strong>{heading}</strong>
        </div>
      ) : null}
    </div>
  );
};
export { EnterpriseCards };
