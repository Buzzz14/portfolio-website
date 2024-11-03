import React from "react";
import Skill from "../components/Skill";
import Timeline from "../components/Timeline";
import Heading from "../components/Heading";
import Photo from "../assets/photo.jpg";

const About = ({mode}) => {
  return (
    <div
      className={
        mode === "dark"
          ? "bg-gradient-to-b from-purple-950 via-slate-950 to-purple-950 "
          : "bg-gradient-to-b to-red-500 from-violet-600 from-10%"
      }
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-gray-100 p-10">
          <Heading title={"About me"} side={"center"} />
        </div>
        <div className="px-8">
          <div className="flex justify-between items-center md:items-start flex-col md:flex-row gap-16">
            <img
              className="rounded-lg w-60 md:w-96 shadow-xl"
              src={Photo}
              alt="photo"
            />
            <div className="text-slate-100 text-lg text-justify md:text-left">
              <p>
                I am a dedicated, passionate, and enthusiastic individual who
                thrives on continuous learning and personal growth. My proactive
                approach and commitment to excellence drive me to make a
                meaningful impact in every project I undertake. I believe in
                pushing boundaries, not only to reach personal milestones but
                also to contribute value that resonates with the broader goals
                of each initiative.
              </p>
              <br />
              <p>
                With a focus on developing solutions that merge creativity and
                functionality, I bring both vision and adaptability to my work.
                I am constantly exploring innovative ways to grow, eager to
                blend new techniques with established practices. Embracing
                challenges as opportunities, I see each obstacle as a chance to
                deepen my skills, expand my knowledge, and refine my craft. My
                journey is fueled by a relentless drive to make a lasting
                difference.
              </p>
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
