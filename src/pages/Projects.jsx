import React from "react";
import Heading from "../components/Heading";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";
import { projects } from "../data/Projects";

const Projects = ({mode}) => {
  return (
    <div
      className={
        mode === "dark"
          ? "bg-gradient-to-b from-purple-950 via-slate-950 to-purple-950 "
          : "bg-gradient-to-b to-red-500 from-violet-600 from-10%"
      }
    >
      <div className="max-w-7xl mx-auto p-10">
        <div className="text-slate-100">
          <Heading title={"My Recent Projects"} side={"center"} />
        </div>

        <Grid container spacing={2} className="py-10">
          {projects.map((project) => (
            <Grid
              size={{ sm: 12, md: 6, lg: 4 }}
              className="overflow-hidden cursor-pointer shadow-2xl shadow-violet-950 bg-gray-500 rounded-lg bg-opacity-40"
            >
              <div className="flex flex-col text-white">
                <img className="h-48" src={project.src} alt={project.title} />

                <div className="p-5 flex flex-col gap-3">
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
                  <div className="flex gap-2 flex-wrap justify-center items-center mt-12">
                    {project.techStack.map((tech) => (
                      <p className="px-4 py-2 text-slate-800 rounded-full bg-gray-100 text-center font-semibold">
                        #{tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
