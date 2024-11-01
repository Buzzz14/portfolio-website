import React from "react";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";
import Heading from "./Heading";
import projectOne from "../assets/buzz-cafe.jpg";
import projectTwo from "../assets/dictionary.jpg";
import projectThree from "../assets/the-fitness-club.jpg";

const projects = [
  {
    title: "The Fitness Club",
    description: "It is a website for a gym created using react and tailwind.",
    src: projectOne,
  },
  {
    title: "Dictionary App",
    description:
      "It is a dictionary created with using react, a tailwind and free dictionary api.",
    src: projectTwo,
  },
  {
    title: "Buzz Cafe",
    description:
      "It is a responsive website for a cafe created using plain html and css.",
    src: projectThree,
  },
];

const Project = ({ mode }) => {
  return (
    <>
      <div
        className={
          mode === "dark"
            ? "mx-auto pb-16 bg-gradient-to-b from-slate-950 to-purple-950"
            : "mx-auto pb-16 bg-gradient-to-b from-violet-600 to-red-500"
        }
      >
        <div className="max-w-7xl mx-auto">
          <Heading
            title={"My Recent Projects"}
            sTitle={"These are my recent projects."}
          />
          <Grid container spacing={2} className="p-10">
            {projects.map((project) => (
              <Grid
                size={{ sm: 12, md: 6, lg: 4 }}
                className="overflow-hidden cursor-pointer shadow-2xl shadow-violet-950 bg-slate-600 rounded-lg bg-opacity-40"
              >
                <div className="flex flex-col text-white shadow">
                  <img
                    className="h-48 w-full object-cover"
                    src={project.src}
                    alt={project.title}
                  />
                  <div className="p-5 flex flex-col gap-3 bg-slate-100 bg-opacity-5">
                    <h1 className="text-xl font-semibold">{project.title}</h1>
                    <p className="text-gray-200 text-md font-normal">
                      {project.description}
                    </p>

                    <Button
                      sx={{
                        borderColor: "white",
                        color: "white",
                        textTransform: "capitalize",
                      }}
                      variant="outlined"
                    >
                      View Application
                    </Button>

                    <Button
                      sx={{
                        borderColor: "white",
                        color: "white",
                        textTransform: "capitalize",
                      }}
                      variant="outlined"
                    >
                      View Repo
                    </Button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Project;
