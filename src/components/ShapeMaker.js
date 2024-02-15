import React from 'react'
import Sketch from 'react-p5';

let x = 50;
let y = 50;

const ShapeMaker = ({ color }) => {
	let divWidth;


	const setup = (p5, canvasParentRef) => {
		const divElement = document.getElementById('canvas');
		if (divElement) {
			divWidth = divElement.offsetWidth;
		} else {
			console.error('Element with canvas ID not found')
		}
		p5.createCanvas(divWidth, 500).parent(canvasParentRef);

	};

	const mousePressed = (p5, event) => {
		console.log(event)
		p5.ellipse(event.offsetX, event.offsetY, 70, 70);
	}

	const windowResized = (p5, event) => {
		const divElement = document.getElementById('canvas');
		if (divElement) {
			divWidth = divElement.offsetWidth;
		} else {
			console.error('Element with canvas ID not found')
		}
		p5.resizeCanvas(divWidth, 500)
	}

	const draw = (p5) => {
		// p5.background(0)
		p5.ellipse(x, y, 70, 70);
		x+=3;
	};

	return (
		<Sketch
			className='hidden lg:block'
			setup={setup}
			draw={draw}
			mousePressed={mousePressed}
			windowResized={windowResized}
		/>
	)
}

export default ShapeMaker