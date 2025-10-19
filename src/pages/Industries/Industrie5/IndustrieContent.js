import React from 'react';
import IndustrieSidebar from './IndustrieSidebar';

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "ESD",
            unit: "Cert",
            label: "Protección Electrostática"
        },
        {
            number: "IPC",
            unit: "610",
            label: "Estándar Calidad Electrónica"
        },
        {
            number: "1.0",
            unit: "Tons",
            label: "Capacidad de Carga"
        },
        {
            number: "100%",
            unit: "Limpieza",
            label: "Clase 1000 Cleanroom"
        }
    ];

    const benefits = [
        "Cumple normativas ESD S20.20 e IPC",
        "Protección integral contra descargas electrostáticas",
        "Materiales antiestáticos certificados",
        "Resistente a solventes de limpieza electrónica",
        "Compatibilidad con líneas SMT y through-hole",
        "Estabilidad dimensional para componentes sensibles",
        "Rastreabilidad completa de lotes",
        "Larga vida útil en ambientes controlados",
        "Diseño modular para diferentes componentes"
    ];

    const projectImages = [
        "assets/img/project/tarimas_electronica_1.jpg",
        "assets/img/project/tarimas_electronica_2.jpg",
        "assets/img/project/tarimas_electronica_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/tarimas_industria_electronica.jpg" alt="Tarimas en Industria Electrónica" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title text-start">Tarimas Especializadas para la Industria Electrónica</h2>
                                <p className='text-start'>
                                    Desarrolladas bajo los más estrictos estándares de protección ESD y normas IPC,
                                    nuestras tarimas están diseñadas específicamente para el manejo, almacenamiento y
                                    transporte de componentes electrónicos sensibles. Fabricadas con materiales antiestáticos
                                    certificados y procesos controlados, garantizan la protección integral de circuitos
                                    impresos, semiconductores y dispositivos electrónicos.
                                </p>
                                <p className='text-start'>
                                    Cada tarima cumple con los requisitos de limpieza, protección ESD y compatibilidad
                                    necesarios para operaciones en cleanrooms, líneas de ensamble y centros de
                                    distribución electrónica. Nuestros diseños incorporan características anti-vibración
                                    y sistemas de contención para componentes estáticos.
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

                                <h4 className="mt-40 mb-20 text-start">Ingeniería y Fabricación para Electrónica</h4>
                                <p className="mb-10 text-start">
                                    Nuestro proceso de fabricación sigue los protocolos ESD S20.20, incorporando
                                    controles de resistencia superficial y documentación completa de trazabilidad.
                                    Utilizamos polímeros conductivos, compuestos disipativos y materiales certificados
                                    que garantizan la protección necesaria para componentes sensibles como microchips,
                                    PCBs y dispositivos IoT, manteniendo propiedades antiestáticas permanentes.
                                </p>

                                <p className="mb-40 text-start">
                                    Implementamos sistemas de separación y acolchados conductivos
                                    que previenen daños por descargas electrostáticas durante el transporte. Cada tarima incluye
                                    puntos de contacto ESD certificados y sistemas de apilamiento que cumplen con los
                                    estándares de seguridad para operaciones en áreas controladas y cleanrooms.
                                </p>

                                <h4 className="mt-40 mb-20 text-start">Certificaciones y Cumplimiento Normativo</h4>
                                <p className="mb-10 text-start">
                                    Nuestras tarimas están certificadas bajo los estándares electrónicos más
                                    exigentes, incluyendo ESD S20.20 para protección electrostática y IPC
                                    para calidad en ensamble electrónico. Cumplimos con las especificaciones
                                    JEDEC para manejo de semiconductores y contamos con certificación para
                                    operaciones en cleanrooms clase 1000.
                                </p>

                                <p className="mb-40 text-start">
                                    Todos nuestros materiales cuentan con certificados de resistencia superficial
                                    y trazabilidad completa desde la materia prima hasta el producto final.
                                    Implementamos controles de calidad con equipos de medición ESD que garantizan
                                    cero fallas por descargas y mantenemos registros detallados para auditorías
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

                <h4 className="mt-40 mb-20 text-start">Características Técnicas para Componentes Sensibles</h4>
                <p className="mb-40 text-start">
                    Diseñadas para proteger componentes de microelectrónica, nuestras tarimas presentan resistencia
                    superficial controlada (10³ - 10¹¹ ohmios), baja generación de partículas y compatibilidad con
                    ambientes cleanroom. Incorporamos sistemas de identificación RFID y códigos de barras para
                    gestión automatizada de inventario y características de disipación estática para protección
                    de componentes sensibles. La estructura modular permite configuraciones personalizadas para
                    diferentes tipos de dispositivos: SMD, BGA, QFP y componentes through-hole.
                </p>

                <h4 className="mt-40 mb-20 text-start">Aplicaciones en la Industria Electrónica</h4>
                <p className="mb-40 text-start">
                    Especialmente diseñadas para el manejo de circuitos impresos, semiconductores, componentes SMT,
                    dispositivos IoT y sistemas embebidos. Compatibles con sistemas de almacenamiento automatizado en
                    cleanrooms y líneas de producción. Utilizadas por fabricantes de semiconductores, EMS (Electronic
                    Manufacturing Services), desarrolladores de hardware y centros de investigación para garantizar
                    la integridad de componentes a lo largo de toda la cadena de suministro electrónica.
                </p>

                <h4 className="mt-40 mb-20 text-start">Soluciones para Procesos Específicos</h4>
                <p className="mb-20 text-start">
                    <strong>Fabricación de Semiconductores:</strong> Tarimas con certificación para salas blancas y manejo de wafers.
                </p>
                <p className="mb-20 text-start">
                    <strong>Ensamblaje de PCBs:</strong> Diseños específicos para líneas SMT y procesos through-hole.
                </p>
                <p className="mb-20 text-start">
                    <strong>Dispositivos Médicos Electrónicos:</strong> Materiales biocompatibles y certificaciones FDA.
                </p>
                <p className="mb-40 text-start">
                    <strong>Telecomunicaciones:</strong> Soluciones para componentes RF y sistemas de alta frecuencia.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt={`Aplicación tarimas electrónicas ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;