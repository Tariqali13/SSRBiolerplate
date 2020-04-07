import React, { useEffect } from "react";
import { PublicTemplate } from "../../../components";
import {
  HeroFeatures,
  TabsSection,
  Features,
  Customization,
  LearningAcademy,
  Marketing,
  Integration,
  ProfitForm,
  Analytics,
  HostingSecurity,
  ProfitForm2
} from "./AllSections";
const Feature = () => {
  return (
    <PublicTemplate
      pageTitle="Dynamic features to bring your business platform to life"
      pageDescription="Diverse features for advanced customization. Launch a website and grow with robust marketing strategies. Start your ecommerce business or provide online courses. Manage appointments, events and live webinars"
      pageKeywords="ecommerce platforms, online courses websites, clickfunnels features, digital marketing company, custom web development, live webinar platforms, online appointment scheduling, event management, responsive web design, e-learning platforms"

    >
      <HeroFeatures />
      <TabsSection />
      <main id="main" className="features-main">
        <Features />
        <Customization />
        <LearningAcademy />
        <Marketing />
        <Integration />
        <ProfitForm />
        <Analytics />
        <HostingSecurity />
        <ProfitForm2 />
      </main>
    </PublicTemplate>
  );
};

export { Feature };
