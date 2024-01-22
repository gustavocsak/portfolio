import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

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
        <div className='flex items-center justify-center px-10 lg:my-12'>
            <div className='lg:w-8/12'>
                <div className='flex flex-col text-left text-wrap font-bold text-xl gap-8'>
                    <div className='title-start clip'>
                        <div className='sentence text-5xl font-bold text-left md:text-6xl'>About Me</div>
                    </div>

                    <div className='clip'>
                        <div className='sentence'>
                            Currently working as a&nbsp;
                            <span className='text-shadow'>Computer Lab Assistant&nbsp;</span> at&nbsp;
                            <span className='text-shadow'>Langara College</span>, where I graduated with a&nbsp;
                            <span className='text-shadow'>Diploma in Computer Studies</span>&nbsp; and a &nbsp;
                            <span className='text-shadow'>citation in Full Stack Web Development</span>.
                        </div>
                    </div> {/**remember put class sentence in sentence */}
                    <div className='clip'>
                        <div className='sentence'>
                            Pursuing a bachelor's degree in &nbsp;
                            <span className='text-shadow'>Computer Science</span>&nbsp; at Estácio University.
                        </div>
                    </div>
                    <div className='clip'>
                        <div className='sentence'>
                            Aside from coding, I really enjoy&nbsp;
                            <span className='text-shadow'>exploring new musical instruments </span> —
                            I'm currently learning how to play the&nbsp;
                            <a href="https://en.wikipedia.org/wiki/Cavaquinho"
                                className='underline decoration-primary decoration-2 underline-offset-4 text-primary text-shadow hover:decoration-pink-50'
                                target="_blank" rel='noreferrer'>cavaquinho</a> — watching and playing&nbsp;
                            <span className='text-shadow'>soccer</span>&nbsp;
                            and <span className='text-shadow'>gaming with friends</span>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About