import React, { useRef } from 'react'
import Navbar from './Navbar'
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLinkedin } from "react-icons/ai";
import LetterAnimate from '../utils/LetterAnimate';
import Grid from './Grid';
import { gsap } from 'gsap';
import { color, titleLetter } from '../utils/constants';
import { useGSAP } from '@gsap/react';

/**
 * TODO: take out translate from other pages replace with gsap
 * TODO: update useGSAP to use contextSaefe
 */

const Hero = () => {
    const comp = useRef();
    const nav = useRef();

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
        return () => ctx.revert();
    }, []);

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            backgroundColor: color.primaryPurple,
            duration: 0.35,
            ease: 'power4.out',
        })
        const icon = currentTarget.querySelector('.icon');
        gsap.to(icon, {
            color: color.primaryWhite,
            duration: 0.35,
            ease: 'power4.out',
            backgroundColor: color.primaryPurple
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
            color: color.primaryPurple,
            duration: 0.35,
            ease: 'power4.out',
            backgroundColor: color.primaryBlack
        })
    }


    return (
        <div className='flex h-screen flex-col items-center justify-between gap-8 px-10'>
            <Navbar navRef={nav} />
            <div className='h-full lg:w-8/12 gap-12 flex flex-col items-center justify-around lg:flex-row'>
                <div className='flex flex-col gap-8 justify-center items-center lg:items-start' ref={comp}>
                    <div className='clip'>
                        <h1 className="reveal text-7xl font-bold text-center lg:text-left">
                            <span>Hi, I'm  </span>

                            {titleLetter.map((letter, index) => {
                                return <LetterAnimate key={index} letter={letter} />
                            })}!
                        </h1>
                    </div>
                    <div className='clip'>
                        <div className="inline-block reveal bg-primary text-zinc-100 text-3xl
                         font-bold p-2 bg-gradient-to-r from-purple-500 to-pink-500
                          rounded-md leading-10">
                            Junior Developer
                        </div>
                    </div>
                    <div className='clip'>
                        <div className="reveal flex gap-8">
                            <div className='h-14 w-14 rounded-full border-2 border-primary
                             flex items-center justify-center hover:cursor-pointer'
                                onMouseEnter={onEnter}
                                onMouseLeave={onLeave}
                            >
                                <BsGithub size="28px" color={color.primaryPurple} className='icon' />
                            </div>
                            <div className='h-14 w-14 rounded-full border-2 border-primary
                             flex items-center justify-center hover:cursor-pointer'
                                onMouseEnter={onEnter}
                                onMouseLeave={onLeave}
                            >
                                <AiOutlineLinkedin size="28px" color={color.primaryPurple} className='icon' />
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