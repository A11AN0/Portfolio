import React, {useEffect} from 'react';
import './Description.scss';
import gsap from "gsap";



type AppProps = {
  isNavExtended: boolean;
}

const Description = ({isNavExtended}:AppProps) => {

    useEffect(() => {
        isNavExtended? 
        gsap.to(".description", { marginLeft: '16rem', duration: 0.5})
        :
        gsap.to(".description", { marginLeft: '0', duration: 0.5})
        
      }, [isNavExtended]);


  return (
    <div className="description">
        <div className="description__top"></div>
        <div className="description__text">
            <p className="description__text__paragraph">
                I'm Allan Odunga, an Australian junior full-stack developer with a passion for creating beautiful, intuitive, and responsive user 
                experiences, while meeting the functional demands of an application on the serverside.
                <br /> <br /> 
                Highly driven, adaptable, personable and team-oriented. I strive 
                to deliver a polished product for customer and corporation alike.
            </p>
        </div>
    </div>
  );
};

export default Description;
