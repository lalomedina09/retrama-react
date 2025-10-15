import React from 'react';

import Header from '../../components/layout/Header';

import AboutBreadcumb from './AboutBreadcumb';
import AboutContent from './AboutContent';
import ProcessSection from './ProcessSection';
import WhyChooseUs from './WhyChooseUs';

const About = () => {
    return (
        <>
            <Header />
            <main>
            <AboutBreadcumb />
            <AboutContent />
            <ProcessSection />
            <WhyChooseUs />
            </main>
        </>
    );
};

export default About;