import React, { useEffect, useRef } from "react";
import "./Skills.scss";
import gsap from "gsap";
import SkillChart from "../../../components/SkillChart/SkillChart";
import experienceListData from "../../../data/experience";
import { useInViewport } from "react-in-viewport";

type AppProps = {
    isNavExtended: boolean;
    setElementInViewPort: React.Dispatch<React.SetStateAction<string>>;
};

const Skills = ({ isNavExtended, setElementInViewPort }: AppProps) => {
    /*XXXXXXXXX Procedure to detect if element is in viewport XXXXXXXXX, 
    
    Will do something when it detects that the element is in viewport,
    can be more recyclable after refactoring, after defining a ref, simply assign an component/div etc the ref of anchor, which will
    be used to determine whether or not the component is in the viewport*/

    const viewPortAnchor: any = useRef();
    const { inViewport } = useInViewport(viewPortAnchor);
    useEffect(() => {
        if (!inViewport) return;
        setElementInViewPort("skills");
    }, [inViewport, setElementInViewPort]);

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
            <div className="skills__title" ref={viewPortAnchor}>
                & My Experience
            </div>
            <div className="skills__charts">{generateSkillChart()}</div>
        </div>
    );
};

export default Skills;
