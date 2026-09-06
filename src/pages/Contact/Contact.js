import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Opción 2: Si Header está en components/layout/
import Header from '../../components/layout/Header';

import ContactBreadcumb from './ContactBreadcumb';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactBrands from './ContactBrands';

const Contact = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            return undefined;
        }

        const targetId = location.hash.replace('#', '');
        const timeoutId = window.setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 150);

        return () => window.clearTimeout(timeoutId);
    }, [location.hash]);

    return (        
        <>
            <Header />
            <main>
                <ContactBreadcumb />
                <ContactInfo />
                <ContactForm />
                {/*<ContactBrands /> comentado temporal */}
            </main>
        </>
    );
};

export default Contact;
