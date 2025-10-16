import React from 'react';
import { Link } from 'react-router-dom';
const ProductBreadcumb = () => {
    return (
        <div className="breadcumb-wrapper" 
                    style={{
                        position: "relative",
                        backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')"
                    }}
                >            
                    {/* Overlay gris */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(30, 29, 29, 0.86)",
                            zIndex: 1
                        }}
                    />
                    <div className="container" style={{ position: "relative", zIndex: 2 }}>
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Tarimas a la medida</h1>
                            <ul className="breadcumb-menu">
                                <li><Link to="/">Inicio</Link></li>
                                <li>Tarimas a la medida</li>
                            </ul>
                        </div>
                    </div>
                </div>
    );
};

export default ProductBreadcumb;