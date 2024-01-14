import React from "react";
import { motion } from "framer-motion";
import { color } from "./constants"

/**
 * TODO: change animation to gsap
 */

const LetterAnimate = ({ letter, time }) => {
  return (
    <motion.span
      
      animate={{
        color: [color.primaryWhite, color.primaryPurple, color.primaryWhite],
        transition: {
            repeat: Infinity,
            duration: 3
        }
      }}
      
      whileHover={{
        color: color.primaryPurple,
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
