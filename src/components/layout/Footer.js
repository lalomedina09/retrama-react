import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleLinkClick = (section) => {
        console.log(`Navegando a: ${section}`);
    };

    const handleSocialClick = (platform) => {
        console.log(`Redirigiendo a: ${platform}`);
        // Aquí puedes agregar los enlaces reales de redes sociales
    };

    const handleGalleryClick = (imageUrl) => {
        console.log(`Abrir imagen: ${imageUrl}`);
        // Lógica para modal de galería
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
        { to: "/nosotros", text: "Nosotros" },
        { to: "/soluciones", text: "Soluciones" },
        { to: "/industrias", text: "Industrias" },
        { to: "/noticias", text: "Noticias" },
        { to: "/contacto", text: "Contáctanos" }
    ];

    const servicios = [
        { to: "/soluciones/compra-tarimas", text: "Compra de Tarimas" },
        { to: "/soluciones/reparacion-tarimas", text: "Reparación de Tarimas" },
        { to: "/soluciones/norma-144", text: "Cumplimiento Norma 144" },
        { to: "/soluciones/tarimas-hibridas", text: "Tarimas Híbridas" },
        { to: "/soluciones/tarimas-medida", text: "Tarimas a la Medida" }
    ];

    const galleryImages = [
        { src: "/assets/img/widget/gallery_1_1.jpg", alt: "Proyecto RETRAMA 1" },
        { src: "/assets/img/widget/gallery_1_2.jpg", alt: "Proyecto RETRAMA 2" },
        { src: "/assets/img/widget/gallery_1_3.jpg", alt: "Proyecto RETRAMA 3" },
        { src: "/assets/img/widget/gallery_1_4.jpg", alt: "Proyecto RETRAMA 4" },
        { src: "/assets/img/widget/gallery_1_5.jpg", alt: "Proyecto RETRAMA 5" },
        { src: "/assets/img/widget/gallery_1_6.jpg", alt: "Proyecto RETRAMA 6" }
    ];

    const socialLinks = [
        {
            platform: "facebook",
            url: "https://www.facebook.com/retrama",
            icon: "fab fa-facebook-f"
        },
        {
            platform: "twitter",
            url: "https://www.twitter.com/retrama",
            icon: "fab fa-twitter"
        },
        {
            platform: "linkedin",
            url: "https://www.linkedin.com/company/retrama",
            icon: "fab fa-linkedin-in"
        },
        {
            platform: "whatsapp",
            url: "https://wa.me/528130803998",
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
                                                <Link
                                                    to={enlace.to}
                                                    onClick={() => handleLinkClick(enlace.text)}
                                                >
                                                    {enlace.text}
                                                </Link>
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
                                                href="tel:+528130803998"
                                                onClick={() => handleContactClick('phone', '+528130803998')}
                                            >
                                                +52 81 3080 3998
                                            </a>
                                        </span>
                                    </p>

                                    <h4 className="footer-info-title text-start">Correo electrónico</h4>
                                    <p className="footer-info">
                                        <i className="fa-sharp fa-solid fa-envelope"></i>
                                        <span>
                                            <a
                                                className="text-inherit"
                                                href="mailto:contacto@retrama.com.mx"
                                                onClick={() => handleContactClick('email', 'contacto@retrama.com.mx')}
                                            >
                                                contacto@retrama.com.mx
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Columna 5: Galería */}
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title text-start">Galería</h3>
                                <div className="sidebar-gallery">
                                    {galleryImages.map((image, index) => (
                                        <div key={index} className="gallery-thumb">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                onError={(e) => {
                                                    e.target.src = "/assets/img/widget/gallery_1_1.jpg";
                                                }}
                                            />
                                            <a
                                                href={image.src}
                                                className="gallery-btn popup-image"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleGalleryClick(image.src);
                                                }}
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright-wrap">
                <div className="container">
                    <p className="copyright-text">
                        Copyright <i className="fal fa-copyright"></i> 2025
                        <Link to="/"> RETRAMA </Link>. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;