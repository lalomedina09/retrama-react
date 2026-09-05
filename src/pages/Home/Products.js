import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        {
            icon: 'fas fa-cubes',
            title: 'Tarimas Nuevas',
            text: 'Fabricadas a la medida, con capacidad de carga personalizada.',
            to: '/productos#tarimas-nuevas'
        },
        {
            icon: 'fas fa-recycle',
            title: 'Tarimas Recicladas',
            text: 'Reutilizamos materiales en buen estado para darles nueva vida.',
            to: '/productos#tarimas-reacondicionadas'
        },
        {
            icon: 'fas fa-layer-group',
            title: 'Tarimas Híbridas',
            text: 'Reemplazo de cargadores por nuevos, optimizando resistencia y costo.',
            to: '/productos#tarimas-hibridas'
        }
    ];

    return (
        <section className="overflow-hidden space retrama-home-products" id="nuestros-productos">
            <div className="container">
                <div className="title-area text-center">
                    <h2 className="sec-title">Nuestros productos</h2>
                    <p className="retrama-home-products__subtitle">Cada tarima, diseñada para tu negocio.</p>
                </div>
                <div className="row gy-4">
                    {products.map((product) => (
                        <div key={product.title} className="col-md-6 col-xl-4">
                            <article className="retrama-product-card h-100">
                                <div className="retrama-product-card__icon" aria-hidden="true">
                                    <i className={product.icon}></i>
                                </div>
                                <div className="retrama-product-card__body">
                                    <h3 className="retrama-product-card__title">{product.title}</h3>
                                    <p className="retrama-product-card__text">{product.text}</p>
                                    <Link to={product.to} className="th-btn style1 th-radius th-icon">
                                        <span className="btn-text">Ver detalles</span>
                                        <i className="fa-regular fa-arrow-right ms-2" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
