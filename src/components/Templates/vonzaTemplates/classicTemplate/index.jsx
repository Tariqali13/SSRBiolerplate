import React, { useEffect, useState } from "react";
import ClassicTemplateFooter from "./classicTemplateFooter";
import ClassicTemplateHeader from "./classicTemplateHeader";
import { Helmet } from "react-helmet";
import { history } from "../../../index";
import { useDispatch, useSelector } from "react-redux";
const ClassicTemplate = ({
   children,
   pageTitle,
   menus,
   images,
   platFormname,
   handleClassicThemePlatformUserWebsiteWithPageId
 }) => {

  const dispatch = useDispatch();

  const origin = window.location.origin;
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
        }>
        <link
          rel="stylesheet"
          type="text/css"
          href={`${origin}/css/vonzaTemplates/classicTemplate/main.css`}
        />
        <title>{pageTitle}</title>
        <link
          rel="icon"
          href={images && images.favicon && images.favicon.url}
          type={images && images.favicon && images.favicon.file_type}
          sizes="16x16"
        />
      </Helmet>
      <ClassicTemplateHeader
        menus={menus}
        images={images}
        platFormname={platFormname}
        handleClassicThemePlatformUserWebsiteWithPageId={
          handleClassicThemePlatformUserWebsiteWithPageId
        }
      />
      <main className="main-content">
        {children}
        <ClassicTemplateFooter menus={menus} platFormname={platFormname} />
      </main>
    </>
  );
};

export { ClassicTemplate };
