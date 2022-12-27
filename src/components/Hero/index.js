import React, { useState } from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./Hero";

const Hero = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Desserts Ever</HeroH1>
          <HeroP>Made fresh and one with Nature</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
