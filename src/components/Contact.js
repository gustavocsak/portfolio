import React, { useRef } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import LetterAnimate from '../utils/LetterAnimate'



const titleLetter = ['M', 'e']


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
`

const Container = styled.div`
    height: 100%;
    /* scroll-snap-align: center; // does not align to hero container, liked better this way */
    width: 1400px;
    display: flex;
    justify-content: space-between;
    
`

const ContactHeader = styled.div`
	display: flex;
	justify-conter: center;
	align-items: center;

`

const ContactForm = styled.div`
	display: flex;
	justify-content: center;
	flex: 2;
`

const Title = styled(motion.div)`
    
    font-size: 70px;
`

const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });



	return (
		<Section>
			<Container>
				<ContactHeader>
					<Title as={motion.h1} initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						variants={{
							visible: { opacity: 1, y: 0 },
							hidden: { opacity: 0, y: -50 }
						}} ><span style={{}}>Contact  </span>{titleLetter.map((letter, index) => {
							return <LetterAnimate key={index} letter={letter} />
						})}!</Title>
				</ContactHeader>
				<ContactForm>
					<form>
						<input type='number' id='test'/>
					</form>
				</ContactForm>
			</Container>
		</Section>
	)
}

export default Contact