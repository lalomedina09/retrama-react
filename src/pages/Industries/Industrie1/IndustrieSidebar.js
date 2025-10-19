import React from 'react';
import { Link } from 'react-router-dom';

const IndustrieSidebar = () => {
    const projectInfo = [
        {
            icon: "fa-solid fa-utensils",
            subtitle: "Sector:",
            title: "Alimenticia & Bebidas"
        },
        {
            icon: "fa-solid fa-certificate",
            subtitle: "Certificación:",
            title: "FDA & USDA"
        },
        {
            icon: "fa-solid fa-temperature-low",
            subtitle: "Temperatura:",
            title: "-30°C a +60°C"
        },
        {
            icon: "fa-solid fa-weight-hanging",
            subtitle: "Capacidad:",
            title: "Hasta 1.5 Toneladas"
        }
    ];

    const certifications = [
        "FDA - Food and Drug Administration",
        "USDA - United States Department of Agriculture",
        "HACCP - Hazard Analysis Critical Control Point",
        "ISO 22000 - Food Safety Management",
        "BRCGS - Global Standard for Packaging",
        "GMP - Good Manufacturing Practices"
    ];

    const applications = [
        "Procesamiento de Carnes",
        "Industria Láctea",
        "Bebidas y Refrescos",
        "Panificación y Snacks",
        "Frutas y Verduras",
        "Productos Congelados",
        "Alimentos Enlatados",
        "Distribución Mayorista"
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
                <h3 className="widget_title">Certificaciones Alimentarias</h3>
                <div className="category-list">
                    {certifications.map((cert, index) => (
                        <div className="category-item text-start mb-2" key={index}>
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
                        <div className="category-item text-start mb-2" key={index}>
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
                        <span className="text-white">Grado alimenticio FDA</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">100% lavable y sanitizable</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Resistente a ácidos y grasas</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Superficies no porosas</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Esquinas redondeadas</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Sistemas de drenaje</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Identificación por colores</span>
                    </div>
                    <div className="feature-item mb-2">
                        <i className="fa-solid fa-check text-success"></i>
                        <span className="text-white">Trazabilidad de lotes</span>
                    </div>
                </div>
            </div>            
        </aside>
    );
};

export default IndustrieSidebar;