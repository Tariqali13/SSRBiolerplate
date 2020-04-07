import React from "react";
import { HeroSection2 } from "../../../components";

const HeroAbout = () => {
  return (
    <section id="hero-block" className="hero-about">
      <HeroSection2
        heading="About Us"
        para="Vonza"
        img="about/swosh-1.png"
        img2="about/swosh-2.png"
        imgClass="about-swosh-1"
        imgClass2="about-swosh-2"
        strongPara="All The Tools You Need To Grow Your Online Business All In One Place"
      />
    </section>
  );
};

export { HeroAbout };
