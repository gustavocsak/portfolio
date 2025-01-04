import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { MdOutlineColorLens } from "react-icons/md";
import { useColor } from "./ColorContext";
import { colorUtils } from "../utils/colorUtils";
import { onEnter, onLeave } from "../utils/constants";
import resume from "../static/gustavo-resume.pdf";
import { motion } from "framer-motion";

const Navbar = ({ navRef }) => {
  const { primaryColor, setPrimaryColor } = useColor();
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const gradientStyle = {
    background: `linear-gradient(to right, ${primaryColor}, ${colorUtils.lightHex(primaryColor)})`,
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleColorPickerClick = () => {
    setColorPickerVisible(!colorPickerVisible);
  };

  const handleColorChange = (color) => {
    setPrimaryColor(color);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setColorPickerVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <motion.nav
      className="w-full flex justify-center z-10"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div
        className="lg:w-10/12 flex justify-between items-center py-4 w-full"
        ref={navRef}
      >
        <div className="flex items-center gap-6">
          <div className="font-bold text-2xl">gustavocs</div>
          <ul className="hidden lg:flex lg:gap-6 list-none">
            {/* TODO: make it smooth scroll */}
            <li className="cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="p-2.5 rounded-lg px-4"
            style={gradientStyle}
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <button
            onClick={handleColorPickerClick}
            type="button"
            className="flex justify-center border-2 border-zinc-600 rounded-lg p-0.5"
          >
            <MdOutlineColorLens
              onMouseEnter={(e) => onEnter(primaryColor, e)}
              onMouseLeave={onLeave}
              size={36}
            />
          </button>
          {colorPickerVisible && (
            <div className="absolute top-full right-0 ">
              <HexColorPicker
                className="color-picker"
                color={primaryColor}
                onChange={handleColorChange}
                style={{ zIndex: 1000 }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
