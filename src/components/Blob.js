import Spline from '@splinetool/react-spline';
import React from 'react'
import { GrLinkedin, GrGithub } from 'react-icons/gr'
import Scene from './BlobTest';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';


export default function Blob() {
  return (
        <div className='w-full h-full'>
            
            <div className=''>
                
                <h2 className='font-bold text-5xl mb-3'>Hi, I'm Gustavo!</h2>
                <h3 className='text-2xl font-semibold mb-3'>Developer</h3>
                
                <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <div className='flex justify-center text-5xl gap-20'>
                    <GrLinkedin />
                    <GrGithub  />
                </div>
            </div> 
            <div className='w-full h-full'>
                <Canvas
                    shadows
                    camera={{position: [20,3,5], fov: 25}}
                >   
                    <OrbitControls />
                    <Scene />
                </Canvas>
            </div>
            
            
            
            
        
        </div>
  );
}
