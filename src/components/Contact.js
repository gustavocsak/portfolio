import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { colorUtils } from '../utils/colorUtils'
import { useColor } from './ColorContext'
import { onEnter, onLeave } from '../utils/constants'
import Alert from './Alert'
import emailjs from '@emailjs/browser'
/**
 * TODO: implement captcha?
 */

const Contact = () => {
	/**
	 * TODO: appropriate the ball animation for smaller screens
	 * TODO: fix text spacing
	 */
	const [recaptchaToken, setRecaptchaToken] = useState(null);

	const handleVerify = (token) => {
		setRecaptchaToken(token);
	};
	const { primaryColor } = useColor();
	const ball = useRef();
	const formRef = useRef();
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [animation, setAnimation] = useState(0);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const textShadow = {
		textShadow: `7px 4px 15px ${primaryColor}`,
		color: primaryColor
	}
	const ballStyle = {
		background: `linear-gradient(to right, ${primaryColor}, ${colorUtils.lightHex(primaryColor)})`,
	}
	const borderStyle = {
		borderColor: primaryColor
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!recaptchaToken) {
			console.error('reCAPTCHA verification failed');
			return;
		}


		emailjs.sendForm('gustavo_portfolio', 'template_cif8i1l', formRef.current, 'jkvgv11Yrrre2t38W')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

		console.log('form submitted with recaptcha', recaptchaToken);
		setForm({ name: '', email: '', message: '' });
		setFormSubmitted(true);

	}

	const handleChange = e => setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));

	const handleClose = () => {
		setFormSubmitted(false);
	};

	const handleEndAnimation = () => {
		setAnimation(animation + 1);
	}

	useEffect(() => {
		const inputs = [...document.getElementsByClassName('input')]
		inputs.forEach((element) => {
			element.addEventListener('focus', () => {
				element.style.borderColor = primaryColor
			})
			element.addEventListener('blur', () => {
				element.style.borderColor = 'rgb(82, 82, 91)'
			})
		})
		console.log('test')
	}, [primaryColor])

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
				<div className='flex flex-col lg:flex-row lg:gap-28'>
					<div className='flex flex-col gap-8 lg:basis-2/5'>
						<div className='text-5xl text-left font-bold md:text-6xl'>Contact Me</div>
						<div className='font-bold text-left text-xl text-wrap'>

							Feel free to reach out if you want to&nbsp;
							<span style={textShadow}>
								discuss a project,<br />share ideas or make suggestions&nbsp;
							</span>
							—
							<span style={textShadow}>
								&nbsp;Open for work opportunities&nbsp;
							</span>
							and ready to discuss your unique web development needs.
						</div>
						<div className='w-12'>
							<div ref={ball} className='ball w-8 h-8 rounded-full' style={ballStyle} />
						</div>
					</div>
					<div className='lg:basis-3/5'>
						<form className='flex flex-col' onSubmit={handleSubmit} name='contact' ref={formRef}>
							<div className='flex flex-col gap-2 mb-12'>
								<label className='font-semibold text-lg leading-6 text-zinc-100' htmlFor='name'>Name</label>
								<input
									className='input rounded-lg p-2.5 text-zinc-100 border-0
											   bg-zinc-900 border-2 border-zinc-600 outline-none'
									type='text'
									id='name'
									name='name'
									value={form.name || ''}
									onChange={handleChange}
								></input>
							</div>
							<div className='flex flex-col gap-2 mb-12'>
								<label className='font-semibold text-lg leading-6 text-zinc-100' htmlFor='email'>Email</label>
								<input
									className='input rounded-lg p-2.5 text-zinc-100
								 		bg-zinc-900 border-2 border-zinc-600 outline-none'
									type='email'
									id='email'
									name='email'
									value={form.email || ''}
									onChange={handleChange}
								></input>
							</div>
							<div className='flex flex-col gap-2 mb-12'>
								<label className='font-semibold text-lg leading-6 text-zinc-100' htmlFor='message'>Message</label>
								<textarea
									className='input rounded-lg p-2.5 text-zinc-100 border-0 h-32
											   bg-zinc-900 border-2 border-zinc-600 outline-none'
									type='textarea'
									id='message'
									name='message'
									value={form.message || ''}
									onChange={handleChange}
								></textarea>
							</div>
							
							<div className='flex flex-col gap-2 mb-12'>
								<button className='w-full h-16 bg-zinc-900 rounded-lg text-xl font-semibold border-2'
									onMouseEnter={(e) =>
										onEnter(primaryColor, e, true)}
									onMouseLeave={(e) => onLeave(e, primaryColor, true)}
									style={borderStyle}
									type='submit'
								>
									Send Message
								</button>
							</div>
							{formSubmitted && <Alert message='Thank you for sending a message!' onClose={handleClose} />}
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact