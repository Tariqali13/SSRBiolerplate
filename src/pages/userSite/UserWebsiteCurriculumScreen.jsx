import React, { useEffect, useState } from "react";
import * as Actions from "../../store/actions";
import { history } from "../../index";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  ClassicThemeCurriculumScreenHeader,
  ClassicThemeCurriculumScreenSideBar,
  ClassicThemeCurriculumScreenNextLectureBody,
  ClassicThemeCurriculumScreenCompletedLectureBody,
  ClassicThemeCurriculumScreenUncompletedLectureBody,
  ClassicThemeCurriculumScreenCommingSoonLectureBody
} from "../../components";
const UserWebsiteCurriculumScreen = ({ match }) => {
  const dispatch = useDispatch();
  const user_id = localStorage.getItem("user_id");
  const vonzacustuserid = localStorage.getItem("vonza:cust:userid");
  const origin = window.location.origin;
  const page_url = match.params.id;
  const subdomain = window.location.hostname.split(".");
  let root = document.documentElement;
  const rootPath = history.location.pathname;

  // useEffect(() => {
  //   dispatch(
  //     Actions.classicThemeCurriculumScreenCourseData({
  //       page_url: page_url,
  //       user_id: vonzacustuserid
  //     })
  //   );
  // }, []);
  const [platformThemeData, setPlatformThemeData] = useState(null);
  const [loadPlatformThemeData, setLoadPlatformThemeData] = useState(true);
  const [
    platformThemeUserWebsiteData,
    setPlatformThemeUserWebsiteData
  ] = useState([]);
  const [courseData, setCourseData] = useState(null);
  const [courseCurriculumData, setCourseCurriculumData] = useState(null);
  const [
    courseCurriculumDataLectureState,
    setCourseCurriculumDataLectureState
  ] = useState(null);
  const [
    courseCurriculumLecturesDataForLoop,
    setCourseCurriculumLecturesDataForLoop
  ] = useState(null);

  let ClassicThemePlatformData = useSelector(
    state => state.classicThemeMainPageReducer.classicThemePlatformData
  );
  let ClassicThemeUserPlatformData = useSelector(
    state => state.classicThemeMainPageReducer.classicThemeUserPlatformData
  );
  let ClassicThemeCurriculumScreenCourseData = useSelector(
    state =>
      state.classicThemeCurriculumScreenMain
        .classicThemeCurriculumScreenCourseData
  );
  let ClassicThemeCurriculumScreenCourseCurriculumData = useSelector(
    state =>
      state.classicThemeCurriculumScreenMain
        .classicThemeCurriculumScreenCourseCurriculumData
  );
  let ClassicThemeCurriculumScreenCourseCurriculumDataLectureState = useSelector(
    state =>
      state.classicThemeCurriculumScreenMain
        .classicThemeCurriculumScreenCourseCurriculumDataLectureState
  );

  const handleStartLecture = id => {
    history.push(`./curriculum/lecture/${id}`);
  };

  useEffect(() => {
    if (
      ClassicThemeCurriculumScreenCourseCurriculumDataLectureState &&
      ClassicThemeCurriculumScreenCourseCurriculumDataLectureState.code == 200
    ) {
      setCourseCurriculumDataLectureState(
        ClassicThemeCurriculumScreenCourseCurriculumDataLectureState.data
      );
    }
  }, [ClassicThemeCurriculumScreenCourseCurriculumDataLectureState]);

  useEffect(() => {
    if (subdomain && subdomain.length > 2 && loadPlatformThemeData == true) {
      dispatch(
        Actions.getClassicThemePlatformData({ platform_name: subdomain[0] })
      );
      setLoadPlatformThemeData(false);
    }
  }, [subdomain]);

  useEffect(() => {
    if (ClassicThemePlatformData && ClassicThemePlatformData.code == 200) {
      setPlatformThemeData(ClassicThemePlatformData.data[0]);
      localStorage.setItem("platform_id", ClassicThemePlatformData.data[0]._id);
      dispatch(
        Actions.classicThemeCurriculumScreenCourseData({
          page_url: page_url,
          user_id: vonzacustuserid,
          platform_id: ClassicThemePlatformData.data[0]._id
        })
      );
    }
  }, [ClassicThemePlatformData]);

  useEffect(() => {
    if (
      platformThemeData &&
      history.location.pathname == rootPath &&
      history.location.pathname != "/login" &&
      history.location.pathname != "/signup"
    ) {
      const page_slug = history.location.pathname.replace("/", "");
      dispatch(
        Actions.getClassicThemeUserPlatformData({
          platform_id: platformThemeData._id,
          page_slug: page_slug
        })
      );
    }
  }, [platformThemeData, history.location.pathname]);
  useEffect(() => {
    if (
      ClassicThemeUserPlatformData &&
      ClassicThemeUserPlatformData.code == "201"
    ) {
      setPlatformThemeUserWebsiteData(ClassicThemeUserPlatformData.data);
    }
  }, [ClassicThemeUserPlatformData]);
  useEffect(() => {
    if (
      ClassicThemeCurriculumScreenCourseData &&
      ClassicThemeCurriculumScreenCourseData.code == "200"
    ) {
      if (
        ClassicThemeCurriculumScreenCourseData.data.is_user_enrolled != true
      ) {
        history.push("/courses");
      } else {
        setCourseData(ClassicThemeCurriculumScreenCourseData.data);
      }
    }
  }, [ClassicThemeCurriculumScreenCourseData]);

  useEffect(() => {
    if (courseData && courseData != null) {
      dispatch(
        Actions.classicThemeCurriculumScreenCourseCurriculumData({
          courseId: courseData._id,
          user_id: vonzacustuserid
        })
      );
    }
  }, [courseData]);

  useEffect(() => {
    if (
      ClassicThemeCurriculumScreenCourseCurriculumData &&
      ClassicThemeCurriculumScreenCourseCurriculumData.code == "200"
    ) {
      setCourseCurriculumData(
        ClassicThemeCurriculumScreenCourseCurriculumData.data
      );
    } else {
      setCourseCurriculumData([]);
    }
  }, [ClassicThemeCurriculumScreenCourseCurriculumData]);

  useEffect(() => {
    if (
      courseCurriculumData &&
      courseCurriculumData != undefined &&
      courseData
    ) {
      dispatch(
        Actions.classicThemeCurriculumScreenCourseCurriculumLectureStateData({
          user_id: vonzacustuserid,
          course_id: courseData._id
        })
      );
    }
  }, [courseCurriculumData]);
  useEffect(() => {
    if (courseCurriculumData) {
      let lectures = [];
      for (let x in courseCurriculumData) {
        for (let y in courseCurriculumData[x].lectures) {
          lectures.push(courseCurriculumData[x].lectures[y]);
        }
      }
      setCourseCurriculumLecturesDataForLoop(lectures);
    }
  }, [courseCurriculumData]);
  useEffect(() => {
    if (
      platformThemeUserWebsiteData &&
      platformThemeUserWebsiteData.theme_colors &&
      platformThemeUserWebsiteData.theme_colors.length > 0
    ) {
      root.style.setProperty(
        "--primary",
        platformThemeUserWebsiteData.theme_colors[0].primary
      );
      root.style.setProperty(
        "--secondary",
        platformThemeUserWebsiteData.theme_colors[0].secondary
      );
      root.style.setProperty(
        "--primary-contrast",
        platformThemeUserWebsiteData.theme_colors[0].primary_foreground
      );
      root.style.setProperty(
        "--secondary-contrast",
        platformThemeUserWebsiteData.theme_colors[0].secondary_foreground
      );
      root.style.setProperty(
        "--body-bg",
        platformThemeUserWebsiteData.theme_colors[0].body_background
      );
      root.style.setProperty(
        "--body-text-primary",
        platformThemeUserWebsiteData.theme_colors[0].body_text_primary
      );
      root.style.setProperty(
        "--body-text-secondary",
        platformThemeUserWebsiteData.theme_colors[0].body_text_secondary
      );
      root.style.setProperty(
        "--topbar-bg",
        platformThemeUserWebsiteData.theme_colors[0].topbar_background
      );
      root.style.setProperty(
        "--topbar-fg",
        platformThemeUserWebsiteData.theme_colors[0].topbar_foreground
      );
      root.style.setProperty(
        "--headings",
        platformThemeUserWebsiteData.theme_colors[0].headings
      );
      root.style.setProperty(
        "--cover-home",
        platformThemeUserWebsiteData.theme_colors[0].cover_home_text
      );
      root.style.setProperty(
        "--cover-sales",
        platformThemeUserWebsiteData.theme_colors[0].cover_sale_text
      );
      root.style.setProperty(
        "--video-player",
        platformThemeUserWebsiteData.theme_colors[0].video_player
      );
      root.style.setProperty(
        "--icons-1",
        platformThemeUserWebsiteData.theme_colors[0].icon_1
      );
      root.style.setProperty(
        "--icons-2",
        platformThemeUserWebsiteData.theme_colors[0].icon_2
      );
      root.style.setProperty(
        "--font-family",
        platformThemeUserWebsiteData.theme_fonts[0].font_family
      );
    }
  }, [platformThemeUserWebsiteData]);

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
        <link
          rel="stylesheet"
          type="text/css"
          href={`${origin}/css/vonzaTemplates/classicTemplate/main.css`}
        />
        <title>{courseData && courseData.page_title}</title>
        {/* <body style={{ display: "block" }} /> */}
        <link
          rel="icon"
          href={
            platformThemeUserWebsiteData &&
            platformThemeUserWebsiteData.theme_images &&
            platformThemeUserWebsiteData.theme_images.favicon &&
            platformThemeUserWebsiteData.theme_images.favicon.url
          }
          type={
            platformThemeUserWebsiteData &&
            platformThemeUserWebsiteData.theme_images &&
            platformThemeUserWebsiteData.theme_images.favicon &&
            platformThemeUserWebsiteData.theme_images.favicon.file_type
          }
          sizes="16x16"
        />
        <meta
          name="description"
          content={courseData && courseData.meta_description}
        />
        >
      </Helmet>
      <div className="vnz-container">
        <ClassicThemeCurriculumScreenHeader />
        <ClassicThemeCurriculumScreenSideBar courseData={courseData} />
        <main className="main-content">
          <div className="curriculum-container">
            <h1 className="page-title fzh fwb">Curriculum</h1>
            {/* <ClassicThemeCurriculumScreenNextLectureBody /> */}
            {courseCurriculumData &&
              courseCurriculumData.map((value, index) => {
                return (
                  <ClassicThemeCurriculumScreenCompletedLectureBody
                    courseCurriculumContent={value}
                    handleStartLecture={handleStartLecture}
                    key={index}
                  />
                );
              })}
            {/* <ClassicThemeCurriculumScreenUncompletedLectureBody />
            <ClassicThemeCurriculumScreenCommingSoonLectureBody /> */}
          </div>
        </main>
      </div>
    </>
  );
};

export { UserWebsiteCurriculumScreen };
