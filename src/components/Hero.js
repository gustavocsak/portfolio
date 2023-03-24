import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

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

`

const Three = styled.div`

`

const Title = styled.h1`
`

const Subtitle = styled.div`

`


const Hero = () => {
  return (
    <Section>
        <Navbar />
        <Container>
            <Intro>
                <Title>Hi, I'm Gustavo!</Title>
                {/* some animation later for this: */}
                <Subtitle>Junior Developer</Subtitle>
            </Intro>
            <Three>
                {/* some 3d background using threejs, do it later */}
            </Three>
        </Container>
    </Section>
  )
}

export default Hero