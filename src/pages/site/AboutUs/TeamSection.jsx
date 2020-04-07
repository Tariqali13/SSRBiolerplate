import React from "react";
import { TeamBox } from "../../../components";

const TeamSection = () => {
  return (
    <div className="container">
      <div className="team-section">
        <div className="header">
          <h3 className="section-heading">Our Team</h3>
        </div>
        <div className="row">
          <TeamBox box="box-1" />
          <TeamBox box="box-2" />
          <TeamBox box="box-3" />
          <TeamBox box="box-13" />
          <TeamBox box="box-4" />
          <TeamBox box="box-5" />
          <TeamBox box="box-6" />
          <TeamBox box="box-14" />
          <TeamBox box="box-8" />
          <TeamBox box="box-9" />
          <TeamBox box="box-10" />
          <TeamBox box="box-11" />
          <TeamBox box="box-12" />
          <TeamBox box="box-15" />
          <TeamBox box="box-16" />
          <TeamBox box="box-7" />
        </div>
        <div className="text-center">
          <a href="/signup" className="btn btn-primary radius">
            Start creating
          </a>
        </div>
      </div>
    </div>
  );
};

export { TeamSection };
