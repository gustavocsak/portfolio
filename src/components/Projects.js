import React, { useRef } from 'react'
import Project from './Project'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useColor } from './ColorContext';
import { projects } from '../utils/constants';

/**
 * TODO: fix live source URL for projects array
 * TODO: move projects data to a separate js file
 * TODO: try it out with the 3d project card?
 */

const Projects = () => {
	const { primaryColor } = useColor();
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(".title-reveal", {
			scrollTrigger: {
				trigger: ".project-section",
				start: "top 90%",
				end: "+=200",
				scrub: true,
				once: true,
			},
			y: 0,
			duration: 0.5,
			ease: "power4.out"
		})
		
		
		let projectClips = gsap.utils.toArray(".project-clip")
		projectClips.forEach((clip) => {
			let eachProject = clip.querySelectorAll(".project-reveal")
			gsap.to(eachProject, {
				y: 0,
				duration: 0.5,
				scrollTrigger: {
					trigger: clip, 
					start: "top 90%"
				}
			})
		})

		
	}, []);

	const clip = useRef();  

	return (
		<section id='projects' className='flex items-center justify-center px-10 project-section mt-16'>
			<div className='lg:w-8/12'>
				<div className='flex flex-col gap-8'>
					<div className='clip leading-10'>
						<div className="title-reveal text-5xl font-bold leading-tight lg:text-6xl lg:leading-tight">
							Projects
						</div>
					</div>
					<div className='flex flex-col gap-8'>
						{projects.map((project, index) => {
							return (
						
								<div 
									ref={clip} 
									className='project-clip clip'
									key={index}
								>
									<Project color={primaryColor} project={project} key={index} />
								</div>
							
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects