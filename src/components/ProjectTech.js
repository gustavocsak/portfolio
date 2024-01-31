import React from 'react'
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { useColor } from './ColorContext'

const ProjectTech = ({ techStack }) => {
    const { primaryColor } = useColor()

    const translateTechStack = (tech, index) => {
        switch (tech) {
            case "react":
                 return <FaReact key={index} color={primaryColor} size={"25px"} />;
            case "express":
                 return <SiExpress k    ey={index} color={primaryColor} size={"25px"} />;
            case "mongodb":
                 return <SiMongodb key={index} color={primaryColor} size={"25px"} aria-label="MongoDB" />;
            case "bootstrap":
                 return <BsBootstrap key={index} color={primaryColor} size={"25px"} />;
            case "javascript":
                 return <IoLogoJavascript key={index} color={primaryColor} size={"25px"} />;
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
