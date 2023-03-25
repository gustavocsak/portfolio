import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const LetterAnimate = ({ letter }) => {
  return (
    <motion.span
      whileHover={{
        color: "rgb(193, 51, 255)",
        transition: {
           
            duration: 0.2
        }
      }}
    >
      {letter}
    </motion.span>
  );
};

export default LetterAnimate;
