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
    background-image: url("./img/jack.jpg");

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
