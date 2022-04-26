import React, { useEffect, useRef } from "react";
import FooterPrompt from "../../components/FooterPrompt/FooterPrompt";
import "./MyProjects.scss";
import gsap from "gsap";
import ProjectGenerator from "./ProjectGenerator";
import { useInViewport } from "react-in-viewport";

type AppProps = {
    isNavExtended: boolean;
    setPageInViewport: React.Dispatch<React.SetStateAction<string>>;
};

const MyProjects = ({ isNavExtended, setPageInViewport }: AppProps) => {
    useEffect(() => {
        isNavExtended
            ? gsap.to(".my-projects__shift", {
                  marginLeft: "16rem",
                  duration: 0.5,
              })
            : gsap.to(".my-projects__shift", {
                  marginLeft: "0",
                  duration: 0.5,
              });
    }, [isNavExtended]);

    /*XXXXXXXXX Procedure to detect if element is in viewport XXXXXXXXX, 
    
    Will do something when it detects that the element is in viewport,
    can be more recyclable after refactoring, after defining a ref, simply assign an component/div etc the ref of anchor, which will
    be used to determine whether or not the component is in the viewport*/

    const viewPortAnchor: any = useRef();
    const { inViewport } = useInViewport(viewPortAnchor);
    useEffect(() => {
        if (!inViewport) return;
        setPageInViewport("myProjects");
    }, [inViewport, setPageInViewport]);

    return (
        <section className="my-projects">
            <h1 className="my-projects__title my-projects__shift">
                My Projects.
            </h1>
            <div className="my-projects__contents" ref={viewPortAnchor}>
                <div className="my-projects__contents__h-container my-projects__shift">
                    <ProjectGenerator isNavExtended={isNavExtended} />
                </div>
            </div>
            <FooterPrompt isNavExtended={isNavExtended} prompt="Contact Me" />
        </section>
    );
};

export default MyProjects;
