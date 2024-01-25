import React from 'react'
import tricket from '../img/tricket.jpg'
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { gsap } from 'gsap/gsap-core';
import { color } from '../utils/constants';

/**
 * 
 *TODO: FIX BLACK ON BUTTONS 
 */

const Project = ({ project, color }) => {

    const translateTechStack = (tech) => {
        switch (tech) {
            case "react": return <FaReact color={color} size={"25px"} />;
            case "mongodb": return <SiMongodb color={color} size={"25px"} aria-label="MongoDB" />;
            case "express": return <SiExpress color={color} size={"25px"} />;
            case "bootstrap": return <BsBootstrap color={color} size={"25px"} />;
            case "javascript": return <IoLogoJavascript color={color} size={"25px"} />;
            default: break;
        }
    }

    const onEnter = ({ currentTarget }) => {

        gsap.to(currentTarget, {
            backgroundColor: currentTarget.classList.contains('color') ? 'black' : color,
            duration: 0.35,
            ease: 'power4.out',
        })
    }

    const onLeave = ({ currentTarget }) => {
        console.log(currentTarget)
        gsap.to(currentTarget, {
            backgroundColor: currentTarget.classList.contains('color') ? color : 'black',
            duration: 0.35,
            ease: 'power4.out',
        })
    }


    return (
        <div className="project-reveal flex flex-col bg-zinc-900 border-2 border-zinc-600 rounded-lg p-6 gap-4 lg:flex-row lg:gap-16">
            <div className='basis-1/2 flex flex-col pl-4 border-l-2 gap-6 justify-between'
                style={{ borderColor: color }}
            >
                <div className='text-4xl font-bold'>{project.title}</div>
                <div className='text-2xl font-semibold'>{project.oneLiner}</div>
                <div className='text-lg font-medium'>{project.description}</div>
                <div className='flex flex-row gap-2 items-center font-semibold lg:text-xl'>
                    <span>Built with: </span>
                    {project.techStack.map((tech, index) => {
                        return translateTechStack(tech);
                    })}
                </div>
                <div className='flex gap-4 h-16 lg:h-12'>
                    <button className='w-full font-bold text-lg p-2 bg-zinc-950 rounded-lg border-2'
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
                        style={{ borderColor: color }}
                    >
                        <a href={project.github} className='no-underline' target='_blank' rel='noreferrer'>Github</a>
                    </button>
                    <button className='color w-full font-bold text-lg p-2 rounded-lg border-2'
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
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