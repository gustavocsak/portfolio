import React, { useRef, useState } from 'react'
import { gsap } from 'gsap';
import { colorUtils } from '../utils/colorUtils';
import { useGSAP } from '@gsap/react';
import { useColor } from './ColorContext';

const grid = Array.from(Array(400).keys());

/**
 * TODO: put util functions in constants or another file
 * TODO: animate only when in view?
 */

const Grid = () => {

	const { primaryColor } = useColor();

	const createTimeline = () => {

		let possibleColors = colorUtils.generateShades(colorUtils.generateRandomRGB(), 0.15, 6)
		let tl = gsap.timeline({
			ease: 'easeInOutSine',
			defaults: { duration: 0.5, ease: 'easeInOutQuad' },
			onComplete: handleEndAnimation
		});

		tl.to('.dot', {
			duration: 0.8,
			scale: 1,
			y: -30,
			ease: "power4.out",
			stagger: {
				grid: [20, 20],
				from: 'center',
				amount: 1,

			}
		})

		tl.to('.dot', {
			duration: 0.4,
			scale: 0.4,
			ease: "power4.out",
			stagger: {
				grid: [20, 20],
				from: 'center',
				amount: 1,
			}
		}, "shrink")

		tl.to('.dot', {
			duration: 0.5,
			scale: 1,
			ease: "power4.out",
			stagger: {
				grid: [20, 20],
				from: 'center',
				amount: 1,
			}
		}, "shrink+=0.2")

		tl.to('.dot', {
			duration: 0.5,
			scale: 0.4,
			ease: "power4.out",
			stagger: {
				grid: [20, 20],
				from: 'center',
				amount: 1,
			}
		}, "shrink+=0.4")

		tl.to('.dot', {
			duration: 0.3,
			scale: 1,
			ease: "power4.out",
			stagger: {
				grid: [20, 20],
				from: 'center',
				amount: 1,
			}
		}, "shrink+=0.6")

		tl.to('.dot', {
			duration: 1,
			backgroundColor: (index) => possibleColors[colorUtils.getRandom(0, possibleColors.length)],
			ease: "power4.out",
			stagger: {
				grid: [20, 20],
				from: 'random',
				amount: 1,
			}
		})

		tl.to('.dot', {
			duration: 0.8,
			scale: 0.1,
			y: 0,
			x: 0,
			backgroundColor: primaryColor,
			ease: "power4.out",
			stagger: {
				grid: [20, 20],
				from: 'left',
				amount: 1,
			}
		})

		return tl;
	}

	const handleEndAnimation = () => {
		gsap.fromTo('.dot', {
			x: 0,
			y: 0,
			scale: 0.1,
			backgroundColor: primaryColor,
		}, {
			x: 0,
			y: 0,
			scale: 0.1,
			backgroundColor: primaryColor,
			onComplete: () => {
				setEndAnimation(!endAnimation);
			},
		});
	};

	let [endAnimation, setEndAnimation] = useState()
	const animation = useRef(null);

	useGSAP(() => {
		if (animation.current) {
			animation.current.clear()
		}
		gsap.set('.dot', {
			x: 0,
			y: 0,
			scale: 0.1,
			backgroundColor: primaryColor,
		})
		animation.current = createTimeline()
		animation.current.play();

	}, [endAnimation, primaryColor])

	return (
		<div className='p-0 m-0 flex flex-wrap items-center justify-center w-80 h-80'>
			{grid.map((_, i) => {
				return <div className='dot p-0 m-0 w-4 h-4 rounded-full bg-primary opacity-90' key={i} />
			})}
		</div>
	)
}

export default Grid

