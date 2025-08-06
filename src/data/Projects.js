import projectOne from "../assets/buzz-cafe.jpg";
import projectTwo from "../assets/dictionary.jpg";
import projectThree from "../assets/the-fitness-club.jpg";
import projectFive from "../assets/text-master.jpg";
import axisEcom from "../assets/axis-ecom.png";
import secureAuthSystem from "../assets/secure-auth-sys.png";
import jobBoardImage from "../assets/job-board.png";

export const projects = [
  {
    title: "Job Board Admin",
    description:
      "Job Board Admin is a modern job management dashboard built with a clean and efficient UI. It features real-time job CRUD operations using Redux Toolkit Query, schema validation with Zod, and modern UI components from Shadcn. Designed with scalability and maintainability in mind.",
    src: jobBoardImage, // replace with your actual image import
    techStack: [
      "React",
      "TypeScript",
      "Next.js (App Router)",
      "Redux Toolkit",
      "RTK Query",
      "Zod",
      "React Hook Form",
      "Shadcn/UI",
      "Tailwind CSS",
    ],
    gitLink: "https://github.com/Buzzz14/job-board.git",
    hasAppLink: false,
  },
  {
    title: "Hi Profile",
    description:
      "HiProfile is a modern e-commerce platform built for showcasing and selling products with a user-friendly interface, seamless navigation, and responsive design.",
    src: axisEcom,
    techStack: [
      "React",
      "Typescript",
      "Next",
      "Tanstack Query",
      "Axios",
      "Tailwind",
    ],
    appLink: "https://shop-axis-info.vercel.app/",
    gitLink: "https://github.com/kusumghimire/axis-ecommerce-v1",
    hasAppLink: true,
  },
  {
    title: "Secure Auth System",
    description:
      "A robust Next.js authentication system with comprehensive security features including JWT-based authentication, Math-based CAPTCHA, Login attempt throttling, Password expiration policies, Email verification, OTP security, Protection against (CORS, CSRF, XSS, and NoSQL injection), Built with Next.js, TypeScript, MongoDB, and Tailwind",
    src: secureAuthSystem,
    techStack: [
      "React",
      "Typescript",
      "Next",
      "Tanstack Query",
      "Axios",
      "Tailwind",
      "MongoDB",
    ],
    gitLink: "https://github.com/kusumghimire/axis-ecommerce-v1",
    hasAppLink: true,
  },
  {
    title: "Text-Master",
    description:
      "Text-Master is a website developed using react and bootstrap which manipulates your text according to your requirements.",
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
    title: "The Fitness Club",
    description:
      "It is a responsive website for a gym created using plain html and css.",
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
];
