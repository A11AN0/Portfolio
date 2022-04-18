import React, { useEffect, useRef } from "react";
import "./Description.scss";
import gsap from "gsap";
import { useInViewport } from "react-in-viewport";

type AppProps = {
    isNavExtended: boolean;
    setElementInViewPort: React.Dispatch<React.SetStateAction<string>>;
};

const Description = ({ isNavExtended, setElementInViewPort }: AppProps) => {
    /*XXXXXXXXX Procedure to detect if element is in viewport XXXXXXXXX, 
    
    Will do something when it detects that the element is in viewport,
    can be more recyclable after refactoring, after defining a ref, simply assign an component/div etc the ref of anchor, which will
    be used to determine whether or not the component is in the viewport*/

    const viewPortAnchor: any = useRef();
    const { inViewport } = useInViewport(viewPortAnchor);
    useEffect(() => {
        if (!inViewport) return;
        setElementInViewPort("description");
    }, [inViewport, setElementInViewPort]);

    //Procedure to handle the size of the paragraph when nav is extended
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
                    <br ref={viewPortAnchor} /> <br />
                    Highly driven, adaptable, personable and team-oriented. I
                    strive to deliver a polished product for client and
                    corporation alike.
                </p>
            </div>
        </div>
    );
};

export default Description;
