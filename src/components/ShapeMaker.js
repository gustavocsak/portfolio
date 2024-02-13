import React, { useState } from 'react'

const ShapeMaker = ({ color }) => {
    const [square, setSquare] = useState(false);
    const [circle, setCircle] = useState(false);
    const [triangle, setTriangle] = useState(false);
    const [size, setSize] = useState(1);
     
    return (
        <article className='hidden flex-row md:flex'>
            <div className='square w-2'></div>
        </article>
    )
}

export default ShapeMaker