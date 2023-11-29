import React, { useRef, useState, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import styled from 'styled-components';

const grid = Array.from(Array(400).keys());


const Grid = () => {

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

	const animation = useRef(null);

	useEffect(() => {
			animation.current = anime({
			targets: '.grid div',
			easing: 'easeInOutSine',
			loop: true,
			autoplay: false,
			scale: [
				{value: 0.5, easing: "easeOutSine", duration: 250},
				// {value: 0.75, easing: "easeOutSine", duration: 250},
				{value: 1, easing: "easeInOutQuad", duration: 500},
				
			],
			translateY: [
				{ value: anime.stagger('-.5rem', { grid: [20, 20], from: 'center', axis: 'y' }) },
				{ value: anime.stagger('0rem', { grid: [20, 20], from: 'center', axis: 'y' }) }
			],
			translateX: [
				{ value: anime.stagger('-.5rem', { grid: [20, 20], from: 'center', axis: 'x' }) },
				{ value: anime.stagger('0rem', { grid: [20, 20], from: 'center', axis: 'x' }) }
			],
			delay: anime.stagger(50, { grid: [20, 20], from: 'center' }),



		})

		animation.current.play();
	}, []);


	return (
		<GridContainer className='grid'>
			{grid.map((_, i) => {
				return <GridItem key={i} />
			})}
		</GridContainer>
	)
}

export default Grid

