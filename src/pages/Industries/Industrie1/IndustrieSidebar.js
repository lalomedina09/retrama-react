import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieSidebar = () => {
    const projectInfo = [
        {
            icon: "fa-solid fa-industry",
            subtitle: "Sector:",
            title: "Industria Alimenticia"
        },
        {
            icon: "fa-solid fa-certificate",
            subtitle: "Certificación:",
            title: "FDA & USDA"
        },
        {
            icon: "fa-solid fa-warehouse",
            subtitle: "Aplicación:",
            title: "Almacenamiento Alimentos"
        },
        {
            icon: "fa-solid fa-temperature-low",
            subtitle: "Compatibilidad:",
            title: "Cadena de Frío"
        }
    ];

    const certifications = [
        "FDA - Food and Drug Administration",
        "USDA - United States Department of Agriculture",
        "NIMF-15 - Tratamiento Térmico",
        "HACCP - Análisis de Peligros",
        "ISO 22000 - Seguridad Alimentaria",
        "ISO 9001 - Calidad"
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
                <h3 className="widget_title">Certificaciones</h3>
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
                        <span class="text-white">Tratamiento térmico sanitizado</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span class="text-white">Superficies lisas y herméticas</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span class="text-white">Resistente a humedad y hongos</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span class="text-white">Capacidad carga 500kg+</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span class="text-white">Compatible con automatización</span>
                    </div>
                </div>
            </div>

        </aside>
    );
};

export default IndustrieSidebar;