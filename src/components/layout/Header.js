import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getWhatsAppUrl } from '../../constants/contact';

const toggleMobileMenu = () => {
    document.querySelectorAll('.th-menu-wrapper').forEach((el) => {
        if (!el.classList.contains('d-none')) {
            el.classList.toggle('th-body-visible');
        }
    });
};

const Header = () => {
    const location = useLocation();

    const handleCotizarClick = (e) => {
        e.preventDefault();
        const message = `Necesito mas informacion, ${window.location.href}`;
        window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    };

    const isActiveLink = (path) => {
        if (path === '/') {
            return location.pathname === '/' ? 'active' : '';
        }
        return location.pathname === path || location.pathname.startsWith(`${path}/`) ? 'active' : '';
    };

    return (
        <header className="th-header header-layout3 header-absolute">
            <div className="sticky-wrapper">
                <div className="container th-container2">
                    <div className="menu-area">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="header-logo">
                                    <Link to="/">
                                        <img src="/assets/img/logo-white.png" alt="RETRAMA" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-auto ms-xl-auto">
                                <nav className="main-menu style2 d-none d-lg-inline-block" aria-label="Navegación principal">
                                    <ul>
                                        <li className={isActiveLink('/')}>
                                            <Link to="/">Inicio</Link>
                                        </li>
                                        <li className={isActiveLink('/nosotros')}>
                                            <Link to="/nosotros">Nosotros</Link>
                                        </li>
                                        <li className={isActiveLink('/productos')}>
                                            <Link to="/productos">Productos</Link>
                                        </li>
                                        <li className={isActiveLink('/preguntas-frecuentes')}>
                                            <Link to="/preguntas-frecuentes">FAQ</Link>
                                        </li>
                                        <li className={isActiveLink('/contacto')}>
                                            <Link to="/contacto">Contacto</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="col-auto">
                                <div className="header-button d-flex align-items-center">
                                    <a
                                        href={getWhatsAppUrl()}
                                        className="th-btn style1 th-radius"
                                        onClick={handleCotizarClick}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Contactar por WhatsApp"
                                    >
                                        <span className="btn-text" data-back="WhatsApp" data-front="WhatsApp"></span>
                                        <i className="fab fa-whatsapp ms-2" aria-hidden="true"></i>
                                    </a>
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-inline-block d-lg-none"
                                        onClick={toggleMobileMenu}
                                        aria-label="Abrir menú de navegación"
                                    >
                                        <i className="far fa-bars" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
