import React from 'react'
import { colorCodes } from '../utils/constants'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { gsap } from 'gsap/gsap-core';
import { HiMailOpen } from "react-icons/hi";
import { FaCodepen } from "react-icons/fa";
import { useColor } from './ColorContext';

const Footer = () => {
    const { primaryColor } = useColor()
    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            color: primaryColor,
            duration: 0.2
        })
    }

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            color: colorCodes.primaryWhite,
            duration: 0.2
        })
    }

    const iconConfig = { onMouseEnter: onEnter, onMouseLeave: onLeave, size: 22 }

    return (
        <div className=' bg-neutral-800 py-6 flex justify-center'>
            <div className='flex justify-center flex-col gap-2 items-center w-full md:flex-row md:justify-around'>
                <div className='font-semibold'>gustavocs | made by Gustavo Carvalhaes</div>
                <div className='flex gap-4'>
                    <a
                        className='text-zinc-100'
                        href='https://linkedin.com/in/gustavo-de-sa/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaLinkedinIn {...iconConfig} title='linkedin' />
                    </a>

                    <a
                        className='text-zinc-100'
                        href='https://github.com/gustavocsak/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaGithub {...iconConfig} title='github' />
                    </a>
                    <a
                        className='text-zinc-100'
                        href='https://codepen.io/gustavocs'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaCodepen {...iconConfig} title='codepen' />
                    </a>
                    <div className='flex gap-2'>
                        <a
                            className='text-zinc-100'
                            href='mailto:gustavocsak@gmail.com'
                        >
                            <HiMailOpen {...iconConfig} title='email' />
                        </a>
                        <div className='font-semibold'>gustavocsak@gmail.com</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer