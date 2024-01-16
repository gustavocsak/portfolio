import React from 'react'
import styled from 'styled-components'
import { color } from '../utils/constants'


const Section = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	padding: 5rem;
	background-color: ${color.primaryPurple};
	clip-path: polygon(0 35%,100% 0,100% 100%,0 100%);
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
    flex-direction: row;
	
	justify-content: center;
	
	@media only screen and (max-width: 768px) {
	   width: 100%;
    }
`

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`

const Title = styled.div`
	font-size: 62px;
	font-weight: bold;
    line-height: 5rem;
`

const EmailBox = styled.div`
	background-color: ${color.primaryBlack};
	border: 2px solid ${color.primaryWhite};
    border-radius: 0.5rem;
	padding: 1rem;
`


const Contact = () => {

	return (
		<Section>
			<Container>
				<Wrap>
					<Title>Contact Me</Title>
					
					<EmailBox>gustavocsak@gmail.com</EmailBox>
				</Wrap>
			</Container>
		</Section>
	)
}

export default Contact