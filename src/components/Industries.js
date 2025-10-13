import React from 'react';

const Industries = () => {
    const industries = [
        {
            image: "assets/img/service/service_2_1.jpg",
            title: "Alimenticia y Bebidas",
            text: "Tarimas sanitarias y embalajes especializados para el manejo seguro de productos alimenticios, cumpliendo con normativas de higiene."
        },
        {
            image: "assets/img/service/service_2_2.jpg",
            title: "Aeronáutica",
            text: "Soluciones de empaque y embalaje para componentes aeronáuticos, garantizando protección máxima durante el transporte internacional."
        },
        {
            image: "assets/img/service/service_2_3.jpg",
            title: "Automotriz",
            text: "Tarimas robustas para el transporte de autopartes y componentes automotrices, diseñadas para soportar cargas pesadas."
        },
        {
            image: "assets/img/service/service_2_1.jpg",
            title: "Construcción",
            text: "Embalajes resistentes para materiales de construcción, herramientas y equipos pesados del sector construcción."
        },
        {
            image: "assets/img/service/service_2_2.jpg",
            title: "Electrónica",
            text: "Tarimas y huacales especializados para la protección de equipos electrónicos sensibles durante el almacenamiento y transporte."
        },
        {
            image: "assets/img/service/service_2_3.jpg",
            title: "Energía",
            text: "Soluciones de empaque para componentes de energía renovable, transformadores y equipos del sector energético."
        }
    ];

    return (
        <section className="z-index-common overflow-hidden space" id="service-sec" data-bg-src="assets/img/bg/service_bg_2.png">
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <div className="title-area text-center text-lg-start">
                            <span className="sub-title sub-title3">Tipo de industrias</span>
                            <h2 className="sec-title text-white">Soluciones para diversas industrias</h2>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="sec-btn">
                            <a href="#proyectos" className="th-btn style1 th-radius th-icon">
                                <span className="btn-text" data-back="Ver Más" data-front="Ver Más"></span>
                                <i className="fa-regular fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="slider-area slider-drag-wrap">
                    <div className="swiper th-slider has-shadow" id="serviceSlide4">
                        <div className="swiper-wrapper">
                            {industries.map((industry, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="service-grid">
                                        <div className="service-grid_content">
                                            <h3 className="box-title">
                                                <a href="#service-details">{industry.title}</a>
                                            </h3>
                                            <p className="box-text">{industry.text}</p>
                                            <a href="#service" className="th-btn border-btn th-radius th-icon fw-semibold">
                                                <span className="btn-text" data-back="Ver Detalles" data-front="Ver Detalles"></span>
                                                <i className="fa-regular fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                        <div className="box-img th-anim">
                                            <img src={industry.image} alt={industry.title} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;