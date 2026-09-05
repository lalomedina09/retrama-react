import React, { useState, useRef, useEffect } from 'react';

const About = () => {
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef(null);

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
                    <div className="title-area mb-40 text-center">
                        <span className="sub-title sub-title2">
                            Retrama: Madera que mueve industrias.
                        </span>
                        <h2 className="sec-title">
                            Producción de tarimas, embalajes y empaques de madera
                        </h2>
                    </div>
                    <div className="retrama-about-row">
                        <div className="retrama-about-media">
                            <div className="img-box7 retrama-about-video">
                                <div className="img1 th-anim">
                                    <img
                                        src="assets/video/cover-video.jpeg"
                                        alt="Producción de tarimas RETRAMA"
                                        loading="lazy"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="retrama-play-btn"
                                    onClick={handleVideoClick}
                                    aria-label="Reproducir video"
                                >
                                    <i className="fa-solid fa-play" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <div className="retrama-about-copy text-start">
                                <p>
                                    Nuestro proceso de fabricación combina técnicas tradicionales con tecnología moderna para garantizar tarimas de máxima calidad.
                                </p>
                                <p>
                                    Desde la selección de la materia prima hasta el embalaje final, cada etapa está supervisada por nuestro equipo de expertos para asegurar que cada tarima cumpla con los más altos estándares de la industria.
                                </p>
                                <p className="fw-semibold mb-0">
                                    Cada tarima, diseñada para tu negocio.
                                </p>
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