import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendingEmail } from "../../../store/actions";

const ProfitForm2 = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="generate-profit-form generate-profit-form-2">
        <div className="container">
          <span className="r-ready">What are you waiting for?</span>
          <h2>Your new customers are waiting for you</h2>
          <div className="portable-form">
            <form className="form">
              <div className="form-group overlay-btn">
                <input
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className="form-control input-rounded"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <Link
                  to={{
                    pathname: "/signup",
                    state: { email: email ? email : "" }
                  }}
                >
                  <button type="submit" className="btn btn-rounded-custom">
                    Get Started
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="generate-profit-form">
        <div className="container">
          <p className="r-ready">
            * Disclaimers Note: This feature is currently in development. It is
            set to release on or before 04/2020. Subscribe at current rates to
            secure pricing as increase in pricing may occur upon release.
          </p>
        </div>
      </section>
    </>
  );
};
export { ProfitForm2 };
