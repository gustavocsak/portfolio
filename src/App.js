import Hero from "./components/Hero.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import { ColorProvider } from "./components/ColorContext.js";

const App = () => {
    return (
        <ColorProvider>
            <div className='flex flex-col text-zinc-100 bg-primaryBlack gap-16'>
                <Hero />
                <Projects />
                <About />
                <Contact />
                <Footer />
            </div>
        </ColorProvider>
      );
    
}

export default App;
