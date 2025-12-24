import React from 'react';
import Header from '../components/layout/Header';
import Hero from './Home/Hero';
import Features from './Home/Features';
import About from './Home/About';
import Services from './Home/Services';
import Process from './Home/Process';
import Industries from './Home/Industries';
import Products from './Home/Products';
import Contact from './Home/Contact';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <About />
                <Services />
                <Process />
                <Industries />
                
                <Contact />
            </main>
        </>
    );
};

export default Home;