import React, { SyntheticEvent, useEffect, useRef } from "react";
import "./SkillChart.scss";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCake } from "@fortawesome/free-solid-svg-icons";

type AppProps = {
    percentage: string;
    text: string;
};

const SkillChart = ({ text, percentage }: AppProps) => {
    /*Will animate the chart upon mounting, 
  uses the percentage parameter to determine the width of the chart*/
    const chart: any = useRef();
    const testtext: any = useRef();

    useEffect(() => {
        const arrowAnimationTimeline = gsap.timeline();
        arrowAnimationTimeline.to(chart.current, {
            strokeDashoffset: ((100 - parseInt(percentage)) / 100) * 500,
            duration: 5,
        });
        console.log(faCake.iconName);
    });

    //Animation upon mouse entering and leaving the chart, also works according to chart appearance as determined by screen size
    const handleChartAppearance = (event: SyntheticEvent) => {
        const { innerWidth: width } = window;
        if (width < 768 || width > 991) return;

        //on hover i want to make the icon invisible
        if (event.type === "mouseenter") {
            const timeline = gsap.timeline();
            timeline.to(`.${faCake.iconName}`, {
                display: "none",
                opacity: 0,
                duration: "instant",
            });
            timeline.to(testtext.current, {
                display: "initial",
                position: "initial",
                left: "0px",
                width: "100%",
                duration: "instant",
            });
            timeline.to(testtext.current, { opacity: "100%", duration: 0.5 });
        } else if (event.type === "mouseleave" || width < 768 || width > 990) {
            const timeline = gsap.timeline();
            timeline.from(`.${faCake.iconName}`, {
                clearProps: "display",
                duration: "instant",
            });
            timeline.to(testtext.current, {
                clearProps: "all",
                duration: "instant",
            });
            timeline.to(`.${faCake.iconName}`, {
                opacity: "70%",
                duration: 0.5,
            });
        }
    };

    return (
        <div
            className="skill"
            onMouseEnter={handleChartAppearance}
            onMouseLeave={handleChartAppearance}
        >
            <div className="skill__outer">
                <div className="skill__outer__inner">
                    <FontAwesomeIcon
                        icon={faCake}
                        className={`skill__outer__inner__icon ${faCake.iconName} `}
                    />
                    <div className="skill__outer__inner__text" ref={testtext}>
                        {text}
                    </div>
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
            >
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle
                    className="skill__svg"
                    ref={chart}
                    cx="80"
                    cy="80"
                    r="70"
                    stroke-linecap="round"
                />
            </svg>
        </div>
    );
};

export default SkillChart;
