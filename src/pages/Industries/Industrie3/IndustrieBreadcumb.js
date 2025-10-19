import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieBreadcumb = () => {
    return (
        <div className="breadcumb-wrapper"
            style={{
                position: "relative",
                backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')"
            }}
        >
            {/* Overlay gris */}
            <div className="overlay-grey" />
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">Industria Automotriz</h1>
                    <ul className="breadcumb-menu">
                        <li><Link to="/">Inicio</Link></li>
                        <li>Industria Automotriz</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default IndustrieBreadcumb;