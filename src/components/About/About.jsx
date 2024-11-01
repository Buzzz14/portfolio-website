import React from "react";
import Heading from "../Heading";
import Photo from "../../assets/photo.jpg";
import "./About.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const About = ({ mode }) => {
  return (
    <div>
      <div
        className={
          mode === "dark"
            ? "bg-gradient-to-b from-slate-800 via-purple-950 to-slate-800"
            : "bg-gradient-to-b from-violet-600 via-red-500 to-violet-600"
        }
      >
        <div
          className={
            mode === "dark"
              ? "bg-slate-950 bg-opacity-35"
              : "bg-slate-800 bg-opacity-35"
          }
        >
          <div
            className={
              mode === "dark"
                ? "custom-shape-divider fill-slate-950"
                : "custom-shape-divider fill-violet-600"
            }
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="max-w-5xl mx-auto">
            <Heading
              title={"About me"}
              sTitle={"This is something about me."}
            />
            <div className="pb-16 px-6">
              <div className="mt-4 shadow-2xl shadow-violet-950 bg-slate-600 rounded-xl bg-opacity-40 overflow-hidden">
                <div className="flex justify-center flex-col lg:flex-row items-center gap-16 bg-slate-100 p-16 bg-opacity-5">
                  <img className="rounded-2xl w-96" src={Photo} alt="photo" />
                  <div className="text-white max-w-96 text-center lg:text-left">
                    <h1 className="text-4xl mb-4">Sushan Bajracharya</h1>
                    <div className="text-gray-300">
                      <p className="text-lg">
                        I am a hardworking, passionate, and enthusiastic
                        individual, always eager to learn. My enthusiasm,
                        coupled with a proactive approach to learning, fuels my
                        drive to make a meaningful impact in every endeavor.
                      </p>
                      <br />
                      <p className="text-normal mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Possimus dolores quis quae dolor consequatur ex
                        nihil explicabo cupiditate inventore officiis. Similique
                        numquam aliquam id possimus quasi ex tenetur maxime quo?
                      </p>
                      <Button
                        variant="contained"
                        sx={{
                          padding: "0.5rem 1.5rem",
                          textTransform: "capitalize",
                          fontSize: "1rem",
                          backgroundColor: "#ed2c41",
                          "&:hover": {
                            backgroundColor: "#ed4054",
                          },
                        }}
                      >
                        <Link to="/about">Know more...</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
