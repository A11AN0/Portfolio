import {faJsSquare, faHtml5,faSass, faPython, faNpm, faReact, faCss3Alt, faBootstrap, faNode } from '@fortawesome/free-brands-svg-icons';
import { faCodeMerge, faCogs, faDatabase} from '@fortawesome/free-solid-svg-icons';

type techData = {
    techName: string;
    icon: any;
    color: string;
}


const techStackData:techData[] = [
    {
        techName: 'JavaScript & TypeScript',
        icon: faJsSquare,
        color: '#fbff26'
    },
    {
        techName: 'React',
        icon: faReact,
        color: '#1fd2ff'
    },
    {
        techName: 'Node.js & Express',
        icon: faNode,
        color: '#00bd39'
    },
    {
        techName: 'Sass',
        icon: faSass,
        color: '#ff196e'
    },
    {   techName: 'Jest, Enzyme & React Testing Library',
        icon: faCogs,
        color: 'lightgrey'
    },
    {
        techName: 'Python',
        icon: faPython,
        color: '#7bff00'
    },
    {
        techName: 'HTML5',
        icon: faHtml5,
        color: '#ff6e26'
    },
    {
        techName: 'CSS3',
        icon: faCss3Alt,
        color: '#0279f0'
    },
    {
        techName: 'NPM & Exposure Yarn',
        icon: faNpm,
        color: '#f03a02'
    },
    {
        techName: 'Bootstrap',
        icon: faBootstrap,
        color: '#7e0dff'
    },
    {
        techName: 'Git Version Control & GitHub',
        icon: faCodeMerge,
        color: 'white'
    },
    {
        techName: 'Firestore and MySQL',
        icon: faDatabase,
        color: '#4db5ff'
    },

]

export default techStackData;