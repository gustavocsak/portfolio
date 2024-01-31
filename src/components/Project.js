import React from 'react'
import tricket from '../img/tricket.jpg'
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { onEnter, onLeave } from '../utils/constants';
import ProjectTech from './ProjectTech';

const Project = ({ project, color }) => {

    const translateTechStack = (tech, index) => {
        switch (tech) {
            case "react": return <FaReact key={index} color={color} size={"25px"} />;
            case "mongodb": return <SiMongodb key={index} color={color} size={"25px"} aria-label="MongoDB" />;
            case "express": return <SiExpress key={index} color={color} size={"25px"} />;
            case "bootstrap": return <BsBootstrap key={index} color={color} size={"25px"} />;
            case "javascript": return <IoLogoJavascript key={index} color={color} size={"25px"} />;
            default: break;
        }
    }

    return (
        <div className="basis-1/2 project-reveal flex flex-col bg-zinc-900 border-2 border-zinc-600 rounded-lg p-6 gap-4 lg:flex-row lg:gap-16">
            <div className='basis-1/2 flex flex-col pl-0 pt-4 border-t-2 gap-6 justify-between lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-4'
                style={{ borderColor: color }}
            >
                <div className='text-4xl font-bold'>{project.title}</div>
                <div className='text-2xl font-semibold'>{project.oneLiner}</div>
                <div className='text-lg font-medium'>{project.description}</div>
                <div className='flex flex-row gap-2 items-center font-semibold lg:text-xl'>
                    {/* <span>Built with: </span>
                    {project.techStack.map((tech, index) => {
                        return translateTechStack(tech, index);
                    })} */}
                    <ProjectTech techStack={project.techStack} />
                </div>
                <div className='flex gap-4 h-16 lg:h-12'>
                    <button className='w-full font-bold text-lg p-2 bg-zinc-950 rounded-lg border-2'
                        onMouseEnter={(e) => onEnter(color, e, true)}
                        onMouseLeave={(e) => onLeave(e, color, true)}
                        style={{ borderColor: color }}
                    >
                        <a href={project.github} className='no-underline' target='_blank' rel='noreferrer'>Github</a>
                    </button>
                    <button className='color w-full font-bold text-lg p-2 rounded-lg border-2'
                        onMouseEnter={(e) => onEnter(color, e, true)}
                        onMouseLeave={(e) => onLeave(e, color, true)}
                        style={{ background: color, borderColor: color }}
                    >
                        <a className='no-underline' href={project.liveSource} target='_blank' rel='noreferrer'>Live</a>
                    </button>
                </div>
            </div>
            <div className='flex basis-1/2 items-center'>
                <img className='rounded-lg' src={tricket} alt='Project interface preview' />
            </div>
        </div>
    )
}

export default Project