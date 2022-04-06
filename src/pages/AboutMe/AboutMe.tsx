import React, {useEffect} from 'react';
import './AboutMe.scss';
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


type AppProps = {
  isNavExtended: boolean;
}

const AboutMe = ({isNavExtended}:AppProps) => {
  
  useEffect(() => {
    isNavExtended? 
    gsap.to(".about-me__title", { marginLeft: '16rem', duration: 0.5})
    :
    gsap.to(".about-me__title", { marginLeft: '0', duration: 0.5})
    
  }, [isNavExtended]);


  return (
    <section className="about-me" id="about">
        <div className="about-me__title">
          <FontAwesomeIcon icon={faChevronLeft} className="about-me__title__arrow"/>
            About Me.
          <FontAwesomeIcon icon={faChevronRight} className="about-me__title__arrow"/>
        </div> 
        
        
    </section>
  );
};

export default AboutMe;
