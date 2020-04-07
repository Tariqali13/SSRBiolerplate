import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import { BlogPagePost } from "./BlogPagePost";
import ReactHtmlParser from "react-html-parser";
import {
  blogData,
  PersonalBlogPostsData
} from "../../../components/Public/BlogPage/BlogData";
const BlogPageFullPostView = withRouter(
  ({ title, history, mainImage, mainHeading, disc, match }) => {
    const [mainImages, setMainImages] = useState(mainImage);
    const [mainHeadings, setmainHeadings] = useState(mainHeading);
    const [Discription, setDiscription] = useState(disc);
    const [blogPostTitle, setBlogPostTitle] = useState(title);
    const [CheckBlogReleatedTo, setCheckBlogReleatedTo] = useState([]);
    useEffect(() => {
      if (mainImage) {
        setMainImages(mainImage);
      }
      if (title) {
        setBlogPostTitle(title);
      }
      if (mainHeading) {
        setmainHeadings(mainHeading);
      }
      if (disc) {
        setDiscription(disc);
      }
      if (match.url.includes("business-growth")) {
        setCheckBlogReleatedTo(blogData);
      } else {
        setCheckBlogReleatedTo(PersonalBlogPostsData);
      }
    }, [
      {
        title,
        history,
        mainImage,
        mainHeading,
        disc,
        match,
        PersonalBlogPostsData,
        blogData
      }
    ]);
    return history.location.state != undefined &&
      history.location.state.title == title ? (
      <>
        <div className="blog-detailse">
          <div className="row">
            <div className="col-lg-12">
              <div className="detailse-img">
                <img src={mainImages} alt="Vonza" height="450px" />
                {/*<a href="#">Life and Business Hacks</a>*/}
                {/*<a href="#">Aug 20, 2019</a>*/}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="detailse-description">
                <h2>{ReactHtmlParser(blogPostTitle)}</h2>
                <p>{ReactHtmlParser(mainHeadings)}</p>
                {disc &&
                  Discription.map((post, i) => (
                    <div key={i} className="descritop-box">
                      <h3>{ReactHtmlParser(post.title)}</h3>
                      <span>{i + 1}</span>
                      <p>{ReactHtmlParser(post.disc)}</p>
                    </div>
                  ))}

                <div className="post-admin">
                  <div className="row">
                    <div className="col-lg-6 col-md-5">
                      <h4>
                        <img src={mainImage} alt="" /> by Vonza{" "}
                        {/*  <span>
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
                            <i className="fal fa-comment"></i> 20
                          </span> */}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-8 offset-md-2 offset-lg-0">
              <h4 className="post-title">Related Posts</h4>
            </div>

            {CheckBlogReleatedTo.length > 0 &&
              CheckBlogReleatedTo.map((item, i) => {
                const index = Math.round((Math.random() * 100) / 10);
                const post = CheckBlogReleatedTo[index];
                return (
                  i <= 1 && (
                    <BlogPagePost
                      key={i}
                      mainPost={false}
                      Image={post && post.mainImage}
                      title={post && post.title}
                      desc=""
                      date={""}
                      catagory=""
                    />
                  )
                );
              })}
          </div>
        </div>
      </>
    ) : history.location.state != undefined &&
      history.location.state.title != title ? null : history.location.state ==
      undefined ? (
      <Redirect to="/blog/business-growth" />
    ) : (
      ""
    );
  }
);

export { BlogPageFullPostView };
