import React from "react";
import Video from "../../images/truck1.jpg";
import Image from "../../images/logo.png";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="Home">
      <HeroContent>
        <img
          style={{ position: "relative", maxWidth: "80%", marginTop: "200px" }}
          src={Image}
          className="companyLogo"
        />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
