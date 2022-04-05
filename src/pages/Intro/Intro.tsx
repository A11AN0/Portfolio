import React, {useEffect, useRef} from 'react';
import './Intro.scss';
import gsap from "gsap";

const Intro = (props:any) => {

  const {isNavExtended} = props;

  const title:any = useRef();

  //The rising animation for the title
  useEffect(() => {
    gsap.from(title.current, { y: '250px',opacity: 0, duration: 3, color: 'black'});
  }, []);
  
  //Animates the transition of the title when the navbar is extended
  useEffect(() => {
    isNavExtended? 
    gsap.to(title.current, { marginLeft: '16rem', duration: 0.5})
    :
    gsap.to(title.current, { marginLeft: '0', duration: 0.5})
    
  }, [isNavExtended]);

  return (  
    <div className= "intro" id="allan">
        <div className="intro__title" ref={title}>
          <p>Hello, I'm Allan.</p>
        </div>
    </div>
  )
}

export default Intro;
