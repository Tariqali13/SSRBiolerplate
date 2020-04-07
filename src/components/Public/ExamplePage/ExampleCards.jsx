import React from "react";

const ExampleCards = ({ heading, boxName }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className={`example-box ${boxName}`}>
        <div className="title">
          <strong>{heading}</strong>
        </div>
      </div>
    </div>
  );
};
export { ExampleCards };
