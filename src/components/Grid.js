import React, { useRef, useState, useLayoutEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { color } from '../utils/constants';
import { useGSAP } from '@gsap/react';

const grid = Array.from(Array(400).keys());

/**
 * TODO: put util functions in constants or another file
 */

const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
}

const generateRandomRGB = () => {
	const generatedColor = {
		red: Math.floor(Math.random() * 220) + 36,
		green: Math.floor(Math.random() * 220) + 36,
		blue: Math.floor(Math.random() * 220) + 36
	}
	return generatedColor;
}

const generateShades = (rgb, factor, numOfShades) => {
	console.log(rgb)
	const shades = [];
	for(let i=0; i < numOfShades; i++) {
		const light = 1 - factor * i;
		const newColor = {
			red: Math.round(rgb.red * light),
			green: Math.round(rgb.green * light),
			blue: Math.round(rgb.blue * light)
		}
		shades.push(`rgb(${newColor.red}, ${newColor.green}, ${newColor.blue})`)
	}
	return shades
}


const GridContainer = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	row-gap: 0px;
	column-gap: 0px;
	align-items: center;
	justify-content: center;
	width: 20rem;
	height: 20rem;
	
`

const GridItem = styled.div`
	padding: 0;
	margin: 0;
	width: 1rem;
	height: 1rem;
	/* border: 1px solid rgb(193, 51, 255); */
	border-radius: 50%;
	background-color: rgb(193, 51, 255);
	opacity: 90%;
	/* box-shadow: 1px 1px 1px 1px rgb(193, 51, 255, 0.37); */
`

const Grid = () => {

	

	const createTimeline = () => {

		let possibleColors = generateShades(generateRandomRGB(), 0.15, 6)

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
			backgroundColor: (index) => possibleColors[getRandom(0, possibleColors.length)],
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
			backgroundColor: color.primaryPurple,
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
			backgroundColor: color.primaryPurple,
		}, {
			x: 0,
			y: 0,
			scale: 0.1,
			backgroundColor: color.primaryPurple,
			onComplete: () => {
				setEndAnimation(!endAnimation);
			},
		});
	};

	let [endAnimation, setEndAnimation] = useState()
	const animation = useRef(null);

	useGSAP(() => {
				
		gsap.set('.dot', {
			x: 0,
			y: 0,
			scale: 0.1,
			backgroundColor: color.primaryPurple,
		})

		animation.current = createTimeline()
		animation.current.play();

	}, [endAnimation])




	return (
		<GridContainer className='grid'>
			{grid.map((_, i) => {
				return <GridItem className='dot' key={i} />
			})}
		</GridContainer>
	)
}

export default Grid

