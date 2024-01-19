import React, { useLayoutEffect, useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { color } from '../utils/constants';


const Section = styled.div`
    
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	padding: 5rem;
    margin-top: 2rem;
    @media only screen and (max-width: 768px) {
		height: fit-content;
		min-height: 100%;
    }
	@media only screen and (max-width: 1024px) {
		scroll-snap-align: none;
	}
`

const Container = styled.div`
    height: 55vh;
    width: 1400px;
    display: flex;
    flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	@media only screen and (max-width: 768px) {
	   width: 100%;
    }
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 82%;
    gap: 2rem;
`

const Title = styled.div`
	font-size: 62px;
	font-weight: bold;
	transform: translateY(115px);
    transition: transform .5s;
    line-height: 5rem;
`
//transition: transform .5s;
const TitleClip = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    
	
`

const Sentence = styled.div.attrs({ className: 'sentence'})`
    font-size: 24px;
    line-height: 2.2rem;
    transform: translateY(400px);
    transition: transform .5s;
`

const Highlight = styled.span`
    color: ${color.primaryPurple};
    font-size: 24px;
    font-weight: bold;
    
`

const HighlightAnchor = styled.a`
    text-decoration: none;
    color: ${color.primaryPurple};
    text-decoration: underline;
    font-weight: bold;
`

const SentenceClip = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useLayoutEffect(() => {

        gsap.to(".sentence", {
            y: 0,
            duration: 0.5,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".title-start", 
                start: "top 65%",
                once: true,                
            }
        })

		
	}, []);

    return (
        <Section>
            <Container>
                <Main>
                    <TitleClip className='title-start'>
                        <Title className='sentence'>About Me</Title>
                        
                    </TitleClip>
                    
                    <SentenceClip>
                        <Sentence>
                            Currently working as a <Highlight>Computer Lab Assistant at Langara College</Highlight>, where I graduated with
                            a <Highlight>Diploma in Computer Studies</Highlight> and a <Highlight>citation in Full Stack Web Development</Highlight>.
                        </Sentence>
                    </SentenceClip>
                    <SentenceClip>
                        <Sentence>
                            Pursuing a bachelor's degree in <Highlight>Computer Science</Highlight> at Estácio University.
                        </Sentence>
                    </SentenceClip>
                    <SentenceClip>
                        <Sentence>
                            Aside from coding, I really enjoy <Highlight>exploring new musical instruments </Highlight> —
                            I'm currently learning how to play the <HighlightAnchor href="https://en.wikipedia.org/wiki/Cavaquinho" target="_blank">cavaquinho</HighlightAnchor> —
                            watching and playing <Highlight>soccer</Highlight> and <Highlight>gaming with friends</Highlight>.
                        </Sentence>
                    </SentenceClip>
                </Main>
            </Container>
        </Section>
    )
}

export default About