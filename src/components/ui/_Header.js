import React from 'react';
import { getWhatsAppUrl, QUOTE_WHATSAPP_MESSAGE } from '../../constants/contact';

const Header = () => {
    return (
        <header className="th-header header-layout3 header-absolute">
            <div className="sticky-wrapper">
                <div className="container th-container2">
                    <div className="menu-area">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="header-logo">
                                    <a href="/">
                                        <img src="assets/img/logo-white.png" alt="RETRAMA" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-auto ms-xl-auto">
                                <nav className="main-menu style2 d-none d-lg-inline-block">
                                    <ul>
                                        <li><a href="/">Inicio</a></li>
                                        <li><a href="/productos">Productos</a></li>
                                        <li><a href="/contacto">Contacto</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-auto d-none d-xl-block">
                                <div className="header-button">
                                    <a
                                        href={getWhatsAppUrl(QUOTE_WHATSAPP_MESSAGE)}
                                        className="th-btn style1 th-radius"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="btn-text" data-back="Cotizar" data-front="Cotizar"></span>
                                        <i className="fab fa-whatsapp ms-2"></i>
                                    </a>
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
