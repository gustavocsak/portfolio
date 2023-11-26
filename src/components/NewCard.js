import React from 'react'
import styled from 'styled-components'
import tricket from '../img/tricket.jpg'
import { BsBootstrapFill } from "react-icons/bs";

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 80%;

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

`

const Links = styled.div`

`

const ProjectMain = styled.div`

`


/**
 * TODO: add animation for button hover
 * invert colors black and rgb(193, 51, 255)
 */
const ButtonColored = styled.button`
    width: 100px;
    padding: 10px;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(177,0,255,1) 0%, rgba(193,51,255,1) 100%);
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
    margin-right: 0.5em;
`

const NewCard = () => {
  return (
    <Wrap>
        <Description>
            <ProjectMain>
                <ProjectTitle>Tricket</ProjectTitle>
                <OneLiner>Tricket is a ticket tracking system.</OneLiner>
            </ProjectMain>
            <ShortDescription>Web application that allows you to add, edit and track tickets/tasks for your various projects.</ShortDescription>
            <Technologies>
                <span>Built with: </span>
                <BsBootstrapFill color='rgb(193, 51, 255)' size={"25px"}/>
            </Technologies>
            <Links>
                
                <Button>Github</Button>
                <ButtonColored>Live</ButtonColored>
            </Links>
        </Description>
        <ImageWrapper>
            <Image src={tricket} />
        </ImageWrapper>
    </Wrap>
  )
}

export default NewCard