import React, {useEffect, useState} from "react";
import { ComingSoonForm } from "./ComingSoonForm";
import { LeftSideBar } from "../../../components";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "../../../store/actions";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Coming Soon";
  }, []);

  let dispatch = useDispatch();
  const [publicCssLoaded, setPublicCssLoaded] = useState(false);
  const handleScriptInject = ({ linkTags }) => {
    if (linkTags && linkTags.length > 0) {
      const linkTag = linkTags[0];
      linkTag.onload = handleOnLoad;
    }
  };
  let PublicCssLoad = useSelector(state => state.common.publicCssLoad);
  const handleOnLoad = () => {
    setTimeout(async () => {
      dispatch(Actions.publicCssLoad());
    }, 2000);
  };

  useEffect(() => {
    if (PublicCssLoad == true) {
      setPublicCssLoaded(PublicCssLoad);
    }
  }, [PublicCssLoad]);

  return (

      <>

        <Helmet
            onChangeClientState={(newState, addedTags, removedTags) =>
                handleScriptInject(addedTags)
            }
        >
          <html className="height-auto" />
          <link rel="stylesheet" type="text/css" href="./css/public/style.css" />
          <body className="header-less" />
        </Helmet>
        {publicCssLoaded == true && (


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
                          <img
                            src="./images/icon-questionair.png"
                            alt="Succes"
                          />
                          <h3>Launching on 14th Feb, 2020</h3>
                          <h4>Something awesome is coming.</h4>
                        </div>
                        <ComingSoonForm />
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

        )}
      </>

  );
};

export { ComingSoon };
