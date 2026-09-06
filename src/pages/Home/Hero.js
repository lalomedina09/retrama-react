import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl, QUOTE_WHATSAPP_MESSAGE } from '../../constants/contact';

const Hero = () => {
    return (
        <div className="th-hero-wrapper hero-3 hero-retrama" id="hero">
            <div className="hero-inner">
                <div
                    className="th-hero-bg"
                    style={{
                        backgroundImage: 'url(/assets/img/hero/bg-0.jpeg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    role="img"
                    aria-label="Tarimas de madera RETRAMA"
                ></div>
                <div className="container">
                    <div className="hero-style3 hero-retrama-content">
                        <h1 className="hero-title">
                            Líder nacional en tarimas de madera, hechas a la medida de tu negocio
                        </h1>
                        <p className="hero-text">
                            Fabricamos, recolectamos y transformamos tarimas con calidad certificada para todo México.
                        </p>
                        <div className="btn-group justify-content-start hero-retrama-actions">
                            <a
                                href={getWhatsAppUrl(QUOTE_WHATSAPP_MESSAGE)}
                                className="th-btn style1 th-radius th-icon"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="btn-text">Solicita tu cotización inmediata</span>
                                <i className="fa-regular fa-arrow-right ms-2" aria-hidden="true"></i>
                            </a>
                            <Link to="/productos" className="th-btn th-radius th-icon fw-semibold hero-retrama-btn-secondary">
                                <span className="btn-text">Conoce nuestras soluciones</span>
                                <i className="fa-regular fa-arrow-right ms-2" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
