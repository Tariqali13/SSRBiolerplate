import React from "react";

const TeamBox = ({ box }) => {
  return (
    <div className="col-md-3 col-sm-12">
      <div className={`team-box ${box}`}></div>
    </div>
  );
};
export { TeamBox };
