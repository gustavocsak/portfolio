import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import styled from 'styled-components'



const Cube = ({color, fov, position}) => {
  return (
   
        <Canvas camera={{fov: fov, position:position}}>
        <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color={color}/>
            </mesh>
            </Suspense>
        </Canvas>
    
  )
}

export default Cube