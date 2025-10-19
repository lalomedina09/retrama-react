import React from 'react';
import IndustrieSidebar from './IndustrieSidebar';

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "NOM",
            unit: "Cert",
            label: "Normatividad Energética"
        },
        {
            number: "ISO",
            unit: "50001",
            label: "Gestión Energética"
        },
        {
            number: "3.5",
            unit: "Tons",
            label: "Capacidad de Carga"
        },
        {
            number: "100%",
            unit: "Resistente",
            label: "A Condiciones Extremas"
        }
    ];

    const benefits = [
        "Cumple normativas NOM y normas internacionales",
        "Resistencia estructural para equipos pesados",
        "Diseño para manejo de componentes energéticos",
        "Resistente a intemperie y condiciones adversas",
        "Compatibilidad con sistemas de generación",
        "Estabilidad para equipos sensibles",
        "Rastreabilidad completa de componentes",
        "Larga vida útil en entornos energéticos",
        "Diseño modular para diferentes aplicaciones"
    ];

    const projectImages = [
        "assets/img/project/tarimas_energia_1.jpg",
        "assets/img/project/tarimas_energia_2.jpg",
        "assets/img/project/tarimas_energia_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/tarimas_industria_energia.jpg" alt="Tarimas en Industria de Energía" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title text-start">Tarimas Especializadas para la Industria de Energía</h2>
                                <p className='text-start'>
                                    Desarrolladas bajo los más estrictos estándares de seguridad y normatividad energética,
                                    nuestras tarimas están diseñadas específicamente para el manejo, almacenamiento y
                                    transporte de equipos y componentes del sector energético. Fabricadas con materiales
                                    de alta resistencia y procesos controlados, garantizan la protección integral de
                                    turbinas, transformadores, paneles solares y sistemas de distribución.
                                </p>
                                <p className='text-start'>
                                    Cada tarima cumple con los requisitos de resistencia, durabilidad y seguridad
                                    necesarios para operaciones en plantas generadoras, subestaciones eléctricas,
                                    parques eólicos y centros de distribución energética. Nuestros diseños incorporan
                                    características anti-vibración y sistemas de anclaje para equipos críticos.
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

                                <h4 className="mt-40 mb-20 text-start">Ingeniería y Fabricación para el Sector Energético</h4>
                                <p className="mb-10 text-start">
                                    Nuestro proceso de fabricación sigue los protocolos ISO 50001, incorporando
                                    controles de resistencia estructural y documentación completa de trazabilidad.
                                    Utilizamos aceros especiales, aleaciones resistentes y materiales compuestos
                                    que garantizan la durabilidad necesaria para soportar equipos pesados como
                                    generadores, transformadores y sistemas de transmisión, manteniendo integridad
                                    en condiciones extremas.
                                </p>

                                <p className="mb-40 text-start">
                                    Implementamos sistemas de sujeción certificados y protecciones contra impactos
                                    que previenen daños durante el transporte y manipulación. Cada tarima incluye
                                    puntos de izaje estructurales y sistemas de anclaje que cumplen con los
                                    estándares de seguridad para operaciones con grúas de alta capacidad y
                                    equipos especializados.
                                </p>

                                <h4 className="mt-40 mb-20 text-start">Certificaciones y Cumplimiento Normativo</h4>
                                <p className="mb-10 text-start">
                                    Nuestras tarimas están certificadas bajo los estándares energéticos más
                                    exigentes, incluyendo NOM para seguridad eléctrica y normas internacionales
                                    para equipos de generación. Cumplimos con las especificaciones de la CRE
                                    y contamos con certificación para manejo de componentes de alta tensión
                                    y sistemas renovables.
                                </p>

                                <p className="mb-40 text-start">
                                    Todos nuestros materiales cuentan con certificados de resistencia mecánica
                                    y trazabilidad completa desde la materia prima hasta el producto final.
                                    Implementamos controles de calidad no destructivos que garantizan
                                    cero defectos críticos y mantenemos registros detallados para auditorías
                                    de seguridad y cumplimiento normativo.
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

                <h4 className="mt-40 mb-20 text-start">Características Técnicas para Aplicaciones Energéticas</h4>
                <p className="mb-40 text-start">
                    Diseñadas para soportar condiciones extremas del sector energético, nuestras tarimas presentan resistencia
                    a temperaturas desde -30°C hasta +80°C, humedad, viento y exposición a campos electromagnéticos.
                    Incorporamos sistemas de identificación por colores según tipo de equipo y características anti-corrosión
                    para ambientes costeros e industriales. La estructura modular permite configuraciones personalizadas para
                    diferentes tipos de aplicaciones: generación, transmisión, distribución y energías renovables.
                </p>

                <h4 className="mt-40 mb-20 text-start">Aplicaciones en la Industria de Energía</h4>
                <p className="mb-40 text-start">
                    Especialmente diseñadas para el manejo de turbinas, generadores, transformadores, paneles solares,
                    aerogeneradores y sistemas de distribución. Compatibles con sistemas de almacenamiento en plantas
                    generadoras y centros de control. Utilizadas por empresas generadoras, transmisoras, distribuidoras
                    y desarrolladores de proyectos renovables para garantizar la integridad de equipos críticos a lo
                    largo de toda la cadena de valor energética.
                </p>

                <h4 className="mt-40 mb-20 text-start">Soluciones para Subsectores Específicos</h4>
                <p className="mb-20 text-start">
                    <strong>Generación Térmica:</strong> Tarimas resistentes a altas temperaturas para componentes de plantas termoeléctricas.
                </p>
                <p className="mb-20 text-start">
                    <strong>Energías Renovables:</strong> Diseños especializados para paneles solares, palas eólicas y sistemas de almacenamiento.
                </p>
                <p className="mb-20 text-start">
                    <strong>Transmisión y Distribución:</strong> Soluciones para transformadores, subestaciones y equipos de alta tensión.
                </p>
                <p className="mb-40 text-start">
                    <strong>Petróleo y Gas:</strong> Materiales certificados para zonas clasificadas y ambientes explosivos.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt={`Aplicación tarimas energía ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;