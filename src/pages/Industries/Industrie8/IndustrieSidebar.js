import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieSidebar = () => {
    const projectInfo = [
        {
            icon: "fa-solid fa-satellite-dish",
            subtitle: "Sector:",
            title: "Telecomunicaciones"
        },
        {
            icon: "fa-solid fa-certificate",
            subtitle: "Certificación:",
            title: "FCC & IFT"
        },
        {
            icon: "fa-solid fa-satellite-dish",
            subtitle: "Aplicación:",
            title: "Equipos de Red"
        },
        {
            icon: "fa-solid fa-weight-hanging",
            subtitle: "Capacidad:",
            title: "Hasta 1.8 Toneladas"
        }
    ];

    const certifications = [
        "FCC - Federal Communications Commission",
        "IFT - Instituto Federal Telecom",
        "ISO 9001 - Quality Management",
        "UIT - Unión Internacional Telecom",
        "TIA/EIA - Estándares Telecom",
        "NEBS - Network Equipment Standards"
    ];

    const applications = [
        "Antenas y Sistemas RF",
        "Equipos de Fibra Óptica",
        "Routers y Switches",
        "Sistemas de Transmisión",
        "Equipos de Data Center",
        "Sistemas Satelitales",
        "Radio Enlaces",
        "Infraestructura 5G"
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
                <h3 className="widget_title">Certificaciones Telecom</h3>
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
                        <span className="text-white">Protección EMI/RFI</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Resistente a intemperie</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Compatibilidad equipos activos</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Sistemas de apilamiento seguro</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Trazabilidad de equipos</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Puntos de anclaje certificados</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Temperatura -30°C a +70°C</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Identificación por tecnología</span>
                    </div>
                </div>
            </div>

            <div className="widget widget_offer" data-bg-src="assets/img/bg/offer_bg_1.jpg">
                <div className="offer-banner">
                    <span className="sub-title style1">Consulta Especializada</span>
                    <h5 className="banner-title">¿Proyectos de Telecom?</h5>
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