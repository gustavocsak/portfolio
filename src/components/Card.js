import React from 'react'
import styled from 'styled-components'
import tricket from '../img/tricket.jpg'
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';
import { IoLogoJavascript } from "react-icons/io5";

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
    main: { scale: 1.2, backgroundColor: 'rgb(193, 51, 255)', transition: { duration: 0.15 } },
    black: { scale: 1.2, backgroundColor: 'rgb(25, 23, 23)', transition: { duration: 0.15 } }

}

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 82%;
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
    padding: 1rem;
    padding-right: 3rem;
`

const ProjectTitle = styled.h1`
    font-size: 55px;
    
    
`

const OneLiner = styled.div`
    font-weight: bold;
    font-size: 16px;
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

const Link = styled.a`
    text-decoration: none;
    color: #fff;
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

/**
 * for reference from old card:
 * 
 * const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
    //   <Wrap ref={ref} as={motion.div} initial={{y: -50, opacity: 0}} animate={{y: 0, opacity:1}} transition={{delay: 0.2}}>
    <Wrap ref={ref} as={motion.div} style={{
        transform: isInView ? "none" : "translateY(300px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1.2s"
      }}> 
 * 
 */

const NewCard = ({ project }) => {

    const translateTechStack = (tech) => {
        switch(tech) {
            case "react": return <FaReact color='rgb(193, 51, 255)' size={"25px"} />;
            case "mongodb": return <SiMongodb color='rgb(193, 51, 255)' size={"25px"} aria-label="MongoDB" />;
            case "express": return <SiExpress color='rgb(193, 51, 255)' size={"25px"} />;
            case "bootstrap": return <BsBootstrap color='rgb(193, 51, 255)' size={"25px"} />;
            case "javascript": return <IoLogoJavascript color='rgb(193, 51, 255)' size={"25px"} />;
        }
    }

    return (
        <Wrap>
            <Description>
                <ProjectMain>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <OneLiner>{project.oneLiner}</OneLiner>
                </ProjectMain>
                <ShortDescription>{project.description}</ShortDescription>
                <Technologies>
                    <span>Built with: </span>
                    {project.techStack.map((tech, index) => {
                        return translateTechStack(tech);
                    })}
                </Technologies>
                <Links>
                    <Button as={motion.button} variants={variants} whileHover={"main"}><Link href={project.github} target='_blank'>Github</Link></Button>
                    <ButtonColored as={motion.button} variants={variants} whileHover={"black"}><Link href={project.liveSource} target='_blank'>Live</Link></ButtonColored>
                </Links>
            </Description>
            <ImageWrapper>
                <Image src={tricket} />
            </ImageWrapper>
        </Wrap>
    )
}

export default NewCard