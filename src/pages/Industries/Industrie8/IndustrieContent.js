import React from 'react';
import IndustrieSidebar from './IndustrieSidebar';

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "FCC",
            unit: "Cert",
            label: "Certificación Telecom"
        },
        {
            number: "ISO",
            unit: "9001",
            label: "Calidad Telecomunicaciones"
        },
        {
            number: "1.8",
            unit: "Tons",
            label: "Capacidad de Carga"
        },
        {
            number: "100%",
            unit: "Protección",
            label: "EMI/RFI Shielding"
        }
    ];

    const benefits = [
        "Cumple normativas FCC e IFT",
        "Protección integral contra interferencias",
        "Materiales con shielding EMI/RFI",
        "Resistente a condiciones climáticas extremas",
        "Compatibilidad con equipos de red",
        "Estabilidad para componentes sensibles",
        "Rastreabilidad completa de equipos",
        "Larga vida útil en exteriores e interiores",
        "Diseño modular para diferentes tecnologías"
    ];

    const projectImages = [
        "assets/img/project/tarimas_telecom_1.jpg",
        "assets/img/project/tarimas_telecom_2.jpg",
        "assets/img/project/tarimas_telecom_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/tarimas_industria_telecom.jpg" alt="Tarimas en Industria de Telecomunicaciones" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title text-start">Tarimas Especializadas para la Industria de Telecomunicaciones</h2>
                                <p className='text-start'>
                                    Desarrolladas bajo los más estrictos estándares de calidad y protección electromagnética,
                                    nuestras tarimas están diseñadas específicamente para el manejo, almacenamiento y
                                    transporte de equipos de telecomunicaciones críticos. Fabricadas con materiales
                                    especializados y procesos controlados, garantizan la protección integral de
                                    antenas, routers, switches y sistemas de transmisión.
                                </p>
                                <p className='text-start'>
                                    Cada tarima cumple con los requisitos de protección EMI/RFI, resistencia climática
                                    y compatibilidad necesarios para operaciones en centrales telefónicas, data centers,
                                    torres de comunicación y centros de distribución. Nuestros diseños incorporan
                                    características anti-vibración y sistemas de shielding para equipos sensibles.
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

                                <h4 className="mt-40 mb-20 text-start">Ingeniería y Fabricación para Telecomunicaciones</h4>
                                <p className="mb-10 text-start">
                                    Nuestro proceso de fabricación sigue los protocolos de calidad telecom, incorporando
                                    controles de protección electromagnética y documentación completa de trazabilidad.
                                    Utilizamos materiales compuestos con propiedades de shielding, polímeros de ingeniería
                                    y aleaciones que garantizan la protección necesaria para equipos como antenas 5G,
                                    equipos de fibra óptica y sistemas de microondas, manteniendo integridad estructural
                                    en instalaciones críticas.
                                </p>

                                <p className="mb-40 text-start">
                                    Implementamos sistemas de sujeción especializados y protecciones contra impactos
                                    que previenen daños durante el transporte e instalación. Cada tarima incluye
                                    puntos de anclaje certificados y características de apilamiento que cumplen con los
                                    estándares de seguridad para operaciones en altura y espacios confinados.
                                </p>

                                <h4 className="mt-40 mb-20 text-start">Certificaciones y Cumplimiento Normativo</h4>
                                <p className="mb-10 text-start">
                                    Nuestras tarimas están certificadas bajo los estándares de telecomunicaciones más
                                    exigentes, incluyendo FCC para equipos de comunicaciones e IFT para regulación
                                    mexicana. Cumplimos con las especificaciones de la UIT y contamos con certificación
                                    para manejo de equipos de infraestructura crítica.
                                </p>

                                <p className="mb-40 text-start">
                                    Todos nuestros materiales cuentan con certificados de protección electromagnética
                                    y trazabilidad completa desde la materia prima hasta el producto final.
                                    Implementamos controles de calidad que garantizan el cumplimiento de normas
                                    de interferencia y mantenemos registros detallados para auditorías de
                                    clientes y autoridades regulatorias.
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

                <h4 className="mt-40 mb-20 text-start">Características Técnicas para Equipos de Red</h4>
                <p className="mb-40 text-start">
                    Diseñadas para proteger equipos de telecomunicaciones sensibles, nuestras tarimas presentan
                    protección EMI/RFI, resistencia a temperaturas desde -30°C hasta +70°C, humedad controlada
                    y compatibilidad con equipos activos y pasivos. Incorporamos sistemas de identificación
                    por códigos de colores según tipo de tecnología y características de apantallamiento
                    electromagnético para prevención de interferencias. La estructura modular permite
                    configuraciones personalizadas para diferentes tipos de equipos: radiofrecuencia,
                    fibra óptica, microondas y sistemas satelitales.
                </p>

                <h4 className="mt-40 mb-20 text-start">Aplicaciones en la Industria de Telecomunicaciones</h4>
                <p className="mb-40 text-start">
                    Especialmente diseñadas para el manejo de antenas, equipos de transmisión, routers,
                    switches, sistemas de fibra óptica y equipos de radiofrecuencia. Compatibles
                    con sistemas de almacenamiento en data centers, centrales telefónicas y sitios
                    celulares. Utilizadas por operadoras de telecomunicaciones, integradores de red,
                    proveedores de servicios de internet y empresas de infraestructura para garantizar
                    la integridad de equipos críticos a lo largo de toda la cadena de suministro.
                </p>

                <h4 className="mt-40 mb-20 text-start">Soluciones para Tecnologías Específicas</h4>
                <p className="mb-20 text-start">
                    <strong>Redes 5G y LTE:</strong> Tarimas con protección EMI para equipos de radiofrecuencia y antenas masivas MIMO.
                </p>
                <p className="mb-20 text-start">
                    <strong>Fibra Óptica:</strong> Diseños especializados para manejo de OLTs, splitters y equipos de medición.
                </p>
                <p className="mb-20 text-start">
                    <strong>Data Centers:</strong> Soluciones para racks, servidores y equipos de networking en salas blancas.
                </p>
                <p className="mb-40 text-start">
                    <strong>Telecom Exterior:</strong> Materiales resistentes a intemperie para equipos en torres y postes.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt={`Aplicación tarimas telecom ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;