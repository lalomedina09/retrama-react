import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const location = useLocation();

    const handleMenuToggle = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleSearchToggle = () => {
        console.log('Abrir búsqueda');
        // Lógica para abrir búsqueda
    };

    const handleSideMenuToggle = () => {
        console.log('Abrir side menu');
        // Lógica para abrir side menu
    };

    const handleMobileMenuToggle = () => {
        console.log('Abrir mobile menu');
        // Lógica para abrir mobile menu
    };

    const handleCotizarClick = () => {
        console.log('Redirigir a cotización');
        // Lógica para WhatsApp o formulario de cotización
        const message = encodeURIComponent('Necesito mas informacion, ');
        const currentUrl = window.location.href;
        window.open(`https://wa.me/528130803998?text=${message}${currentUrl}`, '_blank');
    };

    const isActiveLink = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="th-header header-layout3 header-absolute">
            <div className="sticky-wrapper">
                <div className="container th-container2">
                    <div className="menu-area">
                        <div className="row align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="col-auto">
                                <div className="header-logo">
                                    <Link to="/">
                                        <img src="/assets/img/logo-white.png" alt="RETRAMA" />
                                    </Link>
                                </div>
                            </div>

                            {/* Navegación principal */}
                            <div className="col-auto ms-xl-auto">
                                <nav className="main-menu style2 d-none d-lg-inline-block">
                                    <ul>
                                        <li className={isActiveLink('/')}>
                                            <Link to="/">Inicio</Link>
                                        </li>
                                        <li className={isActiveLink('/nosotros')}>
                                            <Link to="/nosotros">Nosotros</Link>
                                        </li>

                                        {/* Productos con submenú */}
                                        <li className={`menu-item-has-children ${activeMenu === 'productos' ? 'active' : ''}`}>
                                            <a
                                                href="#productos"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleMenuToggle('productos');
                                                }}
                                            >
                                                Productos
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/productos/tarimas-nuevas">Tarimas Nuevas</Link>
                                                </li>
                                                <li>
                                                    <Link to="/productos/tarimas-medida">Tarimas a la medida</Link>
                                                </li>
                                                <li>
                                                    <Link to="/productos/tarimas-reacondicionadas">Tarimas Reacondicionadas</Link>
                                                </li>
                                                <li>
                                                    <Link to="/productos/tarimas-hibridas">Tarimas Híbridas</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* Industrias con submenú */}
                                        <li className={`menu-item-has-children ${activeMenu === 'industrias' ? 'active' : ''}`}>
                                            <a
                                                href="#industrias"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleMenuToggle('industrias');
                                                }}
                                            >
                                                Industrias
                                            </a>
                                            <ul className="sub-menu">
                                                <li><Link to="/industrias/alimenticia">Alimenticia</Link></li>
                                                <li><Link to="/industrias/aeronautica">Aeronáutica</Link></li>
                                                <li><Link to="/industrias/automotriz">Automotriz</Link></li>
                                                <li><Link to="/industrias/construccion">Construcción</Link></li>
                                                <li><Link to="/industrias/electronica">Electrónica</Link></li>
                                                <li><Link to="/industrias/energia">Energía</Link></li>
                                                <li><Link to="/industrias/sector-medico">Sector Médico</Link></li>
                                                <li><Link to="/industrias/telecomunicaciones">Telecomunicaciones</Link></li>
                                            </ul>
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

                            {/* Botones del header */}
                            <div className="col-auto d-none d-xl-block">
                                <div className="header-button">                                    
                                    {/* Botón cotizar */}
                                    <button
                                        className="th-btn style1 th-radius"
                                        onClick={handleCotizarClick}
                                    >
                                        <span className="btn-text" data-back="WhatsApp" data-front="WhatsApp">
                                        </span>
                                        <i className="fab fa-whatsapp ms-2"></i>
                                    </button>

                                    {/* Botón mobile menu */}
                                    <button
                                        type="button"
                                        className="th-menu-toggle d-inline-block d-lg-none"
                                        onClick={handleMobileMenuToggle}
                                    >
                                        <i className="far fa-bars"></i>
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