import React, { useRef } from 'react'
import Project from './Project'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * TODO: fix live source URL for projects array
 * TODO: move projects data to a separate js file
 * TODO: try it out with the 3d project card?
 */

const projects = [
	{
		title: "Tricket",
		oneLiner: "Ticket tracking system.",
		description: `Web application that allows you to create, update, delete and track tickets/tasks for your various projects.
					 Tricket makes you more productive by giving you a view of your tasks and tickets that needs to be worked on.`,
		techStack: ["bootstrap", "react", "express", "mongodb"],
		liveSource: "tricket",
		github: "https://github.com/gustavocsak/tricket",
		image: "tricket.jpg"
	},
	{
		title: "cornerBet",
		oneLiner: "Automated bot for scrapping socccer matches.",
		description: `Automated scrapper for soccer matches statistics and make predictions for possible end time corners.
					Built using javascript and powered by cheerio, a library for parsing and manipulating HTML and XML.`,
		techStack: ["javascript", "mongodb"],
		liveSource: "cornerbet",
		github: "https://github.com/gustavocsak/cornerbet",
		image: "cornerbet.jpg"
	},

]

const Projects = () => {

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
    const { contextSafe } = useGSAP({ scope: clip });
    const onMove = contextSafe((event) => {
		const projectCard = event.target.closest('.project-clip');
		const glare = projectCard.querySelector('.glare');
		const rect = projectCard.getBoundingClientRect();
        const width = rect.width;
		const height = rect.height;
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

        const rotateX =  -1 + (mouseY / height) * 2;
        const rotateY =  1.5 - (mouseX / width) * 3;

		gsap.to(glare, {
			x: mouseX - 80,
			y: mouseY - 80,
			opacity: 1,
			duration: 0.4,
			zIndex: 99,
		})
		if(projectCard) {
			gsap.to(projectCard, {
				rotationY: -5 * rotateY,
				rotationX: -5 * rotateX,
				ease: 'power2.out',
				duration: 0.5,
				perspective: 1000,
			});
		}
        
    })

	const onLeave = contextSafe((event) => {
		const projectCard = event.target.closest('.project-clip');
		const glare = projectCard.querySelector('.glare');
		gsap.to(projectCard, {
			rotationY: 0,
			rotationX: 0,
			ease: 'power2.out',
			duration: 0.7,
			perspective: 700,
		});
		gsap.to(glare, {
			opacity: 0,
			ease: 'power2.out'
		})	
	})

	return (
		<div className='flex items-center justify-center px-10 project-section mt-16'>
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
								onMouseLeave={onLeave} 
								onMouseMove={onMove} 
								className='project-clip clip glare-container'
							>
								<div className='glare absolute w-56 h-56 rounded-full
											    bg-primary blur-custom opacity-0 pointer-events-none'/>
								<Project  project={project} key={index} />
							</div>
							
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects