import React from "react";
import Heading from "./Heading";
import { skills } from "../data/Skills";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 rounded-e-full max-w-[95%] lg:max-w-[80%] my-16"
    >
      <div className="mx-auto max-w-7xl p-12 flex flex-col flex-wrap gap-6 items-start lg:px-32">
        <div className="flex justify-center">
          <div className="inline-flex gap-5 flex-wrap">
            {skills.map((skill, index) => (
              <motion.img
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-16 object-cover"
                src={skill.src}
                alt={skill.title}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;