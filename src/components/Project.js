import React from 'react'
import styled from 'styled-components'
import tricket from '../img/tricket.jpg'
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { gsap } from "gsap";
import { color } from "../utils/constants"


/**
 * 
 * TODO: make it responsive
 * 
 */


const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    transform: translateY(400px);
    transition: transform .5s;
    background-color: ${color.primaryBlack};
    padding: 0.2rem;
    border-radius: 10px;
`

const ImageWrapper = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    border-radius: 20px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1.5;
    padding: 1rem;
    padding-right: 3rem;
    border-left: 2px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(90deg, ${color.gradientPurple} 0%, ${color.primaryPurple} 100%);
`

const ProjectTitle = styled.h1`
    font-size: 55px;
    
`

const OneLiner = styled.div`
    font-weight: bold;
    font-size: 20px;
`

const Description = styled.div`
`

const Technologies = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

const Links = styled.div`
    
`

const Link = styled.a`
    text-decoration: none;
    color: #fff;
`

const ButtonColored = styled.button`
    width: 100px;
    padding: 10px;
    color: white;
    font-weight: bold;
    border: 1px solid ${color.primaryBlackAlpha};
    border-radius: 5px;
    background-color: ${color.primaryPurple};
    cursor: pointer;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    color: white;
    font-weight: bold;
    border: 1px solid ${color.primaryPurple};
    border-radius: 5px;
    background: ${color.primaryBlackAlpha};   
    cursor: pointer;
    margin-right: 1.5rem;
`

const Project = ({ project }) => {

    const translateTechStack = (tech) => {
        switch(tech) {
            case "react": return <FaReact color={color.primaryPurple} size={"25px"} />;
            case "mongodb": return <SiMongodb color={color.primaryPurple} size={"25px"} aria-label="MongoDB" />;
            case "express": return <SiExpress color={color.primaryPurple} size={"25px"} />;
            case "bootstrap": return <BsBootstrap color={color.primaryPurple} size={"25px"} />;
            case "javascript": return <IoLogoJavascript color={color.primaryPurple} size={"25px"} />;
        }
    }

    const onEnter = ({ currentTarget }) => {
        const buttonClasses = currentTarget.className.split(" ");
        gsap.to(currentTarget, {
            backgroundColor: buttonClasses[2] == "button" ? color.primaryPurple : color.primaryBlack,
            borderColor: color.primaryPurple,
            scale: 1.1,
            duration: 0.2
        })
    }
    
    const onLeave = ({ currentTarget }) => {
        const buttonClasses = currentTarget.className.split(" ");
        gsap.to(currentTarget, {
            backgroundColor: buttonClasses[2] == "button" ? color.primaryBlack : color.primaryPurple,
            scale: 1,
            duration: 0.2,
        })
    }  
   

    return (
        <Wrap className="project-reveal">
            <Info>
                <ProjectTitle>{project.title}</ProjectTitle>
                <OneLiner>{project.oneLiner}</OneLiner>
                <Description>{project.description}</Description>
                <Technologies>
                    <span>Built with: </span>
                    {project.techStack.map((tech, index) => {
                        return translateTechStack(tech);
                    })}
                </Technologies>
                <Links>
                    <Button className='button' onMouseEnter={onEnter} onMouseLeave={onLeave}><Link href={project.github} target='_blank'>Github</Link></Button>
                    <ButtonColored className='button-color' onMouseEnter={onEnter} onMouseLeave={onLeave}><Link href={project.liveSource} target='_blank'>Live</Link></ButtonColored>
                </Links>
            </Info>
            <ImageWrapper>
                <Image src={tricket} />
            </ImageWrapper>
        </Wrap>
    )
}

export default Project