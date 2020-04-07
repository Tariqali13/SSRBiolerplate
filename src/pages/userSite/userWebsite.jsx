import React, { useEffect, useState } from "react";
import * as Actions from "../../store/actions";
import { history } from "../../index";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import {
  ClassicTemplate,
  ClassicThemeCoverBackground,
  ClassicThemeTestimonials,
  ClassicThemeRichText,
  ClassicThemeSmallBanner,
  ClassicThemeVideo,
  ClassicThemeLiquidBlock,
  ClassicThemeFeaturedCourses
} from "../../components";
const UserWebsite = ({isPrimaryOwnerOrPlublish}) => {
  const dispatch = useDispatch();
  const subdomain = window.location.hostname.split(".");

  let root = document.documentElement;
  const rootPath = history.location.pathname;
  const [platformThemeData, setPlatformThemeData] = useState(null);

  const [loadPlatformThemeData, setLoadPlatformThemeData] = useState(true);
  const [
    platformThemeUserWebsiteData,
    setPlatformThemeUserWebsiteData
  ] = useState([]);

  let ClassicThemePlatformData = useSelector(
    state => state.classicThemeMainPageReducer.classicThemePlatformData
  );
  let ClassicThemeUserPlatformData = useSelector(
    state => state.classicThemeMainPageReducer.classicThemeUserPlatformData
  );
  let ClassicLoadingThemePlatformData = useSelector(
    state => state.classicThemeMainPageReducer.classicLoadingThemePlatformData
  );

  let ClassicLoadingThemeUserPlatformData = useSelector(
    state =>
      state.classicThemeMainPageReducer.classicLoadingThemeUserPlatformData
  );
  let isLoadingCoursesClassicTheme = useSelector(
    state => state.classicThemeMainPageReducer.loadingCoursesClassicTheme
  );

  const handleClassicThemePlatformUserWebsiteWithPageId = url => {
    dispatch(
      Actions.getClassicThemeUserPlatformData({
        platform_id: platformThemeData._id,
        page_slug: url
      })
    );
  };

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


  return (
    <>
      {!ClassicLoadingThemePlatformData &&
      // platformThemeData.platform_expire == false &&
      !isLoadingCoursesClassicTheme &&
      platformThemeUserWebsiteData &&
      platformThemeUserWebsiteData.pages &&
      platformThemeData &&
      isPrimaryOwnerOrPlublish &&
      platformThemeUserWebsiteData.pages.page_contents.length > 0 ? (
        <ClassicTemplate
          menus={platformThemeUserWebsiteData.menus}
          images={platformThemeUserWebsiteData.theme_images}
          handleClassicThemePlatformUserWebsiteWithPageId={
            handleClassicThemePlatformUserWebsiteWithPageId
          }
          platFormname={platformThemeData && platformThemeData.platform_name}
          pageTitle={
            platformThemeUserWebsiteData &&
            platformThemeUserWebsiteData.pages &&
            platformThemeUserWebsiteData.pages.page_title
          }
        >
          {platformThemeUserWebsiteData &&
            platformThemeUserWebsiteData.pages &&
            platformThemeUserWebsiteData.pages.page_contents.map(
              (value, index) => {
                return value.content_type == "HomePageHeroHeader" ? (
                  <ClassicThemeCoverBackground
                    page_content={value}
                    platformThemeData={platformThemeData}
                    platformThemeUserWebsiteData={platformThemeUserWebsiteData}
                    key={index}
                  />
                ) : null;
              }
            )}{" "}
          {platformThemeUserWebsiteData &&
            platformThemeUserWebsiteData.pages &&
            platformThemeUserWebsiteData.pages.page_contents.map(
              (value, index) => {
                return value.content_type == "RichText" ? (
                  <ClassicThemeRichText
                    page_content={value.content}
                    key={index}
                  />
                ) : value.content_type == "Testimonial" ? (
                  <ClassicThemeTestimonials page_content={value} key={index} />
                ) : value.content_type == "BackImage" ? (
                  <ClassicThemeSmallBanner page_content={value} key={index} />
                ) : value.content_type == "Video" ? (
                  <ClassicThemeVideo page_content={value} key={index} />
                ) : value.content_type == "LiquidBlock" ? (
                  <ClassicThemeLiquidBlock
                    page_content={value.content}
                    key={index}
                  />
                ) : value.content_type == "FeaturedCourses" ? (
                  <ClassicThemeFeaturedCourses
                    page_content={value}
                    key={index}
                    platform_id={platformThemeData._id}
                  />
                ) : null;
              }
            )}
        </ClassicTemplate>
      ) : !ClassicLoadingThemePlatformData &&
        !isLoadingCoursesClassicTheme &&
        platformThemeUserWebsiteData &&
        platformThemeData &&
        platformThemeData.platform_expire == true &&
        platformThemeData.is_platform_published == "Published" ? (
        <>
          <Helmet>
            <body style={{ display: "block" }} />
          </Helmet>
          <h2>Your Platform has been expired. Kindly upgrade</h2>
        </>
      ) : !ClassicLoadingThemePlatformData &&
        !isLoadingCoursesClassicTheme &&
        platformThemeUserWebsiteData &&
        platformThemeData &&
        !isPrimaryOwnerOrPlublish ? (
        <>
          <Helmet>
            <body style={{ display: "block" }} />
          </Helmet>
          <h2>Your Platform has not been published.</h2>
        </>
      ) : null}
    </>
  );
};

export { UserWebsite };
