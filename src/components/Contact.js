import React from 'react'
import styled from 'styled-components'
import { color } from '../utils/constants'


const Section = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	padding: 5rem;
	height: fit-content;
    @media only screen and (max-width: 768px) {
		height: fit-content;
		min-height: 100%;
    }
	@media only screen and (max-width: 1024px) {
		scroll-snap-align: none;
	}
`

const Container = styled.div`
    height: 50vh;
    width: 1400px;
    display: flex;
    align-items: flex-start;	
	justify-content: center;
	
	@media only screen and (max-width: 768px) {
	   width: 100%;
    }
`

const Wrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	height: 100%;
	width: 82%;
	gap: 2rem;
`

const Title = styled.div`
	font-size: 62px;
	font-weight: bold;
    line-height: 5rem;
`

const Left = styled.div`
	border: 2px solid ${color.primaryPurple};
	border-radius: 1rem;
	background-color: ${color.primaryBlack};
	padding: 1rem;
	flex-grow: 1;
	
	height: 100%;
`

const Subtitle = styled.div`

`

const Right = styled.div`
	background: linear-gradient(90deg, ${color.gradientPurple} 0%, ${color.primaryPurple} 100%);
	padding: 1rem;
	height: 100%;
	flex-grow: 2;
`

const EmailBox = styled.div`
	display: flex;
	background-color: ${color.primaryBlack};
	border: 2px solid ${color.primaryWhite};
    border-radius: 0.5rem;
	padding: 1rem;
`

const EmailAddress = styled.div`
`


const Contact = () => {

	return (
		<Section>
			<Container>
				<Wrap>
					<Left>
						<Title>Contact Me</Title>
						<Subtitle>
							Feel free to reach out if you have any questions, want to discuss a potential project,
							or simply share ideas or suggestions — Open for opportunities and ready to discuss
							your unique web development needs.
						</Subtitle>
					</Left>
					<Right>
						FORM
					</Right>
					
					
					
				</Wrap>
			</Container>
		</Section>
	)
}

export default Contact