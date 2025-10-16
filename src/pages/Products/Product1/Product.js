import React from 'react';
import Header from '../../../components/layout/Header';
import ProductBreadcumb from './ProductBreadcumb';
import ProductContent from './ProductContent';
import ProductSidebar from './ProductSidebar';

const Product = () => {
    return (
        <>
            <Header />
            <main>
                <ProductBreadcumb />
                <section className="space-top space-extra-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-lg-8">
                                <ProductContent />
                            </div>
                            <div className="col-xxl-4 col-lg-4">
                                <ProductSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Product;