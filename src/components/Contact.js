import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { colorUtils } from '../utils/colorUtils'
import { useColor } from './ColorContext'
import ContactForm from './ContactForm'
import { Draggable } from 'gsap/all'
import ShapeMaker from './ShapeMaker'

gsap.registerPlugin(Draggable)


const Contact = () => {
	useEffect(() => {
		Draggable.create('.ball', {
			bounds: '.c',
			throwProps: true,		
		})
	}, [])
	/**
	 * TODO: appropriate the ball animation for smaller screens
	 */
	const { primaryColor } = useColor();
	const ball = useRef();
	const [animation, setAnimation] = useState(0);
	
	const textShadow = {
		textShadow: `7px 4px 15px ${primaryColor}`,
		color: primaryColor
	}
	const ballStyle = {
		background: `linear-gradient(to right, ${primaryColor}, ${colorUtils.lightHex(primaryColor)})`,
	}

	const handleEndAnimation = () => {
		setAnimation(animation + 1);
	}
	useGSAP(() => {
		gsap.to(".ball", {
			x: colorUtils.getRandom(0, 500),
			y: colorUtils.getRandom(0, 220),
			duration: (colorUtils.getRandom(5, 14) / 10),
			ease: "power4.out",
			onComplete: handleEndAnimation
		})
	}, [animation])

	return (
		<section className='c flex items-center justify-center px-10 lg:my-12'>
			<div className='lg:w-8/12'>
				<div className='flex flex-col lg:flex-row lg:gap-28'>
					<article className='flex flex-col gap-8 lg:basis-2/5'>
						<h2 className='text-5xl text-left font-bold md:text-6xl'>Contact Me</h2>
						<p className='font-bold text-left text-xl text-wrap'>
							Feel free to reach out if you want to&nbsp;
							<span style={textShadow}>
								discuss a project, share ideas or make suggestions&nbsp;
							</span>
						</p>
						<p className='font-bold text-left text-xl text-wrap'>
							<span style={textShadow}>
								Open for work opportunities&nbsp;
							</span>
							and ready to discuss your unique web development needs.
						</p>
						
						<ShapeMaker color={primaryColor}/>
						<div ref={ball} className='ball w-8 h-8 rounded-full' style={ballStyle} />
						
					</article>
					<article className='lg:basis-3/5'>
						<ContactForm color={primaryColor} />
					</article>
				</div>
			</div>
		</section>
	)
}

export default Contact