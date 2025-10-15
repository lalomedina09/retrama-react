import React from 'react';

const Footer = () => {
    const handleLinkClick = (e, section) => {
        e.preventDefault();
        console.log(`Navegando a: ${section}`);
        // Aquí puedes agregar lógica de navegación
    };

    const handleGalleryClick = (e, imageUrl) => {
        e.preventDefault();
        console.log(`Abrir imagen: ${imageUrl}`);
        // Aquí puedes implementar un modal para la galería
    };

    const galleryImages = [
        { src: "/assets/img/widget/gallery_1_1.jpg", alt: "Gallery Image 1" },
        { src: "/assets/img/widget/gallery_1_2.jpg", alt: "Gallery Image 2" },
        { src: "/assets/img/widget/gallery_1_3.jpg", alt: "Gallery Image 3" },
        { src: "/assets/img/widget/gallery_1_4.jpg", alt: "Gallery Image 4" },
        { src: "/assets/img/widget/gallery_1_5.jpg", alt: "Gallery Image 5" },
        { src: "/assets/img/widget/gallery_1_6.jpg", alt: "Gallery Image 6" }
    ];

    const enlaces = [
        { href: "#nosotros", text: "Nosotros" },
        { href: "#servicios", text: "Servicios" },
        { href: "#industrias", text: "Industrias" },
        { href: "#noticias", text: "Noticias" },
        { href: "#contacto", text: "Contactanos" }
    ];

    const servicios = [
        { href: "#compra-tarimas", text: "Compra de Tarimas" },
        { href: "#reparacion", text: "Reparación de Tarimas" },
        { href: "#norma-144", text: "Cumplimiento Norma 144" },
        { href: "#tarimas-hibridas", text: "Tarimas Híbridas" },
        { href: "#tarimas-medida", text: "Tarimas a la Medida" }
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
                        {/* Columna 1: Logo y descripción */}
                        <div className="col-md-6 col-xxl-3 col-xl-4">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <a className="icon-masking" href="/">
                                            <img
                                                src="/assets/img/logo-white-big.png"
                                                alt="RETRAMA"
                                                onError={(e) => {
                                                    e.target.src = "/assets/img/logo-white.png";
                                                }}
                                            />
                                        </a>
                                    </div>
                                    <p className="about-text">
                                        Somos especialistas en la fabricación de tarimas, embalajes y
                                        empaques industriales de madera, diseñados para garantizar la
                                        integridad de sus productos en toda la cadena de suministro.
                                    </p>
                                    <div className="th-social">
                                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-whatsapp"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Columna 2: Enlaces rápidos */}
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Enlaces</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        {enlaces.map((enlace, index) => (
                                            <li key={index}>
                                                <a
                                                    href={enlace.href}
                                                    onClick={(e) => handleLinkClick(e, enlace.text)}
                                                >
                                                    {enlace.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Columna 3: Nuestros Servicios */}
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Nuestros Servicios</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        {servicios.map((servicio, index) => (
                                            <li key={index}>
                                                <a
                                                    href={servicio.href}
                                                    onClick={(e) => handleLinkClick(e, servicio.text)}
                                                >
                                                    {servicio.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Columna 4: Contacto */}
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">Contactanos</h3>
                                <div className="th-widget-about">
                                    <h4 className="footer-info-title">Ubicación</h4>
                                    <p className="footer-info">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Monterrey, Nuevo León, México
                                    </p>

                                    <h4 className="footer-info-title">Teléfono</h4>
                                    <p className="footer-info">
                                        <i className="fa-sharp fa-solid fa-phone"></i>
                                        <span>
                                            <a className="text-inherit" href="tel:+528130803998">
                                                +52 81 3080 3998
                                            </a>
                                        </span>
                                    </p>

                                    <h4 className="footer-info-title">Correo electrónico</h4>
                                    <p className="footer-info">
                                        <i className="fa-sharp fa-solid fa-envelope"></i>
                                        <span>
                                            <a className="text-inherit" href="mailto:contacto@retrama.com">
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
                                <h3 className="widget_title">Galería</h3>
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
                                                onClick={(e) => handleGalleryClick(e, image.src)}
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

            <div className="copyright-wrap">
                <div className="container">
                    <p className="copyright-text">
                        Copyright <i className="fal fa-copyright"></i> 2025
                        <a href="/"> RETRAMA </a>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;