import React from 'react';
import IndustrieSidebar from './IndustrieSidebar';

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "100",
            unit: "%",
            label: "Certificación Sanitaria"
        },
        {
            number: "ISO",
            unit: "22000",
            label: "Certificación Calidad"
        },
        {
            number: "15",
            unit: "Años",
            label: "Vida Útil Promedio"
        },
        {
            number: "500",
            unit: "KG",
            label: "Capacidad de Carga"
        }
    ];

    const benefits = [
        "Material natural y renovable",
        "Alta resistencia estructural",
        "Excelente absorción de impactos",
        "Bajo costo de mantenimiento",
        "Compatible con sistemas de frío",
        "No retiene olores",
        "Fácil de reparar y reutilizar",
        "Biodegradable y reciclable",
        "Cumple normativas FDA y USDA"
    ];

    const projectImages = [
        "assets/img/project/tarimas_alimenticia_1.jpg",
        "assets/img/project/tarimas_alimenticia_2.jpg",
        "assets/img/project/tarimas_alimenticia_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/tarimas_industria_alimentaria.jpg" alt="Tarimas en Industria Alimenticia" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title">Tarimas de Madera para la Industria Alimenticia</h2>
                                <p>
                                    Especializadas en el manejo y almacenamiento de productos alimenticios, nuestras
                                    tarimas de madera cumplen con los más altos estándares de higiene y seguridad
                                    requeridos por la industria alimentaria. Fabricadas con maderas tratadas y
                                    certificadas, garantizan la protección e integridad de sus productos desde
                                    el procesamiento hasta la distribución.
                                </p>
                                <p>
                                    Cada tarima es diseñada considerando los requisitos específicos de la cadena
                                    de frío, resistencia a la humedad y compatibilidad con sistemas de
                                    automatización, asegurando un manejo eficiente y seguro de alimentos,
                                    bebidas y productos perecederos.
                                </p>

                                <div className="project-box-details">
                                    <div className="counter-grid_wrapp style2">
                                        {projectStats.map((stat, index) => (
                                            <div className="counter-grid" key={index}>
                                                <h3 className="counter-grid-title">
                                                    <span className="counter-number">{stat.number}</span>{stat.unit}
                                                </h3>
                                                <p className="counter-text mb-0">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <h4 className="mt-40 mb-20">Proceso de Fabricación Especializado</h4>
                                <p className="mb-10">
                                    Nuestro proceso de fabricación incluye tratamientos térmicos y sanitarios
                                    especializados que eliminan cualquier microorganismo patógeno, asegurando
                                    tarimas libres de contaminantes. Utilizamos maderas de especies específicas
                                    como pino y abeto, conocidas por su baja resinosidad y alta resistencia
                                    a condiciones de humedad variable.
                                </p>

                                <p className="mb-40">
                                    Cada etapa del proceso está supervisada por controles de calidad que
                                    verifican la ausencia de astillas, bordes afilados y superficies irregulares
                                    que puedan dañar los empaques alimenticios. El acabado final incluye
                                    tratamientos anti-hongos y bactericidas que mantienen las propiedades
                                    sanitarias a lo largo del tiempo.
                                </p>

                                <h4 className="mt-40 mb-20">Certificaciones y Cumplimiento Normativo</h4>
                                <p className="mb-10">
                                    Nuestras tarimas cuentan con certificaciones internacionales que garantizan
                                    su aptitud para el contacto con alimentos. Cumplimos con las normativas
                                    FDA (Food and Drug Administration) y USDA (United States Department of
                                    Agriculture), así como con los estándares HACCP (Análisis de Peligros y
                                    Puntos Críticos de Control).
                                </p>

                                <p className="mb-40">
                                    Adicionalmente, todas nuestras tarimas llevan marcado NIMF-15 (Norma
                                    Internacional para Medidas Fitosanitarias) que certifica el tratamiento
                                    térmico necesario para el comercio internacional, previniendo la propagación
                                    de plagas y enfermedades.
                                </p>

                                <div className="checklist style1 list-three-column mb-20">
                                    <ul>
                                        {benefits.map((benefit, index) => (
                                            <li key={index}>
                                                <i className="fa-light fa-circle-check"></i> {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-4">
                        <IndustrieSidebar />
                    </div>
                </div>

                <h4 className="mt-40 mb-20">Características Técnicas Especializadas</h4>
                <p className="mb-40">
                    Diseñadas específicamente para la industria alimenticia, nuestras tarimas presentan
                    características únicas como juntas herméticas que previenen la acumulación de residuos,
                    superficies lisas que facilitan la limpieza y desinfección, y diseño estructural que
                    permite una adecuada circulación de aire en crownas de refrigeración y congelación.
                    La madera utilizada es de densidad controlada para optimizar la relación peso-resistencia,
                    reduciendo los costos de transporte sin comprometer la capacidad de carga.
                </p>

                <h4 className="mt-40 mb-20">Aplicaciones en la Cadena Alimenticia</h4>
                <p className="mb-40">
                    Ideales para el almacenamiento y transporte de productos cárnicos, lácteos, frutas,
                    verduras, productos congelados y bebidas. Compatibles con sistemas de racking,
                    transportadores automáticos y equipos de manejo MHE. Su diseño versátil las hace
                    aptas para uso en plantas procesadoras, centros de distribución, supermercados
                    y exportación internacional de productos alimenticios.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt={`Aplicación tarimas alimenticias ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;