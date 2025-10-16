import React from 'react';
import { Link } from 'react-router-dom';
const ProductBreadcumb = () => {
    return (
        <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">Tarimas Re-acondicionadas</h1>
                    <ul className="breadcumb-menu">
                        <li><Link to="/">Inicio</Link></li>
                        <li>Tarimas Re-acondicionadas</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductBreadcumb;