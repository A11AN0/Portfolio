import {
    faMeteor,
    faLineChart,
    faPuzzlePiece,
    faMicroscope,
    faFlaskVial,
    faServer,
    faPeopleLine,
    faMobileAlt,
    faParagraph,
} from "@fortawesome/free-solid-svg-icons";

type ExperienceData = {
    experience: string;
    icon: any;
    primaryColor: string;
    secondaryColor: string;
    percentage: number;
};

const experienceListData: ExperienceData[] = [
    {
        experience: "Agile Scrum Methodology",
        icon: faMeteor,
        primaryColor: "#e91e63",
        secondaryColor: "#673ab7",
        percentage: 100,
    },
    {
        experience: "Data Analysis",
        icon: faLineChart,
        primaryColor: "#0fdb83",
        secondaryColor: "#0591e3",
        percentage: 100,
    },
    {
        experience: "Object Oriented Programming",
        icon: faPuzzlePiece,
        primaryColor: "#fbff00",
        secondaryColor: "#e30505",
        percentage: 100,
    },
    {
        experience: "Research",
        icon: faMicroscope,
        primaryColor: "#e91e63",
        secondaryColor: "#673ab7",
        percentage: 100,
    },
    {
        experience: "Test Driven Development",
        icon: faFlaskVial,
        primaryColor: "#0fdb83",
        secondaryColor: "#0591e3",
        percentage: 100,
    },
    {
        experience: "REST API Design",
        icon: faServer,
        primaryColor: "#fbff00",
        secondaryColor: "#e30505",
        percentage: 100,
    },
    {
        experience: "Collaborative Interpersonal Development",
        icon: faPeopleLine,
        primaryColor: "#e91e63",
        secondaryColor: "#673ab7",
        percentage: 100,
    },
    {
        experience: "Mobile First Design",
        icon: faMobileAlt,
        primaryColor: "#0fdb83",
        secondaryColor: "#0591e3",
        percentage: 100,
    },
    {
        experience: "Technical Documentation",
        icon: faParagraph,
        primaryColor: "#fbff00",
        secondaryColor: "#e30505",
        percentage: 100,
    },
];

export default experienceListData;
