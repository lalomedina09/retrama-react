import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Industries from './components/Industries';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <About />
            <Services />
            <Process />
            <Industries />
            <Products />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;