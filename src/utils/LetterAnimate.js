import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const LetterAnimate = ({ letter, time }) => {
  return (
    <motion.span
      
      animate={{
        color: ["rgb(255,255,255)", "rgb(193, 51, 255)", "rgb(255,255,255)"],
        transition: {
            repeat: Infinity,
            duration: 5
        }
      }}
      
      whileHover={{
        color: "rgb(193, 51, 255)",
        transition: {
            
            duration: 0.1
        },
       
      }}
    >
      {letter}
    </motion.span>
  );
};

export default LetterAnimate;
