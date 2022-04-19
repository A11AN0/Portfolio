import React, { useEffect } from "react";
import FooterPrompt from "../../components/FooterPrompt/FooterPrompt";
import "./MyProjects.scss";
import gsap from "gsap";

type AppProps = {
    isNavExtended: boolean;
};

const MyProjects = ({ isNavExtended }: AppProps) => {
    useEffect(() => {
        isNavExtended
            ? gsap.to(".my-projects__title", {
                  marginLeft: "16rem",
                  duration: 0.5,
              })
            : gsap.to(".my-projects__title", {
                  marginLeft: "0",
                  duration: 0.5,
              });
    }, [isNavExtended]);

    return (
        <section className="my-projects" id="projects">
            <h1 className="my-projects__title">My Projects.</h1>
            <FooterPrompt isNavExtended={isNavExtended} prompt="Contact Me" />
        </section>
    );
};

export default MyProjects;
