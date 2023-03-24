import Hero from "./components/Hero.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import styled from "styled-components";


const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    color: white;
    

    
    background-color: #121212;
    /* background-image: radial-gradient(at 100% 51%, rgb(30, 41, 59) 0, transparent 100%); */
      

`

const App = () => {
    return (
        <Container>
            <Hero />
            <Projects />
            <Contact />
        </Container>
      );
    
}

export default App;
