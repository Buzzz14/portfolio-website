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
            : "bg-gray-100"
        }
      >
        <div className={mode === "dark" && "bg-slate-950 bg-opacity-35"}>
          <div
            className={
              mode === "dark"
                ? "custom-shape-divider-2 fill-slate-950"
                : "custom-shape-divider-2 fill-red-500 bg-gray-100"
            }
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                  className="shape-fill"
                ></path>
              </svg>
            </svg>
          </div>

          <div className="max-w-5xl mx-auto">
            <div
              className={mode === "dark" ? "text-gray-100" : "text-gray-800"}
            >
              <div className="items-end">
                <Heading title={"About me"} side={"end"} />
              </div>
            </div>
            <div className="">
              <div className="flex md:justify-center justify-between flex-col md:flex-row items-center md:items-start gap-16 py-16">
                <img
                  className="rounded-2xl w-60 md:w-96 shadow-xl"
                  src={Photo}
                  alt="photo"
                />
                <div className="max-w-96 text-center md:mt-8 md:text-right">
                  <div
                    className={
                      mode === "dark" ? "text-slate-100" : "text-slate-800"
                    }
                  >
                    <h1 className="text-4xl mb-4">Sushan Bajracharya</h1>
                  </div>
                  <div
                    className={
                      mode === "dark" ? "text-slate-300" : "text-slate-600"
                    }
                  >
                    <p className="text-lg text-justify w-80 md:w-96 ">
                      I am a dedicated, passionate, and enthusiastic individual
                      who thrives on continuous learning and personal growth. My
                      proactive approach and commitment to excellence drive me
                      to make a meaningful impact in every project I undertake.
                    </p>
                    <br />
                    <Button
                      variant="contained"
                      sx={{
                        padding: "0.5rem 1.5rem",
                        textTransform: "capitalize",
                        fontSize: "1rem",
                        background: "#f59e0b",
                        color: mode==="dark"?"#020617":"#ffffff"                        
                      }}
                      onClick={() => {
                        window.scrollTo(0, 0);
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
  );
};

export default About;
