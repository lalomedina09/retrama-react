import React from 'react';

const Products = () => {
    const products = [
        {
            id: 1,
            name: "Software Empresarial",
            description: "Solución completa para gestión de negocios",
            price: "€499"
        },
        {
            id: 2,
            name: "E-commerce Platform",
            description: "Plataforma de comercio electrónico",
            price: "€799"
        },
        {
            id: 3,
            name: "App Móvil",
            description: "Aplicaciones nativas para iOS y Android",
            price: "€1,299"
        }
    ];

    return (
        <main className="page-products">
            <div className="container">
                <h1>Nuestros Productos</h1>
                <p className="page-description">
                    Descubre nuestra gama de productos diseñados para impulsar tu negocio
                </p>

                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className="product-price">{product.price}</div>
                            <button className="product-button">Más Información</button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Products;