const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true,
    onlyLanding: false,
    showOnce: true,
    thresholdOption: 0.2
}

// Splash Screen
const splashScreen = true

const greeting = {
    intro: "Hey there! 👋, I am",
    name: "Ursula Shrestha",
    message: "I design and engineer full-stack systems that are fast, secure, and built to last. My work blends clean code with clear purpose, driving real impact where it matters.",
    logo: {
        link: "images/initials.png",
        custom: true 
    },
    portraitLink: "images/hyphen.png"
}

const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/ursula-shrestha/",
    github: "https://github.com/Ursulashrestha",


}

// ---  About Section ---
const about = {
    autobiography: [
        "Once upon a time, I opened a code editor, and I must say I never looked back 👩‍💻...",
        "With a background in Software Engineering, I have spent the last few years refining my skills, collaborating with amazing teams, and always learning something new 💡.",
        "I recently completed my Master’s in Computer Science at EPITA, Paris, specializing in Software Engineering. During my end-of-study internship at the École Polytechnique Drahi X-Novation Center as a FullStack Engineer 🚀, I had the opportunity to work with a dynamic startup, contributing to the development of data-driven software solutions for urban mobility.",
        "And when I am not coding, you will probably find me learning French 🍷 or unwinding with a good book 📚 or some music 🎶. I like to think that a fresh perspective is just as important as clean code.🌱"
    ],
    photo1Link: "images/TRY.png",
    photo2Link: "images/FRONT.png",
    photo3Link: "images/cloud.png",
    photo4Link: "images/UI.png"
}

// --- Experience Section ---
const experiences = [
    {
        position: "FullStack Engineer Intern",
        company: {
            name: "École Polytechnique Drahi X Novation Center",
            link: "https://www.floware.fr/",
            comp_logo:"images/comp2.jpg"
        },
        duration: "August 2023 - February 2024",
        bulletPoints: [
            "Developed and deployed a full-stack SaaS platform MVP using Django (backend) and Vue.js/TypeScript (frontend), delivering responsive, scalable interfaces aligned with client needs in France and Spain.",
            "Built core platform features from scratch, including dashboard views and RESTful API endpoints, improving user experience across platforms.",
            "Collaborated with cross-functional teams including IoT engineers, data scientists, and UI/UX designers using Agile workflows to define the MVP, plan tasks, and ensure timely delivery of critical features."
        ],
        hashtags: [
            "JavaScript",
            "Vue3",
            "Python",
            "Django",
            "Pinia",
            "Azure",
            "MySQL",
            "Git",
            "Figma",
            "Postman"
        ]
    },
    {
        position: "Mobile Application Developer",
        company: {
            name: "Digi Technology",
            link: "https://www.digitechnologynepal.com/",
            comp_logo: "images/comp1.png"
        },
        duration: "December 2022 - June 2023",
        bulletPoints: [
            "Designed and developed robust mobile applications using Dart and the Flutter framework, significantly improving the efficiency and performance of the app development process.",
            "Integrated critical third-party APIs and services into mobile applications, enhancing functionality and user experience, and ensuring seamless interoperability with various external systems.",
            "Troubleshoot and debugged mobile application issues, implementing timely and effective solutions that minimized downtime and maintained user satisfaction."
        ],
        hashtags: [
            "Flutter",
            "Dart",
            "MongoDB",
            "Git",
            "Figma",            
        ]
    }
]

// ---- Tech Stack

const techStack = [
    {
        name: "Python",
        icon: "images/python.png"
    },
    {
        name: "Django",
        icon: "images/djangoo.png"
    },
        {
        name: "JavaScript",
        icon: "images/javaScript.png"
    },
        {
        name: "TypeScript",
        icon: "images/typeScript.png"
    },
        {
        name: "Vue.js",
        icon: "images/vue.png"
    },
    {
        name: "React",
        icon: "images/react.png"
    },
    {
        name: "Node.js",
        icon: "images/nodejs.png"
    },
    {
        name: "TailwindCSS",
        icon: "images/tailwind.png"
    },
        {
        name: "Pinia",
        icon: "images/pinia.png"
    },
    {
        name: "Git",
        icon: "images/git.png"
    },
    {
        name: "Docker",
        icon: "images/docker.png"
    },
    {
        name: "MongoDB",
        icon: "images/mongodb.png"
    },
        {
        name: "MySQL",
        icon: "images/mysql.png"
    },
    {
        name: "PostgreSQL",
        icon: "images/postgres.png"
    },
    {
        name: "Flutter",
        icon: "images/flutter.png"
    },
    {
        name: "AWS",
        icon: "images/aws.png"
    },
    {
        name: "Figma",
        icon: "images/figma.png"
    },
];
// ---  Contact Section ---
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "I am open to new opportunities and always happy to connect. If you have any questions, would like to discuss a potential collaboration, or want to request my resume, feel free to reach out.",
        ],
        link: {
            email: "info.ursulaa@gmail.com",
        },
        responseTimeMessage: ""
    },
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    contact,
    techStack
}