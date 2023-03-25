import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import LetterAnimate from '../utils/LetterAnimate';
import Cube from './Cube';

const titleLetter = ['G', 'u', 's', 't', 'a', 'v', 'o']

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Container = styled.div`
    height: 100%;
    /* scroll-snap-align: center; // does not align to hero container, liked better this way */
    width: 1400px;
    display: flex;
    justify-content: space-between;
`

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

`

const Three = styled.div`
    flex: 3;
    position: relative;
`

const Title = styled(motion.div)`
    display: flex;
    font-size: 70px;
`

const Subtitle = styled(motion.span)`
    background-color: #C133FF;
    color: white;
    border-radius: 5px;
    font-size: 1.8em;
    font-weight: bold;
    padding: 5px;
`

const Social = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 30px;
    justify-content: flex-start;
`


const Hero = () => {
  return (
    <Section>
        <Navbar />
        <Container>
            <Intro>
                <Title as={motion.h1} initial={{y: -50, opacity: 0}} animate={{y: 0, opacity:1}} transition={{delay: 0.2}}><span style={{marginRight: "15px"}}>Hi, I'm </span>{titleLetter.map((letter, index) => {
                    return <LetterAnimate key={index} letter={letter} />
                })}!</Title>
                {/* some animation later for this: */}
                <div>
                    <Subtitle>Junior Developer</Subtitle>
                </div>
                <Social>
                    <BsGithub size="35px"/>
                    <BsLinkedin size="35px"/>
                </Social>
            </Intro>
            <Three>
                <Cube />
            </Three>
        </Container>
    </Section>
  )
}

export default Hero