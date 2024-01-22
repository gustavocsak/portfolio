import Hero from "./components/Hero.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import styled from "styled-components";
import About from "./components/About.js";
import Footer from "./components/Footer.js";


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
    background-color: rgb(18, 18, 18);
    
    @media only screen and (max-width: 1024px) {
        scroll-snap-type: none;
        scroll-behavior: smooth;
        overflow-y: auto;
        scrollbar-width: none;
    }
    

`

const App = () => {
    return (
        <div className='flex flex-col text-zinc-100 bg-primaryBlack gap-16'>
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
      );
    
}

export default App;
