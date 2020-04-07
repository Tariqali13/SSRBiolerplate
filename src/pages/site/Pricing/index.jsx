import React, { useEffect } from "react";
import PricingMainSection from "./PricingMainSection";
import { PublicTemplate } from "../../../components";

const Pricing = () => {
  return (
    <div>
      <PublicTemplate
        pageTitle="Pricing plans for online business platforms"
        pageDescription="Flexible pricing plans catering to small and large businesses. Vonza offers Feature-based packages with unlimited customers, instant payout, 24/7 chat support, access to Vonza Academy and third-party integrations"
        pageKeywords="basic pricing plan for online business, pro pricing plan for online business, premium pricing plan for online business, online business services subscription, teachable pricing, thinkific pricing model, payment methods for online business services, digital marketing price plans, web development price plans, ecommerce website pricing plans, online business platform pricing plans, education platform pricing plans, email marketing pricing plans"
      >
        <PricingMainSection />
      </PublicTemplate>
    </div>
  );
};

export { Pricing };
