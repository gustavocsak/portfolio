import Hero from "./components/Hero.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import styled from "styled-components";
import Test from "./components/Cube.js";


const Container = styled.div`
    /* height: 100vh;
    scroll-snap-type: y mandatory; */
    /* scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none; */
    &::-webkit-scrollbar {
        display: none;
    }
    color: white;
    background-color: #121212;
    
    @media only screen and (max-width: 1024px) {
        scroll-snap-type: none;
        scroll-behavior: smooth;
        overflow-y: auto;
        scrollbar-width: none;
    }
    

`

const App = () => {
    return (
        <Container>
            <Hero />
            <Projects />
            {/* <Contact /> */}
 
        </Container>
      );
    
}

export default App;
