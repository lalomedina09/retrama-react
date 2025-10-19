import React from 'react';
import IndustrieSidebar from './IndustrieSidebar';

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "IATF",
            unit: "16949",
            label: "Certificación Automotriz"
        },
        {
            number: "ISO",
            unit: "9001",
            label: "Calidad Automotriz"
        },
        {
            number: "2.0",
            unit: "Tons",
            label: "Capacidad de Carga"
        },
        {
            number: "0",
            unit: "PPM",
            label: "Tasa de Defectos"
        }
    ];

    const benefits = [
        "Cumple normativas IATF 16949",
        "Resistencia estructural superior",
        "Peso optimizado para líneas de producción",
        "Resistente a aceites y fluidos automotrices",
        "Compatibilidad con sistemas JIT",
        "Estabilidad dimensional para automatización",
        "Rastreabilidad completa de componentes",
        "Larga vida útil en entornos industriales",
        "Diseño modular para diferentes piezas"
    ];

    const projectImages = [
        "assets/img/project/tarimas_automotriz_1.jpg",
        "assets/img/project/tarimas_automotriz_2.jpg",
        "assets/img/project/tarimas_automotriz_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/tarimas_industria_automotriz.jpg" alt="Tarimas en Industria Automotriz" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title text-start">Tarimas Especializadas para la Industria Automotriz</h2>
                                <p className='text-start'>
                                    Desarrolladas bajo los más estrictos estándares de calidad IATF 16949,
                                    nuestras tarimas están diseñadas específicamente para el manejo, almacenamiento y
                                    transporte de componentes automotrices críticos. Fabricadas con materiales de alta
                                    resistencia y procesos controlados, garantizan la protección integral de piezas
                                    de precisión en líneas de ensamble y cadenas de suministro.
                                </p>
                                <p className='text-start'>
                                    Cada tarima cumple con los requisitos de traceabilidad, limpieza y resistencia
                                    necesarios para operaciones en plantas de manufactura, líneas de producción
                                    y centros de distribución automotriz. Nuestros diseños incorporan características
                                    anti-impacto y sistemas de anclaje para transporte seguro.
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

                                <h4 className="mt-40 mb-20 text-start">Ingeniería y Fabricación Automotriz</h4>
                                <p className="mb-10 text-start">
                                    Nuestro proceso de fabricación sigue los protocolos IATF 16949, incorporando
                                    controles dimensionales estrictos y documentación completa de trazabilidad.
                                    Utilizamos materiales compuestos y polímeros de ingeniería que garantizan
                                    la resistencia necesaria para soportar componentes pesados como motores,
                                    transmisiones y sistemas de suspensión, manteniendo un peso optimizado para
                                    eficiencia en el manejo.
                                </p>

                                <p className="mb-40 text-start">
                                    Implementamos sistemas de sujeción personalizados y protecciones anti-rayado
                                    que previenen daños durante el transporte y almacenamiento. Cada tarima incluye
                                    puntos de izaje certificados y sistemas de apilamiento que cumplen con los
                                    estándares de seguridad para operaciones con montacargas y equipos de manejo
                                    automatizado.
                                </p>

                                <h4 className="mt-40 mb-20 text-start">Certificaciones y Cumplimiento Normativo</h4>
                                <p className="mb-10 text-start">
                                    Nuestras tarimas están certificadas bajo los estándares automotrices más
                                    exigentes, incluyendo IATF 16949 para sistemas de gestión de calidad y
                                    VDA 6.3 para procesos de producción. Cumplimos con las especificaciones
                                    de los principales OEMs y contamos con certificación para distribución
                                    de componentes de primer nivel (Tier 1).
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

                <h4 className="mt-40 mb-20 text-start">Características Técnicas para Líneas de Producción</h4>
                <p className="mb-40 text-start">
                    Diseñadas para soportar condiciones exigentes de plantas automotrices, nuestras tarimas presentan resistencia
                    a impactos, aceites, fluidos hidráulicos y temperaturas de pintura. Incorporamos sistemas de identificación
                    por código de barras y RFID para gestión automatizada de inventario y características anti-estáticas
                    para componentes electrónicos. La estructura modular permite configuraciones personalizadas para
                    diferentes tipos de piezas: motores, carrocerías, interiores y sistemas eléctricos.
                </p>

                <h4 className="mt-40 mb-20 text-start">Aplicaciones en la Industria Automotriz</h4>
                <p className="mb-40 text-start">
                    Especialmente diseñadas para el manejo de motores, transmisiones, sistemas de frenos, componentes
                    de carrocería y sistemas eléctricos. Compatibles con sistemas de almacenamiento automatizado en
                    plantas de ensamble y centros de distribución. Utilizadas por fabricantes OEM, proveedores Tier 1
                    y centros de logística para garantizar la integridad de componentes a lo largo de toda la cadena
                    de suministro automotriz.
                </p>

                <h4 className="mt-40 mb-20 text-start">Soluciones para Procesos Específicos</h4>
                <p className="mb-20 text-start">
                    <strong>Líneas de Ensamble:</strong> Tarimas con rodajas integradas para movimiento fluido en líneas de producción.
                </p>
                <p className="mb-20 text-start">
                    <strong>Almacenamiento de Partes:</strong> Diseños modulares para optimización de espacio en almacenes.
                </p>
                <p className="mb-20 text-start">
                    <strong>Transporte entre Plantas:</strong> Sistemas de anclaje certificados para transporte seguro.
                </p>
                <p className="mb-40 text-start">
                    <strong>Componentes Sensibles:</strong> Protecciones especiales para piezas pintadas y electrónicas.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt={`Aplicación tarimas automotrices ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;