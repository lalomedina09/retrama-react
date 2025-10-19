import React from 'react';
import IndustrieSidebar from './IndustrieSidebar';

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "ASTM",
            unit: "Cert",
            label: "Estándares Internacionales"
        },
        {
            number: "ISO",
            unit: "9001",
            label: "Calidad en Construcción"
        },
        {
            number: "3.0",
            unit: "Tons",
            label: "Capacidad de Carga"
        },
        {
            number: "100%",
            unit: "Resistente",
            label: "A Intemperie"
        }
    ];

    const benefits = [
        "Cumple normativas ASTM y OSHA",
        "Resistencia estructural superior",
        "Diseño para carga pesada en obra",
        "Resistente a condiciones climáticas extremas",
        "Compatibilidad con maquinaria pesada",
        "Estabilidad en terrenos irregulares",
        "Rastreabilidad de materiales",
        "Larga vida útil en entornos agresivos",
        "Diseño modular para diferentes proyectos"
    ];

    const projectImages = [
        "assets/img/project/tarimas_construccion_1.jpg",
        "assets/img/project/tarimas_construccion_2.jpg",
        "assets/img/project/tarimas_construccion_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/tarimas_industria_construccion.jpg" alt="Tarimas en Industria de Construcción" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title text-start">Tarimas Especializadas para la Industria de Construcción</h2>
                                <p className='text-start'>
                                    Desarrolladas bajo los más estrictos estándares de calidad ASTM y normas de seguridad OSHA,
                                    nuestras tarimas están diseñadas específicamente para el manejo, almacenamiento y
                                    transporte de materiales de construcción pesados. Fabricadas con materiales de alta
                                    resistencia y procesos controlados, garantizan la protección integral de materiales
                                    en obras civiles y proyectos de infraestructura.
                                </p>
                                <p className='text-start'>
                                    Cada tarima cumple con los requisitos de resistencia, durabilidad y seguridad
                                    necesarios para operaciones en sitios de construcción, almacenes temporales
                                    y centros de distribución. Nuestros diseños incorporan características anti-deslizamiento
                                    y sistemas de apilamiento para espacios reducidos.
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

                                <h4 className="mt-40 mb-20 text-start">Ingeniería y Fabricación para Construcción</h4>
                                <p className="mb-10 text-start">
                                    Nuestro proceso de fabricación sigue los protocolos ASTM internacionales, incorporando
                                    controles de resistencia estructural y documentación completa de trazabilidad.
                                    Utilizamos aceros estructurales, maderas tratadas y polímeros de alta densidad que garantizan
                                    la resistencia necesaria para soportar materiales pesados como cemento, acero de refuerzo,
                                    bloques y maquinaria, manteniendo estabilidad en terrenos difíciles.
                                </p>

                                <p className="mb-40 text-start">
                                    Implementamos sistemas de refuerzo estructural y protecciones contra impactos
                                    que previenen daños durante el manejo con grúas y montacargas. Cada tarima incluye
                                    puntos de izaje certificados y sistemas de anclaje que cumplen con los
                                    estándares de seguridad para operaciones en altura y espacios confinados.
                                </p>

                                <h4 className="mt-40 mb-20 text-start">Certificaciones y Cumplimiento Normativo</h4>
                                <p className="mb-10 text-start">
                                    Nuestras tarimas están certificadas bajo los estándares de construcción más
                                    exigentes, incluyendo ASTM para materiales de construcción y normas OSHA
                                    para seguridad en obra. Cumplimos con las especificaciones de la SEMARNAT
                                    para materiales sustentables y contamos con certificación para manejo
                                    de materiales peligrosos en construcción.
                                </p>

                                <p className="mb-40 text-start">
                                    Todos nuestros materiales cuentan con certificados de resistencia y
                                    trazabilidad completa desde la materia prima hasta el producto final.
                                    Implementamos controles de calidad no destructivos que garantizan
                                    cero defectos estructurales y mantenemos registros detallados para auditorías
                                    de seguridad y calidad en obra.
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

                <h4 className="mt-40 mb-20 text-start">Características Técnicas para Obras Civiles</h4>
                <p className="mb-40 text-start">
                    Diseñadas para soportar condiciones extremas de obra, nuestras tarimas presentan resistencia
                    a intemperie, humedad, productos químicos de construcción y cargas dinámicas. Incorporamos sistemas de identificación
                    por colores según tipo de material y características anti-corrosión para ambientes marinos.
                    La estructura modular permite configuraciones personalizadas para diferentes tipos de proyectos:
                    residenciales, comerciales, industriales y de infraestructura.
                </p>

                <h4 className="mt-40 mb-20 text-start">Aplicaciones en la Industria de Construcción</h4>
                <p className="mb-40 text-start">
                    Especialmente diseñadas para el manejo de cemento, varilla, blocks, mezclas asfálticas, materiales
                    para cimentación y sistemas prefabricados. Compatibles con sistemas de almacenamiento temporal en
                    obra y centros de distribución. Utilizadas por constructoras, desarrolladoras inmobiliarias,
                    contratistas especializados y gobierno para garantizar la integridad de materiales a lo largo de
                    toda la cadena de suministro de construcción.
                </p>

                <h4 className="mt-40 mb-20 text-start">Soluciones para Proyectos Específicos</h4>
                <p className="mb-20 text-start">
                    <strong>Edificación Vertical:</strong> Tarimas con sistemas de apilamiento seguro para almacenamiento en altura.
                </p>
                <p className="mb-20 text-start">
                    <strong>Obras Civiles:</strong> Diseños resistentes a humedad y productos químicos para presas y puentes.
                </p>
                <p className="mb-20 text-start">
                    <strong>Proyectos Industriales:</strong> Especificaciones para manejo de materiales en plantas y fábricas.
                </p>
                <p className="mb-40 text-start">
                    <strong>Infraestructura Urbana:</strong> Soluciones para transporte y almacenamiento en espacios reducidos.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt={`Aplicación tarimas construcción ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;