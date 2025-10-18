import React from 'react';
import Header from '../../../components/layout/Header';
import IndustrieBreadcumb from './IndustrieBreadcumb';
import IndustrieContent from './IndustrieContent';
import IndustrieSidebar from './IndustrieSidebar';
import IndustrieBrands from './IndustrieBrands';

const Industrie = () => {
    return (
        <>
            <Header />
            <main>
                <IndustrieBreadcumb />
                <IndustrieContent />
                <IndustrieBrands />
            </main>
        </>
    );
};

export default Industrie;