import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { gsap } from "gsap";

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
		oneLiner: "Automated bot for scrapping socccer matches and making predictions.",
		description: `Automated scrapper for soccer matches statistics and make predictions for possible end time corners.
					Built using javascript and powered by cheerio, a library for parsing and manipulating HTML and XML`,
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
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 7rem;
	

	@media only screen and (max-width: 768px) {
        flex-direction: column;
		
    }
`

const Title = styled.div`
	font-size: 50px;
	font-weight: bold;
	transform: translateY(115px);
    transition: transform .5s;
`

const TitleClip = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    line-height: 5rem;
	width: 80%;
`


const Projects = () => {

	gsap.to(".reveal", { scrollTrigger: ".projects", y: 0, duration: 0.5, ease: "power4.out" })

	return (
		<Section>
			<Container className="projects">
				<ProjectDisplay>
					<TitleClip >
						<Title className="reveal">Projects</Title>
					</TitleClip>
					{projects.map((project, index) => {
						return <Card project={project} />
					})}
				</ProjectDisplay>

			</Container>
		</Section>
	)
}

export default Projects