import React, { useRef } from "react";
import Navbar from "./Navbar";
import Grid from "./Grid";
import { useColor } from "./ColorContext";
import { colorUtils } from "../utils/colorUtils";
import HeroSocial from "./HeroSocial";
import HeroTitle from "./HeroTitle";
import { motion } from "framer-motion";

const Hero = () => {
  const container = useRef();
  const { primaryColor } = useColor();

  const gradientStyle = {
    background: `linear-gradient(to right, ${primaryColor}, ${colorUtils.lightHex(primaryColor)})`,
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-between gap-8 px-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      <motion.main className="z-0 h-full lg:w-8/12 gap-16 flex flex-col items-center justify-center lg:justify-between lg:flex-row">
        <motion.section
          className="flex flex-col gap-12 justify-center items-center lg:items-start"
          ref={container}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <HeroTitle primaryColor={primaryColor} />
          </motion.div>

          <motion.h2
            className="inline-block text-zinc-100 text-2xl font-bold px-2 py-0.5 rounded-md leading-10"
            style={gradientStyle}
            variants={itemVariants}
          >
            Junior Developer
          </motion.h2>

          <motion.div className="reveal flex gap-8" variants={itemVariants}>
            <HeroSocial />
          </motion.div>
        </motion.section>
        <motion.article className="mt-24 lg:mt-0" variants={itemVariants}>
          <Grid />
        </motion.article>
      </motion.main>
    </motion.div>
  );
};

export default Hero;
