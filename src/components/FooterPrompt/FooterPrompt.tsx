import React, { SyntheticEvent, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FooterPrompt.scss";
import gsap from "gsap";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type AppProps = {
    prompt: String;
    isNavExtended: boolean;
};

const FooterPrompt = ({ prompt, isNavExtended }: AppProps) => {
    const generateBlank = "  ";
    const arrowDisplay = isNavExtended ? "none" : "initial";
    const promptDisplay = isNavExtended ? "hidden" : "visible";

    //Behavior of bottom arrow/prompt on hover, could definitely use some refactoring!
    const handlePrompt = (event: SyntheticEvent) => {
        const timeline = gsap.timeline();
        const action = event.type;
        if (!(action === "mouseenter" || action === "mouseleave")) return;

        if (event.type === "mouseenter") {
            timeline.to(".footer-prompt__downward-arrow", {
                opacity: 0,
                display: "none",
                duration: 0.15,
            });
            timeline.to(".footer-prompt__downward-arrow", {
                display: "none",
                duration: "instant",
            });
            timeline.to(".footer-prompt__text", {
                display: "initial",
                duration: "instant",
            });
            timeline.to(".footer-prompt__text", {
                opacity: 0.4,
                duration: 0.2,
            });
        } else {
            timeline.to(".footer-prompt__text", {
                opacity: 0,
                duration: 0.1,
            });
            timeline.to(".footer-prompt__text", {
                display: "none",
                duration: "instant",
            });
            timeline.to(".footer-prompt__downward-arrow", {
                display: "initial",
                duration: "instant",
            });
            timeline.to(".footer-prompt__downward-arrow", {
                opacity: 0.2,
                duration: 0.2,
            });
        }
    };

    //Procedure to animate the arrow
    const animateArrow = () => {
        const arrowAnimationTimeline = gsap.timeline();
        arrowAnimationTimeline.to(".footer-prompt__downward-arrow", {
            y: "20%",
            duration: 3,
        });
        arrowAnimationTimeline.repeat(-1).yoyo(true).play();
    };

    //Behavior of the title when nav is extended
    useEffect(() => {
        isNavExtended
            ? gsap.to(".footer-prompt", {
                  marginLeft: "16rem",
                  duration: 0.5,
              })
            : gsap.to(".footer-prompt", {
                  marginLeft: "0",
                  duration: 0.5,
              });
    }, [isNavExtended]);

    //On Mount, animate the arrow
    useEffect(() => {
        animateArrow();
    }, []);

    return (
        <footer className="footer-prompt">
            <FontAwesomeIcon
                onMouseEnter={handlePrompt}
                icon={faChevronDown}
                className="footer-prompt__downward-arrow"
                style={{ display: arrowDisplay }}
            />
            <p
                className="footer-prompt__text"
                style={{ visibility: promptDisplay }}
                onMouseLeave={handlePrompt}
            >
                <FontAwesomeIcon icon={faChevronDown} />
                {generateBlank}
                {prompt}
                {generateBlank}
                <FontAwesomeIcon icon={faChevronDown} />
            </p>
        </footer>
    );
};

export default FooterPrompt;
