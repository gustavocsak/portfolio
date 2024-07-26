import React from 'react'
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiPrisma, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { useColor } from './ColorContext'

const ProjectTech = ({ techStack }) => {
    const { primaryColor } = useColor()

    const translateTechStack = (tech, index) => {
        switch (tech) {
            case "react":
                return <FaReact key={index} color={primaryColor} size={"25px"} aria-label='React'/>;
            case "express":
                return <SiExpress k ey={index} color={primaryColor} size={"25px"} aria-label='Express'/>;
            case "mongodb":
                return <SiMongodb key={index} color={primaryColor} size={"25px"} aria-label="MongoDB" />;
            case "bootstrap":
                return <BsBootstrap key={index} color={primaryColor} size={"25px"} aria-label='Bootstrap'/>;
            case "javascript":
                return <IoLogoJavascript key={index} color={primaryColor} size={"25px"} aria-label='Javascript'/>;
            case "next":
                return <SiNextdotjs key={index} color={primaryColor}  size={"25px"} aria-label='Next.js'/>;
            case "tailwind":
                return <SiTailwindcss key={index} color={primaryColor}  size={"25px"} aria-label='Tailwind'/>;
            case "prisma":
                return <SiPrisma key={index} color={primaryColor}  size={"25px"} aria-label='Prisma'/>;
            default: break;
        }
    }


    return (
        <>
            <span>Built with: </span>
            {techStack.map((tech, index) => {
                return translateTechStack(tech, index);
            })}
        </>
    )
}

export default ProjectTech
