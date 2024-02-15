import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useColor } from './ColorContext';
import ShapeMaker from './ShapeMaker';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { primaryColor } = useColor();
    const textShadow = {
        textShadow: `7px 4px 15px ${primaryColor}`,
        color: primaryColor
    }
    useLayoutEffect(() => {

        gsap.to(".sentence", {
            y: 0,
            duration: 0.3,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".title-start",
                start: "top 65%",
                once: true,
            }
        })
    }, []);

    return (
        <section className='flex items-center justify-center px-10 lg:my-12'>
            <div className='lg:w-8/12'>
                <div className='flex flex-col text-left text-wrap font-bold text-xl gap-8' id='canvas'>
                    <div className='title-start clip'>
                        <h2 className='sentence text-5xl font-bold text-left md:text-6xl'>About Me</h2>
                    </div>

                    <div className='clip'>
                        <div className='sentence'>
                            Currently working as a&nbsp;
                            <span style={textShadow}>Computer Lab Assistant&nbsp;</span> at&nbsp;
                            <span style={textShadow}>Langara College</span>, where I graduated with a&nbsp;
                            <span style={textShadow}>Diploma in Computer Studies</span>&nbsp; and a &nbsp;
                            <span style={textShadow}>citation in Full Stack Web Development</span>.
                        </div>
                    </div> {/**remember put class sentence in sentence */}
                    <div className='clip'>
                        <div className='sentence'>
                            Pursuing a bachelor's degree in &nbsp;
                            <span style={textShadow}>Computer Science</span>&nbsp; at Estácio University.
                        </div>
                    </div>
                    <div className='clip'>
                        <div className='sentence'>
                            Aside from coding, I really enjoy&nbsp;
                            <span style={textShadow}>exploring new musical instruments </span> —
                            I'm currently learning how to play the&nbsp;
                            <a href="https://en.wikipedia.org/wiki/Cavaquinho"
                                className='underline decoration-2 underline-offset-4 hover:decoration-zinc-50'
                                target="_blank"
                                rel='noreferrer'
                                style={textShadow}>
                                    cavaquinho
                            </a> — watching and playing&nbsp;
                            <span style={textShadow}>soccer</span>&nbsp;
                            and <span style={textShadow}>gaming with friends</span>.
                        </div>
                    </div>
                    <ShapeMaker color={primaryColor}/>
                </div>
            </div>
        </section>
    )
}

export default About