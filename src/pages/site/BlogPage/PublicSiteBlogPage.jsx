import React from "react";
import { withRouter, Link } from "react-router-dom";
import {
  PublicTemplate,
  BlogPageHeader,
  BlogPagePost
} from "../../../components";

import {
  blogData,
  PersonalBlogPostsData
} from "../../../components/Public/BlogPage/BlogData";

const PublicSiteBlogPage = withRouter(({ match }) => {
  const CheckBlogReleatedTo = match.url.includes("business-growth")
    ? blogData
    : PersonalBlogPostsData;
  return (
    <>
      <PublicTemplate
        pageTitle="Blogs"
        pageDescription="Blogs"
        pageKeywords="vonza blogs, blogs"
      >
        <BlogPageHeader />
        <div className="blog-area" style={{ padding: "60px 0" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-post">
                  <div className="row">
                    {CheckBlogReleatedTo.map((item, i) => {
                      return (
                        <BlogPagePost
                          mainPost={i == 0 ? true : false}
                          Image={item.mainImage}
                          title={item.title}
                          desc={
                            i == 0
                              ? item.mainHeading.substr(0, 150)
                              : item.mainHeading
                          }
                          date={item.date}
                          catagory=""
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 offset-md-2 offset-lg-0">
                <div className="blog-title">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="blog-categories">
                        <h5>Categories</h5>
                        <ul>
                          <li style={{ padding: "10px 0px" }}>
                            <Link to="/blog/business-growth">
                              <svg
                                style={{ width: 25, height: 25 }}
                                className="svg-inline--fa fa-angle-right fa-w-6"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="angle-right"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 192 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
                                ></path>
                              </svg>{" "}
                              Business Growth
                            </Link>
                          </li>
                          <li style={{ padding: "10px 0px" }}>
                            <a href="#">
                              <svg
                                style={{ width: 25, height: 25 }}
                                className="svg-inline--fa fa-angle-right fa-w-6"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="angle-right"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 192 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
                                ></path>
                              </svg>{" "}
                              Course Creation
                            </a>
                          </li>
                          <li style={{ padding: "10px 0px" }}>
                            <Link to="/blog/personal-development">
                              <svg
                                style={{ width: 25, height: 25 }}
                                className="svg-inline--fa fa-angle-right fa-w-6"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="angle-right"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 192 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z"
                                ></path>
                              </svg>{" "}
                              Personal Development
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PublicTemplate>
    </>
  );
});

export { PublicSiteBlogPage };
