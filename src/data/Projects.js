import projectOne from "../assets/buzz-cafe.jpg";
import projectTwo from "../assets/dictionary.jpg";
import projectThree from "../assets/the-fitness-club.jpg";
import projectFour from "../assets/ecommerce-website.jpg";
import projectFive from "../assets/text-master.jpg";

export const projects = [
    {
        title: "The Fitness Club",
        description: "It is a website for a gym created using react and tailwind.",
        src: projectThree,
        techStack: ["HTML", "CSS"],
        appLink: "https://the-fitness-club-kioo.onrender.com/",
        gitLink: "https://github.com/Buzzz14/The-Fitness-Club/",
        hasAppLink: true,
    },
    {
        title: "Buzz Cafe",
        description:
            "It is a responsive website for a cafe created using plain html and css.",
        src: projectOne,
        techStack: ["HTML", "CSS"],
        appLink: "https://buzz-cafe.onrender.com",
        gitLink: "https://github.com/Buzzz14/Buzz-Cafe/",
        hasAppLink: true,
    },
    {
        title: "Text-Master",
        description:
            "Text-Master is a project developed using react and bootstrap which can be used to manipulate your text according to your requirements.",
        src: projectFive,
        techStack: ["Bootstrap", "React", "HTML", "CSS"],
        appLink: "https://text-master-y1bc.onrender.com",
        gitLink: "https://github.com/Buzzz14/Text-Master",
        hasAppLink: true,
    },
    {
        title: "Dictionary App",
        description:
            "It is a dictionary created with using react, a tailwind and free dictionary api.",
        src: projectTwo,
        techStack: ["Tailwind", "React", "HTML", "CSS"],
        appLink: "https://dictionary-app-u2q2.onrender.com/",
        gitLink: "https://github.com/Buzzz14/Dictionary-App/",
        hasAppLink: true,
    },
    {
        title: "Ecommerce Website",
        description:
            "It is a full stack ecommerce website created using React.js, Spring Boot and MySQL.",
        src: projectFour,
        techStack: ["Java", "Spring Boot", "MySQL", "React", "Tailwind", "HTML", "CSS"],
        feLink: "https://github.com/Buzzz14/Ecommerce-Website-Frontend",
        beLink: "https://github.com/Buzzz14/Ecommerce-Website-Backend",
        hasAppLink: false,
    },

];