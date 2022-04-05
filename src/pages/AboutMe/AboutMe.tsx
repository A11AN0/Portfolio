import React from 'react'
import './AboutMe.scss'

const AboutMe = (props:any) => {
  return (
    <section className="about-me" id="about">
        <h1 className="about-me__title">
            About Me.
        </h1>
        <div className="about-me__h-container">
          <div className="about-me__h-container__description">
            <div className="about-me__h-container__description__text">
            I'm an Australian trainee developer undertaking a self-funded software development program with _Nology. 
            Highly driven, adaptable, personable, team-oriented  and experienced in React, 
            Javascript, node.js and HTML5 among various other essential elements of software design (eventually lol). I will go above and beyond 
            to deliver a polished and functional product for customer and corporation alike .
            </div>
          </div>
          <div className="about-me__h-container__tech-stack">
            <div className="about-me__h-container__tech-stack__box">
              <h4 className="about-me__h-container__tech-stack__box__title">& My Tech Stack</h4>
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
              <div>hi</div>
            </div>
          </div>
        </div>  
      </section>
  )
}

export default AboutMe
