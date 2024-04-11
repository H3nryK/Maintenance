import React, { useEffect, useState } from "react";
import Header from './components/header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutMe from './components/About';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
    }, []);

    return (
        <div className="App">
            {!isLoaded && <Preloader />}
            <Header />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;