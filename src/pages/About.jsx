import React from "react";
import Skill from "../components/Skill";
import Timeline from "../components/Timeline";
import Heading from "../components/Heading";
import Photo from "../assets/photo.jpg";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Heading title={"About me"} sTitle={"This is something about me."} />
      <div className="px-6">
        <div className="mt-4 shadow-2xl shadow-violet-950 bg-slate-600 rounded-xl bg-opacity-40 overflow-hidden">
          <div className="flex justify-center items-center lg:items-start flex-col lg:flex-row gap-16 bg-slate-100 p-16 bg-opacity-5">
            <img className="rounded-full w-96" src={Photo} alt="photo" />
            <div className="text-white max-w-96 text-center lg:text-left">
              <h1 className="text-4xl mb-4">Sushan Bajracharya</h1>
              <div className="text-gray-300">
                <p className="text-lg">
                  I am a dedicated, passionate, and enthusiastic individual who
                  thrives on continuous learning and personal growth. My
                  proactive approach and commitment to excellence drive me to
                  make a meaningful impact in every project I undertake.
                </p>
                <br />
                <p className="text-normal mb-4">
                  With a focus on developing solutions that merge creativity and
                  functionality, I bring both vision and adaptability to my
                  work. I am constantly exploring innovative ways to grow and
                  make a difference, embracing challenges as opportunities to
                  expand my skills and knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Skill />
      <Timeline />
    </div>
  );
};

export default About;
