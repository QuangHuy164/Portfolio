import { dg } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    radio,
    check,
    track,
    workout,
    blog,
    gmail
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
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
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Internship",
        company_name: "Darkglass Electronics Oy",
        icon: dg,
        iconBg: "#000000",
        date: "June 2024 - September 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Learning and studying in the company environment.",
            "Participating in code reviews and learning new programming languages.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Gmail',
        iconUrl: gmail,
        link: 'nghuy164@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/QuangHuy164',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/huynguyen1604/',
    }
];

export const projects = [
    {
        iconUrl: track,
        theme: 'btn-back-red',
        name: 'Calories Tracker',
        date: 'July 2025 - 2025',
        description: 'Developed a web application that tracks and notifies users of calories changes, consumes for body, helping users find the best ways to macro their weight.',
        link: 'https://calories-tracker-livid.vercel.app/',
    },
    {
        iconUrl: radio,
        theme: 'btn-back-pink',
        name: 'Space Sound',
        date: 'July 2025 - 2025',
        description: 'Built an music application named Space Sound, allowing users to listen, replay and find their favorite songs.',
        link: 'https://github.com/QuangHuy164/SoundPlayer',
    },
    {
        iconUrl: blog,
        theme: 'btn-back-black',
        name: 'My Blog',
        date: 'July 2025 - 2025',
        description: 'Built a personal blog for introducing myself, using NodeJS and ExpressJS that I just learned.',
        link: 'https://github.com/QuangHuy164/MyBlog',
    },

    {
        iconUrl: workout,
        theme: 'btn-back-blue',
        name: 'Workout Exercises Website',
        date: 'October 2024 - November 2024',
        description: 'Designed and built a website for searching a best and suitable exercise for bodybuilders, sportsman using RapidAPI.',
        link: 'https://health-web-app-seven.vercel.app/',
    },
    {
        iconUrl: check,
        theme: 'btn-back-green',
        name: 'To-Do Application',
        date: 'June 2024 - September 2024',
        description: 'Created a full-stack To-Do application, enabling users to post, delete and edit tasks.',
        link: 'https://github.com/QuangHuy164/IndecisionApp',
    },
];