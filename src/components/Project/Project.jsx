import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";
import Heading from "../Heading";
import "./Project.css";
import { projects } from "../../data/Projects";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const ProjectButton = ({ href, text, mode }) => (
  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <Button
      component="a"
      href={href}
      target="_blank"
      sx={{
        width: "100%",
        marginBottom: text === "View Application" ? "0.75rem" : 0,
        borderColor: "white",
        color: "white",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor:
            mode === "dark"
              ? "rgba(245, 158, 11, 0.1)"
              : "rgba(124, 58, 237, 0.1)",
          borderColor: mode === "dark" ? "#f59e0b" : "#ddd",
          color: mode === "dark" ? "#f59e0b" : "#ddd",
        },
      }}
      variant="outlined"
    >
      {text}
    </Button>
  </motion.div>
);

const Project = ({ mode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  const projectsToShow = isHomePage ? projects.slice(0, 3) : projects;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeInDelayed = (delay = 0.2) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay },
  });

  return (
    <div className="mx-auto pb-16">
      <div
        className={
          mode === "dark"
            ? "bg-gradient-to-b from-slate-950 from-20% to-purple-950 "
            : "bg-gradient-to-b from-violet-600 from-20% to-red-500"
        }
      >
        <div className="max-w-6xl mx-auto">
          <Heading title={"My Recent Projects"} />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="py-10 px-6"
          >
            <Grid container spacing={4}>
              {projectsToShow.map((project, index) => (
                <Grid key={index} size={{ sm: 12, md: 6, lg: 4 }}>
                  <motion.div
                    variants={item}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className="h-full overflow-hidden cursor-pointer shadow-2xl shadow-violet-950 bg-gray-500 rounded-lg bg-opacity-40 transform-gpu"
                  >
                    <div className="flex flex-col text-white h-full">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="h-48 object-cover"
                        src={project.src}
                        alt={project.title}
                      />

                      <div className="p-5 flex flex-col gap-3 flex-grow">
                        <motion.h1
                          {...fadeInDelayed(0.2)}
                          className="text-xl font-semibold"
                        >
                          {project.title}
                        </motion.h1>
                        <motion.p
                          {...fadeInDelayed(0.3)}
                          className="text-gray-200 text-md font-normal"
                        >
                          {project.description}
                        </motion.p>

                        <div className="mt-auto">
                          {project.hasAppLink && (
                            <ProjectButton
                              href={project.appLink}
                              text="View Application"
                              mode={mode}
                            />
                          )}
                          <ProjectButton
                            href={project.gitLink}
                            text="View Repo"
                            mode={mode}
                          />

                          <motion.div
                            {...fadeInDelayed(0.4)}
                            className="flex gap-2 flex-wrap justify-center items-center mt-6"
                          >
                            {project.techStack.map((tech, techIndex) => (
                              <motion.p
                                key={`${index}-${techIndex}`}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 text-slate-800 rounded-full bg-gray-100 text-center font-semibold"
                              >
                                #{tech}
                              </motion.p>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  mode: PropTypes.string.isRequired,
};

ProjectButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Project;
