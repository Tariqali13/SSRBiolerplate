import React, { useEffect, useState } from "react";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
import { LeftSideBar } from "../../../components";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../store/actions";
const SignUp = () => {
  const dispatch = useDispatch();

  if (process.env.COMING_SOON == "YES") {
    return <Redirect to={`/comingsoon`} />;
  }

  const handleScriptInject = ({ linkTags }) => {
    if (linkTags && linkTags.length > 0) {
      const linkTag = linkTags[0];
      linkTag.onload = handleOnLoad;
    }
  };
  const handleOnLoad = () => {
    document.body.style.display = "block";
  };

  return (
    <>
      <Helmet
        onChangeClientState={(newState, addedTags, removedTags) =>
          handleScriptInject(addedTags)
        }
      >
        <link rel="stylesheet" type="text/css" href="./css/public/style.css" />
        <title>Signup - Vonza</title>
        <html className="height-auto" />
        <body className="header-less" />
      </Helmet>
      <div id="wrapper" role="main">
        <div className="container h-100">
          <div className="row  h-100">
            <div className="col-lg-10 col-md-12 m-auto">
              <div className="floating-widget signup" id="sign-up">
                <div className="row h-100">
                  <LeftSideBar
                    img="icon-security.png"
                    para=" Vonza gives you everything you need in one platform to grow your online business."
                  />
                  <div className="col-lg-7 col-md-6 col-12 right-panel h-100">
                    <div className="top-content-holder">
                      <div className="form-holder h-100 d-flex">
                        <div className="my-auto w-100">
                          <SignUpForm />
                        </div>
                      </div>
                    </div>
                    <div className="right-panel-footer">
                      <p>
                        {" "}
                        Already have an account?{" "}
                        <Link to="/login" className="action-link">
                          {" "}
                          Log in{" "}
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SignUp };
