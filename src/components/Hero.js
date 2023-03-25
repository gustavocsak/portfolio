import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

`

const Three = styled.div`

`

const Title = styled(motion.h1)`
    font-size: 70px;
`

const Subtitle = styled.span`
    background-color: #C133FF;
    color: white;
    border-radius: 5px;
`


const Hero = () => {
  return (
    <Section>
        <Navbar />
        <Container>
            <Intro>
                <Title as={motion.h1} initial={{y: -50, opacity: 0}} animate={{y: 0, opacity:1}} transition={{delay: 0.2}}>Hi, I'm Gustavo!</Title>
                {/* some animation later for this: */}
                <div>
                <Subtitle>Junior Developer</Subtitle>
                </div>
            </Intro>
            <Three>
                {/* some 3d background using threejs, do it later */}
            </Three>
        </Container>
    </Section>
  )
}

export default Hero