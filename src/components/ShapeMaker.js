import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import { Engine } from 'matter-js';

const ShapeMaker = ({ color }) => {
    const scene = useRef()
    const engine = useRef(Engine.create())
    return (
        <article ref={scene} className='w-full h-full'>
            
        </article>
    )
}

export default ShapeMaker