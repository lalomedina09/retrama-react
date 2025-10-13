import React from 'react';

const Products = () => {
    const products = [
        {
            image: "assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 1",
            title: "Tarimas Nuevas"
        },
        {
            image: "assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 2",
            title: "Tarimas a la medida"
        },
        {
            image: "assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 3",
            title: "Tarimas Reacondicionadas"
        },
        {
            image: "assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 4",
            title: "Tarimas Hibridas"
        }
    ];

    return (
        <div className="overflow-hidden space" id="project-sec">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title sub-title2">Tipos de tarimas</span>
                    <h2 className="sec-title">Tipo de tarimas que fabricamos</h2>
                </div>
            </div>
            <div className="slider-area">
                <div className="swiper th-slider projectSlider4 has-shadow" id="projectSlider4">
                    <div className="swiper-wrapper">
                        {products.map((product, index) => (
                            <div key={index} className="swiper-slide">
                                <div className="project-item2">
                                    <div className="box-img">
                                        <img src={product.image} alt="project image" />
                                    </div>
                                    <div className="box-content">
                                        <p className="box-subtitle">{product.subtitle}</p>
                                        <h3 className="box-title">
                                            <a href="#project-details">{product.title}</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;