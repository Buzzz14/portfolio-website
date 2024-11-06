import React from "react";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";
import Heading from "../Heading";
import "./Project.css";
import { projects } from "../../data/Projects";

const Project = ({ mode }) => {
  return (
    <div div className="mx-auto pb-16">
      <div
        className={
          mode === "dark"
            ? "bg-gradient-to-b from-slate-950 from-20% to-purple-950 "
            : "bg-gradient-to-b from-violet-600 from-20% to-red-500"
        }
      >
        <div
          className={
            mode === "dark"
              ? "custom-shape-divider fill-slate-950 bg-slate-800"
              : "custom-shape-divider fill-violet-600 bg-gray-100"
          }
        >
          <div className={mode === "dark" && "bg-slate-950 bg-opacity-35"}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                classNames="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-gray-100">
            <Heading title={"My Recent Projects"} />
          </div>
          <Grid container spacing={4} className="py-10 px-6">
            {projects.map((project) => (
              <Grid
                size={{ sm: 12, md: 6, lg: 4 }}
                className="overflow-hidden cursor-pointer shadow-2xl shadow-violet-950 bg-gray-500 rounded-lg bg-opacity-40"
              >
                <div className="flex flex-col text-white">
                  <img
                    className="h-48 object-cover"
                    src={project.src}
                    alt={project.title}
                  />

                  <div className="p-5 flex flex-col gap-3">
                    <h1 className="text-xl font-semibold">{project.title}</h1>
                    <p className="text-gray-200 text-md font-normal">
                      {project.description}
                    </p>

                    {project.hasAppLink ? (
                      <>
                        <Button
                          component="a"
                          href={project.appLink}
                          target="_blank"
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
                          component="a"
                          href={project.gitLink}
                          target="_blank"
                          sx={{
                            borderColor: "white",
                            color: "white",
                            textTransform: "capitalize",
                          }}
                          variant="outlined"
                        >
                          View Repo
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          component="a"
                          href={project.feLink}
                          target="_blank"
                          sx={{
                            borderColor: "white",
                            color: "white",
                            textTransform: "capitalize",
                          }}
                          variant="outlined"
                        >
                          View FE
                        </Button>
                        <Button
                          component="a"
                          href={project.beLink}
                          target="_blank"
                          sx={{
                            borderColor: "white",
                            color: "white",
                            textTransform: "capitalize",
                          }}
                          variant="outlined"
                        >
                          View BE
                        </Button>
                      </>
                    )}

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
    </div>
  );
};

export default Project;
