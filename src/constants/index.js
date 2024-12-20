
import python from '../assets/icons/python.svg';
import iiit from '../assets/images/iiit.jpeg'; // Correct import
import card from '../assets/images/card.jpeg';
import sudoku from '../assets/images/sudoku.jpeg';
import home from '../assets/images/home.jpeg';
import th from '../assets/images/th.jpeg'; // Correct import
import agriculture from '../assets/images/agriculture.jpeg';


import {
    contact,
    css,
    github,
    html,
    javascript,
    linkedin,
    motion,
    nextjs,
    nodejs,
    react,
    tailwindcss
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: python,
        name: "Python",
        type: "Developer"
    },


    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "AI-ChatBot Developer",
        company_name: "Microstop Infotech Pvt.Ltd, Nashik",
        icon: th,
        iconBg: "#accbe1",
        date: "June 2024 - August 2024",
        points: [
            "Developed and implemented an AI chatbot, enhancing customer interaction and automating responses.",
            "Gained hands-on experience with machine learning models and natural language processing.",
            "Collaborated with cross-functional teams to integrate AI-driven solutions into existing systems.",
            "Applied problem-solving skills to troubleshoot and optimize AI system performance.",
        ],
    },
    {
        title: "Research Intern",
        company_name: "IIIT Hyderabad",
        icon: iiit,
        iconBg: "#fbc3bc",
        date: "August 30 - (ongoing)",
        points: [
            "Worked on the development of a high-speed pothole detection system using LiDAR sensors and sensor fusion techniques.",
            "Contributed to designing algorithms for real-time pothole detection and classification.",
            
        ],
    },
    
  
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '+91 7774033778',
    },

    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/sharwari-pawar-8694b722a',
    }
];

export const projects = [
    {
        iconUrl: card,
        theme: 'btn-back-red',
        name: 'BlackJack',
        description: 'Created a game of Black Jack in Java using the awt and swing graphics library.',
        link: 'https://github.com/SharwariPawar/Black-Jack.git',
    },


    {
        iconUrl: sudoku,
        theme: 'btn-back-yellow',
        name: 'Sudoku',
        description: 'An easy Soduku game using HTML,JavaScript,CSS.',
        link: 'https://github.com/SharwariPawar/Sudoku.git',
        
    },

    {
        iconUrl: agriculture,
        theme: 'btn-back-green',
        name: 'Smart Agricultural Monitoring System',
        description:'Designed an IoT-based soil monitoring system that integrates sensors to measure soil parameters, sends real-time data to the cloud, and provides actionable recommendations for farmers.',
    },
    
    {
        iconUrl: home,
        theme: 'btn-black-yellow',
        name:'HomeSpace',
        description:'Built an app that allows users to browse virtual furniture stores, try items in augmented reality, and make purchases. Incorporated virtual assembly and catalog browsing features.',
    },

];