import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AppProps = {
    techName: String;
    color: String;
    icon: any;
};

const TechStackIcon = ({ techName, icon, color }: AppProps) => {
    return (
        <div className="tech-stack__items__icon">
            <FontAwesomeIcon icon={icon} style={{ color: `${color}` }} />
            <p
                className="tech-stack__items__icon__text"
                style={{ color: `${color}` }}
            >
                {techName}
            </p>
        </div>
    );
};

export default TechStackIcon;
