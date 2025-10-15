import React, { useState } from 'react';

const MobileMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuToggle = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleMobileMenuClose = () => {
        console.log('Mobile menu cerrado');
        // Lógica para cerrar mobile menu
    };

    const handleNavigation = (section) => {
        console.log(`Navegando a: ${section}`);
        setActiveMenu(null);
        // Lógica de navegación
    };

    return (
        <div className="th-menu-wrapper">
            <div className="th-menu-area text-center">
                <button className="th-menu-toggle" onClick={handleMobileMenuClose}>
                    <i className="fal fa-times"></i>
                </button>
                <div className="mobile-logo">
                    <a href="/">
                        <img src="/assets/img/logo.png" alt="RETRAMA" />
                    </a>
                </div>

                <div className="th-mobile-menu">
                    <ul>
                        <li>
                            <a href="#inicio" onClick={() => handleNavigation('inicio')}>Inicio</a>
                        </li>
                        <li>
                            <a href="#nosotros" onClick={() => handleNavigation('nosotros')}>Nosotros</a>
                        </li>

                        {/* Productos con submenú */}
                        <li className={`menu-item-has-children ${activeMenu === 'productos' ? 'active' : ''}`}>
                            <a href="#productos" onClick={() => handleMenuToggle('productos')}>
                                Productos
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#tarimas-nuevas" onClick={() => handleNavigation('tarimas-nuevas')}>
                                        Tarimas Nuevas
                                    </a>
                                </li>
                                <li>
                                    <a href="#tarimas-medida" onClick={() => handleNavigation('tarimas-medida')}>
                                        Tarimas a la medida
                                    </a>
                                </li>
                                <li>
                                    <a href="#tarimas-reacondicionadas" onClick={() => handleNavigation('tarimas-reacondicionadas')}>
                                        Tarimas Reacondicionadas
                                    </a>
                                </li>
                                <li>
                                    <a href="#tarimas-hibridas" onClick={() => handleNavigation('tarimas-hibridas')}>
                                        Tarimas Hibridas
                                    </a>
                                </li>
                            </ul>
                        </li>

                        {/* Soluciones con submenú */}
                        <li className={`menu-item-has-children ${activeMenu === 'soluciones' ? 'active' : ''}`}>
                            <a href="#soluciones" onClick={() => handleMenuToggle('soluciones')}>
                                Soluciones
                            </a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#compra-tarimas" onClick={() => handleNavigation('compra-tarimas')}>
                                        Compra de tarimas usadas
                                    </a>
                                </li>
                                <li>
                                    <a href="#reparacion" onClick={() => handleNavigation('reparacion')}>
                                        Reparación de tarimas
                                    </a>
                                </li>
                                <li>
                                    <a href="#norma-144" onClick={() => handleNavigation('norma-144')}>
                                        Cumplimiento norma 144
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="#contacto" onClick={() => handleNavigation('contacto')}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;