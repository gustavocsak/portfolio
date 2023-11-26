import React from 'react'
import styled from 'styled-components'
// import Card from './Card'
import NewCard from './NewCard'


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