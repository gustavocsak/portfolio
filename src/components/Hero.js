import React, { useRef } from 'react'
import Navbar from './Navbar'
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLinkedin } from "react-icons/ai";
import LetterAnimate from '../utils/LetterAnimate';
import Grid from './Grid';
import { gsap } from 'gsap';
import { color, titleLetter } from '../utils/constants';
import { useGSAP } from '@gsap/react';
import { FaCodepen } from 'react-icons/fa';
import { useColor } from './ColorContext';
import { colorUtils } from '../utils/colorUtils';

/**
 * TODO: take out translate from other pages replace with gsap
 * TODO: update useGSAP to use contextSaefe
 */

const Hero = () => {
    const comp = useRef();
    const nav = useRef();
    const { primaryColor } = useColor();
    
    const gradientStyle = {
        background: `linear-gradient(to right, ${primaryColor}, ${colorUtils.lightHex(primaryColor)})`,
    };

    useGSAP(() => {
        let ctx = gsap.context(() => {

            gsap.fromTo(".reveal",
                {
                    y: 115,
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    delay: 0.25,
                    ease: "power4.out"
                })


            gsap.fromTo(nav.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.5, delay: 1.5, ease: "power4.out" }
            )
        }, comp)
        console.log(primaryColor);
        return () => ctx.revert();
    }, []);

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            backgroundColor: primaryColor,
            duration: 0.35,
            ease: 'power4.out',
        })
        const icon = currentTarget.querySelector('.icon');
        gsap.to(icon, {
            color: color.primaryWhite,
            duration: 0.35,
            ease: 'power4.out',
            backgroundColor: primaryColor
        })
    }

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            backgroundColor: color.primaryBlack,
            duration: 0.35,
            ease: 'power4.out',
        })
        const icon = currentTarget.querySelector('.icon');
        gsap.to(icon, {
            color: primaryColor,
            duration: 0.35,
            ease: 'power4.out',
            backgroundColor: color.primaryBlack
        })
    }


    return (
        <div className='flex h-screen flex-col items-center justify-between gap-8 px-10'>
            <Navbar navRef={nav} />
            <div className='z-0 h-full lg:w-8/12 gap-16 flex flex-col items-center justify-between lg:flex-row'>
                <div className='flex flex-col gap-12 justify-center items-center lg:items-start' ref={comp}>
                    <div className='clip'>
                        <h1 className="reveal text-6xl font-bold text-center lg:text-left">
                            <span>Hi, I'm  </span>

                            {titleLetter.map((letter, index) => {
                                return <LetterAnimate color={primaryColor} key={index} letter={letter} />
                            })}!
                        </h1>
                    </div>
                    <div className='clip'>
                        <div className={`inline-block reveal text-zinc-100 text-2xl font-bold px-2 py-0.5 rounded-md leading-10`}
                            style={gradientStyle}
                        >
                            Junior Developer
                        </div>
                    </div>
                    <div className='clip'>
                        <div className="reveal flex gap-8">
                            <div className='h-14 w-14 rounded-full border-2 flex items-center justify-center hover:cursor-pointer'
                                style={{borderColor: primaryColor}}
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
                                style={{borderColor: primaryColor}}
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
                                style={{borderColor: primaryColor}}
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
                        </div>
                    </div>
                </div>
                <div>
                    <Grid />
                </div>
            </div>
        </div>
    )
}

export default Hero