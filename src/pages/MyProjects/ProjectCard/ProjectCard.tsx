import React, { SyntheticEvent, useEffect, useState } from "react";
import "./ProjectCard.scss";
import { ProjectData } from "./../../../data/projects";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import Tilt from "react-parallax-tilt";

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

    const [isHovered, setIsHovered] = useState(false);

    //Procedure to animate the project card when hovered
    const specificClassName = project?.name.replace(/\s/g, "");
    const animateHover = (event: string) => {
        const hoverTimeline = gsap.timeline();

        hoverTimeline.to(`.${specificClassName}`, {
            opacity: event === "mouseenter" ? 1 : 0,
            duration: 0.2,
        });
    };

    //Procedure to handle all processes that occur when card is hovered over
    const handleCardHover = (event: SyntheticEvent) => {
        const action = event.type;
        if (!(action === "mouseenter" || action === "mouseleave")) return;
        setIsHovered(action === "mouseenter");
        animateHover(action);
    };

    //Function to generate project tech-stack list items
    const generateTechStack = () => {
        const techList = project?.techStack;
        return techList?.map((tech) => (
            <FontAwesomeIcon icon={tech.icon} style={{ color: tech.color }} />
        ));
    };

    const textColour = project?.isDark ? "darkMode" : "lightMode";

    //Function to generate project links
    const generateCodeBaseLink = () => {
        if (project?.codeBaseLink.length === 0) return;
        return (
            <div className="projectCard__container__info__links__item">
                <a
                    href={project?.codeBaseLink}
                    target="_blank"
                    className="projectLink"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        className="projectCard__container__info__links__item__svg"
                        icon={faGithubSquare}
                        style={{ color: project?.isDark ? "#fff" : "#000" }}
                    />
                </a>
                <p
                    className={`projectCard__container__info__links__item__text ${textColour}`}
                >
                    Codebase
                </p>
            </div>
        );
    };

    const generateLiveSiteLink = () => {
        if (project?.liveSiteLink.length === 0) return;
        return (
            <div className="projectCard__container__info__links__item">
                <a
                    href={project?.liveSiteLink}
                    target="_blank"
                    className="projectLink"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        className="projectCard__container__info__links__item__svg"
                        icon={faExternalLinkSquare}
                        style={{ color: project?.isDark ? "#fff" : "#000" }}
                    />
                </a>

                <p
                    className={`projectCard__container__info__links__item__text ${textColour}`}
                >
                    Site
                </p>
            </div>
        );
    };

    return blank ? (
        <div className="projectCard"></div>
    ) : (
        <Tilt transitionSpeed={5000}>
            <div
                className="projectCard"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardHover}
            >
                <img
                    src={project?.backgroundUrl}
                    alt={project?.name}
                    style={{
                        position: "absolute",
                        height: "230px",
                        width: "250px",
                        zIndex: "-1",
                        borderRadius: "15px",
                    }}
                />
                <div
                    className={`projectCard__container ${
                        isHovered && `projectCard__container--hovered`
                    }`}
                >
                    <p
                        className={`projectCard__container__title ${textColour}`}
                    >
                        {project!.name}
                    </p>

                    <div
                        className={`projectCard__container__info ${specificClassName}`}
                    >
                        <p
                            className={`projectCard__container__info__description ${textColour}`}
                        >
                            {project!.description}
                        </p>
                        <div className="projectCard__container__info__links">
                            {generateCodeBaseLink()}
                            {generateLiveSiteLink()}
                        </div>
                        <div className="projectCard__container__info__tools">
                            {generateTechStack()}
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;
