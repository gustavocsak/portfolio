import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import LetterAnimate from '../utils/LetterAnimate';
import Cube from './Cube';
import Grid from './Grid';

const titleLetter = ['G', 'u', 's', 't', 'a', 'v', 'o']

const Section = styled.div`
    /* height: 100vh;
    scroll-snap-align: center; */
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
  return (
    <Section>
        <Navbar />
        <Container>
            <Intro>
                <Title as={motion.h1} initial={{y: -50, opacity: 0}} animate={{y: 0, opacity:1}} transition={{delay: 0.3}}><span style={{}}>Hi, I'm  </span>{titleLetter.map((letter, index) => {
                    return <LetterAnimate key={index} letter={letter} />
                })}!</Title>
                
                <motion.div initial={{y: -50, opacity: 0}} animate={{y: 0, opacity:1}} transition={{delay: 0.5}}>
                    <Subtitle>Junior Developer</Subtitle>
                </motion.div>
                <Social as={motion.div} initial={{x: -50, opacity: 0}} animate={{x: 0, opacity:1}} transition={{delay: 0.7}}>
                    <BsGithub size="35px"/>
                    <BsLinkedin size="35px"/>
                </Social>
            </Intro>
            <Three>
                <Grid></Grid>
                {/* <Cube color="rgb(193, 51, 255)" fov={25} position={[5,5,5]}/> */}
            </Three>
        </Container>
    </Section>
  )
}

export default Hero