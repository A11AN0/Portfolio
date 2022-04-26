import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
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
import { useInViewport } from "react-in-viewport";

type AppProps = {
    isNavExtended: boolean;
    setPageInViewport: React.Dispatch<React.SetStateAction<string>>;
};

const AboutMe = ({ isNavExtended, setPageInViewport }: AppProps) => {
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

    //Procedure to highlight prompt arrow and word upon hovering
    const animateArrow = (promptDirection: string, event: SyntheticEvent) => {
        const action = event.type;
        const timeline = gsap.timeline();
        timeline.to(`.about-me__title__arrow--${promptDirection}`, {
            opacity: action === "mouseenter" ? 1 : 0.2,
            duration: 0.1,
        });
        timeline.to(`.about-me__title__prompt--${promptDirection}`, {
            opacity: action === "mouseenter" ? 1 : 0.4,
            duration: 0.4,
        });
    };

    //Scroll animation
    const scroll = (promptPosition: string) => {
        const amount =
            promptPosition === "left" ? -window.innerWidth : window.innerWidth;
        scrollContainer.current.scrollBy({
            left: amount,
            behavior: "smooth",
        });
    };

    /*XXXXXXXXX Procedure to detect if element is in viewport XXXXXXXXX, 
    
    Will do something when it detects that the element is in viewport,
    can be more recyclable after refactoring, after defining a ref, simply assign an component/div etc the ref of anchor, which will
    be used to determine whether or not the component is in the viewport*/

    const aboutMeAnchor: any = useRef();
    const { inViewport } = useInViewport(aboutMeAnchor);
    useEffect(() => {
        if (!inViewport) return;
        setPageInViewport("aboutMe");
    }, [inViewport, setPageInViewport]);

    return (
        <section className="about-me">
            <div className="about-me__title about-me__shiftingElement ">
                <p
                    className="about-me__title__prompt about-me__title__prompt--left"
                    style={{ display: isNavExtended ? "none" : "initial" }}
                >
                    {elementInViewPort === "description"
                        ? "Experience"
                        : "In a Nutshell"}
                </p>
                {/* need to first, animate arrow and prompt on click, and then animate window scroll.to, smooth scroll */}
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="about-me__title__arrow about-me__title__arrow--left"
                    style={{ display: isNavExtended ? "none" : "initial" }}
                    onMouseEnter={(event) => animateArrow("left", event)}
                    onMouseLeave={(event) => animateArrow("left", event)}
                    onClick={() => {
                        scroll("left");
                    }}
                />
                <p className="about-me__title__main" ref={aboutMeAnchor}>
                    About Me.
                </p>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    className="about-me__title__arrow about-me__title__arrow--right"
                    style={{ display: isNavExtended ? "none" : "initial" }}
                    onMouseEnter={(event) => animateArrow("right", event)}
                    onMouseLeave={(event) => animateArrow("right", event)}
                    onClick={() => {
                        scroll("right");
                    }}
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
