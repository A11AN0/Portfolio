import React, { useEffect } from "react";
import "./Description.scss";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type AppProps = {
    isNavExtended: boolean;
};

const Description = ({ isNavExtended }: AppProps) => {
    //Page width upon nav extension
    useEffect(() => {
        isNavExtended
            ? gsap.to(".description", { marginLeft: "16rem", duration: 0.5 })
            : gsap.to(".description", { marginLeft: "0", duration: 0.5 });
    }, [isNavExtended]);

    useEffect(() => {
        //The rising animation for the arrow, will probably change to onhover, and will dissappear when screen is too small
        const arrowAnimationTimeline = gsap.timeline();
        arrowAnimationTimeline.to(".description__arrowdown", {
            y: 35,
            duration: 1.5,
        });
        arrowAnimationTimeline.repeat(-1).yoyo(true).play();
    }, []);

    //Arrow display upon nav extension
    const arrowDisplay = isNavExtended ? "none" : "initial";

    return (
        <div className="description">
            <div className="description__top"></div>
            <div className="description__text">
                <p className="description__text__paragraph">
                    I'm an Australian junior full-stack developer with a passion
                    for creating beautiful, intuitive, and responsive user
                    experiences, while meeting the functional demands of an
                    application on the serverside.
                    <br /> <br />
                    Highly driven, adaptable, personable and team-oriented. I
                    strive to deliver a polished product for client and
                    corporation alike.
                </p>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="description__arrowdown"
                    style={{ display: arrowDisplay }}
                />
            </div>
        </div>
    );
};

export default Description;
