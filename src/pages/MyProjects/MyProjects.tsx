import React, { useEffect } from "react";
import FooterPrompt from "../../components/FooterPrompt/FooterPrompt";
import "./MyProjects.scss";
import gsap from "gsap";
import ProjectGenerator from "./ProjectGenerator";

type AppProps = {
    isNavExtended: boolean;
};

const MyProjects = ({ isNavExtended }: AppProps) => {
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

    return (
        <section className="my-projects" id="projects">
            <h1 className="my-projects__title my-projects__shift">
                My Projects.
            </h1>
            <div className="my-projects__contents">
                <div className="my-projects__contents__h-container my-projects__shift">
                    <ProjectGenerator isNavExtended={isNavExtended} />
                </div>
            </div>
            <FooterPrompt isNavExtended={isNavExtended} prompt="Contact Me" />
        </section>
    );
};

export default MyProjects;
