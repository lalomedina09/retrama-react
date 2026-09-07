import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Hero from './Home/Hero';
import Features from './Home/Features';
import About from './Home/About';
import Services from './Home/Services';
import Process from './Home/Process';
import Industries from './Home/Industries';
import Products from './Home/Products';
import Contact from './Home/Contact';
import './Home/Home.css';

const Home = () => {
    useEffect(() => {
        document.title = 'Retrama | Tarimas de madera para la industria';
    }, []);

    return (
        <>
            <Header />
            <main className="page-transition">
                <Hero />
                <Features />
                <Products />
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
