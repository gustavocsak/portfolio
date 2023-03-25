import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em 0;
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
`

const ListItem = styled.li`
    cursor: pointer;
`

const MainName = styled.h1`
    line-height: 1em;
    font-size: 1.75em;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    /* background-color: #b100ff; */
    color: white;
    border: none;
    border-radius: 5px;
    background: rgb(177,0,255);
    /*#B100FF  #C133FF */
    background: linear-gradient(90deg, rgba(177,0,255,1) 0%, rgba(193,51,255,1) 100%);
    cursor: pointer;
`



const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
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