import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLinkedin } from "react-icons/ai";
import LetterAnimate from '../utils/LetterAnimate';
import Grid from './Grid';
import { gsap } from 'gsap';
import { color, titleLetter } from '../utils/constants';

/**
 * TODO: padronize sizes
 */

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
    gap: 1.5rem;
    @media only screen and (max-width: 1024px) {
        flex: 1;
        align-items: center;
    }
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

const SubtitleClip = styled.div`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    line-height: 5rem;
`

const Subtitle = styled.div`
    background-color: ${color.primaryPurple};
    color: ${color.primaryWhite};
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

const Social = styled.div`
    display: flex;
    gap: 30px;
    justify-content: flex-start;
    transform: translateY(115px);
    transition: transform .5s;
`

const SocialIconContainer = styled.div`
    height: 55px;
    width: 55px;
    border-radius: 50%;
    border: 2px solid ${color.primaryPurple}; 
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

`


const Hero = () => {
    const comp = useRef();
    const nav = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.to(".reveal", { y: 0, duration: 0.5, stagger: 0.2, delay: 0.2, ease: "power4.out" })


            gsap.fromTo(nav.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.5, delay: 1.5, ease: "power4.out" }
            )
        }, comp)
        return () => ctx.revert();
    }, []);

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            backgroundColor: color.primaryPurple,
            duration: 0.35,
            ease: 'power4.out',
        })
        const icon = currentTarget.querySelector('.icon');
        gsap.to(icon, {
            color: color.primaryWhite,
            duration: 0.35,
            ease: 'power4.out',
            backgroundColor: color.primaryPurple
        })
    }

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            backgroundColor: color.primaryBlack,
            duration: 0.35,
            ease: 'power4.out',
        })
        const icon = currentTarget.querySelector('.icon');
        gsap.to(icon, {
            color: color.primaryPurple,
            duration: 0.35,
            ease: 'power4.out',
            backgroundColor: color.primaryBlack
        })
    }


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
                            <SocialIconContainer onMouseEnter={onEnter} onMouseLeave={onLeave}>
                                <BsGithub size="28px" color={color.primaryPurple} className='icon' />
                            </SocialIconContainer>
                            <SocialIconContainer onMouseEnter={onEnter} onMouseLeave={onLeave}>
                                <AiOutlineLinkedin size="28px" color={color.primaryPurple} className='icon' />
                            </SocialIconContainer>
                        </Social>
                    </SocialClip>
                </Intro>
                <div>
                    <Grid />
                </div>
            </Container>
        </Section>
    )
}

export default Hero