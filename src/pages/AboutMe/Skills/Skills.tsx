import React, { useEffect } from "react";
import "./Skills.scss";
import gsap from "gsap";
import SkillChart from "../../../components/SkillChart/SkillChart";
import experienceListData from "../../../data/experience";

type AppProps = {
    isNavExtended: boolean;
};

const Skills = ({ isNavExtended }: AppProps) => {
    //Page width upon nav extension
    useEffect(() => {
        isNavExtended
            ? gsap.to(".skills", { marginLeft: "16rem", duration: 0.5 })
            : gsap.to(".skills", { marginLeft: "0", duration: 0.5 });
    }, [isNavExtended]);

    //Function which will generate all skillchart icons based on data from experienceListData
    const generateSkillChart = () => {
        return experienceListData.map((experience) => (
            <SkillChart
                text={experience.experience}
                icon={experience.icon}
                percentage={experience.percentage}
                primaryColor={experience.primaryColor}
                secondaryColor={experience.secondaryColor}
            />
        ));
    };

    return (
        <div className="skills">
            <div className="skills__top"></div>
            <div className="skills__title">& My Experience</div>
            <div className="skills__charts">{generateSkillChart()}</div>
        </div>
    );
};

export default Skills;
