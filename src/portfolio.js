// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hey there! 👋, I am",
    name: "Ursula Shrestha",
    message: "I’m a full-stack software engineer dedicated to developing efficient, secure, and scalable solutions. I’m passionate about using technology to empower communities, drive business growth, and make a meaningful impact. Let’s connect!",
    basedLocation: "Paris, France",
    resumeLink: "https://drive.google.com/file/d/1h1z_k4-Au6pKsPg43OxHjP69FRkKYNBl/view?usp=sharing", // 
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/recentportrait.jpeg'
}

const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/ursula-shrestha/",
    github: "https://github.com/Ursulashrestha",


}

// ---  About Section ---
const about = {
    autobiography: [
        "I’m a passionate and driven Full-Stack Engineer with a strong focus on building efficient, scalable, and innovative digital solutions. Currently, I’m in my final year of a Master’s in Computer Science at EPITA, Paris, specializing in Software Engineering.",
        "Recently, I completed an end-of-study internship at École Polytechnique – Drahi X-Novation Center, where I worked with the startup Floware. This experience allowed me to refine my skills in both front-end and back-end development, tackle real-world challenges, and collaborate in an environment that values cutting-edge technology and innovation",
        "I’m always eager to learn, adapt, and push the boundaries of what’s possible in software development.I believe that technology should not only be powerful but also practical and user-focused, and that’s the mindset I bring to every project."
    ],
    photo1Link: "images/TRY.png",
    photo2Link: "images/FRONT.png",
    photo3Link: "images/cloud.png",
    photo4Link: "images/UI.png"
}

// --- 🛡️ Experience Section ---
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

// --- 💻 Work Section ---
const works = [
    {
        projectName: "EdTech AI Tool",
        yearCompleted: "2024",
        description: "Developed an educational tool in collaboration with a peer, to rethink the college student and AI interaction. With a core principle to enhance learning and personal growth. Responsible for UI, UX, and DB management with ongoing goal to complete version 1.0 in December 2024.",
        techStack: "Python, Vue.js",
        links: [
            // {
            //     label: "",
            //     type: "git",
            //     url: "#"
            // },
            // {
            //     label: "",
            //     type: "external",
            //     url: "#"
            // }
        ],
        imageLink: "images/version_edtech_pic.png",
        alignLeft: false
    },
    {
        projectName: "Open-Source Developer Portfolio",
        yearCompleted: "2023",
        description: "Designed and developed an open-sourced single page application template to help web developers create visually appealing personal portfolios, focusing on ease of use and customization. Built with Vue.js, JS, HTML, Tailwind CSS, the project achieved 27 stars and 14 forks on GitHub.",
        techStack: "Vue.js, JS, HTML, Tailwind.css",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/webdev_portfolio"
            },
            {
                label: "",
                type: "external",
                url: "https://feifykike.github.io/webdev_portfolio"
            }
        ],
        imageLink: "images/webdevportfolio_pic.png",
        alignLeft: true
    },
    {
        projectName: "TrackYourSubs IOS App",
        yearCompleted: "2022",
        description: "An IOS app to track you subscriptions and expenses, all the while presenting in a clean and professional look with a load of features. Some of the more evident features are: Budgeting (monthly / yearly option available), Current monthly & yearly total expense at a glance, Custom suggestions to meet budget, Organize (Categorization & Importance) and filter through subscriptions, Reminders via scheduled notifications, Stats page: pie chart visual, bar chart visual, and streak indicator.",
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
                url: "https://site--maximshelepov--6tkhqqjrq9c5.code.run"
            }
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
]

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "I am open to new opportunities and always happy to connect. If you have any questions, would like to discuss a potential collaboration, or just want to introduce yourself, feel free to reach out.",
        ],
        link: {
            email: "info.ursulaa@gmail.com", // email takes precedance
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
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