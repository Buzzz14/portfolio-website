import React from "react";
import Heading from "./Heading";
import {skills} from "../data/Skills"

const Skill = () => {
  return (
    <div className="bg-gray-100 rounded-e-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl my-16">
      <div className="mx-auto max-w-7xl p-12 flex flex-col flex-wrap gap-6 items-start lg:ps-60">
        <div className="text-gray-800">
          <Heading title={"Skills"} side={"center"} />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex gap-5 flex-wrap">
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
  );
};

export default Skill;
