import React from 'react'
import styled from 'styled-components'
import Card from './Card'


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

const ProjectHeading = styled.h1`

`
const ProjectHead = styled.h1`

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