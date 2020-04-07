import React, { useEffect } from "react";
import { PublicTemplate } from "../../../components";
import {
  HeroContactSection,
  ContactSection,
  ContactForm
} from "./AllContactSections";
const ContactUs = props => {
  return (
    <PublicTemplate
      pageTitle="Find online business platform experts"
      pageDescription="Search for digital marketing services, online course builder, 24/7 chat support services, web developer, email marketing experts, ecommerce developers and online business professionals in one place"
      pageKeywords="customer services, find digital markets, locate web developers, search online course developer, ecommerce store builder, online business manager, meet sales experts, contact business manager, analytics experts"
    >
      <HeroContactSection />
      <ContactSection />
      <ContactForm />
    </PublicTemplate>
  );
};

export { ContactUs };
