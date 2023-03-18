import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 1200px;
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
    
`

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`

const ListItem = styled.li`
   
`

const MainName = styled.h1`
    line-height: 1em;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #b100ff;
    color: white;
    border: none;
    border-radius: 5px;
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