import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieSidebar = () => {
    const projectInfo = [
        {
            icon: "fa-solid fa-plane",
            subtitle: "Sector:",
            title: "Industria Aeronáutica"
        },
        {
            icon: "fa-solid fa-certificate",
            subtitle: "Certificación:",
            title: "FAA & EASA"
        },
        {
            icon: "fa-solid fa-gears",
            subtitle: "Aplicación:",
            title: "Componentes Críticos"
        },
        {
            icon: "fa-solid fa-weight-hanging",
            subtitle: "Capacidad:",
            title: "Hasta 2.5 Toneladas"
        }
    ];

    const certifications = [
        "FAA - Federal Aviation Administration",
        "EASA - European Union Aviation Safety Agency",
        "AS9100 - Quality Management Aerospace",
        "NADCAP - Special Processes Certification",
        "AS9120 - Aerospace Distributors",
        "ISO 9001 - Quality Management Systems"
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
                <h3 className="widget_title">Certificaciones Aeronáuticas</h3>
                <div className="category-list">
                    {certifications.map((cert, index) => (
                        <div className="category-item" key={index}>
                            <i className="fa-solid fa-certificate text-theme"></i>
                            <span className="category-name">{cert}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="widget widget_features">
                <h3 className="widget_title">Características Clave</h3>
                <div className="feature-list">
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Certificación AS9100</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Protección ESD y antiestática</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Resistente a fluidos aeronáuticos</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Sistemas de sujeción certificados</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Trazabilidad completa</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Puntos de izaje certificados</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Temperatura -40°C a +80°C</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Identificación RFID</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default IndustrieSidebar;