import React from "react";
import Video from "../../images/truck1.jpg";
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
        <VideoBg src={Video}  />
      </HeroBg>
      <HeroContent>
        Firma de Transport<br></br> 
        Crystal Logistics Services<img style={{maxWidth:"15%"}} src={Image} className="companyLogo"/>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
