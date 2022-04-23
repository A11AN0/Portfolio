import {
    faJsSquare,
    faHtml5,
    faSass,
    faPython,
    faReact,
    faNode,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCogs,
    faDatabase,
    faServer,
    faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import { TechData } from "./techstack";

export type ProjectData = {
    name: string;
    description: string;
    codeBaseLink: string;
    liveSiteLink: string;
    techStack: TechData[];
    backgroundUrl: string;
};

const projectListData: ProjectData[] = [
    {
        name: "Snake",
        description:
            "A classic browser-run game of snake which relies on intergration of HTML and Sass with Javascript to create a continually updating game loop.",
        codeBaseLink: "https://github.com/A11AN0/Snake",
        liveSiteLink: "https://a11an0.github.io/Snake/",
        techStack: [
            { techName: "javascript", icon: faJsSquare, color: "#fbff26" },
            { techName: "html5", icon: faHtml5, color: "#ff6e26" },
            { techName: "Sass", icon: faSass, color: "#ff196e" },
        ],
        backgroundUrl: "./images/snake.png",
    },
    {
        name: "Six-Pack",
        description:
            "This react web app utilises the Punk API to display the BrewDog Beer information catalogue which users can filter, and alternately search.",
        codeBaseLink: "https://github.com/A11AN0/Sixpack",
        liveSiteLink: "https://a11an0.github.io/Sixpack/",
        techStack: [
            { techName: "react", icon: faReact, color: "#1fd2ff" },
            { techName: "Sass", icon: faSass, color: "#ff196e" },
            { techName: "API Integration", icon: faServer, color: "white" },
        ],
        backgroundUrl: "./images/sixpack.png",
    },

    {
        name: "Hostile Aliens",
        description:
            "An alien invader inspired game which relies on javascript OOP paradigms to fire randomly upon alien ships, until all are defeated. Unit tested with JEST",
        codeBaseLink: "https://github.com/A11AN0/Hostile-Aliens",
        liveSiteLink: "https://a11an0.github.io/Hostile-Aliens/",
        techStack: [
            { techName: "javascript", icon: faJsSquare, color: "#fbff26" },
            { techName: "unit-testing", icon: faCogs, color: "lightgrey" },
            { techName: "Sass", icon: faSass, color: "#ff196e" },
            { techName: "OOP", icon: faPuzzlePiece, color: "#fbff00" },
        ],
        backgroundUrl: "./images/hostilealiens.png",
    },
    {
        name: "Translator",
        description:
            "An intuitive javascript morse code translator, built using a mobile-first OOP & TDD approach through Javascript and JEST.",
        codeBaseLink: "https://github.com/A11AN0/MorseCode-Translator",
        liveSiteLink: "https://a11an0.github.io/MorseCode-Translator/",
        techStack: [
            { techName: "OOP", icon: faPuzzlePiece, color: "#fbff00" },
            { techName: "javascript", icon: faJsSquare, color: "#fbff26" },
            { techName: "Sass", icon: faSass, color: "#ff196e" },
            { techName: "unit-testing", icon: faCogs, color: "lightgrey" },
        ],
        backgroundUrl: "./images/translator.png",
    },
    {
        name: "Calculator",
        description:
            "An aesthetic web calculator built using a mobile-first approach; this Javascript web app is highly responsive to all devices.",
        codeBaseLink: "https://github.com/A11AN0/Calculator",
        liveSiteLink: "https://a11an0.github.io/Calculator/",
        techStack: [
            { techName: "javascript", icon: faJsSquare, color: "#fbff26" },
            { techName: "html5", icon: faHtml5, color: "#ff6e26" },
            { techName: "Sass", icon: faSass, color: "#ff196e" },
        ],
        backgroundUrl: "./images/calculator.png",
    },
    {
        name: "Celestial",
        description:
            "A node/express API currently hosted on Heroku which returns data on planets within the solar system, along with their images, planned SQL intergration.",
        codeBaseLink: "https://github.com/A11AN0/Celestial-API",
        liveSiteLink: "",
        techStack: [
            { techName: "Node.js & Express", icon: faNode, color: "#00bd39" },
            { techName: "javascript", icon: faJsSquare, color: "#fbff26" },
            { techName: "data", icon: faDatabase, color: "#4db5ff" },
            { techName: "API Integration", icon: faServer, color: "white" },
        ],
        backgroundUrl: "./images/celestial.png",
    },
    {
        name: "Orb",
        description:
            "The client-side for an in-development full-stack app which serves as a portal for users to login and logout of a service, built with React, Node.js, MySQL and Express. ",
        codeBaseLink: "https://github.com/A11AN0/Orb",
        liveSiteLink: "",
        techStack: [
            { techName: "Node.js & Express", icon: faNode, color: "#00bd39" },
            { techName: "react", icon: faReact, color: "#1fd2ff" },
            { techName: "data", icon: faDatabase, color: "#4db5ff" },
            { techName: "API Integration", icon: faServer, color: "white" },
        ],
        backgroundUrl: "./images/orb.png",
    },
    {
        name: "PDfusion",
        description:
            "A convenient and efficient script which allows users combine multiple PDF files. Planned GUI being developed using Tkinter",
        codeBaseLink: "https://github.com/A11AN0/Mini-Apps/tree/main/pdFusion",
        liveSiteLink: "",
        techStack: [{ techName: "python", icon: faPython, color: "#7bff00" }],
        backgroundUrl: "./images/pdfusion.png",
    },
];

export default projectListData;
