import React, { useLayoutEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { color } from '../utils/constants'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'

/**
 * TODO: implement captcha?
 * TODO: animate
 */

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
		margin-top: 5rem;
    }
	@media only screen and (max-width: 1024px) {
		scroll-snap-align: none;
		margin-bottom: 5rem;
	}
`

const Container = styled.div`
    height: 100%;
    width: 1400px;
    display: flex;
    align-items: flex-start;	
	justify-content: center;
	
	@media only screen and (max-width: 1024px) {
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
	@media only screen and (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
`

const Title = styled.div`
	font-size: 62px;
	font-weight: bold;
    line-height: 5rem;
	@media only screen and (max-width: 1024px) {
		text-align: center;
		
	}
`

const Left = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex-grow: 1;
	height: 100%;
	max-width: 500px;
	@media only screen and (max-width: 1024px) {
		justify-content: center;
		align-items: center;
		max-width: none;
		gap: 2rem;
	}
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
	@media only screen and (max-width: 1024px) {
		width: 100%;
		
	}
`

const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2.5rem;
	position: relative;
`

const InputLabel = styled.label`
	font-weight: 600;
	font-size: 20px;
	color: ${color.primaryWhite};
	
	
`

const borderBottomAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Input = styled.input`
	padding: 0.5rem;
	font-size: 1rem;
	color: ${color.primaryWhite};
	// background-color: ${color.primaryBlack};
	background: rgba(0,0,0,0);
	border: none;
	border-bottom: 2px solid ${color.primaryWhite};
	width: 100%;
	box-sizing: border-box;
	outline: none;
	transition: border-bottom 0.3s ease;

  &:focus {
    border-bottom: 2px solid ${color.primaryPurple};
    animation: ${borderBottomAnimation} 0.5s ease;
  }

`

const Subtitle = styled.div`
  	font-size: 18px;
	line-height: 1.5rem;
	color: ${color.primaryWhite};
	font-weight: 600;
	@media only screen and (max-width: 1024px) {
		text-align: center;
		
	}
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
	@media only screen and (max-width: 1024px) {
		width: 100%;
		
	}
`

const Button = styled.button`
  	cursor: pointer;
	overflow: hidden;
	border: 0;
	padding: 0;
	height: 4rem;
	border-radius: 10px;
	color: ${color.primaryWhite};
	background-color: ${color.primaryBlack};
	border: 2px solid ${color.primaryPurple};
	font-weight: bold;
	font-size: 22px;
`


const Contact = () => {

	/**
	 * TODO: appropriate the ball animation for smaller screens
	 * TODO: fix text spacing?
	 */

	const ball = useRef();
	const [animation, setAnimation] = useState(0);

	const handleEndAnimation = () => {
		setAnimation(animation + 1);
	}

	const getRandom = (min, max) => {
		return Math.random() * (max - min) + min;
	}

	useGSAP(() => {
		gsap.to(".ball", {
			x: getRandom(0, 500),
			y: getRandom(0, 220),
			duration: (getRandom(5, 14) / 10),
			ease: "power4.out",
			onComplete: handleEndAnimation
		})
	}, [animation])

	const onEnter = ({ currentTarget }) => {
		gsap.to(currentTarget, {
			backgroundColor: color.primaryPurple,
			scale: 1.02,
			duration: 0.2
		})
	}

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, {
			backgroundColor: color.primaryBlack,
			scale: 1,
			duration: 0.2,
		})
	}

	return (
		<div className='flex items-center justify-center px-10'>
			<div className='w-10/12'>
				<div className='flex flex-col lg:flex-row lg:gap-32'>
					<div className='flex flex-col gap-8 lg:basis-2/5'>
						<div className='text-6xl text-center font-bold lg:text-left'>Contact Me</div>
						<div className='font-bold text-center text-xl lg:text-left'>

							Feel free to reach out if you want to&nbsp;
							<span className='text-shadow'>
								discuss a project,share ideas or make suggestions&nbsp;
							</span>
							—
							<span className='text-shadow'>
								&nbsp;Open for work opportunities&nbsp;
							</span>
							and ready to discuss your unique web development needs.
						</div>
						<div className='w-12'>
							<Ball ref={ball} className='ball' />
						</div>
					</div>
					<div className='lg:basis-3/5'>
						<form className='flex flex-col'>
							<div className='flex flex-col gap-2 mb-12'>
								<label className='font-semibold text-lg leading-6 text-zinc-100' htmlFor='name'>Name</label>
								<input className='rounded-lg p-2.5 text-zinc-100 border-0
												 bg-zinc-900 ring-inset ring-1 ring-zinc-600
								 				focus:ring-primary focus:ring-2 focus:ring-inset focus:outline-none'
										type='text' id='name' name='name'></input>

							</div>
							<div className='flex flex-col gap-2 mb-12'>
								<label className='font-semibold text-lg leading-6 text-zinc-100' htmlFor='email'>Email</label>
								<input className='rounded-lg p-2.5 text-zinc-100 border-0
												 bg-zinc-900 ring-inset ring-1 ring-zinc-600
								 				focus:ring-primary focus:ring-2 focus:ring-inset focus:outline-none'
										type='email' id='email' name='email'></input>

							</div>
							<div className='flex flex-col gap-2 mb-12'>
								<label className='font-semibold text-lg leading-6 text-zinc-100' htmlFor='message'>Message</label>
								<textarea className='rounded-lg p-2.5 text-zinc-100 border-0 h-32
												 bg-zinc-900 ring-inset ring-1 ring-zinc-600
								 				focus:ring-primary focus:ring-2 focus:ring-inset focus:outline-none'
										type='textarea' id='message' name='message'></textarea>
							</div>
							<div className='flex flex-col gap-2 mb-12'>
								<button className='w-full h-16 bg-zinc-900 rounded-lg hover:bg-primary
												  ring-2 ring-primary text-xl font-semibold
												  transition duration-200 ease-in-out'>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact