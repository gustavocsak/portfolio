import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaCodepen } from 'react-icons/fa';
import { gsap } from 'gsap/gsap-core';
import { useColor } from './ColorContext';
import { colorCodes } from '../utils/constants';


const HeroSocial = () => {
    const { primaryColor } = useColor()

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            backgroundColor: primaryColor,
            duration: 0.35,
            ease: 'power4.out',
        })
        const icon = currentTarget.querySelector('.icon');
        gsap.to(icon, {
            color: colorCodes.primaryWhite,
            duration: 0.35,
            ease: 'power4.out',
            backgroundColor: primaryColor
        })
    }
    
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            backgroundColor: colorCodes.primaryBlack,
            duration: 0.35,
            ease: 'power4.out',
        })
        const icon = currentTarget.querySelector('.icon');
        gsap.to(icon, {
            color: primaryColor,
            duration: 0.35,
            ease: 'power4.out',
            backgroundColor: colorCodes.primaryBlack
        })
    }
    
    return (
        <>
            <div className='h-14 w-14 rounded-full border-2 flex items-center justify-center hover:cursor-pointer'
                style={{ borderColor: primaryColor }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
            >
                <a href='https://github.com/gustavocsak/' target='_blank' rel='noreferrer'>
                    <BsGithub size="28px"
                        color={primaryColor}
                        className='icon'
                        title='Github'
                    />
                </a>
            </div>
            <div className={`h-14 w-14 rounded-full border-2 flex items-center justify-center hover:cursor-pointer`}
                style={{ borderColor: primaryColor }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
            >
                <a href='https://linkedin.com/in/gustavo-de-sa/' target='_blank' rel='noreferrer'>
                    <AiOutlineLinkedin size="28px"
                        color={primaryColor}
                        className='icon'
                        title='Linkedin'
                    />
                </a>
            </div>
            <div className={`h-14 w-14 rounded-full border-2 flex items-center justify-center hover:cursor-pointer`}
                style={{ borderColor: primaryColor }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
            >
                <a href='https://codepen.io/gustavocs' target='_blank' rel='noreferrer'>
                    <FaCodepen size="28px"
                        color={primaryColor}
                        className='icon'
                        title='Codepen'
                    />
                </a>
            </div>
        </>
    )
}

export default HeroSocial