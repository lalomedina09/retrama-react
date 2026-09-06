import React from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl, QUOTE_WHATSAPP_MESSAGE } from '../../constants/contact';

const closeMobileMenu = () => {
    document.querySelectorAll('.th-menu-wrapper').forEach((el) => {
        el.classList.remove('th-body-visible');
    });
};

const MobileMenu = () => {
    const handleNavigate = () => {
        closeMobileMenu();
    };

    return (
        <div
            className="th-menu-wrapper"
            onClick={(event) => {
                if (event.target.classList.contains('th-menu-wrapper')) {
                    closeMobileMenu();
                }
            }}
        >
            <div className="th-menu-area text-center">
                <button
                    type="button"
                    className="th-menu-toggle"
                    onClick={closeMobileMenu}
                    aria-label="Cerrar menú de navegación"
                >
                    <i className="fal fa-times" aria-hidden="true"></i>
                </button>
                <div className="mobile-logo">
                    <Link to="/" onClick={handleNavigate}>
                        <img src="/assets/img/logo.png" alt="RETRAMA" />
                    </Link>
                </div>

                <div className="th-mobile-menu">
                    <ul>
                        <li>
                            <Link to="/" onClick={handleNavigate}>Inicio</Link>
                        </li>
                        <li>
                            <Link to="/productos" onClick={handleNavigate}>Productos</Link>
                        </li>
                        <li>
                            <Link to="/contacto" onClick={handleNavigate}>Contacto</Link>
                        </li>
                    </ul>
                    <div className="mt-4 px-3">
                        <a
                            href={getWhatsAppUrl(QUOTE_WHATSAPP_MESSAGE)}
                            className="th-btn style1 th-radius w-100"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contactar por WhatsApp"
                            onClick={handleNavigate}
                        >
                            WhatsApp
                            <i className="fab fa-whatsapp ms-2" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
