import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieSidebar = () => {
    const projectInfo = [
        {
            icon: "fa-solid fa-hospital",
            subtitle: "Sector:",
            title: "Sector Médico"
        },
        {
            icon: "fa-solid fa-certificate",
            subtitle: "Certificación:",
            title: "FDA & COFEPRIS"
        },
        {
            icon: "fa-solid fa-capsules",
            subtitle: "Aplicación:",
            title: "Dispositivos Médicos"
        },
        {
            icon: "fa-solid fa-weight-hanging",
            subtitle: "Capacidad:",
            title: "Hasta 1.2 Toneladas"
        }
    ];

    const certifications = [
        "FDA - Food and Drug Administration",
        "COFEPRIS - Comisión Federal",
        "ISO 13485 - Dispositivos Médicos",
        "NOM-241-SSA1 - Establecimientos Salud",
        "GMP - Buenas Prácticas Fabricación",
        "CE Marking - Dispositivos Médicos UE"
    ];

    const applications = [
        "Dispositivos Médicos Implantables",
        "Equipos de Diagnóstico por Imagen",
        "Productos Farmacéuticos",
        "Material de Curación",
        "Reactivos de Laboratorio",
        "Equipos Quirúrgicos",
        "Monitores y Ventiladores",
        "Productos Estériles"
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
                <h3 className="widget_title">Certificaciones Médicas</h3>
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
                        <span className="text-white">Certificación ISO 13485</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Materiales biocompatibles</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Resistente a esterilización</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Superficies anti-microbianas</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Baja generación de partículas</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Sistemas de trazabilidad</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Identificación por colores</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Compatibilidad salas limpias</span>
                    </div>
                </div>
            </div>

            <div className="widget widget_offer" data-bg-src="assets/img/bg/offer_bg_1.jpg">
                <div className="offer-banner">
                    <span className="sub-title style1">Consulta Especializada</span>
                    <h5 className="banner-title">¿Soluciones Médicas?</h5>
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