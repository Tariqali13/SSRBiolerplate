import React, {useEffect, useState} from "react";
import { LeftSideBar } from "../../../components";
import { Redirect } from "react-router-dom";
import {Helmet} from "react-helmet";

const ComingSoonSuccess = () => {

  useEffect(() => {
    document.title = "Coming Soon";
  }, []);
  const Subs = localStorage.getItem("vonza:Subs");

  if (!Subs) {
    return <Redirect to={`/comingsoon`} />;
  }

  return (

      <>

        <Helmet>
          <html className="height-auto" />
          <link rel="stylesheet" type="text/css" href="./css/public/style.css" />
          <body className="header-less" />
        </Helmet>


    <div className="header-less" style={{ height: "100vh" }}>
      <div className="container h-100">
        <div className="row  h-100">
          <div className="col-md-12 col-lg-10 m-auto">
            <div className="floating-widget signup-2" id="sign-up-2">
              <div className="row h-100">
                <LeftSideBar
                  img="/images/icon-platform.png"
                  para=" Vonza gives you everything you need in one platform. You can create, market and sell online courses, products and services."
                />
                <div className="col-md-6 col-lg-7 right-panel h-100">
                  <div className="top-content-holder">
                    <div className="form-holder h-100 d-flex">
                      <div className="my-auto w-100">
                        <div className="success-right-holder">
                          <img src="./images/svg-success.png" alt="Succes" />
                          <h3>Congratulations!</h3>
                          <h4>
                            You have successfully subscribed. We will inform you
                            when it's ready.
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-panel-footer">
                    <ul className="social-list" style={{ textAlign: "center" }}>
                      <li>
                        {" "}
                        <a
                          href="https://www.facebook.com/vonzaHQ"
                          title=""
                          target="_blank"
                        >
                          {" "}
                          <i className="von-icon-fb"></i>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://www.instagram.com/vonzahq/"
                          title=""
                          target="_blank"
                        >
                          {" "}
                          <i className="von-icon-ig"></i>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://www.youtube.com/channel/UCgVLQ5tJuT-KBSF3XJfXAeg/videos?view_as=subscriber"
                          title=""
                          target="_blank"
                        >
                          {" "}
                          <i className="von-icon-ut"></i>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://www.pinterest.com/vonzahq/"
                          title=""
                          target="_blank"
                        >
                          {" "}
                          <i className="von-icon-pi"></i>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://twitter.com/vonzahq"
                          title=""
                          target="_blank"
                        >
                          {" "}
                          <i className="von-icon-tw"></i>
                        </a>{" "}
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


      </>

  );
};

export { ComingSoonSuccess };
