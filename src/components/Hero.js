import React from "react";
import { heroItems } from "../utilities/constants";
import HeroComponent from "./HeroComponent";

const Hero = () => {
  return (
    <>
      <HeroComponent
        title={heroItems[0].title}
        info={heroItems[0].text}
        btn={false}
        list={heroItems[0].listItems}
        img={heroItems[0].img}
        reverse={false}
      />
      <HeroComponent
        title={heroItems[1].title}
        info={heroItems[1].text}
        btn={true}
        btnText="Get Started"
        to="/shipwithus"
        reverse={true}
        img={heroItems[1].img}
      />
      <HeroComponent
        title={heroItems[2].title}
        info={heroItems[2].text}
        btn={true}
        reverse={false}
        img={heroItems[2].img}
      />
    </>
  );
};

export default Hero;
