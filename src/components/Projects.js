import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Project from './Project'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { color } from '../utils/constants';
/**
 * TODO: fix live source URL for projects array
 * TODO: move projects data to a separate js file
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

const Section = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	padding: 5rem;
    @media only screen and (max-width: 768px) {
		height: fit-content;
		min-height: 100%;
    }
	@media only screen and (max-width: 1024px) {
		scroll-snap-align: none;
	}
`

const Container = styled.div`
    height: 100%;
    width: 1400px;
    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 768px) {
	   width: 100%;
    }
`

const ProjectDisplay = styled.div`
	margin-top: 5rem;
	display: flex;
	width: 82%;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	gap: 4.5rem;
	
`

const Title = styled.div`
	font-size: 62px;
	font-weight: bold;
	transform: translateY(115px);
    transition: transform .5s;
`

const TitleClip = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    line-height: 5rem;
	
`

const ProjectList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 6rem;
	overflow: hidden;
`

const ProjectClip = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	transform-style: preserve-3d;
	perspective: 1000px;
	overflow: hidden;
`

const Glare = styled.div`
	position: absolute;
	width: 220px;
	height: 220px;
	border-radius: 50%;
	background-color: ${color.primaryPurple};
	filter: blur(220px);
	opacity: 0;
	pointer-events: none;
`


const Projects = () => {

	useLayoutEffect(() => {
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
			duration: 0.6,
			ease: 'power2.out'
		})	
	})

	return (
		<Section className="project-section">
			<Container>
				<ProjectDisplay className="projects">
					<TitleClip>
						<Title className="title-reveal">Projects</Title>
					</TitleClip>
					<ProjectList>
						{projects.map((project, index) => {
							return (
						
							<ProjectClip ref={clip} onMouseLeave={onLeave} onMouseMove={onMove} className='project-clip'>
								<Glare className='glare'/>
								<Project  project={project} key={index} />
							</ProjectClip>
							
							)
						})}
					</ProjectList>
				</ProjectDisplay>

			</Container>
		</Section>
	)
}

export default Projects