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
    message: "I’m a full-stack software engineer dedicated to developing efficient, secure, and scalable solutions. I’m passionate about using technology to empower communities, drive business growth, and make a meaningful impact.",
    resumeLink: "https://drive.google.com/file/d/1qY5gcfWFfveIRw-pbqdFCDf3c8pLBcX3/view?usp=sharing", // 
    logo: {
        link: "images/initials.png",
        custom: true 
    },
    portraitLink: "images/that.jpeg"
}

const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/ursula-shrestha/",
    github: "https://github.com/Ursulashrestha",


}

// ---  About Section ---
const about = {
    autobiography: [
        "I’m a driven Full-Stack Engineer with a strong focus on building scalable and innovative digital solutions. Currently, I’m in my final year of a Master’s in Computer Science at EPITA, Paris, specializing in Software Engineering.",
        "Recently, I completed an end-of-study internship at École Polytechnique – Drahi X-Novation Center, where I worked with the startup, Floware. This experience allowed me to refine my skills in both front-end and back-end development, tackle real-world challenges, and collaborate in an environment that values cutting-edge technology and innovation",
        "I’m always eager to learn, adapt, and push the boundaries of what’s possible in software development.I believe that technology should not only be powerful but also practical and user-focused, and that’s the mindset I bring to every project."
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
            name: "École Polytechnique – Drahi X-Novation Center",
            link: "https://www.floware.fr/"
        },
        duration: "August 2023 - February 2024",
        bulletPoints: [
            "Developed a scalable SaaS platform for mobility analytics, implementing secure RESTful APIs, token-based authentication, and interactive dashboards.",
            "Designed and optimized data visualization features for origin-destination analysis using Mapbox, and integrated Azure Blob Storage for secure, scalable sensor data management.",
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
            link: "https://www.digitechnologynepal.com/"
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

// --- Work Section ---
const works = [
    {
        projectName: "",
        yearCompleted: "2024",
        description: "",
        links: [
        ],
        imageLink: "images/version_edtech_pic.png",
        alignLeft: false
    },
    {
        projectName: "",
        yearCompleted: "2023",
        description: "",
        links: [
            {
                label: "",
                type: "git",
                url: ""
            },
            {
                label: "",
                type: "external",
                url: ""
            }
        ],
        imageLink: "",
        alignLeft: true
    },
    {
        projectName: "",
        yearCompleted: "2022",
        description: "",
        techStack: "Swift, SwiftUI",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/TrackYourSubsDemo/"
            },
            {
                label: "",
                type: "external",
                url: "https://youtu.be/KsTx-F70OOk"
            }
        ],
        imageLink: "images/tracksubs_pic.png",
        alignLeft: false
    },
    {
        projectName: "Personal Portfolio App",
        yearCompleted: "2021",
        description: "Built a dynamic, live-editable personal portfolio website with an admin dashboard for real-time updates. Developed using Django (Python) for the backend, and HTML, CSS, and JavaScript for the frontend, following the MVC architecture, which enhanced my full-stack development skills.",
        techStack: "Django, Python, HTML, CSS, Bootstrap4, JS",
        links: [
            {
                label: "",
                type: "external",
                url: ""
            }
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
]

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
    works,
    contact
}