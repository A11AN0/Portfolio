import React, { useEffect, useRef } from "react";
import "./AboutMe.scss";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Description from "./Description/Description";
import TechStack from "./TechStack/TechStack";
import Skills from "./Skills/Skills";

type AppProps = {
    isNavExtended: boolean;
};

const AboutMe = ({ isNavExtended }: AppProps) => {
    //Behavior of the title when nav is extended
    useEffect(() => {
        isNavExtended
            ? gsap.to(".about-me__shiftingElement", {
                  marginLeft: "16rem",
                  duration: 0.5,
              })
            : gsap.to(".about-me__shiftingElement", {
                  marginLeft: "0",
                  duration: 0.5,
              });
    }, [isNavExtended]);

    //So that the container will scroll to the center div upon mounting
    const scrollContainer: any = useRef();
    useEffect(() => {
        scrollContainer.current.scrollTo(window.innerWidth, 0);
    }, []);

    return (
        <section className="about-me" id="about">
            <div className="about-me__title about-me__shiftingElement ">
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="about-me__title__arrow"
                    style={{ display: isNavExtended ? "none" : "initial" }}
                />
                About Me.
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="about-me__title__arrow"
                    style={{ display: isNavExtended ? "none" : "initial" }}
                />
            </div>

            <div className="about-me__contents" ref={scrollContainer}>
                <div className="about-me__contents__carousel">
                    <div className="about-me__contents__carousel__page about-me__contents__carousel__page--skills">
                        <Skills isNavExtended={isNavExtended} />
                    </div>
                    <div className="about-me__contents__carousel__page about-me__contents__carousel__page--description">
                        <Description isNavExtended={isNavExtended} />
                    </div>
                    <div className="about-me__contents__carousel__page about-me__contents__carousel__page--techstack">
                        <TechStack isNavExtended={isNavExtended} />
                    </div>
                </div>
            </div>
            <footer className="about-me__arrow-down about-me__shiftingElement">
                {" "}
                this is the arrow
            </footer>
        </section>
    );
};

export default AboutMe;
