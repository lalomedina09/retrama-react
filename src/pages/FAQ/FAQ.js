import React from 'react';
import Header from '../../components/layout/Header';
import FAQBreadcumb from './FAQBreadcumb';
import FAQContent from './FAQContent';

const FAQ = () => {
    return (
        <>
            <Header />
            <main>
                <FAQBreadcumb />
                <FAQContent />
            </main>
        </>
    );
};

export default FAQ;