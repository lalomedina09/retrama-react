import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieSidebar = () => {
    const projectInfo = [
        {
            icon: "fa-solid fa-bolt",
            subtitle: "Sector:",
            title: "Industria de Energía"
        },
        {
            icon: "fa-solid fa-certificate",
            subtitle: "Certificación:",
            title: "NOM & ISO 50001"
        },
        {
            icon: "fa-solid fa-industry",
            subtitle: "Aplicación:",
            title: "Equipos Energéticos"
        },
        {
            icon: "fa-solid fa-weight-hanging",
            subtitle: "Capacidad:",
            title: "Hasta 3.5 Toneladas"
        }
    ];

    const certifications = [
        "NOM-001-SEDE - Instalaciones Eléctricas",
        "ISO 50001 - Gestión de Energía",
        "CRE - Regulación Energética",
        "IEEE - Estándares Eléctricos",
        "ANSI - Normas Americanas",
        "IEC - Estándares Internacionales"
    ];

    const applications = [
        "Turbinas y Generadores",
        "Transformadores y Subestaciones",
        "Paneles Solares y Inversores",
        "Aerogeneradores Eólicos",
        "Sistemas de Transmisión",
        "Equipos de Distribución",
        "Baterías y Almacenamiento",
        "Sistemas de Control SCADA"
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
                <h3 className="widget_title">Certificaciones Energéticas</h3>
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
                        <span className="text-white">Certificación ISO 50001</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Resistente a intemperie extrema</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Compatibilidad con equipos pesados</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Sistemas de anclaje estructural</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Trazabilidad de componentes</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Puntos de izaje certificados</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Temperatura -30°C a +80°C</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Identificación por colores</span>
                    </div>
                </div>
            </div>

            <div className="widget widget_offer" data-bg-src="assets/img/bg/offer_bg_1.jpg">
                <div className="offer-banner">
                    <span className="sub-title style1">Consulta Especializada</span>
                    <h5 className="banner-title">¿Proyectos Energéticos?</h5>
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