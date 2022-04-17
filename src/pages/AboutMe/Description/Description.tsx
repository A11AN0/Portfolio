import React, { useEffect } from "react";
import "./Description.scss";
import gsap from "gsap";

type AppProps = {
    isNavExtended: boolean;
};

const Description = ({ isNavExtended }: AppProps) => {
    const handleParagraphSize = (navExtended: boolean) => {
        if (
            !(
                window.innerWidth > 768 &&
                window.innerWidth < 900 &&
                window.innerHeight > 590
            )
        )
            return;

        gsap.to(".description__text__paragraph", {
            fontSize: navExtended ? "2.9vmin" : "inherit",
            duration: 0.2,
        });
    };

    //Page width upon nav extension
    useEffect(() => {
        isNavExtended
            ? gsap.to(".description", { marginLeft: "16rem", duration: 0.5 })
            : gsap.to(".description", { marginLeft: "0", duration: 0.5 });
        handleParagraphSize(isNavExtended);
    }, [isNavExtended]);

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
            </div>
        </div>
    );
};

export default Description;
