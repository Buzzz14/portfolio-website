import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["a Frontend Enthusiast."],
    loop: 0,
    typeSpeed: 120,
  });

  return (
    <div className="mx-auto h-[32rem] max-w-7xl flex items-center justify-center lg:justify-between pt-6 flex-col md:flex-row ">
      <div className="p-10">
        <p className="text-2xl sm:text-3xl  lg:text-4xl font-bold text-slate-300 text-center lg:text-start">
          I'm
        </p>
        <p className="text-5xl sm:6xl lg:text-7xl  max-w-xl text-white font-extrabold text-center lg:text-start">
          Sushan Bajracharya,
        </p>
        <br />
        <div className="text-xl sm:text-2xl lg:text-3xl text-center text-slate-300 lg:text-start font-mono">
          <span>{text}</span>
          <span>
            <Cursor />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
