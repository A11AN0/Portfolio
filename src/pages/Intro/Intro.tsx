import React, {useEffect, useRef} from 'react';
import './Intro.scss';
import gsap from "gsap";

const Intro = () => {

  const title:any = useRef();

  useEffect(() => {
    gsap.from(title.current, { y: '200px',opacity: 0, duration: 2.5});
  });

  return (
    <div className="intro" id="allan">
        <h1 className="intro__title" ref={title}>
            Hello, I'm Allan.
        </h1>
    </div>
  )
}

export default Intro;
