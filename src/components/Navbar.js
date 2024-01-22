import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 2em;
    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em 0;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        padding: 15px;
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const ListItem = styled.li`
    cursor: pointer;
`

const MainName = styled.h1`
    line-height: 1em;
    font-size: 1.75em;
    font-weight: bold;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 5px;
    background: rgb(177,0,255);
    background: linear-gradient(90deg, rgba(177,0,255,1) 0%, rgba(193,51,255,1) 100%);
    cursor: pointer;
`



const Navbar = ({ navRef }) => {
  return (
    <Section>
        <Container ref={navRef}>
            <Links >
                <MainName>gustavocs</MainName>
                <List>
                    <ListItem>Projects</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Button>Resume</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar