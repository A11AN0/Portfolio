import React, { SyntheticEvent, useEffect, useRef } from "react";
import "./SkillChart.scss";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AppProps = {
    percentage: number;
    text: string;
    icon: any;
    primaryColor: string;
    secondaryColor: string;
    isNavExtended: boolean;
    inViewport: boolean;
};

const SkillChart = ({
    text,
    percentage,
    icon,
    primaryColor,
    secondaryColor,
    isNavExtended,
    inViewport,
}: AppProps) => {
    /*Will animate the chart upon mounting, 
  uses the percentage parameter to determine the width of the chart*/
    const chart: any = useRef();
    const testtext: any = useRef();

    useEffect(() => {
        const arrowAnimationTimeline = gsap.timeline();
        arrowAnimationTimeline.to(chart.current, {
            strokeDashoffset: inViewport
                ? ((100 - percentage) / 100) * 500
                : 472,
            duration: 7,
        });
    }, [inViewport, percentage]);

    //Animation upon mouse entering and leaving the chart, also works according to chart appearance as determined by screen size
    const maxWidthToOccur = 1500; //simply adjust THIS value to set the upper limit of the range between which handleChartAppearance will be called
    const handleChartAppearance = (event: SyntheticEvent) => {
        const { innerWidth: width, innerHeight: height } = window;
        /*adjust widths (3000px/1081px to determine the range between which the experience labels will disappear when nav is extended )
        modified skillchart functionality so that, labels/text will still appear within the experience circle when the element is clicked (on tablet
            or hovered over on computer/laptop) */
        if (
            width < 768 ||
            width > (isNavExtended ? maxWidthToOccur : 1081) ||
            height < 650
        )
            return;

        //on hover i want to make the icon invisible
        if (event.type === "mouseenter") {
            const timeline = gsap.timeline();
            timeline.to(`.${icon.iconName}`, {
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
        } else if (
            event.type === "mouseleave" ||
            width < 768 ||
            width > (isNavExtended ? maxWidthToOccur : 1081)
        ) {
            const timeline = gsap.timeline();
            timeline.from(`.${icon.iconName}`, {
                clearProps: "display",
                duration: "instant",
            });
            timeline.to(testtext.current, {
                clearProps: "all",
                duration: "instant",
            });
            timeline.to(`.${icon.iconName}`, {
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
                        icon={icon}
                        className={`skill__outer__inner__icon ${icon.iconName} `}
                        style={{ color: primaryColor }}
                    />
                    <div
                        className={
                            isNavExtended &&
                            window.innerWidth <= maxWidthToOccur &&
                            window.innerWidth > 1081 &&
                            window.innerHeight > 650
                                ? "skill__outer__inner__textHidden"
                                : "skill__outer__inner__text"
                        }
                        ref={testtext}
                    >
                        {text}
                    </div>
                </div>
            </div>

            <svg
                style={{ stroke: `url(#${icon.iconName})` }}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
            >
                <defs>
                    <linearGradient id={icon.iconName}>
                        <stop offset="0%" stop-color={primaryColor} />
                        <stop offset="100%" stop-color={secondaryColor} />
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
