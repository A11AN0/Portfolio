import React, { SyntheticEvent, useEffect, useState } from "react";
import "./ProjectCard.scss";
import { ProjectData } from "./../../../data/projects";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faJsSquare,
    faHtml5,
    faPython,
    faGithubSquare,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
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
    const specificClassName = project?.projectName.replace(/\s/g, "");
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

    return blank ? (
        <div className="projectCard"></div>
    ) : (
        <Tilt transitionSpeed={5000}>
            <div
                className="projectCard"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardHover}
            >
                <div
                    className={`projectCard__container ${
                        isHovered && `projectCard__container--hovered`
                    }`}
                >
                    <p className="projectCard__container__title">
                        {project!.projectName}
                    </p>
                    <div
                        className={`projectCard__container__info ${specificClassName}`}
                    >
                        <p className="projectCard__container__info__description">
                            A good-old, classic, browser run game of snake made
                            with vanilla Javascript jndsjfdkfjn
                            hfbsjnskjfnfjnfnjn
                        </p>
                        <div className="projectCard__container__info__links">
                            <div className="projectCard__container__info__links__item">
                                <FontAwesomeIcon
                                    className="projectCard__container__info__links__item__svg"
                                    icon={faGithubSquare}
                                />
                                <p className="projectCard__container__info__links__item__text">
                                    Codebase
                                </p>
                            </div>
                            <div className="projectCard__container__info__links__item">
                                <FontAwesomeIcon
                                    className="projectCard__container__info__links__item__svg"
                                    icon={faExternalLinkSquare}
                                />
                                <p className="projectCard__container__info__links__item__text">
                                    Site
                                </p>
                            </div>
                        </div>
                        <div className="projectCard__container__info__tools">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                style={{ color: "#fbff26" }}
                            />

                            <FontAwesomeIcon
                                icon={faHtml5}
                                style={{ color: "#ff6e26" }}
                            />

                            <FontAwesomeIcon
                                icon={faPython}
                                style={{ color: "#7bff00" }}
                            />

                            <FontAwesomeIcon
                                icon={faReact}
                                style={{ color: "#1fd2ff" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default ProjectCard;
