import React, { useEffect, useState } from 'react';
import * as Actions from '../../../store/actions';
import { history } from '../../../index';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
// import {
//   UserWebsite,
//   RedirectUserSubDomain,
//   UserWebsiteCurriculumScreen,
//   UserWebsiteLectureScreen
// } from "../index";
// import { PlanUpgradeRoutes } from "../../main/PlanUpgradeDowngrade";
// import { AdminRoutes } from "../../main";
// import {
//   ClassicThemeLogin,
//   ClassicThemeSignUp,
//   ClassicThemeAllCourseData,
//   ClassicThemeAllMyCourseData,
//   ClassicThemeUpdatePassword,
//   ClassicThemeVerifyUserCode,
//   ClassicThemeForgotPassword,
//   ClassicThemeNavMenuPagesRoutes,
//   ClassicThemeTermsPage,
//   ClassicThemeProductsStore,
//   ClassicThemeProductDetails
//   // ClassicThemeCheckoutPage
// } from "../../../components";
// import { CoursesRoutes } from "./CoursesRoutes";

/**
 *
 * @param {import("react").ComponentElement} Comp Any Component of platform route
 * @param {true} con condition you don't worry about this only pass this variable `isPrimaryOwnerOrPlublish` remember this veriable work only inside UserWebsiteRoutes component
 * @param {props} props any props like router props and other props
 */

function AdminComponent(Comp, con, props) {
  //   if (con) {
  //     return <Comp {...props} />;
  //   } else {
  //     return (
  //       <>
  //         <Helmet>
  //           <body style={{ display: "block" }} />
  //         </Helmet>
  //         <h2>Your Platform has not been published.</h2>
  //       </>
  //     );
  //   }
  // }

  // const UserWebsiteRoutes = props => {
  //   const dispatch = useDispatch();
  //   const subdomain = window.location.hostname.split(".");
  //   const [platformThemeData, setPlatformThemeData] = useState(null);
  //   const [isPrimaryOwnerOrPlublish, setIsPrimaryOwnerOrPlublish] = useState("");

  //   const [loadPlatformThemeData, setLoadPlatformThemeData] = useState(true);
  //   const isPrimaryOwner = localStorage.getItem("is_primary_owner");
  //   useEffect(() => {
  //     if (subdomain && subdomain.length > 2 && loadPlatformThemeData == true) {
  //       dispatch(
  //         Actions.getClassicThemePlatformData({ platform_name: subdomain[0] })
  //       );
  //       setLoadPlatformThemeData(false);
  //     }
  //   }, [subdomain]);

  //   let ClassicThemePlatformData = useSelector(
  //     state => state.classicThemeMainPageReducer.classicThemePlatformData
  //   );

  //   useEffect(() => {
  //     if (ClassicThemePlatformData && ClassicThemePlatformData.code == 200) {
  //       setPlatformThemeData(ClassicThemePlatformData.data[0]);
  //       localStorage.setItem("platform_id", ClassicThemePlatformData.data[0]._id);
  //     }
  //   }, [ClassicThemePlatformData]);

  //   useEffect(() => {
  //     if (isPrimaryOwner !== null && isPrimaryOwner == "true") {
  //       setIsPrimaryOwnerOrPlublish(true);
  //     } else if (
  //       platformThemeData &&
  //       platformThemeData.is_platform_published == "Published"
  //     ) {
  //       setIsPrimaryOwnerOrPlublish(true);
  //     } else {
  //       setIsPrimaryOwnerOrPlublish(false);
  //     }
  //   }, [platformThemeData]);

  return (
    <Switch>
     {/* <Route path="/redirect/:id" exact component={RedirectUserSubDomain} />
      <Route
        path="/courses"
        exact
        render={props => {
          return AdminComponent(
            ClassicThemeAllCourseData,
            isPrimaryOwnerOrPlublish,
            props
          );
        }}
      />
      <Route
        path="/my_courses"
        exact
        render={props => {
          return AdminComponent(
            ClassicThemeAllMyCourseData,
            isPrimaryOwnerOrPlublish,
            props
          );
        }}
      /> */}
      {/* <Route
        path="/courses/:id"
        render={props => {
          return AdminComponent(CoursesRoutes, isPrimaryOwnerOrPlublish, props);
        }}
      /> */}
      {/*  <Route
        path="/login"
        exact
        render={() => {
          localStorage.removeItem("is_primary_owner");
          return AdminComponent(
            ClassicThemeLogin,
            isPrimaryOwnerOrPlublish,
            props
          );
        }}
      />
      <Route
        path="/signup"
        exact
        render={() => {
          localStorage.removeItem("is_primary_owner");
          return AdminComponent(
            ClassicThemeSignUp,
            isPrimaryOwnerOrPlublish,
            props
          );
        }}
      />
      <Route
        path={["/terms", "/privacy-policy"]}
        exact
        component={ClassicThemeTermsPage}
      />
      <Route
        path="/forgot-password"
        exact
        component={ClassicThemeForgotPassword}
      />

      <Route path={`/user`} component={ClassicThemeNavMenuPagesRoutes} />
      <Route path={`/store`} exact component={ClassicThemeProductsStore} />
      <Route
        path={`/store/product/:id`}
        component={ClassicThemeProductDetails}
      />
      <Route path={`/admin/upgrade`} component={PlanUpgradeRoutes} />
      <Route
        exact
        path="/verifyInviteUser"
        component={ClassicThemeVerifyUserCode}
      />
      <Route
        exact
        path={["/update-password", "/change-password"]}
        component={ClassicThemeUpdatePassword}
      />
      <Route
        path={`/*`}
        exact
        strict
        render={props => {
          if (props.location.pathname.match("/admin/")) {
            localStorage.setItem("is_primary_owner", true);
            return <AdminRoutes />;
          }
          return (
            <UserWebsite isPrimaryOwnerOrPlublish={isPrimaryOwnerOrPlublish} />
          );
        }}
      /> */}
      {/* <Route path="/admin" exact component={AdminRoutes} /> */}
    </Switch>
  );
}

export { UserWebsiteRoutes };
