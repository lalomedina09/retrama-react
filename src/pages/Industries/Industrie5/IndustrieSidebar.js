import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieSidebar = () => {
    const projectInfo = [
        {
            icon: "fa-solid fa-microchip",
            subtitle: "Sector:",
            title: "Industria Electrónica"
        },
        {
            icon: "fa-solid fa-certificate",
            subtitle: "Certificación:",
            title: "ESD S20.20 & IPC"
        },
        {
            icon: "fa-solid fa-gears",
            subtitle: "Aplicación:",
            title: "Componentes Sensibles"
        },
        {
            icon: "fa-solid fa-weight-hanging",
            subtitle: "Capacidad:",
            title: "Hasta 1.0 Toneladas"
        }
    ];

    const certifications = [
        "ESD S20.20 - Protección Electrostática",
        "IPC-A-610 - Estándar de Calidad",
        "JEDEC - Estándares Semiconductores",
        "ISO 14644 - Cleanroom Standards",
        "IEC 61340 - ESD Control",
        "RoHS - Restricción Sustancias Peligrosas"
    ];

    const applications = [
        "Circuitos Impresos (PCBs)",
        "Semiconductores y Microchips",
        "Componentes SMT y BGA",
        "Dispositivos IoT",
        "Sistemas Embebidos",
        "Equipo Médico Electrónico",
        "Telecomunicaciones",
        "Componentes Automotrices"
    ];

    return (
        <aside className="sidebar-area">
            <div className="widget widget_info">
                <h3 className="widget_title">Información del Producto</h3>
                {projectInfo.map((info, index) => (
                    <div className="project-info" key={index}>
                        <div className="project-info_icon">
                            <i className={info.icon}></i>
                        </div>
                        <div className="project-info_content">
                            <p className="project-info_subtitle">{info.subtitle}</p>
                            <h6 className="project-info_title">{info.title}</h6>
                        </div>
                    </div>
                ))}
            </div>

            <div className="widget widget_categories">
                <h3 className="widget_title">Certificaciones Electrónicas</h3>
                <div className="category-list">
                    {certifications.map((cert, index) => (
                        <div className="category-item text-start mb-3" key={index}>
                            <i className="fa-solid fa-certificate text-theme"></i>
                            <span className="category-name">{cert}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget_title">Aplicaciones Específicas</h3>
                <div className="category-list">
                    {applications.map((app, index) => (
                        <div className="category-item text-start mb-3" key={index}>
                            <i className="fa-solid fa-check text-success"></i>
                            <span className="category-name">{app}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="widget widget_features">
                <h3 className="widget_title">Características Clave</h3>
                <div className="feature-list">
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Certificación ESD S20.20</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Materiales antiestáticos permanentes</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Compatibilidad con cleanrooms</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Resistente a solventes electrónicos</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Baja generación de partículas</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Sistemas de contención ESD</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Temperatura -20°C a +60°C</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Identificación RFID/QR</span>
                    </div>
                </div>
            </div>

            <div className="widget widget_offer" data-bg-src="assets/img/bg/offer_bg_1.jpg">
                <div className="offer-banner">
                    <span className="sub-title style1">Consulta Especializada</span>
                    <h5 className="banner-title">¿Necesita Soluciones ESD?</h5>
                    <Link to="/contacto" className="th-btn style1 th-icon">
                        <span className="btn-text" data-back="Contactar Especialista" data-front="Contactar Especialista"></span>
                        <i className="fa-regular fa-arrow-right ms-2"></i>
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default IndustrieSidebar;