import React from "react";
import { CDN_URL } from "../../../constants";

const List = ({ img, heading, para }) => {
  return (
    <li>
      <span className="unique-list-img">
        <img src={`${CDN_URL}/assets/${img}`} alt="" />
      </span>
      <h4>{heading}</h4>
      <p>{para}</p>
    </li>
  );
};
export { List };
