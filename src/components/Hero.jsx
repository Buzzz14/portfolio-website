import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "@mui/material/Button";

const Hero = ({ mode }) => {
  const [text] = useTypewriter({
    words: ["a Frontend Enthusiast."],
    loop: 0,
    typeSpeed: 120,
  });

  return (
    <div
      className={
        mode === "dark"
          ? "bg-gradient-to-b from-purple-950 to-slate-950"
          : "bg-gradient-to-b from-red-500 to-violet-600"
      }
    >
      <div className="mx-auto h-[32rem] max-w-7xl flex items-center justify-center lg:justify-between lg:flex-row">
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
          <div className="my-4 text-center lg:text-start font-medium">
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
              View my work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
