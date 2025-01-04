import React from "react";
import { useColor } from "./ColorContext";
import { motion } from "framer-motion";

import {
  PianoIcon as Cavaquinho,
  GraduationCap,
  Code,
  Music,
  BusIcon as SoccerBall,
  Gamepad,
} from "lucide-react";

const About = () => {
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

  const interests = [
    { icon: Cavaquinho, text: "Learning new instruments" },
    { icon: SoccerBall, text: "Watching and playing soccer" },
    { icon: Gamepad, text: "Gaming with friends" },
    // { icon: Music, text: "Exploring new instruments" },
  ];

  return (
    <motion.section
      className="flex items-center justify-center px-10 lg:my-12 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="lg:w-8/12">
        <motion.h2
          className="text-5xl font-bold text-left md:text-6xl mb-8"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="">
          <motion.div
            className="flex flex-col gap-6 text-left text-lg"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              <Code className="inline-block mr-2 text-zinc-400" />
              Currently working as a Computer Lab Assistant at Langara College,
              where I graduated with a Diploma in Computer Studies and a
              citation in Full Stack Web Development.
            </motion.p>
            <motion.p variants={itemVariants}>
              <GraduationCap className="inline-block mr-2 text-zinc-400" />
              Pursuing a bachelor's degree in Computer Science at Estácio
              University.
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
          >
            <motion.h3 className="text-2xl font-bold" variants={itemVariants}>
              Interests
            </motion.h3>
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <interest.icon className="text-zinc-400" />
                <span>{interest.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="mt-8 p-6 rounded-lg"
          style={{ backgroundColor: `${primaryColor}22` }}
          variants={itemVariants}
        >
          <p className="text-lg">
            Aside from coding, I really enjoy exploring new musical instruments.
            I'm currently learning how to play the{" "}
            <motion.a
              href="https://en.wikipedia.org/wiki/Cavaquinho"
              className="font-bold underline decoration-2 underline-offset-4 hover:decoration-zinc-50"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{ color: primaryColor }}
            >
              cavaquinho
            </motion.a>
            .
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

/**
<section className="flex items-center justify-center px-10 lg:my-12">
  <div className="lg:w-8/12">
    <div className="flex flex-col text-left text-wrap font-bold text-xl gap-8">
      <h2 className="text-5xl font-bold text-left md:text-6xl">About Me</h2>
      <p>
        Currently working as a&nbsp; Computer Lab Assistantat Langara
        College, where I graduated with a Diploma in Computer Studies and a
        citation in Full Stack Web Development.
      </p>
      <p>
        Pursuing a bachelor's degree in Computer Science at Estácio
        University.
      </p>
      <p>
        Aside from coding, I really enjoy exploring new musical instruments
        — I'm currently learning how to play the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Cavaquinho"
          className="underline decoration-2 underline-offset-4 hover:decoration-zinc-50"
          target="_blank"
          rel="noreferrer"
        >
          cavaquinho
        </a>
        — watching and playing soccer gaming with friends
      </p>
    </div>
  </div>
</section>





*/
