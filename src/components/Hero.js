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

const Title = styled(motion.div)`
    font-size: 70px;
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
    font-weight: bold;
`

const Subtitle = styled(motion.span)`
    background-color: #C133FF;
    color: white;
    border-radius: 5px;
    font-size: 1.8em;
    font-weight: bold;
    padding: 5px;
`

const Social = styled(motion.div)`
    margin-top: 15px;
    display: flex;
    gap: 30px;
    justify-content: flex-start;
`

const Hero = () => {
    const comp = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".text-animate",
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.5, delay: 0.2 })

        }, comp)
        return () => ctx.revert();
    }, []);


    return (
        <Section>
            <Navbar />
            <Container>
                <Intro ref={comp}>
                    <Title className="text-animate"><span style={{}}>Hi, I'm  </span>{titleLetter.map((letter, index) => {
                        return <LetterAnimate key={index} letter={letter} />
                    })}!</Title>

                    <div className="text-animate">
                        <Subtitle>Junior Developer</Subtitle>
                    </div>
                    <Social className="text-animate">
                        <BsGithub size="35px" />
                        <BsLinkedin size="35px" />
                    </Social>
                </Intro>
                <Three>
                    <Grid></Grid>
                </Three>
            </Container>
        </Section>
    )
}

export default Hero