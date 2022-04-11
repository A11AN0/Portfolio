import React, { useEffect } from "react";
import "./TechStack.scss";
import gsap from "gsap";
import techStackData from "../../../data/techstack";
import TechStackIcon from "../../../components/TechStackIcon";

type AppProps = {
  isNavExtended: boolean;
};

const TechStack = ({ isNavExtended }: AppProps) => {
  //Page width upon nav extension
  useEffect(() => {
    isNavExtended
      ? gsap.to(".tech-stack", { marginLeft: "16rem", duration: 0.5 })
      : gsap.to(".tech-stack", { marginLeft: "0", duration: 0.5 });
  }, [isNavExtended]);

  //Procedure to generate techStack
  const generateTechStack = () => {
    return techStackData.map((tech) => (
      <TechStackIcon
        icon={tech.icon}
        techName={tech.techName}
        color={tech.color}
      />
    ));
  };

  return (
    <div className="tech-stack">
      <div className="tech-stack__top"></div>
      <div className="tech-stack__title">& My Tech Stack</div>
      <div className="tech-stack__items">        
        {generateTechStack()}
      </div>
    </div>
  );
};

export default TechStack;
