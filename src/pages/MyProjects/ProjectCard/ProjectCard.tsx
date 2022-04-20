import React from "react";
import "./ProjectCard.scss";
import { ProjectData } from "./../../../data/projects";
import { useEffect } from "react";
import gsap from "gsap";

type AppProps = {
    project?: ProjectData;
    blank?: boolean;
    isNavExtended: boolean;
};

const ProjectCard = ({ project, blank, isNavExtended }: AppProps) => {
    useEffect(() => {
        isNavExtended
            ? gsap.to(".projectCard", {
                  marginLeft: 0,
                  duration: 0.5,
              })
            : gsap.to(".projectCard", {
                  clearProps: "all",
              });
    }, [isNavExtended]);

    return blank ? (
        <div className="projectCard"></div>
    ) : (
        <div className="projectCard">
            <p>{project!.projectName}</p>
        </div>
    );
};

export default ProjectCard;
