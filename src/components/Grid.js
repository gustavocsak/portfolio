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
	`
	
	const animation = useRef(null);

	useEffect(() => {
		animation.current = anime.timeline({
			targets: '.grid div',
			easing: 'easeInOutSine',
			delay: anime.stagger(50),
			loop: true,
			autoplay: false,
			
			
		})
		.add({
			translateX: [
			  {value: anime.stagger('-.1rem', {grid: [20,20], from: 'center', axis: 'x'}) },
			  {value: anime.stagger('.1rem', {grid: [20,20], from: 'center', axis: 'x'}) }
			],
			translateY: [
			  {value: anime.stagger('-.1rem', {grid: [20,20], from: 'center', axis: 'y'}) },
			  {value: anime.stagger('.1rem', {grid: [20,20], from: 'center', axis: 'y'}) }
			],
			duration: 1000,
			scale: .5,
			delay: anime.stagger(100, {grid: [20,20], from: 'center'})
		  })
		  .add({
			translateX: () => anime.random(-10, 10),
			translateY: () => anime.random(-10, 10),
			delay: anime.stagger(8, {from: 'last'})
		  })
		  .add({
			translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
			translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
			rotate: 0,
			scaleX: 2.5,
			scaleY: .25,
			delay: anime.stagger(4, {from: 'center'})
		  })
		  .add({
			rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
			delay: anime.stagger(50, {grid: grid, from: 'center'})
		  })
		//   .add({
		// 	translateX: 0,
		// 	translateY: 0,
		// 	scale: .5,
		// 	scaleX: 1,
		// 	rotate: 180,
		// 	duration: 1000,
		// 	delay: anime.stagger(100, {grid: grid, from: 'center'})
		//   })
		//   .add({
		// 	scaleY: 1,
		// 	scale: 1,
		// 	delay: anime.stagger(20, {grid: grid, from: 'center'})
		//   })

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

/*
import anime from "animejs/lib/anime.es.js";
import { useState, useRef, useEffect } from "react";

const ticks = Array.from(Array(8));

const Player = () => {
  const [playing, setPlaying] = useState(false);
  const animation = useRef(null);

  const handleClick = () => {
	playing ? animation.current.pause() : animation.current.play();
	setPlaying(!playing);
  };

  useEffect(() => {
	animation.current = anime.timeline({
	  direction: "alternate",
	  loop: true,
	  autoplay: false,
	  easing: "easeInOutSine"
	});

	for (const tick in ticks) {
	  animation.current.add(
		{
		  targets: `.dots li:nth-child(${Number(tick) + 1})`,
		  scaleY: 1.5 + Math.random() * 4,
		  duration: 300 + Math.random() * 300
		},
		Math.random() * 600
	  );
	}
  }, []);

  return (
	<div className="player">
	  <ul className="dots">
		{ticks.map((_, i) => (
		  <li key={i} />
		))}
	  </ul>
	  <button onClick={handleClick}>{playing ? "Pause" : "Play"}</button>
	</div>
  );
};

export default Player;

*/