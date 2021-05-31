import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import { homeObjTwo } from "../components/InfoSection/Data";
import {homeObjThree} from "../components/InfoSection/Data";
import Contact from "../components/InfoSection/Contact"
import Education from "../components/Education";
import {animateScroll as scroll} from 'react-scroll'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleHome = ()=>{
    scroll.scrollToTop();
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} toggleHome={toggleHome} />
      <Navbar toggle={toggle} homeNav={true} />
      <HeroSection />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
      <Education></Education>
      
      
      <Contact {...homeObjThree}/>
    </>
  );
};

export default Home;
