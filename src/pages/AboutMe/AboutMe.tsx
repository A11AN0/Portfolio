import React, { useEffect, useRef, useState } from "react";
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
import FooterPrompt from "../../components/FooterPrompt/FooterPrompt";

type AppProps = {
    isNavExtended: boolean;
};

const AboutMe = ({ isNavExtended }: AppProps) => {
    //Procedure for setting the titles in the arrow prompt for each section
    const [elementInViewPort, setElementInViewPort] = useState("description"); //will alert the user when the element is in viewport
    const handlePromptVisibility = (visibleElement: string) => {
        const timeline = gsap.timeline();
        switch (visibleElement) {
            case "description":
                timeline.to(".about-me__title__prompt--right", {
                    visibility: "visible",
                    duration: "instant",
                });
                timeline.to(".about-me__title__arrow--right", {
                    visibility: "visible",
                    duration: "instant",
                });
                timeline.to(".about-me__title__prompt--left", {
                    visibility: "visible",
                    duration: "instant",
                });
                timeline.to(".about-me__title__arrow--left", {
                    visibility: "visible",
                    duration: "instant",
                });

                break;
            case "skills":
                //make left arrow and right prompt invisible
                timeline.to(".about-me__title__prompt--left", {
                    visibility: "hidden",
                    duration: "instant",
                });
                timeline.to(".about-me__title__arrow--left", {
                    visibility: "hidden",
                    duration: "instant",
                });
                break;
            case "techstack":
                //make right arrow invisible
                timeline.to(".about-me__title__prompt--right", {
                    visibility: "hidden",
                    duration: "instant",
                });
                timeline.to(".about-me__title__arrow--right", {
                    visibility: "hidden",
                    duration: "instant",
                });
                break;

            default:
                return;
        }
    };

    useEffect(() => {
        handlePromptVisibility(elementInViewPort);
    }, [elementInViewPort]);

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
                <p
                    className="about-me__title__prompt about-me__title__prompt--left"
                    style={{ display: isNavExtended ? "none" : "initial" }}
                >
                    {elementInViewPort === "description"
                        ? "Experience"
                        : "In a Nutshell"}
                </p>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="about-me__title__arrow about-me__title__arrow--left"
                    style={{ display: isNavExtended ? "none" : "initial" }}
                />
                <p className="about-me__title__main">About Me.</p>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="about-me__title__arrow about-me__title__arrow--right"
                    style={{ display: isNavExtended ? "none" : "initial" }}
                />
                <p
                    className="about-me__title__prompt about-me__title__prompt--right "
                    style={{ display: isNavExtended ? "none" : "initial" }}
                >
                    {elementInViewPort === "description"
                        ? "Tech Stack"
                        : "In a Nutshell"}
                </p>
            </div>

            <div className="about-me__contents" ref={scrollContainer}>
                <div className="about-me__contents__carousel">
                    <div className="about-me__contents__carousel__page about-me__contents__carousel__page--skills">
                        <Skills
                            isNavExtended={isNavExtended}
                            setElementInViewPort={setElementInViewPort}
                        />
                    </div>
                    <div className="about-me__contents__carousel__page about-me__contents__carousel__page--description">
                        <Description
                            isNavExtended={isNavExtended}
                            setElementInViewPort={setElementInViewPort}
                        />
                    </div>
                    <div className="about-me__contents__carousel__page about-me__contents__carousel__page--techstack">
                        <TechStack
                            isNavExtended={isNavExtended}
                            setElementInViewPort={setElementInViewPort}
                        />
                    </div>
                </div>
            </div>
            <FooterPrompt
                isNavExtended={isNavExtended}
                prompt="Check out my projects"
            />
        </section>
    );
};

export default AboutMe;
