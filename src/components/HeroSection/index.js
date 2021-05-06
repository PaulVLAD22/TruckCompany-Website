import React from "react";
import Video from "../../videos/video1.mp4";
import Image from "../../images/fmargini.png"
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
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        Crystal Logistics Services<img src={Image} style={{maxWidth:"5%"}}/>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
