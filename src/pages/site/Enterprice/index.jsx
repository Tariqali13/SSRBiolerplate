import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { PublicTemplate } from "../../../components";
import { HeroEnterprise, EnterpriseSection } from "./AllEnterpriseSections";
import {ContactForm} from "../ContactUs/ContactForm"
const Enterprice = props => {
  return (
    <div>
      <PublicTemplate
        pageTitle="Effective enterprise solutions for high profits"
        pageDescription="Avail a variety of enterprise services to construct your enterprise or boost your customer satisfaction. We offer personalized solutions, custom domains, analytics tracker, 24/7 chat support and more"
        pageKeywords="enterprise features, dedicated account manager, user management, all-in-one business platform, online business platform, analytics tracker, custom domain, enterprise customer service, enterprise management system, enterprise management tool, online business management"
      >
        <HeroEnterprise />
        <EnterpriseSection />
        <ContactForm/>
      </PublicTemplate>
    </div>
  );
};

export { Enterprice };
