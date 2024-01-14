import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import LetterAnimate from '../utils/LetterAnimate'
import Cube from './Cube'



const titleLetter = ['M', 'e']


const Section = styled.div`
    /* height: 100vh;
    scroll-snap-align: center; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	@media only screen and (max-width: 768px) {
		height: fit-content;
		min-height: 100vh;
		margin-top: 5rem;
		text-align: center;
    }
	@media only screen and (max-width: 1024px) {
		scroll-snap-align: none;
	}    
`

const Container = styled.div`
    height: 100%;
    width: 1400px;
    display: flex;
	justify-content: space-around;
	align-items: center;
    
	@media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        justify-content: center; 
    }
    
`

const ContactHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8%;
`

const Title = styled(motion.div)`
    font-size: 62px;
`

const FormTitle = styled.div`
	font-size: 2.5rem;
	font-weight: bold;
`

const FormSubtitle = styled.div`
	font-size: 1.1rem;
	font-weight: bold;
`

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media only screen and (max-width: 768px) {
        text-align: left;
    }
`

const FormLine = styled.div`
	display: flex;
	margin-top: 2rem;
	gap: 2rem;
	@media only screen and (max-width: 768px) {
        flex-direction: column;
    }
	
`

const Input = styled.input`
	padding: 10px 15px;
	border-radius: 5px;
	border: 1px solid #E2E1E5;
	background: #FFF;
`

const MessageInput = styled.textarea`
	padding: 10px 15px;
	border-radius: 5px;
	border: 1px solid #E2E1E5;
	background: #FFF;
	height: 5rem;
`

const ContactForm = styled.div`
    background: rgba( 25, 23, 23, 0.7 );
    background: linear-gradient(90deg, rgba(177,0,255,0.8) 0%, rgba(193,51,255,0.8) 100%);
    box-shadow: 0 8px 32px 0 rgb(193, 51, 255, 0.37);
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
	margin: 1rem;
    padding: 1.5rem;
	height: 80%;
	@media only screen and (max-width: 768px) {
        width: 80%;
        margin: 2rem;
		margin-bottom: 5rem;
    }
    

`

// const Title = styled.div`
// 	font-size: 62px;
// 	font-weight: bold;
// 	transform: translateY(115px);
//     transition: transform .5s;
// `


const InputLabel = styled.label`
	margin-bottom: 3px;
`

const Contact = () => {

	return (
		<Section>
			<Container>
				<ContactHeader>
					<Title>Contact Me</Title>
				</ContactHeader>
				<ContactForm>
					<form>
						<FormTitle>Get in touch</FormTitle>
						<FormSubtitle>Some subtitle here and there some texty text</FormSubtitle>
						<FormLine>
							<FormGroup>
								<InputLabel for="fname">First Name</InputLabel>
								<Input type="text" id="fname" placeholder="First Name"/>
							</FormGroup>
							<FormGroup>
								<InputLabel for="lname">Last Name</InputLabel>
								<Input type="text" id="lname"/>
							</FormGroup>
						</FormLine>
						<FormLine>
							<FormGroup>
								<InputLabel for="email">Email</InputLabel>
								<Input type="email" id="email"/>
							</FormGroup>
						</FormLine>
						<FormLine>
							<FormGroup>
								<InputLabel for="message">Message</InputLabel>
								<MessageInput type="email" id="email"/>
							</FormGroup>
						</FormLine>
						
						
					</form>
				</ContactForm>
			</Container>
		</Section>
	)
}

export default Contact