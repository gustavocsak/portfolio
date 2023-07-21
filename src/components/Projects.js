import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Container = styled.div`
    height: 100%;
    /* scroll-snap-align: center; // does not align to hero container, liked better this way */
    width: 1400px;
    display: flex;
	align-items: center;
	justify-content: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const ProjectDisplay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const Card = styled.div`
    background-color: rgba(44,45,47,255);
	margin: 1rem;

`

const Projects = () => {
  return (
    <Section>
      <Container>
		<ProjectDisplay>
			<Card>Test</Card>
			<Card>Test</Card>
			<Card>Test</Card>
		</ProjectDisplay>
		
      </Container>
    </Section>
  )
}

export default Projects