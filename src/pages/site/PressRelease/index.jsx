import React from "react";
import { PublicTemplate } from "../../../components";
import { CDN_URL } from "../../../constants";
const PressRelease = () => {
  return (
    <div>
      <PublicTemplate pageTitle="Press Release - Vonza ">
        <section id="privacy-policy-main" className="pt-140">
          <div className="container">
            <div className="pricing-header">
              <h2>Press Release</h2>
            </div>
          </div>
        </section>

        <main id="main" className="main main-about">
          <div className="privacy-info-section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <strong>
                      {" "}
                      Vonza, with a $5 Million valuation launches the ultimate
                      all-in-one business platform for creatives and
                      entrepreneurs
                    </strong>
                  </p>
                  <p className="text">
                    Atlanta, GA, (February 2020) – Vonza is launching the
                    ultimate platform to build online courses, sell products,
                    construct sales funnels and develop amazing websites. Vonza
                    makes it seamless for entrepreneurs and creatives to run a
                    successful online business all in one place, not all over
                    the place! While saving them time, money and tech
                    frustrations.
                  </p>
                  <p className="text">
                    “Before Vonza was created, companies and entrepreneurs were
                    overwhelmed, wasting thousands of dollars, using various
                    tools and multiple software subscriptions to juggle their
                    online business, at the same time dealing with annoying tech
                    people, instead of serving their customers and enjoying the
                    freedom of entrepreneurship,” said Uyi Abraham, an African
                    immigrant who founded Vonza in February 2019.
                  </p>
                  <p className="text">
                    He realized that many other online entrepreneurs share the
                    same frustrations, and he set out to create the solution.
                    Vonza is the solution. You don’t need annoying programmers
                    and plugins. You don’t need to write any code. You don’t
                    need to remember 20 different passwords. And you also get to
                    save money at the same time.
                  </p>
                  <p className="text">
                    This new funding will help Vonza to further capitalize on
                    its position as an emerging leader and category king of the
                    all in one business platform.
                  </p>
                  <p className="text">
                    The company is headquartered in the Alpharetta Georgia, and
                    on Friday February 14th 2020, Vonza will come out of beta,
                    be open for customers, and anyone can launch their online
                    courses and website on it for free.
                  </p>
                  <p style={{ textAlign: "center" }}>
                    <img
                      style={{ borderRadius: "10px" }}
                      src={`${CDN_URL}/assets/press.jpg`}
                      alt="Vonza Press"
                    />
                  </p>
                  <p>
                    <strong> About VONZA</strong>
                  </p>
                  <p className="text">
                    Vonza is the ultimate platform to build online courses, sell
                    products, offer services, construct sales funnels, schedule
                    appointments, launch email marketing campaigns and develop
                    amazing websites. For further information and enquiries,
                    please visit http://www.vonza.com.
                  </p>
                  <p>
                    <strong> Contact</strong>
                  </p>
                  <p className="text">
                    Media Contact: Michael Frye
                    <br />
                    Phone no: +1 (888) 640 2951
                    <br />
                    Email: info@vonza.om
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </PublicTemplate>
    </div>
  );
};

export { PressRelease };
