import React from "react";

const Tabs = ({ active, viewBox, color, transform, href_id, heading, d }) => {
  return (
    <li className={`nav-item ${active}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox={viewBox}
        fill={color}
      >
        <path className="cls-1" d={d} transform={transform} />
      </svg>
      <a className="nav-link" href={href_id}>
        {heading}
      </a>
    </li>
  );
};

export { Tabs };
