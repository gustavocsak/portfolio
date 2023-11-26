import React from 'react'
import styled from 'styled-components'
// import Card from './Card'
import NewCard from './NewCard'

/**
 * TODO: fix live source URL for projects array
 */

const projects = [
	{
		title: "Tricket",
		oneLiner: "Tricket is a ticket tracking system.",
		description: `Web application that allows you to create, update, delete and track tickets/tasks for your various projects.
					 Tricket makes you more productive by giving you a view of your tasks and tickets that needs to be worked on.`,
		techStack: ["bootstrap", "react", "express", "mongodb"],
		liveSource: "tricket",
		github: "https://github.com/gustavocsak/tricket",
		image: "tricket.jpg"
	},
	{
		title: "cornerBet",
		oneLiner: "cornerBet is an automated bot for scrapping socccer matches and making predictions.",
		description: `Automated script to scrape soccer matches statistics and make predictions for possible end time corners.
					cornerBet is built using javascript and powered by cheerio, a library for parsing and manipulating HTML and XML, future updates
					will include a web version showing prediction statistics and live match tracking.`,
		techStack: ["javascript", "mongodb"],
		liveSource: "cornerbet",
		github: "https://github.com/gustavocsak/cornerbet",
		image: "cornerbet.jpg"
	},

]


const Section = styled.div`
  	/* height: 100vh; */
  	//scroll-snap-align: center; 
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
    /* scroll-snap-align: center; // does not align to hero container, liked better this way */
    width: 1400px;
    display: flex;
	align-items: center;
	justify-content: center;
    
    @media only screen and (max-width: 768px) {
       /* height: auto; */
	   width: 100%;
	   
		
    }
`

const ProjectDisplay = styled.div`
	margin-top: 8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10rem;

	@media only screen and (max-width: 768px) {
        flex-direction: column;
		
    }
`



const Projects = () => {
	return (
		<Section>

			<Container>

				<ProjectDisplay>
					<NewCard />
					<NewCard />
					<NewCard />
				</ProjectDisplay>

			</Container>
		</Section>
	)
}

export default Projects