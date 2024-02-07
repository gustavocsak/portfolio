import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { colorUtils } from '../utils/colorUtils';
import { useGSAP } from '@gsap/react';
import { useColor } from './ColorContext';

const grid = Array.from(Array(400).keys());

/**
 * TODO: animate only when in view?
 */

const getRandomGrid = () => {
	const randomColor = colorUtils.generateRandomHSL();
	const HSLShades = colorUtils.generateHSLShades(randomColor, 7, 10)
	const RGBShades = HSLShades.map((shade) => {
		let newShade = gsap.utils.splitColor(shade);
		return `rgb(${newShade[0]}, ${newShade[1]}, ${newShade[2]})`
	})

	const randomGrid = {
		shades: RGBShades,
		directions: ['center', 'edges', 'random', 'end']
	}

	return randomGrid;
}

const Grid = () => {
	const { primaryColor } = useColor();
	const [firstMount, setFirstMount] = useState(true);

	const createTimeline = () => {
		const gridConfig = getRandomGrid();
		let tl = gsap.timeline({
			ease: 'power4.out',
			defaults: { duration: 0.5, ease: 'power4.out' },
			onComplete: handleEndAnimation
		});
		
		tl.to('.dot', {
			duration: 0.8,
			scale: 1,
			y: -30,
			stagger: {
				grid: [20, 20],
				from: 
					firstMount ? 
						'center':
						gridConfig.directions[colorUtils.getRandom(0, 4)],
				amount: 1,

			}
		})

		tl.to('.dot', {
			duration: 0.4,
			scale: 0.4,
			stagger: {
				grid: [20, 20],
				from: 'center',
				amount: 1,
			}
		}, "shrink")

		tl.to('.dot', {
			duration: 0.5,
			scale: 1,
			stagger: {
				grid: [20, 20],
				from: 'center',
				amount: 1,
			}
		}, "shrink+=0.2")

		tl.to('.dot', {
			duration: 0.5,
			scale: 0.4,
			stagger: {
				grid: [20, 20],
				from: 'center',
				amount: 1,
			}
		}, "shrink+=0.4")

		tl.to('.dot', {
			duration: 0.3,
			scale: 1,
			stagger: {
				grid: [20, 20],
				from: 'center',
				amount: 1,
			}
		}, "shrink+=0.6")

		tl.to('.dot', {
			duration: 1,
			backgroundColor: (index) => {
				return gridConfig.shades[colorUtils.getRandom(0, 7)];
			},
			stagger: {
				grid: [20, 20],
				from: gridConfig.directions[colorUtils.getRandom(0, 4)],
				amount: 1,
			}
		})

		tl.to('.dot', {
			duration: 0.8,
			scale: 0.1,
			y: 0,
			x: 0,
			backgroundColor: primaryColor,
			stagger: {
				grid: [20, 20],
				from: gridConfig.directions[colorUtils.getRandom(0, 4)],
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
			duration: 0,
			onComplete: () => {
				setEndAnimation(!endAnimation);
				setFirstMount(false);
			},
		});
	};

	const [endAnimation, setEndAnimation] = useState()
	const animation = useRef(null);

	useEffect(() => {
		setFirstMount(true);
	}, [primaryColor])

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

