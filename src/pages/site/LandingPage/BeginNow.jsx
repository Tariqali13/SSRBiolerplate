import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendingEmail } from "../../../store/actions";
import { Link } from "react-router-dom";

function BeginNow() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const emailSent = e => {
    e.preventDefault();
    dispatch(sendingEmail(email));
  };
  return (
    <section className="generate-profit-form">
      <div className="container">
        <span className="r-ready">Are you ready?</span>
        <h2>
          Begin now and Vonza your business <br />
        </h2>
        <div className="portable-form">
          <form className="form" onSubmit={emailSent}>
            <div className="form-group overlay-btn">
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                className="form-control input-rounded"
                id="email"
                name="email"
                placeholder="Enter your email"
                required=""
              />
              <Link
                to={{
                  pathname: "/signup",
                  state: { email: email ? email : "" }
                }}
              >
                <button type="submit" className="btn btn-rounded-custom">
                  Sign Up Free
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BeginNow;
