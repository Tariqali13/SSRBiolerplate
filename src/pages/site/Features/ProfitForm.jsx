import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ListItems } from "../../../components";

const ProfitForm = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="generate-profit-form">
      <div className="container">
        <span className="r-ready">What are you waiting for?</span>
        <h2>
          Join thousands of entrepreneurs making a difference <br />
          every day using Vonza
        </h2>
        <div className="portable-form">
          <form className="form" method="post" action="#">
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
  );
};
export { ProfitForm };
