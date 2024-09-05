import React from 'react'
import tricket from '../img/tricky.png'
import { onEnter, onLeave } from '../utils/constants';
import ProjectTech from './ProjectTech';

const Project = ({ project, color }) => {

    const image = require(`../img/${project.image}`)

    return (
        <article className="basis-1/2 project-reveal flex flex-col border-2 border-gray-700 rounded-lg p-6 gap-4 lg:flex-row lg:gap-16">
            <section className='basis-1/2 flex flex-col pl-0 pt-4 border-t-2 gap-6 justify-between lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-4'
                style={{ borderColor: color }}
            >

                <h3 className='text-4xl font-bold'>{project.title}</h3>


                <h4 className='text-2xl font-semibold'>{project.oneLiner}</h4>
                <p className='text-lg font-medium'>{project.description}</p>
                <div className='flex flex-row gap-2 items-center font-semibold lg:text-xl'>
                    <ProjectTech techStack={project.techStack} />
                </div>
                <div className='flex gap-4 h-16 lg:h-12'>
                    <a href={project.github} className='no-underline w-full' target='_blank' rel='noreferrer'>
                        <button className='w-full font-bold text-lg p-2 bg-gray-950 rounded-lg border-2'
                            onMouseEnter={(e) => onEnter(color, e, true)}
                            onMouseLeave={(e) => onLeave(e, color, true)}
                            style={{ borderColor: color }}
                        >
                            Github
                        </button>
                    </a>


                    <a className='no-underline w-full' href={project.liveSource} target='_blank' rel='noreferrer'>
                        <button className='color w-full font-bold text-lg p-2 rounded-lg border-2'
                            onMouseEnter={(e) => onEnter(color, e, true)}
                            onMouseLeave={(e) => onLeave(e, color, true)}
                            style={{ background: color, borderColor: color }}
                        >
                            Live
                        </button>
                    </a>

                </div>
            </section>
            <div className='flex basis-1/2 items-center'>
                <img className='rounded-lg' src={image} alt='Project interface preview' />
            </div>
        </article>
    )
}

export default Project