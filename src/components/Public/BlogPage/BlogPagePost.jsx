import React from "react";
import { Link, withRouter } from "react-router-dom";
import { history } from "../../../index";

const BlogPagePost = withRouter(
  ({ mainPost, title, desc, Image, catagory, date, match }) => {
    const route =
      title !== undefined &&
      title
        .split(" ")
        .join("-")
        .toLowerCase();

    const CheckRoutes = match.url.includes("business-growth")
      ? `/blog/business-growth/${route}`
      : `/blog/personal-development/${route}`;
    return (
      <>
        {title !== undefined && mainPost ? (
          <div className="col-lg-12">
            <div
              className="blog-post-first"
              style={{
                padding: "50px",
                marginBottom: "30px",
                boxShadow: "0px 0px 15px 1px #c5c5c530",
                borderRadius: "15px",
                // background: `url(${Image})`,
                backgroundSize: "35% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                paddingTop: "40px",
                paddingBottom: "30px"
              }}
            >
              <div className="row">
                <div className="col-lg-7">
                  <div className="first-blog-wrepper blog-wrepper">
                    <div className="blog-title">
                      <a href="#">{catagory}</a>
                      {/*<p>{date}</p>*/}
                    </div>

                    <Link
                      to={{
                        pathname: CheckRoutes,
                        state: title !== undefined && { title }
                      }}
                    >
                      <h4>{title}</h4>
                    </Link>

                    <p className="PPra">{desc}</p>
                    <div className="post-comment">
                      <p>
                        {/*<img src={`${Image}`} alt="" />*/}
                        {/*by Tashia Ramey{" "}*/}
                        {/* <span>
                        <svg
                          className="svg-inline--fa fa-comment fa-w-16"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="comment"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M256 64c123.5 0 224 79 224 176S379.5 416 256 416c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176m0-32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26 3.8 8.8 12.4 14.5 22 14.5 61.5 0 110-25.7 139.1-46.3 29 9.1 60.2 14.3 93 14.3 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                          ></path>
                        </svg>
                        <i className="fal fa-comment"></i>20
                      </span>{" "} */}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <img
                    src={Image}
                    width="100%"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          title !== undefined && (
            <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0">
              <div className="blog-wrepper">
                <div className="blog-imgs" style={{ height: "50%" }}>
                  <img src={Image} alt="" width="100%" height="100%" />
                  <img className="user-img" src={Image} alt="" />
                </div>
                <div className="post-content">
                  <div className="blog-title">
                    <a href="#">{catagory}</a>
                    {/*<p>{date}</p>*/}
                  </div>

                  <Link
                    to={{
                      pathname: CheckRoutes,
                      state: title !== undefined && { title }
                    }}
                  >
                    <h4>{title !== undefined && title.substr(0, 45)}...</h4>
                  </Link>
                  <div className="post-comment">
                    <p>
                      {" "}
                      by Vonza
                      {/* <span>
                    <svg
                      className="svg-inline--fa fa-comment fa-w-16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="comment"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256 64c123.5 0 224 79 224 176S379.5 416 256 416c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176m0-32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26 3.8 8.8 12.4 14.5 22 14.5 61.5 0 110-25.7 139.1-46.3 29 9.1 60.2 14.3 93 14.3 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                      ></path>
                    </svg>
                    <i className="fal fa-comment"></i>12
                  </span>*/}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </>
    );
  }
);

export { BlogPagePost };
