import React from 'react';

const Hero = () => {
    const slides = [
        {
            id: 1,
            bg: "assets/img/hero/bg-4.jpg",
            title: "Fabricación y comercialización",
            text: "RETRAMA es una empresa especializada en la fabricación y comercialización de tarimas de madera de alta calidad.",
            buttonText: "Solicitar cotización"
        },
        {
            id: 2,
            bg: "assets/img/hero/bg-3.jpg",
            title: "Soluciones en Tarimas",
            text: "Más de 20 años de experiencia en el sector, nos hemos consolidado como líderes en la industria.",
            buttonText: "Hablar a ventas"
        },
        {
            id: 3,
            bg: "assets/img/hero/bg-2.jpg",
            title: "Reciclado y reutilización",
            text: "Empresa dedicada al reciclado y reutilización de tarimas usadas, promoviendo prácticas sostenibles y responsables con el medio ambiente.",
            buttonText: "Ver Soluciones"
        }
    ];

    return (
        <div className="th-hero-wrapper hero-3" id="hero">
            <div className="swiper th-slider hero-slider-3" id="heroSlide3">
                <div className="swiper-wrapper">
                    {slides.map((slide) => (
                        <div key={slide.id} className="swiper-slide">
                            <div className="hero-inner">
                                <div className="th-hero-bg" style={{ backgroundImage: `url(${slide.bg})` }}></div>
                                <div className="container">
                                    <div className="hero-style3">
                                        <h1 className="hero-title" data-ani="slideinleft" data-ani-delay="0.4s">
                                            {slide.title}
                                            <span className="hero-img">
                                                <img src="assets/img/shape/hero-shape3.svg" alt="" />
                                            </span>
                                        </h1>
                                        <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.6s">
                                            {slide.text}
                                        </p>
                                        <div className="btn-group justify-content-center justify-content-lg-start">
                                            <div data-ani="slideinleft" data-ani-delay="0.8s">
                                                <a href="#contacto" className="th-btn style1 th-radius th-icon">
                                                    <span className="btn-text" data-back={slide.buttonText} data-front={slide.buttonText}></span>
                                                    <i className="fa-regular fa-arrow-right ms-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;