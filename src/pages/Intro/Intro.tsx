import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
            y: 50,
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

    return (
        <div className="intro" id="allan">
            <div className="intro__title" ref={container}>
                <p ref={title}>Hello, I'm Allan.</p>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="intro__title__arrow"
                />
            </div>
        </div>
    );
};

export default Intro;
