import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieSidebar = () => {
    const projectInfo = [
        {
            icon: "fa-solid fa-hard-hat",
            subtitle: "Sector:",
            title: "Industria Construcción"
        },
        {
            icon: "fa-solid fa-certificate",
            subtitle: "Certificación:",
            title: "ASTM & OSHA"
        },
        {
            icon: "fa-solid fa-building",
            subtitle: "Aplicación:",
            title: "Materiales Pesados"
        },
        {
            icon: "fa-solid fa-weight-hanging",
            subtitle: "Capacidad:",
            title: "Hasta 3.0 Toneladas"
        }
    ];

    const certifications = [
        "ASTM - American Society for Testing",
        "OSHA - Occupational Safety Standards",
        "ISO 9001 - Quality Management Systems",
        "SEMARNAT - Environmental Standards",
        "NOM - Normas Oficiales Mexicanas",
        "LEED - Sustainable Construction"
    ];

    const applications = [
        "Manejo de Cemento y Concreto",
        "Almacenamiento de Varilla",
        "Transporte de Blocks y Tabiques",
        "Materiales para Cimentación",
        "Sistemas Prefabricados",
        "Mezclas Asfálticas",
        "Materiales Eléctricos",
        "Sistemas Hidrosanitarios"
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
                <h3 className="widget_title">Certificaciones de Construcción</h3>
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
                        <span className="text-white">Certificación ASTM Internacional</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Resistente a intemperie y humedad</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Compatibilidad con maquinaria pesada</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Sistemas de anclaje estructural</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Trazabilidad de materiales</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Puntos de izaje certificados</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Superficie anti-deslizante</span>
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
                    <h5 className="banner-title">¿Necesita Soluciones para su Proyecto?</h5>
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