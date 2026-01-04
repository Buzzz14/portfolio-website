import projectOne from "../assets/buzz-cafe.jpg";
import projectTwo from "../assets/dictionary.jpg";
import projectThree from "../assets/the-fitness-club.jpg";
import projectFive from "../assets/text-master.jpg";
import m8gadgets from "../assets/m8gadgets.png";
import secureAuthSystem from "../assets/secure-auth-sys.png";
import jobBoardImage from "../assets/job-board.png";

export const projects = [
  {
    title: "M8 Gadgets",
    description:
      "Built and maintained responsive layouts across multiple pages. Optimized page layouts and responsiveness for better user experience. Troubleshot and fixed interface inconsistencies.",
    imageUrl: m8gadgets,
    techStack: ["React", "Typescript", "Next.js", "Tailwind", "Tanstack Query"],
    appLink: "https://m8gadgets.co.uk/",
  },
  {
    title: "Robust Infotech",
    description:
      "Built and maintained the website and dashboard, ensuring responsive layouts. Added animations and interactive elements to enhance user experience. Implemented SEO practices and optimizations across key pages. Contributed to backend routes, controllers, and services for smoother workflows.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "SEO",
    ],
  },
  {
    title: "Sundar Inventory",
    description:
      "Worked on CRUD operations for various inventory management features. Implemented role-based authentication and access control to ensure secure usage.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "JWT Authentication",
    ],
    gitLink: "https://github.com/Buzzz14/sundar-inventory.git",
  },

  {
    title: "Job Board",
    description:
      "Developed a modern job management dashboard with a clean and efficient UI. Implemented real-time job CRUD operations using Redux Toolkit Query and validated inputs with Zod. Integrated React Hook Form for seamless form handling and enhanced the interface with Shadcn components.",
    imageUrl: jobBoardImage,
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Zod",
      "React Hook Form",
      "Redux Toolkit",
      "RTK Query",
    ],
    gitLink: "https://github.com/Buzzz14/job-board.git",
  },
  {
    title: "Secure Auth System",
    description:
      "Designed and implemented a secure authentication system with JWT-based login, math-based CAPTCHA, login attempt throttling, password expiration policies, email verification, and OTP security. Built the frontend and backend with Next.js, TypeScript, Tailwind, MongoDB, and Axios, ensuring robust and maintainable code.",
    imageUrl: secureAuthSystem,
    techStack: [
      "React",
      "Typescript",
      "Next",
      "Tanstack Query",
      "Axios",
      "Tailwind",
      "MongoDB",
    ],
    gitLink: "https://github.com/Buzzz14/secure-auth-system",
  },
  {
    title: "Text-Master",
    description:
      "Developed dynamic text manipulation functionalities using React and Bootstrap. Built interactive forms for text transformations and ensured responsive layouts across devices.",
    imageUrl: projectFive,
    techStack: ["Bootstrap", "React", "HTML", "CSS"],
    appLink: "https://text-master-y1bc.onrender.com",
    gitLink: "https://github.com/Buzzz14/Text-Master",
  },
  {
    title: "Dictionary App",
    description:
      "Implemented API integration with a free dictionary API to fetch word definitions in real-time. Built interactive search and display components using React and Tailwind. Ensured responsive design and optimized user interactions across pages.",
    imageUrl: projectTwo,
    techStack: ["Tailwind", "React", "HTML", "CSS"],
    appLink: "https://dictionary-app-u2q2.onrender.com/",
    gitLink: "https://github.com/Buzzz14/Dictionary-App/",
  },
  {
    title: "The Fitness Club",
    description:
      "Built a fully responsive gym website using HTML and CSS. Developed page layouts, styled components, and ensured consistency across different screen sizes.",
    imageUrl: projectThree,
    techStack: ["HTML", "CSS"],
    appLink: "https://the-fitness-club-kioo.onrender.com/",
    gitLink: "https://github.com/Buzzz14/The-Fitness-Club/",
  },
  {
    title: "Buzz Cafe",
    description:
      "Developed a responsive website for a cafe using HTML and CSS. Implemented layout designs, styled menus and content sections, and ensured cross-device compatibility.",
    imageUrl: projectOne,
    techStack: ["HTML", "CSS"],
    appLink: "https://buzz-cafe.onrender.com",
    gitLink: "https://github.com/Buzzz14/Buzz-Cafe/",
  },
];
