import React from 'react'
import styled from 'styled-components'
import { color } from '../utils/constants'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { gsap } from 'gsap/gsap-core';
import { HiMailOpen } from "react-icons/hi";


const Section = styled.div`
    // background-color: ${color.primaryBlack};
    background-color: #161616;
    box-shadow: 28px 22px 15px 0px rgba(0,0,0,0.1);
	display: flex;
    align-items: center;
    justify-content: center;
	padding: 2rem;
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
    width: 1400px;
    display: flex;
    flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
    color: ${color.primaryWhite};
	@media only screen and (max-width: 768px) {
	   width: 100%;
    }
`

const Left = styled.div`
    font-weight: 600;
`

const Right = styled.div`
    display: flex;
    gap: 1rem;

    a {
        color: ${color.primaryWhite};
    }
`

const Mail = styled.div`
    display: flex;
    gap: 0.3rem;
`


const Address = styled.div`
    font-weight: 600;
`

const Footer = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            color: color.primaryPurple,
            duration: 0.2
        })
    }

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            color: color.primaryWhite,
            duration: 0.2
        })
    }

    const iconConfig = {onMouseEnter: onEnter, onMouseLeave: onLeave, size: 22}

    return (
        <Section>
            <Container>
                <Left>gustavocs | made by Gustavo Carvalhaes</Left>
                <Right>
                    <a href='https://linkedin.com/in/gustavo-de-sa/' target='_blank'>
                        <FaLinkedinIn {...iconConfig} title='linkedin'/>
                    </a>
                    
                    <a href='https://github.com/gustavocsak/' target='_blank'>
                        <FaGithub {...iconConfig} title='github'/>
                    </a>
                    <Mail>
                        <a href='mailto:gustavocsak@gmail.com'><HiMailOpen {...iconConfig} title='email'/></a>
                        <Address>gustavocsak@gmail.com</Address>
                    </Mail>

                </Right>
            </Container>
        </Section>
    )
}

export default Footer