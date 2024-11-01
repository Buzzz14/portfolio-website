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
                  I am a hardworking, passionate, and enthusiastic individual,
                  always eager to learn. My enthusiasm, coupled with a proactive
                  approach to learning, fuels my drive to make a meaningful
                  impact in every endeavor.
                </p>
                <br />
                <p className="text-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus dolores quis quae dolor consequatur ex nihil
                  explicabo cupiditate inventore officiis. Similique numquam
                  aliquam id possimus quasi ex tenetur maxime quo?
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
