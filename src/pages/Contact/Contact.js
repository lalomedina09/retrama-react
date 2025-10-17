import React from 'react';

// Opción 2: Si Header está en components/layout/
import Header from '../../components/layout/Header';

import ContactBreadcumb from './ContactBreadcumb';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactBrands from './ContactBrands';

const Contact = () => {
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