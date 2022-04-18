import React, { useEffect, useRef } from "react";
import "./TechStack.scss";
import gsap from "gsap";
import techStackData from "../../../data/techstack";
import TechStackIcon from "../../../components/TechStackIcon";
import { useInViewport } from "react-in-viewport";

type AppProps = {
    isNavExtended: boolean;
    setElementInViewPort: React.Dispatch<React.SetStateAction<string>>;
};

const TechStack = ({ isNavExtended, setElementInViewPort }: AppProps) => {
    /*XXXXXXXXX Procedure to detect if element is in viewport XXXXXXXXX, 
    
    Will do something when it detects that the element is in viewport,
    can be more recyclable after refactoring, after defining a ref, simply assign an component/div etc the ref of anchor, which will
    be used to determine whether or not the component is in the viewport*/

    const viewPortAnchor: any = useRef();
    const { inViewport } = useInViewport(viewPortAnchor);
    useEffect(() => {
        if (!inViewport) return;
        setElementInViewPort("techstack");
    }, [inViewport, setElementInViewPort]);

    //Page width upon nav extension
    useEffect(() => {
        isNavExtended
            ? gsap.to(".tech-stack", { marginLeft: "16rem", duration: 0.5 })
            : gsap.to(".tech-stack", { marginLeft: "0", duration: 0.5 });
    }, [isNavExtended]);

    //Procedure to generate techStack
    const generateTechStack = () => {
        return techStackData.map((tech) => (
            <TechStackIcon
                icon={tech.icon}
                techName={tech.techName}
                color={tech.color}
            />
        ));
    };

    return (
        <div className="tech-stack">
            <div className="tech-stack__top"></div>
            <div className="tech-stack__title" ref={viewPortAnchor}>
                & My Tech Stack
            </div>
            <div className="tech-stack__items">{generateTechStack()}</div>
        </div>
    );
};

export default TechStack;
