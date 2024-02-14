import React, { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'

const ShapeMaker = ({ color }) => {
	return (
		<div
			className='h-full border-4 rounded-xl'
			style={{ borderColor: color }}
		>
			
		</div>
	)
}

export default ShapeMaker