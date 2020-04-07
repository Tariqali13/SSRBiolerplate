import React from 'react';
import Loadable from 'react-loadable';

const LoadableCard = Loadable({
  loader: () => import('../../../components/Public/Commons/Cards.jsx'),
  loading: () => <div>Loading...</div>
});

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Start Now</h2>
          <p>Grow your online business in an innovate way</p>
        </div>
        <div className="row">
          <LoadableCard
            img="feature-2.png"
            heading="Online Courses"
            para="Create engaging courses. Add video, image, text, audio and PDF files. Easily import your content from other platforms."
          />
          <LoadableCard
            img="feature-1.png"
            heading="Branded Website"
            para="Use your own domain name. Build and design a beautiful website and membership pages with blog. Hosting Included."
          />
          <LoadableCard
            img="feature-3.png"
            heading="Sell Products*"
            para="With Vonza you can sell more than courses. You can market and sell your physical and digital products and services."
          />
          <LoadableCard
            img="feature-6.png"
            heading="Email Marketing*"
            para=" Stay in touch with your audience by sending interactive and animated email broadcasts."
          />
          <LoadableCard
            img="feature-7.png"
            heading="Sales Funnel*"
            para="Convert your website visitors into leads and quickly grow your audience into paying customers."
          />
          <LoadableCard
            img="calendar.png"
            heading="University Management*"
            para="Vonza offers schools and university solution to help you manage higher education degrees, student information, staff, professors, schedules, admissions, transcript, curriculum, reporting and finance, smoothly."
          />
        </div>
        <a href="/features" className="btn-orange-r-25">
          See All Features
        </a>
      </div>
    </section>
  );
}

export default Features;
