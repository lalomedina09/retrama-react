import React, { useState, useEffect } from 'react';

/**
 * Botón flotante que permite a los usuarios solicitar una cotización.
 * Redirige al usuario a la sección de contacto al hacer clic.
 * 
 * @component
 * @example
 * <a href="#contacto" className="th-btn style1 th-icon">
 *   <span className="btn-text">Solicitar Cotización</span>
 *   <i className="fa-regular fa-arrow-right ms-2"></i>
 * </a>
 */
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            bg: "assets/img/hero/bg-4.jpg",
            title: "Fabricación y comercialización",
            text: "RETRAMA es una empresa especializada en la fabricación y comercialización de tarimas de madera de alta calidad.",
            buttonText: "Solicitar cotización",
            videoUrl: "https://www.youtube.com/watch?v=_sI_Ps7JSEk"
        },
        {
            id: 2,
            bg: "assets/img/hero/bg-3.jpg",
            title: "Soluciones en Tarimas",
            text: "Más de 20 años de experiencia en el sector, nos hemos consolidado como líderes en la industria.",
            buttonText: "Hablar a ventas",
            videoUrl: "https://www.youtube.com/watch?v=_sI_Ps7JSEk"
        },
        {
            id: 3,
            bg: "assets/img/hero/bg-2.jpg",
            title: "Reciclado y reutilización",
            text: "Empresa dedicada al reciclado y reutilización de tarimas usadas, promoviendo prácticas sostenibles y responsables con el medio ambiente.",
            buttonText: "Ver Soluciones",
            videoUrl: "https://www.youtube.com/watch?v=_sI_Ps7JSEk"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-play opcional
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    const handleVideoClick = (videoUrl) => {
        // Aquí puedes implementar un modal de video
        console.log('Abrir video:', videoUrl);
        // Ejemplo: window.open(videoUrl, '_blank');
    };

    return (
        <div className="th-hero-wrapper hero-3" id="hero">
            <div className="swiper th-slider hero-slider-3" id="heroSlide3">
                <div className="swiper-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`swiper-slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <div className="hero-inner">
                                <div
                                    className="th-hero-bg"
                                    style={{ backgroundImage: `url(${slide.bg})` }}
                                ></div>
                                <div className="container">
                                    <div className="hero-style3">
                                        <h1 className="hero-title">
                                            {slide.title}
                                            <span className="hero-img">
                                                <img src="assets/img/shape/hero-shape3.svg" alt="" />
                                            </span>
                                        </h1>
                                        <p className="hero-text">
                                            {slide.text}
                                        </p>
                                        <div className="btn-group justify-content-center justify-content-lg-start">
                                            <div className="">
                                                <a href="#contacto" className="th-btn style1 th-radius th-icon">
                                                    <span className="btn-text">
                                                        {slide.buttonText}
                                                    </span>
                                                    <i className="fa-regular fa-arrow-right ms-2"></i>
                                                </a>
                                            </div>
                                            <div className="call-btn">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botones de navegación */}
                <button
                    className="slider-arrow slider-prev"
                    onClick={prevSlide}
                >
                    <i className="far fa-arrow-left"></i>
                </button>
                <button
                    className="slider-arrow slider-next"
                    onClick={nextSlide}
                >
                    <i className="far fa-arrow-right"></i>
                </button>
            </div>

            {/* Enlaces sociales */}
            <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

            {/* Botón flotante del hero */}
            <div className="hero-btn">
                <a href="#contacto" className="th-btn style1 th-icon">
                    <span className="btn-text">
                        Solicitar Cotización
                    </span>
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                </a>
            </div>
        </div>
    );
};

export default Hero;