import Spline from '@splinetool/react-spline';
import React from 'react'

export default function Blob() {
  return (
        <div className=' relative'>
            <Spline className='absolute scale-50 mt-56 -ml-56 md:m-0 md:top-0 md:right-0' scene="https://draft.spline.design/PJNUKvfXHuIufwFZ/scene.splinecode" />
            <div className='text-white mt-10 md:mt-24 text-center absolute top-30'>
                
                <h2 className='font-bold text-5xl mb-3'>Hi, I'm Gustavo!</h2>
                <h3 className='text-2xl font-semibold mb-8'>Developer</h3>
                
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <div className='mt-20 md:mt-52'>
                    social
                </div>
            </div>    
            
            
            
            
        
        </div>
  );
}
