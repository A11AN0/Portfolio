import React, {useEffect} from 'react';
import './Skills.scss';
import gsap from "gsap";



type AppProps = {
  isNavExtended: boolean;
}

const Skills = ({isNavExtended}:AppProps) => {

  //Page width upon nav extension
  useEffect(() => {
    isNavExtended
      ? gsap.to(".skills", { marginLeft: "16rem", duration: 0.5 })
      : gsap.to(".skills", { marginLeft: "0", duration: 0.5 });
  }, [isNavExtended]);


  return (
    <div className="skills">
      <div className="skills__top"></div>
      <div className="skills__title">& My Skills</div>
    </div>
  );
};

export default Skills;
