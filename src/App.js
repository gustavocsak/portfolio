import styles from "./index.css";
import Navbar from "./components/Navbar";
import Blob from "./components/Blob";

import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <div className="bg-[#0E1129] px-10">
            <section className="min-h-screen">
                <Navbar />
                <Blob />
                
            </section>
            
        </div>
      );
    
}

export default App;
