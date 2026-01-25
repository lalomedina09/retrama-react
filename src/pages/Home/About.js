import React, { useState, useRef, useEffect } from 'react';

const About = () => {
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef(null);

    const stats = [
        { number: 25000, text: "Tarimas Producidas Anualmente", icon: "assets/img/icon/counter_2_1.svg" },
        { number: 38000, text: "Reciclado de Tarimas Anualmente", icon: "assets/img/icon/counter_2_2.svg" },
        { number: 1200, text: "Clientes Satisfechos", icon: "assets/img/icon/counter_2_3.svg" },
        { number: 1100, text: "Proyectos Completados", icon: "assets/img/icon/counter_2_4.svg" }
    ];

    const handleVideoClick = (e) => {
        e.preventDefault();
        setShowVideo(true);
        // Pausar cualquier video que pueda estar reproduciéndose
        document.querySelectorAll('video').forEach(video => {
            if (video !== videoRef.current) {
                video.pause();
            }
        });
    };

    const closeVideo = () => {
        setShowVideo(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    // Cerrar video con Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeVideo();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Cerrar al hacer clic fuera del video
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (showVideo && e.target.classList.contains('video-popup-overlay')) {
                closeVideo();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [showVideo]);

    return (
        <>
            {/* Sección principal About */}
            <div className="position-relative overflow-hidden space" id="about-sec">
                <div className="container">
                    <div className="row gy-4 justify-content-between">
                        <div className="col-xxl-7">
                            <div className="title-area mb-60 pe-xl-5 me-xl-4">
                                <span className="sub-title sub-title2">
                                    Acerca de Nosotros
                                </span>
                                <h2 className="sec-title pe-xl-5 me-xl-5">
                                    Producción de tarimas, embalajes y empaques de madera
                                </h2>
                            </div>
                            <div className="img-box7">
                                <div className="img1 th-anim">
                                    <img
                                        src="assets/video/cover-video.jpeg"
                                        alt="About"
                                        loading="lazy" // Optimización de carga
                                    />
                                </div>
                                <div className="about-wrapp">
                                    <div className="discount-wrapp">
                                        <button
                                            className="play-btn popup-video"
                                            onClick={handleVideoClick}
                                            aria-label="Reproducir video"
                                        >
                                            <i className="fa-solid fa-play"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5">
                            <div className="ps-xl-4">
                                <p>
                                    Somos especialistas en la fabricación de tarimas, embalajes y empaques industriales de madera, diseñados para garantizar
                                    la integridad de sus productos en toda la cadena de suministro. En RETRAMA, cada pieza cumple rigurosamente con la
                                    normativa nacional e internacional (como NIMF-15 para exportación) y los más altos estándares de calidad, asegurando
                                    el manejo, almacenaje y transporte seguro de sus mercancías.
                                </p>
                                <div className="counter-item-wrap ps-xl-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="counter-item">
                                            <div className="box-icon">
                                                <img
                                                    src={stat.icon}
                                                    alt={`Ícono ${stat.text}`}
                                                    loading="lazy" // Optimización de carga
                                                />
                                            </div>
                                            <h3 className="box-number">
                                                <span className="counter-number">{stat.number}</span>
                                                <span className="plus">+</span>
                                            </h3>
                                            <div className="media-body">
                                                <p className="counter-text mb-n1">
                                                    {stat.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup de Video - Optimizado */}
            {showVideo && (
                <div className="video-popup-overlay" style={overlayStyles}>
                    <div className="video-popup-container" style={popupStyles}>
                        <button
                            className="video-close-btn"
                            onClick={closeVideo}
                            style={closeButtonStyles}
                            aria-label="Cerrar video"
                        >
                            ×
                        </button>
                        <div className="video-wrapper">
                            <video
                                ref={videoRef}
                                controls
                                controlsList="nodownload" // Evita descarga
                                preload="metadata" // Solo carga metadatos inicialmente
                                style={videoStyles}
                                onLoadedData={(e) => {
                                    // Autoplay cuando está listo
                                    e.target.play().catch(err => {
                                        console.log("Autoplay bloqueado:", err);
                                    });
                                }}
                            >
                                <source
                                    src="assets/video/video.mp4"
                                    type="video/mp4"
                                />
                                Tu navegador no soporta videos HTML5.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

// Estilos inline para evitar CSS adicional
const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'fadeIn 0.3s ease'
};

const popupStyles = {
    position: 'relative',
    width: '90%',
    maxWidth: '800px',
    backgroundColor: '#000',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
};

const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: 'white',
    fontSize: '28px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s'
};

const videoStyles = {
    width: '100%',
    height: 'auto',
    maxHeight: '80vh',
    display: 'block'
};

export default About;