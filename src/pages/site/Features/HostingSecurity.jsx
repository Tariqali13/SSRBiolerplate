import React from "react";
import { Cards } from "../../../components";

const HostingSecurity = () => {
  return (
    <section id="sec-hosting" className="sec sec-hosting">
      <div className="sec-header">
        <h2>HOSTING & SECURITY</h2>
        <p>Our #1 priority is keeping your content and data safe</p>
      </div>
      <div className="container">
        <div className="row">
          <Cards
            img="features/icon-4.png"
            heading="Seamless Hosting"
            para="Vonza hosts your website content for you and backs up your site and user data so you don’t have to worry about it."
          />

          <Cards
            img="features/icon-5.png"
            heading="Data Ownership"
            para="Own and control all of the content and user data on your Vonza platform."
          />

          <Cards
            img="features/icon-6.png"
            heading="Single Login"
            para="One login and password gives you access to all your business tools."
          />

          <Cards
            img="features/icon-7.png"
            heading="Instant Upgrades"
            para="All updates are automatic, so you always have access to the latest features."
          />

          <Cards
            img="features/icon-8.png"
            heading="SSL Certificate"
            para="Build trust with your audience using Vonza’s built-in SSL certificates."
          />

          <Cards
            img="features/icon-9.png"
            heading="Secured Payment Data"
            para="Your user’s data is safe and secure. Payments and data on our platform are 100% secure."
          />
        </div>
      </div>
    </section>
  );
};
export { HostingSecurity };
