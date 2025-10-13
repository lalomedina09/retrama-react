import React from 'react';

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
                                        <li><a href="#inicio">Inicio</a></li>
                                        <li><a href="#nosotros">Nosotros</a></li>
                                        <li className="menu-item-has-children">
                                            <a href="#productos">Productos</a>
                                            <ul className="sub-menu">
                                                <li><a href="#tarimas-nuevas">Tarimas Nuevas</a></li>
                                                <li><a href="#tarimas-medida">Tarimas a la medida</a></li>
                                                <li><a href="#tarimas-reacondicionadas">Tarimas Reacondicionadas</a></li>
                                                <li><a href="#tarimas-hibridas">Tarimas hibridas</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="#industrias">Industrias</a>
                                            <ul className="sub-menu">
                                                <li><a href="#alimenticia">Alimenticia</a></li>
                                                <li><a href="#aeronautica">Aeronáutica</a></li>
                                                <li><a href="#automotriz">Automotriz</a></li>
                                                <li><a href="#construccion">Construcción</a></li>
                                                <li><a href="#electronica">Electrónica</a></li>
                                                <li><a href="#energia">Energía</a></li>
                                                <li><a href="#medico">Sector Médico</a></li>
                                                <li><a href="#telecomunicaciones">Telecomunicaciones</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#faq">FAQ</a></li>
                                        <li><a href="#contacto">Contacto</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-auto d-none d-xl-block">
                                <div className="header-button">
                                    <a href="#cotizar" className="th-btn style1 th-radius">
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