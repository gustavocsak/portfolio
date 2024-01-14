import React, { useLayoutEffect} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

/**
 * TODO: animate
 */


const Section = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	padding: 5rem;
    @media only screen and (max-width: 768px) {
		height: fit-content;
		min-height: 100%;
    }
	@media only screen and (max-width: 1024px) {
		scroll-snap-align: none;
	}
`

const Container = styled.div`
    height: 100vh;
    width: 1400px;
    display: flex;
    flex-direction: row;
	align-items: center;
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

const Title = styled.h1`
    font-size: 40px;
`

const Sentence = styled.div.attrs({ className: 'sentence'})`
    font-size: 26px;
    line-height: 2.2rem;
    transform: translateY(400px);
    transition: transform .5s;
`

const Highlight = styled.span`
    color: #C133FF;
    font-size: 26px;
    font-weight: bold;
    
`

const HighlightAnchor = styled.a`
    text-decoration: none;
    color: #C133FF;
    text-decoration: underline;
    font-weight: bold;
`

const SentenceClip = styled.div`
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`

const About = () => {

    useLayoutEffect(() => {
				
		let sentenceClips = gsap.utils.toArray(".clip")
		sentenceClips.forEach((clip) => {
			let eachSentence = clip.querySelectorAll(".sentence")
			gsap.to(eachSentence, {
				y: 0,
                stagger: 0.5,
				duration: 0.5,
				scrollTrigger: {
					trigger: clip, 
					start: "top 80%",
                    markers: true
				}
			})
		})

		
	}, []);

    return (
        <Section>
            <Container>
                <Main>
                    <Title>About Me</Title>
                    <SentenceClip className='clip'>
                        <Sentence>
                            Currently working as a <Highlight>Computer Lab Assistant at Langara College</Highlight>, where I graduated with
                            a <Highlight>Diploma in Computer Studies</Highlight> and a <Highlight>citation in Full Stack Web Development</Highlight>.
                        </Sentence>
                    </SentenceClip>
                    <SentenceClip className='clip'>
                        <Sentence>
                            Pursuing a bachelor's degree in <Highlight>Computer Science</Highlight> at Estácio University.
                        </Sentence>
                    </SentenceClip>
                    <SentenceClip className='clip'>
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