import React, { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { colorUtils } from '../utils/colorUtils';

const LetterAnimate = ({ letter, time, color }) => {	
	const letterRef = useRef();
	const { contextSafe } = useGSAP({ scope: letterRef })
	
	useGSAP(() => {
		gsap.to('.letter', {
			color: color,
			repeat: -1,
			duration: 2,
			ease: "power4.out",
			yoyo: true
		})
	}, [color])

	const onEnter = contextSafe((e) => {
		gsap.to(e.target, {
			color: colorUtils.generateRandomHSL().str,
			duration: 0.6,
		})
	})

	return (
		<span ref={letterRef} className="letter" onMouseEnter={onEnter}>{letter}</span>
	);
};

export default LetterAnimate;
