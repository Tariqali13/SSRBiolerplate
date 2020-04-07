import React from "react";
import { Steps } from "../../../components";

function GetStarted() {
  return (
    <section className="get-start-steps">
      <div className="container">
        <h2>Get started with Vonza in 4 easy steps</h2>
        <div className="row">
          <Steps
            heading="Create your "
            strong="Platform"
            img="get-start-step-1.png"
          />
          <Steps
            heading=" Upload your"
            strong="Content"
            img="get-start-step-2.png"
          />
          <Steps
            heading="Make your"
            strong="Website Beautiful"
            img="get-start-step-3.png"
          />
          <Steps
            heading="Engage your Audience"
            conjunction="and"
            strong="Get Paid"
            img="get-start-step-4.png"
          />
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
