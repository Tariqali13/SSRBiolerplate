import React from "react";
import { Link } from "react-router-dom";
import { history } from "../../../index";

const BlogPageTabs = () => {
  const ActiveTabsBusinessGrowth =
    history.location.pathname == "/blog/business-growth" ||
    history.location.pathname == "/blog";
  const ActiveTabsCourseCreation =
    history.location.pathname == "/blog/course-creation";
  const ActiveTabsVonzaUpdates =
    history.location.pathname == "/blog/vonza-updates";
  const ActiveTabsPersonalDevelopment =
    history.location.pathname == "/blog/personal-development";
  return (
    <>
      <ul className="nav nav-fill">
        <li className={`nav-item ${ActiveTabsBusinessGrowth ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19.906"
            viewBox="0 0 20 19.906"
            fill="#a0c200"
          >
            <path
              className="cls-1"
              d="M117.471,714.735l-4.486-2.558a1,1,0,0,0-1,0l-4,2.278-4-2.278a1,1,0,0,0-1,0l-4.486,2.558a1,1,0,0,0-.51.869v5.116a1,1,0,0,0,.51.869l4,2.268v4.537a1,1,0,0,0,.509.87l4.5,2.557a1,1,0,0,0,1,0l4.476-2.557a1,1,0,0,0,.51-0.87v-4.537l4-2.268a1,1,0,0,0,.51-0.869V715.6A1,1,0,0,0,117.471,714.735ZM100,720.14v-4l3.5-2,3.5,2v4l-3.5,2Zm11.49,7.674-3.5,2-3.5-2v-4l3.5-2,3.5,2v4Zm4.5-7.674-3.5,2-3.5-2v-4l3.5-2,3.5,2v4Z"
              transform="translate(-98 -712.063)"
            ></path>
          </svg>
          <Link className="nav-link" to="/blog/business-growth">
            Business Growth
          </Link>
        </li>
        <li className={`nav-item ${ActiveTabsPersonalDevelopment ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#667284"
          >
            <path
              className="cls-1"
              d="M343,712H325a1,1,0,0,0-1,1v18a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V713A1,1,0,0,0,343,712Zm-10,18h-7V720h7v10Zm9,0h-7V720h7v10Zm0-12H326v-4h16v4Z"
              transform="translate(-324 -712)"
            ></path>
          </svg>
          <Link className="nav-link" to="/blog/personal-development">
            Personal Development
          </Link>
        </li>
        <li
          className={`nav-item ${
            ActiveTabsCourseCreation ? "active" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#667284"
          >
            <path
              className="cls-1"
              d="M528,713H514a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3h6v2h-4a1,1,0,1,0,0,2h10a1,1,0,1,0,0-2h-4v-2h6a3,3,0,0,0,3-3V716A3,3,0,0,0,528,713Zm1,13a1,1,0,0,1-1,1H514a1,1,0,0,1-1-1V716a1,1,0,0,1,1-1h14a1,1,0,0,1,1,1v10Z"
              transform="translate(-511 -713)"
            ></path>
          </svg>
          <a
            className="nav-link"
            to="#"
            //   to="/blog/personal-development"
          >
            Course Creation
          </a>
        </li>
        <li className={`nav-item ${ActiveTabsVonzaUpdates ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="#667284"
          >
            <path
              className="cls-1"
              d="M741,717a1,1,0,0,0-1,1v10a1,1,0,1,0,2,0V718A1,1,0,0,0,741,717Zm-5,6a1,1,0,0,0-1,1v4a1,1,0,1,0,2,0v-4A1,1,0,0,0,736,723Zm10-2a1,1,0,0,0-1,1v6a1,1,0,1,0,2,0v-6A1,1,0,0,0,746,721Zm2-8H734a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V716A3,3,0,0,0,748,713Zm1,17a1,1,0,0,1-1,1H734a1,1,0,0,1-1-1V716a1,1,0,0,1,1-1h14a1,1,0,0,1,1,1v14Z"
              transform="translate(-731 -713)"
            ></path>
          </svg>
          <a
            className="nav-link"
            to="#"
            //   to="/blog/vonza-updates"
          >
            Vonza Updates
          </a>
        </li>{" "}
      </ul>
    </>
  );
};

export { BlogPageTabs };
