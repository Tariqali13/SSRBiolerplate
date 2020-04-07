import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
import Features from './Features.jsx';

const LoadablePublicTemplate = Loadable({
  loader: () => import('../../../components/Templates/public/index.jsx'),
  loading: () => <div>Loading...</div>
});
const LoadableAboutSection = Loadable({
  loader: () => import('./AboutSection.jsx'),
  loading: () => <div>Loading...</div>
});
const LoadableHeroSection = Loadable({
  loader: () => import('./HeroSection.jsx'),
  loading: () => <div>Loading...</div>
});

// import { PublicTemplate } from '../../../components';
// import HeroSection from './HeroSection';
// import AboutSection from './AboutSection';
// import TopExperiecneSection from './TopExperiecneSection';
// import GetStarted from './GetStarted';
// import ChooseBusiness from './ChooseBusiness';
// import QuickSetup from './QuickSetup';
// import Testimonials from './Testimonials';
// import Creators from './Creators';
// import OnlineSupport from './OnlineSupport';
// import BeginNow from './BeginNow';

const LandingPage = () => {
  return (
    <div id="wrapper" role="main">
      <LoadablePublicTemplate
        pageTitle="Vonza - Your Online Business All In One Place"
        pageDescription="The ultimate platform to build online courses, sell products, offer services, construct sales funnels, schedule appointments, launch email marketing campaigns and develop amazing websites."
        pageKeywords="web development, online course platform, all in one course platform, kajabi competitor, web design, email marketing services, ecommerce website, ecommerce platform, online course development, multimedia learning platforms, educational platforms, digital marketing for business"
      >
        <LoadableHeroSection />
        <LoadableAboutSection />
        {/* <Features /> */}
        {/*  
        <TopExperiecneSection />
        <GetStarted />
        <ChooseBusiness />
        <QuickSetup />
        <Testimonials />
        <Creators />
        <OnlineSupport />
        <BeginNow /> */}
      </LoadablePublicTemplate>
    </div>
  );
};

export default LandingPage;
