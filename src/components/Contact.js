import React, { useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { color } from '../utils/constants'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'


const Section = styled.div`
	display: flex;
	height: 60vh;
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
	gap: 7rem;
	// border: 2px solid ${color.primaryPurple};
	// border-radius: 1rem;
`

const Title = styled.div`
	font-size: 62px;
	font-weight: bold;
    line-height: 5rem;
`

const Left = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex-grow: 1;
	height: 100%;
	max-width: 500px;
	
`

const BallContainer = styled.div`
	margin-top: 2rem;
`

const Ball = styled.div`
	width: 30px;
	height: 30px;
	-webkit-box-shadow: 0px 3px 17px 1px ${color.primaryPurple};
	-moz-box-shadow: 0px 3px 17px 1px ${color.primaryPurple};
	box-shadow: 0px 3px 17px 1px ${color.primaryPurple};
	border-radius: 50%;
	background: linear-gradient(90deg, rgba(177,0,255,1) 0%, ${color.primaryPurple} 0%);
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
`	

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 4rem;
	position: relative;
`

const InputLabel = styled.label`
	font-weight: 600;
	font-size: 20px;
	color: ${color.primaryWhite};
	
	
`

const Input = styled.input`
	padding: 0.5rem;
	font-size: 1rem;
	color: ${color.primaryWhite};
	background-color: ${color.primaryBlack};
	border: none;
	border-bottom: 2px solid ${color.primaryPurple};
	width: 100%;
	box-sizing: border-box;
	outline: none;
`

const Subtitle = styled.div`
	line-height: 1.5rem;
	color: ${color.primaryWhite};
	
	font-weight: 600;
`

const Highlight = styled.span`
	color: ${color.primaryPurple};
	text-shadow: 7px 4px 15px ${color.primaryPurple};
`

const Right = styled.div`
	
	border-radius: 1rem;
	margin-top: 1rem;
	height: 100%;
	flex-grow: 3;
`

const FocusInputBorder = styled.span``


const EmailAddress = styled.div`
`


const Contact = () => {

	const ball = useRef();
	const [animation, setAnimation] = useState(0);

	const handleEndAnimation = () => {
		console.log('test')
		setAnimation(animation + 1);
	}

	const getRandom = (min, max) => {
		return Math.random() * (max - min) + min;
	}

	useGSAP(() => {
			
		gsap.to(".ball", {
			x: getRandom(0,500),
			y: getRandom(0,220),
			duration: (getRandom(5,14)/10),
			ease: "power4.out",
			
			onComplete: handleEndAnimation
			
		})
	
	}, [animation])
	
	
	  
	

	return (
		<Section>
			<Container>
				<Wrap>
					<Left>
						<Title>Contact Me</Title>
						<Subtitle>

							Feel free to reach out if you want to <Highlight>discuss a project,
							share ideas or make suggestions</Highlight> — 
							<Highlight> Open for work opportunities </Highlight>
							and ready to discuss your unique web development needs.
						</Subtitle>
						<BallContainer>
							<Ball ref={ball} className='ball'/>
						</BallContainer>
					</Left>
					<Right>
						<Form>
							<InputGroup>
								<InputLabel htmlFor='name'>Name</InputLabel>
								<Input type='text' id='name' name='name'></Input>
								<FocusInputBorder />
							</InputGroup>
							<InputGroup>
								<InputLabel>email</InputLabel>
								<Input type='email'></Input>
								<FocusInputBorder />
							</InputGroup>
							<InputGroup>
								<InputLabel>message</InputLabel>
								<Input type='text'></Input>
								<FocusInputBorder />
							</InputGroup>
							
						</Form>
					</Right>
				</Wrap>
			</Container>
		</Section>
	)
}

export default Contact