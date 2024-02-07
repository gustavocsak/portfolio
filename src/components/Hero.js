import React, { useRef } from 'react'
import Navbar from './Navbar'
import Grid from './Grid';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useColor } from './ColorContext';
import { colorUtils } from '../utils/colorUtils';
import HeroSocial from './HeroSocial';
import HeroTitle from './HeroTitle';

/**
 * TODO: update useGSAP to use contextSaefe
 */

const Hero = () => {
    const container = useRef();
    const nav = useRef();
    const { primaryColor } = useColor();
    
    const gradientStyle = {
        background: `linear-gradient(to right, ${primaryColor}, ${colorUtils.lightHex(primaryColor)})`,
    };

    useGSAP(() => {
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
            { opacity: 1, y: 0, duration: 0.5, delay: 1.2, ease: "power4.out" }
        )
    }, { scope: container});

    return (
        <div className='flex h-screen flex-col items-center justify-between gap-8 px-10'>
            <Navbar navRef={nav} />
            <main className='z-0 h-full lg:w-8/12 gap-16 flex flex-col items-center justify-between lg:flex-row'>
                <section className='flex flex-col gap-12 justify-center items-center lg:items-start' ref={container}>
                    <div className='clip'>
                        <HeroTitle primaryColor={primaryColor} />
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
                </section>
                <article>
                    <Grid />
                </article>
            </main>
        </div>
    )
}

export default Hero