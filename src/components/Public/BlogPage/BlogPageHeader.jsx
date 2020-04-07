import React from "react";
import { BlogPageTabs } from "../../../components";
import { Link } from "react-router-dom";
const BlogPageHeader = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <>
      <section
        id="hero-block"
        className="hero-features"
        style={{
          backgroundImage: "url('../../images/Blog.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top"
        }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 offset-lg-2 my-auto">
              <div className="starting-widgetfeature">
                <h2 className="blog-H">Free Business Lessons</h2>
                <p className="blog-P">
                  Get the knowledge and inspiration you need to build a
                  profitable business platform – straight to your inbox.
                </p>
                <div className="portable-form">
                  <form className="form" method="post" action="#">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <img src="../../images/icon-person.svg" alt="email" />
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        onChange={e => setName(e.target.value)}
                        aria-label="Text input with checkbox"
                      />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <img src="../../images/icon-email.svg" alt="email" />
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="form-control"
                        onChange={e => setEmail(e.target.value)}
                        aria-label="Text input with checkbox"
                      />
                    </div>
                    <Link
                      to={{
                        pathname: "/signup",
                        state: {
                          email: email ? email : "",
                          name: name ? name : ""
                        }
                      }}
                    >
                      <button type="submit" className="btn btn-rounded-custom">
                        Get Started
                      </button>
                    </Link>
                  </form>
                </div>

                <span className="note">No charge. Unsubscribe anytime.</span>
              </div>
            </div>
            <div className="col-md-6 my-auto"></div>
          </div>
        </div>
      </section>
      <div className="feature-tabs-container blog-tabs">
        <div className="container">
          <BlogPageTabs />
        </div>
      </div>
    </>
  );
};

export { BlogPageHeader };
