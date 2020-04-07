import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { history } from "../../../../index";
import { useDispatch, useSelector } from "react-redux";
import { resetLoginClassicThemePlatformState } from "../../../../store/actions";
const ClassicTemplateHeader = ({
  menus,
  images,
  platFormname,
  handleClassicThemePlatformUserWebsiteWithPageId
}) => {
  const dispatch = useDispatch();
  const origin = window.location.origin;

  const vonzaWebToken = localStorage.getItem("vonza:web:token");
  const IsPrimaryOwner = localStorage.getItem("is_primary_owner");
  const [hideLoginSignup, setHideLoginSignup] = useState(false);
  const [openAvatarDropDown, setOpenAvatarDropDown] = useState(false);

  const handleOpenAvatarDropdown = () => {
    setOpenAvatarDropDown(!openAvatarDropDown);
  };
  const handleCloseAvatar = () => {
    setOpenAvatarDropDown(false);
  };
  const handleLogoutClassicTheme = () => {
    localStorage.removeItem("vonza:web:token");
    localStorage.removeItem("vonza:cust:userid");
    localStorage.removeItem("vonza:cust:email");
    history.push("/");
    dispatch(resetLoginClassicThemePlatformState());
  };
  useEffect(() => {
    if (vonzaWebToken && vonzaWebToken != undefined) {
      setHideLoginSignup(true);
    } else {
      setHideLoginSignup(false);
    }
  }, [vonzaWebToken]);
  return (
    <div className="vnz-full">
      <header
        className="topbar-container"
        onMouseLeave={handleCloseAvatar}
        style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.07)" }}
      >
        <div className="container">
          <div className="logo" style={{ width: "300px" }}>
            <Link to="/">
              {images && images.site_logo ? (
                <img src={images.site_logo.url} />
              ) : (
                <h1 className="logo-alt fzh fwm">{platFormname}</h1>
              )}
            </Link>
          </div>
          <nav className="main-nav">
            {IsPrimaryOwner && IsPrimaryOwner == "true" ? (
              <Link to="/admin/dashboard" class="topbar-link">
                <div class="icn icn-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    class="svg-cc"
                  >
                    <path
                      d="M10 0A10 10 0 110 10 10 10 0 0110 0zm0 2a8 8 0 11-8 8 8 8 0 018-8zm.014 2.01A5.906 5.906 0 005.208 6.4a.989.989 0 00.214 1.389 1.006 1.006 0 001.4-.213A3.922 3.922 0 0110.014 6a.067.067 0 01-.029 0 3.922 3.922 0 013.196 1.58 1.006 1.006 0 001.4.213.989.989 0 00.211-1.393 5.907 5.907 0 00-4.806-2.39C10 4 10 4 10.014 4.01zM10 16a2.982 2.982 0 01-2.7-4.286L6.285 10.7A1 1 0 117.7 9.285L8.714 10.3A3 3 0 1110 16zm0-4a1 1 0 101 1 1 1 0 00-1-1z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span class="fwm">Admin</span>
              </Link>
            ) : null}

            <Link to="/" className="nav-link fwm">
              Home
            </Link>
            <Link to="/courses" className="nav-link fwm">
              Courses
            </Link>
            {hideLoginSignup == true ? (
              <>
                <Link to="/my_courses" className="nav-link fwm">
                  My Courses
                </Link>
              </>
            ) : null}
            {menus &&
              menus.map((menusItems, index) => {
                return menusItems.url_type != "Internal" &&
                  menusItems.menu_type == "Header" &&
                  menusItems.is_enable == true ? (
                  <a
                    key={index}
                    href={menusItems.url}
                    replace={true}
                    target={menusItems.target}
                    className="nav-link fwm"
                  >
                    {menusItems.name}
                  </a>
                ) : menusItems &&
                  menusItems.menu_type == "Header" &&
                  menusItems.is_enable == true ? (
                  <Link
                    to={`/${menusItems.page_id &&
                      menusItems.page_id.page_url &&
                      menusItems.page_id.page_url}`}
                    replace={true}
                    key={index}
                    className="nav-link fwm"
                    onClick={() =>
                      handleClassicThemePlatformUserWebsiteWithPageId(
                        menusItems.url
                      )
                    }
                  >
                    {menusItems.name}
                  </Link>
                ) : null;
              })}
            {hideLoginSignup == false ? (
              <>
                {" "}
                <Link to="/login" className="nav-link fwm">
                  Log In
                </Link>
                <Link to="/signup" className="btn btn-topbar">
                  <span className="fwb">Create an Account</span>
                </Link>
              </>
            ) : null}
            {hideLoginSignup == true ? (
              <div className="topbar-user" onClick={handleOpenAvatarDropdown}>
                <div className={`dropdown ${openAvatarDropDown ? "open" : ""}`}>
                  <div className="icn icn-42">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 42 42"
                      className="svg-cc"
                    >
                      <path
                        d="M32.409 38.615C30.731 35.789 25.733 33 21 33s-9.731 2.789-11.409 5.616a21 21 0 1122.818-.001zM21 35c4.4 0 8.556 2.746 9.688 4.621a20.912 20.912 0 01-19.376 0C12.444 37.745 16.6 35 21 35zm0-20a6 6 0 11-6 6 6.007 6.007 0 016-6m0-2a8 8 0 108 8 8 8 0 00-8-8z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="dropdown-menu dropdown-icons dropdown-menu-right">
                    {IsPrimaryOwner !== "true" ? (
                      <>
                        <Link to="/user/edit-profile">
                          <div className="dropdown-item">
                            <div className="icn icn-18">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 18"
                                className="svg-cc"
                              >
                                <path
                                  d="M11 17H4a3 3 0 01-3-3V7a1 1 0 012 0v7a1 1 0 001 1h7a1 1 0 010 2zm-4.031-5a1 1 0 01-.981-1.19c.524-2.71.567-2.931 1.37-3.733L12.7 1.731a2.5 2.5 0 113.535 3.536l-5.344 5.344c-.8.8-1.023.844-3.732 1.368a.969.969 0 01-.19.021zm3.217-2.1zM14.469 3a.5.5 0 00-.354.147L8.772 8.489l.708.711 5.344-5.344A.5.5 0 0014.469 3z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <span className="dropdown-text">Edit Profile</span>
                          </div>
                        </Link>
                        <Link to="/user/subscription">
                          <div className="dropdown-item">
                            <div className="icn icn-18">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 18"
                                className="svg-cc"
                              >
                                <path
                                  d="M10 15h-.573l1.3 1.293a.993.993 0 01-1.407 1.4l-3.015-3a1.013 1.013 0 010-1.419l3.015-3a.993.993 0 011.407 1.4L9.4 13h.6a4 4 0 004-4 1 1 0 012 0 6 6 0 01-6 6zM8.681 7.7a.993.993 0 01-1.407-1.4L8.573 5H8a4 4 0 00-4 4 1 1 0 01-2 0 6 6 0 016-6h.6L7.274 1.675A.993.993 0 018.681.273l3.015 3a1.013 1.013 0 010 1.419z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <span className="dropdown-text">
                              Manage Subscriptions
                            </span>
                          </div>
                        </Link>
                        <Link to="/user/update-card">
                          <div className="dropdown-item">
                            <div className="icn icn-18">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 18"
                                className="svg-cc"
                              >
                                <path
                                  d="M14 16H4a3 3 0 01-3-3V5a3 3 0 013-3h10a3 3 0 013 3v8a3 3 0 01-3 3zm1-11a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1V5zM3 6h12v3H3V6z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <span className="dropdown-text">
                              Add/Edit Credit Card
                            </span>
                          </div>
                        </Link>
                        <Link to="/user/contact">
                          <div className="dropdown-item">
                            <div className="icn icn-18">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 18"
                                className="svg-cc"
                              >
                                <path
                                  d="M4 2h10a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V5a3 3 0 013-3zm0 2h10a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z"
                                  fillRule="evenodd"
                                ></path>
                                <path d="M12.564 7.823l-2.972 2c-.019.013-.041.015-.06.027s-.059.024-.088.039a1 1 0 01-.261.1 1 1 0 01-.182 0 1 1 0 01-.182 0 1 1 0 01-.261-.1c-.03-.014-.058-.021-.089-.039s-.041-.013-.06-.027l-2.972-2A1 1 0 015.2 6.429a1.01 1.01 0 011.4-.234L9 7.807l2.4-1.612a1.01 1.01 0 011.4.234 1 1 0 01-.236 1.394z"></path>
                              </svg>
                            </div>
                            <span className="dropdown-text">Contact</span>
                          </div>
                        </Link>
                        <div
                          className="dropdown-item"
                          onClick={handleLogoutClassicTheme}
                        >
                          <div className="icn icn-18">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 18 18"
                              className="svg-cc"
                            >
                              <path d="M9 4a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h4a1 1 0 001-1 1 1 0 012 0 3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h4a3 3 0 013 3 1 1 0 11-2 0z"></path>
                              <path d="M16.7 9.694l-3.015 3a.993.993 0 01-1.407-1.4L13.573 10H7a1 1 0 010-2h6.6l-1.326-1.325a.993.993 0 011.407-1.4l3.015 3a1.013 1.013 0 01.004 1.419z"></path>
                            </svg>
                          </div>
                          <span className="dropdown-text">Logout</span>
                        </div>
                      </>
                    ) : (
                      <div
                        className="dropdown-item"
                        onClick={handleLogoutClassicTheme}
                      >
                        <div className="icn icn-18">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            className="svg-cc"
                          >
                            <path d="M9 4a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h4a1 1 0 001-1 1 1 0 012 0 3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h4a3 3 0 013 3 1 1 0 11-2 0z"></path>
                            <path d="M16.7 9.694l-3.015 3a.993.993 0 01-1.407-1.4L13.573 10H7a1 1 0 010-2h6.6l-1.326-1.325a.993.993 0 011.407-1.4l3.015 3a1.013 1.013 0 01.004 1.419z"></path>
                          </svg>
                        </div>
                        <span className="dropdown-text">Logout</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default ClassicTemplateHeader;
