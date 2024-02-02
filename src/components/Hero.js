import React, { useRef } from 'react'
import Navbar from './Navbar'
import LetterAnimate from '../utils/LetterAnimate';
import Grid from './Grid';
import { gsap } from 'gsap';
import { titleLetter } from '../utils/constants';
import { useGSAP } from '@gsap/react';
import { useColor } from './ColorContext';
import { colorUtils } from '../utils/colorUtils';
import HeroSocial from './HeroSocial';

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
        
        return () => ctx.revert();
    }, []);

    return (
        <div className='flex h-screen flex-col items-center justify-between gap-8 px-10'>
            <Navbar navRef={nav} />
            <main className='z-0 h-full lg:w-8/12 gap-16 flex flex-col items-center justify-between lg:flex-row'>
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
                        <h2 className={`inline-block reveal text-zinc-100 text-2xl font-bold px-2 py-0.5 rounded-md leading-10`}
                            style={gradientStyle}
                        >
                            Junior Developer
                        </h2>
                    </div>
                    <div className='clip'>
                        <div className="reveal flex gap-8">
                            <HeroSocial />
                        </div>
                    </div>
                </div>
                <div>
                    <Grid />
                </div>
            </main>
        </div>
    )
}

export default Hero