import React, { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";


const LetterAnimate = ({ letter, time, color }) => {
	
	const letterRef = useRef();
	const { contextSafe } = useGSAP({ scope: letterRef })

	useGSAP(() => {
		gsap.to('.letter', {
			color: color,
			repeat: -1,
			duration: 2,
			ease: "power2.out",
			yoyo: true
		})
	}, [color])

	const onEnter = contextSafe((e) => {
		gsap.to(e.target, {
			color: color.primaryWhite,
			duration: 0.6,
		})
	})

	return (
		<span ref={letterRef} className="letter" onMouseEnter={onEnter}>{letter}</span>
	);
};

export default LetterAnimate;
