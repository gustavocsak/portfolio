import React, { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim';

const ShapeMaker = ({ color }) => {

	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	return (
		<div
			className='h-full border-4 rounded-xl'
			style={{ borderColor: color }}
		>

		</div>
	)
}

export default ShapeMaker