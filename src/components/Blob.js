import Spline from '@splinetool/react-spline';
import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Blob() {
  return (
    <div className='flex'>
        <Spline className="ml-64" scene="https://draft.spline.design/PJNUKvfXHuIufwFZ/scene.splinecode" />
        <div className='flex flex-col absolute top-30 gap-x-20 mt-28'>
            <div>
                <h2 className='m-0 max-w-lg text-5xl py-2 text-white font-bold'>Hi, I'm Gustavo!</h2>
                <h3 className='text-2xl py-2 font-medium'>Developer</h3>
                <p className='text-md py-5 leading-8 text-white max-w-sm leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
    </div>
  );
}
