import React from 'react';

const SideMenu = () => {
    const handleSideMenuClose = () => {
        console.log('Side menu cerrado');
        // Lógica para cerrar el side menu
    };

    return (
        <div className="sidemenu-wrapper d-none d-lg-block">
            <div className="sidemenu-content">
                <button className="closeButton sideMenuCls" onClick={handleSideMenuClose}>
                    <i className="far fa-times"></i>
                </button>
                <div className="widget footer-widget">
                    <h3 className="widget_title">Acerca de RETRAMA</h3>
                    <div className="th-widget-about">
                        <p className="about-text">
                            Somos especialistas en la fabricación de tarimas, embalajes y empaques industriales de madera, diseñados para garantizar la integridad de sus productos en toda la cadena de suministro.
                        </p>
                        <div className="th-social">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#instagram-pendiente" aria-label="Instagram pendiente">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://wa.me/528120397139" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
