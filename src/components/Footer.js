import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-wrapper footer-layout3">
            <div className="widget-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xxl-3 col-xl-4">
                            <div className="widget footer-widget">
                                <div className="th-widget-about">
                                    <div className="about-logo">
                                        <a className="icon-masking" href="/">
                                            <img src="assets/img/logo-white-big.png" alt="RETRAMA" />
                                        </a>
                                    </div>
                                    <p className="about-text">
                                        Somos especialistas en la fabricación de tarimas, embalajes y
                                        empaques industriales de madera, diseñados para garantizar la
                                        integridad de sus productos en toda la cadena de suministro.
                                    </p>
                                    <div className="th-social">
                                        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Contactanos</h3>
                                <div className="th-widget-about">
                                    <h4 className="footer-info-title">Ubicación</h4>
                                    <p className="footer-info">
                                        <i className="fas fa-map-marker-alt"></i>
                                        Monterrey, Nuevo León, México
                                    </p>
                                    <h4 className="footer-info-title">Phone Number</h4>
                                    <p className="footer-info">
                                        <i className="fa-sharp fa-solid fa-phone"></i>
                                        <span>
                                            <a className="text-inherit" href="tel:+528130803998">
                                                +52 81 3080 3998
                                            </a>
                                        </span>
                                    </p>
                                    <h4 className="footer-info-title">Correo electronico</h4>
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