import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import LetterAnimate from '../utils/LetterAnimate';
import Cube from './Cube';
import Grid from './Grid';
import { gsap } from 'gsap';

const titleLetter = ['G', 'u', 's', 't', 'a', 'v', 'o']
// reference: rgb(193, 51, 255)

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
		min-height: 100vh;
        scroll-snap-align: none;
    }
    @media only screen and (max-width: 1024px) {
		min-height: 100vh;
        scroll-snap-align: none;
    }
`

const Container = styled.div`
    height: 100%;
    width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
    }
    @media only screen and (max-width: 1024px) {
		width: 100%;
        scroll-snap-align: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
`

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    @media only screen and (max-width: 1024px) {
        flex: 1;
        align-items: center;
    }
    

`

/**
 * TODO: remove threejs, rename accordingly
 */

const Three = styled.div`
    /* flex: 3;
    position: relative;
    @media only screen and (max-width: 768px) {
        display: none;
    }
    @media only screen and (max-width: 1024px) {
        display: none;s
    } */

    



    
`

const Title = styled.div`
    font-size: 70px;
    font-weight: bold;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    line-height: 5rem;
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
    
`

const Header = styled.h1`
    font-size: 70px;
    transform: translateY(115px);
    transition: transform .5s;
`


const Blur = styled.div`
    /* background-color: rgba(193, 51, 255, 0.2);
    box-shadow: 0px 0px 10px 10px rgba(193, 51, 255);
    backdrop-filter: blur(18px); */
`

const SubtitleClip = styled.div`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    line-height: 5rem;
`

const Subtitle = styled.div`
    background-color: #C133FF;
    color: white;
    border-radius: 5px;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 5px;
    transform: translateY(115px);
    transition: transform .5s;
    max-width: fit-content;
    line-height: 2rem;
`

const SocialClip = styled.div`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    line-height: 5rem;
`

const Social = styled(motion.div)`
    margin-top: 15px;
    display: flex;
    gap: 30px;
    justify-content: flex-start;
    transform: translateY(115px);
    transition: transform .5s;
`

const Hero = () => {
    const comp = useRef();
    const nav = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // gsap.fromTo(".text-animate",
            //     { opacity: 0, y: -50 },
            //     { opacity: 1, y: 0, duration: 0.4, stagger: 0.5, delay: 0.2, ease: "power4.out" })
            gsap.to(".reveal", { y: 0, duration: 0.5, stagger: 0.5, delay: 0.2, ease: "power4.out" })
            
            gsap.fromTo(nav.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, delay: 2.5, ease: "power4.out" }
            )
        }, comp)
        return () => ctx.revert();
    }, []);


    return (
        <Section>
            <Navbar navRef={nav} />
            <Container>
                <Intro ref={comp}>
                    <Title>
                        <Header className="reveal">
                            <span>Hi, I'm  </span>
                            {titleLetter.map((letter, index) => {
                                return <LetterAnimate key={index} letter={letter} />
                            })}!
                        </Header>
                    </Title>
                    <SubtitleClip>
                        <Subtitle className="reveal">Junior Developer</Subtitle>
                    </SubtitleClip>
                    <SocialClip>
                        <Social className="reveal">
                            <BsGithub className='draw' size="35px" />
                            <BsLinkedin size="35px" />
                        </Social>
                    </SocialClip>
                </Intro>
                <Three>
                    <Grid></Grid>
                </Three>
            </Container>
        </Section>
    )
}

export default Hero