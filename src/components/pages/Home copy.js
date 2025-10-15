import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Industries from '../components/Industries';
import Products from '../components/Products';
import Contact from '../components/Contact';

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
                <Products />
                <Contact />
            </main>
        </>
    );
};

export default Home;