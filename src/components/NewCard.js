import React from 'react'
import styled from 'styled-components'
import tricket from '../img/tricket.jpg'
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';

/**
 * TODO: different projects will need different icons
 * think about how to implement that
 * 
 * TODO: make it responsive
 * 
 * TODO: animate
 */

/**
 * Framer variants
 */
const variants = {
    main: {scale: 1.2, backgroundColor: 'rgb(193, 51, 255)', transition: {duration: 0.15}},
    black: {scale: 1.2, backgroundColor: 'rgb(25, 23, 23)', transition: {duration: 0.15}}
    
}

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 80%;
    border-left: 2px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(90deg, rgba(177,0,255,1) 0%, rgba(193,51,255,1) 100%);
`

const ImageWrapper = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    border-radius: 20px;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1.5;
    padding: 1.5rem;
    padding-right: 3rem;
`

const ProjectTitle = styled.h1`
    font-size: 55px;
    
    
`

const OneLiner = styled.div`

`

const ShortDescription = styled.div`
`

const Technologies = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

const Links = styled.div`
    
`

const ProjectMain = styled.div`

`


/**
 * TODO: add animation for button hover
 * invert colors black and rgb(193, 51, 255)
 * FIXME: from main color to black currently not working
 */
const ButtonColored = styled.button`
    width: 100px;
    padding: 10px;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    
    background: linear-gradient(90deg, rgba(177,0,255,1) 0%, rgba(193,51,255,1) 100%);
    background-color: rgba(193,51,255,1);
    cursor: pointer;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    color: white;
    font-weight: bold;
    border: 1px solid rgb(193, 51, 255);
    border-radius: 5px;
    background: rgba( 25, 23, 23, 0.7 );   
    cursor: pointer;
    margin-right: 1.5rem;
`

const NewCard = () => {
  return (
    <Wrap>
        <Description>
            <ProjectMain>
                <ProjectTitle>Tricket</ProjectTitle>
                <OneLiner>Tricket is a ticket tracking system.</OneLiner>
            </ProjectMain>
            <ShortDescription>Web application that allows you to create, update, delete and track tickets/tasks for your various projects.
                            Tricket makes you more productive by giving you a view of your tasks and tickets that needs to be worked on.</ShortDescription>
            <Technologies>
                <span>Built with: </span>
                <BsBootstrap color='rgb(193, 51, 255)' size={"25px"} />
                <FaReact color='rgb(193, 51, 255)' size={"25px"} />
                <SiExpress color='rgb(193, 51, 255)' size={"25px"} />
                <SiMongodb color='rgb(193, 51, 255)' size={"25px"} aria-label="MongoDB"/>
            </Technologies>
            <Links>
                
                <Button as={motion.button} variants={variants} whileHover={"main"}>Github</Button>
                <ButtonColored as={motion.button} variants={variants} whileHover={"black"}>Live</ButtonColored>
            </Links>
        </Description>
        <ImageWrapper>
            <Image src={tricket} />
        </ImageWrapper>
    </Wrap>
  )
}

export default NewCard