import React, { useRef } from "react";
import Project from "./Project";
import { useColor } from "./ColorContext";
import { projects } from "../utils/constants";
import { motion } from "framer-motion";

/**
 * TODO: fix live source URL for projects array
 * TODO: move projects data to a separate js file
 * TODO: try it out with the 3d project card?
 */

const Projects = () => {
  const { primaryColor } = useColor();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="flex items-center justify-center px-10 project-section mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="lg:w-8/12">
        <div className="flex flex-col gap-8">
          <motion.div className="leading-10" variants={titleVariants}>
            <div className="text-5xl font-bold leading-tight lg:text-6xl lg:leading-tight">
              Projects
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => {
              return (
                <Project color={primaryColor} project={project} key={index} />
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
