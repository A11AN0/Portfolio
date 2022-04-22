import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-parallax-tilt";

//will need to change this to a stateful component and remove the use of any
const Intro = (props: any) => {
    const { isNavExtended } = props;

    //The rising animation for the title + repeating arrow motion
    const title: any = useRef();
    useEffect(() => {
        const animationTimeline = gsap.timeline();
        animationTimeline.from(title.current, {
            y: "250px",
            opacity: 0,
            duration: 2,
            color: "black",
        });
        animationTimeline.to(
            ".intro__title__arrow",
            { duration: 2, opacity: "50%" },
            "+=0.5",
        );

        //The rising animation for the arrow
        const arrowAnimationTimeline = gsap.timeline();
        arrowAnimationTimeline.delay(2);
        arrowAnimationTimeline.to(".intro__title__arrow", {
            y: 30,
            duration: 1.5,
        });
        arrowAnimationTimeline.repeat(-1).yoyo(true).play();
    }, []);

    //Animates the transition of the title when the navbar is extended
    const container: any = useRef();
    useEffect(() => {
        isNavExtended
            ? gsap.to(container.current, { marginLeft: "16rem", duration: 0.5 })
            : gsap.to(container.current, { marginLeft: "0", duration: 0.5 });
    }, [isNavExtended]);

    //Scroll animation
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <div className="intro" id="allan">
            <div
                className="intro__title"
                ref={container}
                style={{ lineHeight: isNavExtended ? "1em" : "0.55em" }}
            >
                <Tilt transitionSpeed={2000}>
                    <p ref={title}>Hello, I'm Allan.</p>

                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className="intro__title__arrow"
                        onClick={() => {
                            scrollDown();
                        }}
                    />
                </Tilt>
            </div>
        </div>
    );
};

export default Intro;
