import React from "react";

const ContactSection = () => {
  return (
    <div className="container">
      <div className="row contacts-row">
        <div className="col-md-3 col-12">
          <div className="box">
            <div className="img"></div>
            <div className="body">
              <strong>Email Address</strong>
              <span>info@vonza.com</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <div className="box">
            <div className="img"></div>
            <div className="body">
              <strong>Phone Number</strong>
              <span>888-640-2951</span>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <div className="box">
            <div className="img"></div>
            <div className="body">
              <strong>Address</strong>
              <span>12600 Deerfield Pkwy Suite 100, Alpharetta, GA 30004</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactSection };
