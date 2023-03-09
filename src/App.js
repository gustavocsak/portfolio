import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


const App = () => {
    return (
        <main className="bg-white px-8">
            <section className="min-h-screen">
                <Navbar />
                <Hero />
            </section>
        </main>
      );
    
}

export default App;
