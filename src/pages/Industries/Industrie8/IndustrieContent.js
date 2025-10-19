import React from 'react';
import IndustrieSidebar from './IndustrieSidebar';

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "FAA",
            unit: "Cert",
            label: "Certificación Aeronáutica"
        },
        {
            number: "ISO",
            unit: "9100",
            label: "Calidad Aerospace"
        },
        {
            number: "2.5",
            unit: "Tons",
            label: "Capacidad de Carga"
        },
        {
            number: "0",
            unit: "Tolerancia",
            label: "Estándar Defectos"
        }
    ];

    const benefits = [
        "Cumple normativas FAA y EASA",
        "Resistencia estructural superior",
        "Peso optimizado para aviación",
        "Incombustible y antiestático",
        "Resistente a fluidos hidráulicos",
        "Estabilidad dimensional extrema",
        "Rastreabilidad completa",
        "Larga vida útil en condiciones críticas",
        "Compatibilidad con sistemas automatizados"
    ];

    const projectImages = [
        "assets/img/project/tarimas_aeronautica_1.jpg",
        "assets/img/project/tarimas_aeronautica_2.jpg",
        "assets/img/project/tarimas_aeronautica_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/tarimas_industria_aeronautica.jpg" alt="Tarimas en Industria Aeronáutica" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title text-start">Tarimas Especializadas para la Industria Aeronáutica</h2>
                                <p className='text-start'>
                                    Desarrolladas bajo los más estrictos estándares de calidad y seguridad aeronáutica,
                                    nuestras tarimas están diseñadas específicamente para el manejo, almacenamiento y
                                    transporte de componentes aeronáuticos críticos. Fabricadas con materiales certificados
                                    y procesos controlados, garantizan la protección integral de piezas de alta precisión
                                    y valor.
                                </p>
                                <p className='text-start'>
                                    Cada tarima cumple con los requisitos de traceabilidad, limpieza y resistencia
                                    necesarios para operaciones en hangares, líneas de producción y centros de
                                    mantenimiento aeronáutico. Nuestros diseños incorporan características anti-vibración
                                    y protección ESD para componentes electrónicos sensibles.
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

                                <h4 className="mt-40 mb-20 text-start">Ingeniería y Fabricación Aeronáutica</h4>
                                <p className="mb-10 text-start">
                                    Nuestro proceso de fabricación sigue los protocolos AS9100, incorporando
                                    controles dimensionales estrictos y documentación completa de trazabilidad.
                                    Utilizamos materiales compuestos y aleaciones especiales que garantizan
                                    la resistencia necesaria para soportar componentes pesados como turbinas,
                                    alas y sistemas de aviónica, manteniendo un peso optimizado para eficiencia
                                    en el manejo.
                                </p>

                                <p className="mb-40 text-start">
                                    Implementamos sistemas de sujeción personalizados y acolchados protectores
                                    que previenen daños por vibración durante el transporte. Cada tarima incluye
                                    puntos de izaje certificados y sistemas de anclaje que cumplen con los
                                    estándares de seguridad para operaciones con grúas y equipos de manejo
                                    especializado.
                                </p>

                                <h4 className="mt-40 mb-20 text-start">Certificaciones y Cumplimiento Normativo</h4>
                                <p className="mb-10 text-start">
                                    Nuestras tarimas están certificadas bajo los estándares aeronáuticos más
                                    exigentes, incluyendo FAA (Federal Aviation Administration) y EASA
                                    (European Union Aviation Safety Agency). Cumplimos con las especificaciones
                                    NADCAP para procesos especiales y contamos con certificación AS9120 para
                                    distribución de componentes aeronáuticos.
                                </p>

                                <p className="mb-40 text-start">
                                    Todos nuestros materiales cuentan con certificados de conformidad y
                                    trazabilidad completa desde la materia prima hasta el producto final.
                                    Implementamos controles de calidad estadísticos (SPC) que garantizan
                                    cero defectos críticos y mantenemos registros detallados para auditorías
                                    de clientes y autoridades regulatorias.
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

                <h4 className="mt-40 mb-20 text-start">Características Técnicas para Aplicaciones Críticas</h4>
                <p className="mb-40 text-start">
                    Diseñadas para soportar condiciones extremas, nuestras tarimas presentan resistencia
                    a temperaturas desde -40°C hasta +80°C, humedad controlada y exposición a químicos
                    aeronáuticos. Incorporamos sistemas de identificación RFID para gestión automatizada
                    de inventario y características ESD para protección de componentes electrónicos.
                    La estructura modular permite configuraciones personalizadas para piezas de diferentes
                    tamaños y formas, optimizando el espacio en almacenes y durante el transporte.
                </p>

                <h4 className="mt-40 mb-20 text-start">Aplicaciones en la Industria Aeronáutica</h4>
                <p className="mb-40 text-start">
                    Especialmente diseñadas para el manejo de motores, sistemas de aviónica, componentes
                    estructurales, trenes de aterrizaje y sistemas hidráulicos. Compatibles con sistemas
                    de almacenamiento automatizado en hangares y centros de mantenimiento. Utilizadas
                    por fabricantes OEM, centros MRO (Maintenance, Repair & Overhaul) y líneas aéreas
                    para garantizar la integridad de componentes críticos a lo largo de toda la cadena
                    de suministro aeronáutica.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt={`Aplicación tarimas aeronáuticas ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;