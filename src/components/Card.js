import React from 'react'
import styled from 'styled-components'
import Tricket from '../img/tricket.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const Wrap = styled.div`
    background: rgba( 25, 23, 23, 0.7 );
    background: linear-gradient(90deg, rgba(177,0,255,0.8) 0%, rgba(193,51,255,0.8) 100%);
    box-shadow: 0 8px 32px 0 rgb(193, 51, 255, 0.37);
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
	margin: 1rem;
    padding: 1.5rem;
    

`

const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`

const Title = styled.h3`
    margin-top: 1em;
    border-bottom: 1px solid white;
    padding-bottom: 18px;
    font-size: 1.3rem;
   
`

const Description = styled.div`
    margin-top: 1em;
`

const Links = styled.div`
    margin-top: 1.5em;
`

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
    margin-left: 0.5em;
`

const Card = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
    //   <Wrap ref={ref} as={motion.div} initial={{y: -50, opacity: 0}} animate={{y: 0, opacity:1}} transition={{delay: 0.2}}>
    <Wrap ref={ref} as={motion.div} style={{
        transform: isInView ? "none" : "translateY(300px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.2s"
      }}>
        
        <Image src={Tricket} />
        <Title>Project Title</Title>
        <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Description>
        <Links>
            <ButtonColored>Live</ButtonColored>
            <Button>Github</Button>
            {/* <FiGithub size="28px" color='rgb(193, 51, 255)'/> */}
        </Links>
      </Wrap>
    )
  }
  
  export default Card