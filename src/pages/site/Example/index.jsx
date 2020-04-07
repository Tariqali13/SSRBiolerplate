import React, { useEffect } from "react";
import { PublicTemplate } from "../../../components";
import { HeroExample, ExampleSection } from "./AllExampleSections";
const Example = () => {
  return (
    <div>
      <PublicTemplate 
       pageTitle="Subscribe to receive free online business lessons "
       pageDescription="Vonza gives you the chance to expand your knowledge about online business development and grow your target audience through specialized educational resources created by our experts"
       pageKeywords="free business development lessons, business development skills training, business development course, business development activities, business development training topics, learn business development, business development tips, free business development coaching, business development course subscription"
      >
        <HeroExample />
        <ExampleSection />
      </PublicTemplate>
    </div>
  );
};

export { Example };
