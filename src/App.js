import styles from "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
    return (
        <div className="bg-white px-10">
            <section className="min-h-screen">
                <Navbar />
                <Hero />
            </section>
            
        </div>
      );
    
}

export default App;
