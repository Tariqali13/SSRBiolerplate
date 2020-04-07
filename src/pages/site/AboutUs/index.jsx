import React, { useEffect } from "react";
import { PublicTemplate } from "../../../components";
import {
  HeroAbout,
  InfoSection,
  TeamSection,
  CoreAbout
} from "./AllAboutSections";
const AboutUs = props => {
  return (
    <PublicTemplate
      pageTitle="Vonza - Your Online Business All In One Place"
      pageDescription="All-in-one online business platform to build ecommerce stores, educational platforms, business websites, etc. Maximize profit with email marketing, event management, sales funnel strategies, live webinars and memberships"
      pageKeywords="online business tools, online business development, online business platform, educational platforms, sales funnel management, event management, live webinar platforms, email marketing campaign, appointment management, build online business, grow online business, digital marketing company, ecommerce stores, ecommerce website, custom web development, web design"
    >
      <HeroAbout />
      <main id="main" className="main main-about">
        <InfoSection />
        <CoreAbout />
        <TeamSection />
      </main>
    </PublicTemplate>
  );
};
export { AboutUs };
