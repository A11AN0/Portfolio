import React from "react";
import "./ProjectCard.scss";
import { ProjectData } from "./../../../data/projects";
import { useEffect } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faJsSquare,
    faHtml5,
    faPython,
} from "@fortawesome/free-brands-svg-icons";

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
            <div className="projectCard__container">
                <p className="projectCard__container__title">
                    {project!.projectName}
                </p>
                <p className="projectCard__container__description">
                    A good-old, classic, browser run game of snake made with
                    vanilla Javascript jndsjfdkfjn hfbsjnskjfnfjnfnjn
                </p>
                <div className="projectCard__container__links">
                    <div className="projectCard__container__links__item">
                        <FontAwesomeIcon icon={faPython} />
                        <p className="projectCard__container__links__item__text">
                            Codebase
                        </p>
                    </div>
                    <div className="projectCard__container__links__item">
                        <FontAwesomeIcon icon={faJsSquare} />
                        <p className="projectCard__container__links__item__text">
                            Site
                        </p>
                    </div>
                </div>
                <div className="projectCard__container__tools">
                    <FontAwesomeIcon icon={faJsSquare} />

                    <FontAwesomeIcon icon={faHtml5} />

                    <FontAwesomeIcon icon={faPython} />

                    <FontAwesomeIcon icon={faPython} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
