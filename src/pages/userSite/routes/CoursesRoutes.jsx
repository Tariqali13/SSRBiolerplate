import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
// import {
//   UserWebsiteCurriculumScreen,
//   UserWebsiteLectureScreen
// } from "../index";
// import {
//   ClassicThemeCourseData,
//   ClassicThemeCheckoutPage
// } from "../../../components";
const CoursesRoutes = ({ match }) => {
  return (
    <Switch>
      {/* <Route path={match.url} exact component={ClassicThemeCourseData} />
      <Route
        path={`${match.path}/curriculum`}
        exact
        component={UserWebsiteCurriculumScreen}
      />
      <Route
        path={`${match.path}/curriculum/lecture/:lectureId`}
        exact
        component={UserWebsiteLectureScreen}
      />
      <Route
        path={`${match.path}/checkout/:planId`}
        exact
        component={ClassicThemeCheckoutPage}
      /> */}
    </Switch>
  );
};

export { CoursesRoutes };
