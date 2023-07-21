import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`

const Cube = () => {
  return (
   
        <Canvas camera={{fov: 25, position:[5,5,5]}}>
        <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <mesh>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color={"rgb(193, 51, 255)"}/>
            </mesh>
            </Suspense>
        </Canvas>
    
  )
}

export default Cube