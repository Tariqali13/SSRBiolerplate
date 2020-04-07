import React from "react";
import { EnterpriseCards } from "../../../components";
import { CDN_URL } from "../../../constants";
const EnterpriseSection = () => {
  return (
    <main id="main" className="main section-enterprise">
      <div className="container">
        <div className="section-more">
          <div className="text-left mb-50">
            <h4 className="heading">Why Vonza?</h4>
            <strong className="sub-heading">
              Scalable Online Business Platform For Any Industry
            </strong>
            <p className="desc">
              Vonza Enterprise solutions allow you to fully customize the
              features that you need:
            </p>
          </div>
          <div className="row d-flex justify-content-between mb-15">
            <EnterpriseCards
              heading="Personalized Solutions"
              width="26"
              img="enterprise/gear.svg"
            />
            <EnterpriseCards
              heading="Unlimited Admins"
              width="25"
              img="enterprise/person.svg"
            />
            <EnterpriseCards
              heading="Custom Domain"
              width="26"
              img="enterprise/card.svg"
            />
            <EnterpriseCards
              heading="Fully Hosted Courses"
              width="19"
              img="enterprise/db.svg"
            />
            <EnterpriseCards
              heading="Track Analytics"
              width="26"
              img="enterprise/intel.svg"
            />
          </div>
          <div className="row d-flex justify-content-between mb-15">
            <EnterpriseCards
              heading="0% Transaction Fees"
              width="26"
              img="enterprise/no-fee.svg"
            />
            <EnterpriseCards
              heading="Priority Support"
              width="26"
              img="enterprise/support.svg"
            />
            <EnterpriseCards
              heading="All-In-One Platform"
              width="26"
              img="enterprise/aio.svg"
            />
            <EnterpriseCards
              heading="User Management"
              width="25"
              img="enterprise/um.svg"
            />
            <EnterpriseCards
              heading="24/7 Phone/Chat Support"
              width="26"
              img="enterprise/24-7.svg"
            />
          </div>
          <div className="row d-flex justify-content-between mb-15">
            <EnterpriseCards
              heading="Dedicated Account Manager"
              width="26"
              img="enterprise/account-mng.svg"
            />
            <EnterpriseCards
              heading="Enterprise Features"
              width="29"
              img="enterprise/enterprise.svg"
            />
            <EnterpriseCards />
            <EnterpriseCards />
            <EnterpriseCards />
          </div>
        </div>
        <img
          className="img-more"
          src={`${CDN_URL}/assets/enterprise/more.png`}
          alt="more"
        />
      </div>
    </main>
  );
};

export { EnterpriseSection };
