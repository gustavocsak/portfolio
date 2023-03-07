import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Blob from './Blob'

const Hero = () => {
  return (
    <div className='flex text-center p-10 '>
        <div>
            <h2 className='text-5xl py-2 text-sky-600 font-medium'>Gustavo Carvalhaes</h2>
            <h3 className='text-2xl py-2 font-medium'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Still need to fill description here</p>
        </div>
        <div className='text-5xl flex justify-center gap-12 py-3 text-gray-600'>
            <AiFillGithub />
            <AiFillLinkedin />
        </div>
        <div>
            <Blob />
        </div>
    </div>
    
  )
}

export default Hero

