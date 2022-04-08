import React, {useEffect, useRef} from 'react';
import './AboutMe.scss';
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import Description from './Description/Description';


type AppProps = {
  isNavExtended: boolean;
}

const AboutMe = ({isNavExtended}:AppProps) => {
  
  //Behavior of the title when nav is extended
  useEffect(() => {
    isNavExtended? 
    gsap.to(".about-me__title", { marginLeft: '16rem', duration: 0.5})
    :
    gsap.to(".about-me__title", { marginLeft: '0', duration: 0.5})
    
  }, [isNavExtended]);

  //So that the container will scroll to the center div upon mounting
  const scrollContainer:any = useRef();
  useEffect(() => {
    scrollContainer.current.scrollTo(window.innerWidth, 0);
  }, []);


  return (
    <section className="about-me" id="about">
        <div className="about-me__title">
          <FontAwesomeIcon icon={faChevronLeft} className="about-me__title__arrow"/>
            About Me.
          <FontAwesomeIcon icon={faChevronRight} className="about-me__title__arrow"/>
        </div>

        <div className="about-me__contents" ref={scrollContainer}>
          <div className="about-me__contents__carousel">
            <div className="about-me__contents__carousel__page about-me__contents__carousel__page--skills"></div>
            <div className="about-me__contents__carousel__page about-me__contents__carousel__page--description"><Description isNavExtended={isNavExtended}/></div>
            <div className="about-me__contents__carousel__page about-me__contents__carousel__page--techstack"></div>
          </div>
        </div>  
        
        
    </section>
  );
};

export default AboutMe;
