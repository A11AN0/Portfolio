import React, { SyntheticEvent, useEffect, useRef } from "react";
import "./AboutMe.scss";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Description from "./Description/Description";
import TechStack from "./TechStack/TechStack";
import Skills from "./Skills/Skills";

type AppProps = {
    isNavExtended: boolean;
};

const generateBlank = "  ";
const AboutMe = ({ isNavExtended }: AppProps) => {
    //Procedure to animate the arrow
    const animateArrow = () => {
        const arrowAnimationTimeline = gsap.timeline();
        arrowAnimationTimeline.to(".about-me__arrow-down__svg", {
            y: "20%",
            duration: 3,
        });
        arrowAnimationTimeline.repeat(-1).yoyo(true).play();
    };

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
        animateArrow();
    }, []);

    //Behavior of bottom arrow/prompt on hover, could definitely use some refactoring!
    const handlePrompt = (event: SyntheticEvent) => {
        const timeline = gsap.timeline();
        const action = event.type;
        if (!(action === "mouseenter" || action === "mouseleave")) return;

        if (event.type === "mouseenter") {
            timeline.to(".about-me__arrow-down__svg", {
                opacity: 0,
                display: "none",
                duration: 0.15,
            });
            timeline.to(".about-me__arrow-down__svg", {
                display: "none",
                duration: "instant",
            });
            timeline.to(".about-me__arrow-down__prompt", {
                display: "initial",
                duration: "instant",
            });
            timeline.to(".about-me__arrow-down__prompt", {
                opacity: 0.4,
                duration: 0.2,
            });
        } else {
            timeline.to(".about-me__arrow-down__prompt", {
                opacity: 0,
                duration: 0.1,
            });
            timeline.to(".about-me__arrow-down__prompt", {
                display: "none",
                duration: "instant",
            });
            timeline.to(".about-me__arrow-down__svg", {
                display: "initial",
                duration: "instant",
            });
            timeline.to(".about-me__arrow-down__svg", {
                opacity: 0.2,
                duration: 0.2,
            });
        }
    };

    const arrowDisplay = isNavExtended ? "none" : "initial";
    const promptDisplay = isNavExtended ? "hidden" : "visible";

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
                <FontAwesomeIcon
                    onMouseEnter={handlePrompt}
                    icon={faChevronDown}
                    className="about-me__arrow-down__svg"
                    style={{ display: arrowDisplay }}
                />
                <p
                    className="about-me__arrow-down__prompt"
                    style={{ visibility: promptDisplay }}
                    onMouseLeave={handlePrompt}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                    {generateBlank}
                    Check out my projects
                    {generateBlank}
                    <FontAwesomeIcon icon={faChevronDown} />
                </p>
            </footer>
        </section>
    );
};

export default AboutMe;
