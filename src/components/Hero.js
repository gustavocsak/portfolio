import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='text-center p-10'>
        <div>
            <h2 className='text-5xl py-2'>Gustavo Carvalhaes</h2>
            <h3>Developer</h3>
            <p>Some stuff here texty text</p>
        </div>
        <div>
            <AiFillGithub />
            <AiFillLinkedin />
        </div>
    </div>
    
  )
}

export default Hero