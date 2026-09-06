import React from 'react';
import { Link } from 'react-router-dom';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, getWhatsAppUrl, QUOTE_WHATSAPP_MESSAGE } from '../../constants/contact';

const Footer = () => {
    const handleLinkClick = (section) => {
        console.log(`Navegando a: ${section}`);
    };

    const handleSocialClick = (platform) => {
        console.log(`Redirigiendo a: ${platform}`);
        // Aquí puedes agregar los enlaces reales de redes sociales
    };

    const handleContactClick = (type, value) => {
        console.log(`Contacto: ${type} - ${value}`);
        if (type === 'phone') {
            window.open(`tel:${value}`, '_self');
        } else if (type === 'email') {
            window.open(`mailto:${value}`, '_self');
        }
    };

    // Datos para mapear
    const enlacesRapidos = [
        { to: "/", text: "Inicio" },
        { to: "/productos", text: "Productos" },
        { to: "/contacto", text: "Contacto" },
        { href: getWhatsAppUrl(QUOTE_WHATSAPP_MESSAGE), text: "Solicitar cotización" }
    ];

    const servicios = [
        { to: "/productos#tarimas-nuevas", text: "Tarimas Nuevas" },
        { to: "/productos#tarimas-reacondicionadas", text: "Tarimas Reacondicionadas" },
        { to: "/productos#tarimas-hibridas", text: "Tarimas Híbridas" },
        { to: "/productos#tarimas-medida", text: "Tarimas a la Medida" }
    ];

    const socialLinks = [
        {
            platform: "facebook",
            url: "https://www.facebook.com/retrama",
            icon: "fab fa-facebook-f"
        },
        {
            platform: "instagram",
            url: "#instagram-pendiente",
            icon: "fab fa-instagram"
        },
        {
            platform: "linkedin",
            url: "https://www.linkedin.com/company/retrama",
            icon: "fab fa-linkedin-in"
        },
        {
            platform: "whatsapp",
            url: WHATSAPP_URL,
            icon: "fab fa-whatsapp"
        }
    ];

    return (
        <footer
            className="footer-wrapper footer-layout3"
            data-bg-src="/assets/img/bg/dot-shape.png"
            style={{ backgroundImage: 'url(/assets/img/bg/dot-shape.png)' }}
        >
            <div className="widget-area">
                <div className="container">
                    <div className="row justify-content-between">

                        {/* Columna 1: Logo y Descripción */}
                        <div className="col-md-6 col-xxl-3 col-xl-4">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <Link to="/" className="icon-masking">
                                            <img
                                                src="/assets/img/logo-white-big.png"
                                                alt="RETRAMA"
                                                onError={(e) => {
                                                    e.target.src = "/assets/img/logo-white.png";
                                                }}
                                            />
                                        </Link>
                                    </div>
                                    <p className="about-text text-start">
                                        Somos especialistas en la fabricación de tarimas, embalajes y
                                        empaques industriales de madera, diseñados para garantizar la
                                        integridad de sus productos en toda la cadena de suministro.
                                    </p>
                                    <div className="th-social">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.platform}
                                                onClick={() => handleSocialClick(social.platform)}
                                            >
                                                <i className={social.icon}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Columna 2: Enlaces Rápidos */}
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title text-start">Enlaces</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        {enlacesRapidos.map((enlace, index) => (
                                            <li key={index}>
                                                {enlace.href ? (
                                                    <a
                                                        href={enlace.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={() => handleLinkClick(enlace.text)}
                                                    >
                                                        {enlace.text}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        to={enlace.to}
                                                        onClick={() => handleLinkClick(enlace.text)}
                                                    >
                                                        {enlace.text}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Columna 3: Nuestros Servicios */}
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title text-start">Nuestros Servicios</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        {servicios.map((servicio, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={servicio.to}
                                                    onClick={() => handleLinkClick(servicio.text)}
                                                >
                                                    {servicio.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Columna 4: Contacto */}
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title text-start">Contáctanos</h3>
                                <div className="th-widget-about">
                                    <h4 className="footer-info-title text-start">Ubicación</h4>
                                    <p className="footer-info">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Monterrey, Nuevo León, México
                                    </p>

                                    <h4 className="footer-info-title text-start">Teléfono</h4>
                                    <p className="footer-info">
                                        <i className="fa-sharp fa-solid fa-phone"></i>
                                        <span>
                                            <a
                                                className="text-inherit"
                                                href={`tel:${PHONE_TEL}`}
                                                onClick={() => handleContactClick('phone', PHONE_TEL)}
                                            >
                                                {PHONE_DISPLAY}
                                            </a>
                                        </span>
                                    </p>

                                    <h4 className="footer-info-title text-start">Correo electrónico</h4>
                                    <p className="footer-info">
                                        <i className="fa-sharp fa-solid fa-envelope"></i>
                                        <span>
                                            <a
                                                className="text-inherit"
                                                href={`mailto:${EMAIL}`}
                                                onClick={() => handleContactClick('email', EMAIL)}
                                            >
                                                {EMAIL}
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright-wrap">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3">
                        <div className="copyright-text mb-2 mb-md-0">
                            <span className="text-sm">
                                © 2026 <Link to="/" className="fw-semibold text-white">RETRAMA</Link>.
                                Todos los derechos reservados.
                            </span>
                        </div>

                        <div className="developer-credit">
                            <a href="https://www.lemonwebdesign.mx"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="d-flex align-items-center text-decoration-none text-sm">
                                <span className="me-2 opacity-75 text-white">Desarrollado por</span>
                                <div className="d-flex align-items-center">
                                    <img src="/assets/img/lemon-web-positivo.png"
                                        alt="Lemon Web Design - Agencia de Desarrollo Web"
                                        width="90"
                                        className="opacity-90 hover-opacity-100 transition-all" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
