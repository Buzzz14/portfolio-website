import React from "react";
import Heading from "./Heading";

const skills = [
  {
    title: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    title: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    title: "Tailwind",
    src: "  https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
  },
  {
    title: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
];

const Skill = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl p-8">
        <Heading title={"Skills"} sTitle={"These are my skills"} />
        <div className="flex justify-center">
          <div className="shadow-2xl mt-4 shadow-violet-950 bg-slate-600 rounded-xl bg-opacity-40 overflow-hidden">
            <div className="inline-flex gap-5 p-10 flex-wrap bg-slate-100 bg-opacity-5">
              {skills.map((skill) => (
                <img
                  className="h-16 object-cover"
                  src={skill.src}
                  alt={skill.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
