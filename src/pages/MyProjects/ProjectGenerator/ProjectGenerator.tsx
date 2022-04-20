import React from "react";
import "./ProjectGenerator.scss";
import projectListData from "../../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useMediaQuery } from "react-responsive";

type AppProps = {
    isNavExtended: boolean;
};

const ProjectGenerator = ({ isNavExtended }: AppProps) => {
    /*
    Will return a card for every project in the data list and if the project 
    data list is odd, it will also return an additional blank card at the end
    else it will return the next card over in the project list 
    This is to be used when screen height > 650px
    */
    const doubleLine = () => {
        const isArrayOdd = projectListData.length % 2 !== 0; // to check if number of projects is odd
        const projectArr = [];

        for (let i = 0; i < projectListData.length; i += 2) {
            projectArr.push(
                <div className="projectGenerator-column">
                    <ProjectCard
                        isNavExtended={isNavExtended}
                        project={projectListData[i]}
                    />
                    {isArrayOdd && i === projectListData.length - 1 ? (
                        <ProjectCard
                            isNavExtended={isNavExtended}
                            blank={true}
                        />
                    ) : (
                        <ProjectCard
                            isNavExtended={isNavExtended}
                            project={projectListData[i + 1]}
                        />
                    )}
                </div>,
            );
        }

        return projectArr;
    };

    /*
    if screen height < 650px, then generate columns for every 1 
    item in the array of projects: relatively easy to make
    */
    const singleLine = () => {
        return projectListData.map((project) => (
            <div className="projectGenerator-column">
                <ProjectCard isNavExtended={isNavExtended} project={project} />
            </div>
        ));
    };

    const isSmallScreen = useMediaQuery({ query: "(min-height: 650px)" });

    return <>{isSmallScreen ? doubleLine() : singleLine()}</>;
};

export default ProjectGenerator;
