import React from 'react'

const Section = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
	padding: 5rem;
    @media only screen and (max-width: 768px) {
		height: fit-content;
		min-height: 100%;
    }
	@media only screen and (max-width: 1024px) {
		scroll-snap-align: none;
	}
`

const Container = styled.div`
    height: 100vh;
    width: 1400px;
    display: flex;
    flex-direction: row;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 768px) {
	   width: 100%;
    }
`

const Skills = () => {
  return (
    <div>Skills</div>
  )
}

export default Skills