import React, { useRef, useState } from 'react'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { colorUtils } from '../utils/colorUtils'
/**
 * TODO: implement captcha?
 */

const Contact = () => {

	/**
	 * TODO: appropriate the ball animation for smaller screens
	 * TODO: fix text spacing?
	 * TODO: convert ball to tailwind
	 */

	const ball = useRef();
	const [animation, setAnimation] = useState(0);

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
		<div className='flex items-center justify-center px-10 lg:my-12'>
			<div className='lg:w-8/12'>
				<div className='flex flex-col lg:flex-row lg:gap-32'>
					<div className='flex flex-col gap-8 lg:basis-2/5'>
						<div className='text-5xl text-left font-bold md:text-6xl'>Contact Me</div>
						<div className='font-bold text-left text-xl text-wrap'>

							Feel free to reach out if you want to&nbsp;
							<span className='text-shadow'>
								discuss a project,<br />share ideas or make suggestions&nbsp;
							</span>
							—
							<span className='text-shadow'>
								&nbsp;Open for work opportunities&nbsp;
							</span>
							and ready to discuss your unique web development needs.
						</div>
						<div className='w-12'>
							<div ref={ball} className='ball w-8 h-8 shadow-2xl shadow-purple-600/50 rounded-full
							bg-gradient-to-r from-primary to-purple-600' />
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
												  transition duration-150 ease-in-out'>
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