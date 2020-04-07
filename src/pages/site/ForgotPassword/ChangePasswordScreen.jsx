import React, { useEffect, useState } from "react";
import LoginForm from "./ChangePasswordForm";
import { Link } from "react-router-dom";
import { LeftSideBar } from "../../../components";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../store/actions";
const ChangePasswordScreen = () => {
  const dispatch = useDispatch();
  // const token = localStorage.getItem("vonza:token");
  // if (token && SUBSCRIBED == false) {
  //   return <Redirect to={`/admin/dashboard`} />;
  // }
  // if (process.env.COMING_SOON == "YES") {
  //   return <Redirect to={`/comingsoon`} />;
  // }

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
    document.body.style.display = "block";
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
        <title>Change Password - Vonza</title>
        <html className="height-auto" />
        <link rel="stylesheet" type="text/css" href="./css/public/style.css" />
        <body className="header-less" />
      </Helmet>
      {publicCssLoaded == true && (
        <div id="wrapper" role="main">
          <div className="container h-100">
            <div className="row  h-100">
              <div className="col-lg-10 col-md-12 m-auto">
                <div className="floating-widget signup" id="login-in">
                  <div className="row h-100">
                    <LeftSideBar
                      img="/images/icon-security.png"
                      para=" Vonza gives you everything you need in one platform to grow your online business."
                    />
                    <div className="col-lg-7 col-md-6 col-12 right-panel h-100">
                      <div className="top-content-holder">
                        <div className="form-holder h-100 d-flex">
                          <div className="my-auto w-100">
                            <LoginForm />
                          </div>
                        </div>
                      </div>
                      <div className="right-panel-footer">
                        <p>
                          {" "}
                          Don't have an account?{" "}
                          <Link to="/signup" className="action-link">
                            {" "}
                            Sign Up{" "}
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
      )}
    </>
  );
};

export { ChangePasswordScreen };
