import React from 'react';
import IndustrieSidebar from './IndustrieSidebar';

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "FDA",
            unit: "Cert",
            label: "Certificación Médica"
        },
        {
            number: "ISO",
            unit: "13485",
            label: "Calidad Dispositivos Médicos"
        },
        {
            number: "1.2",
            unit: "Tons",
            label: "Capacidad de Carga"
        },
        {
            number: "100%",
            unit: "Biocompatible",
            label: "Materiales Certificados"
        }
    ];

    const benefits = [
        "Cumple normativas FDA y COFEPRIS",
        "Materiales biocompatibles certificados",
        "Diseño para esterilización y limpieza",
        "Resistente a desinfectantes médicos",
        "Compatibilidad con áreas estériles",
        "Estabilidad para equipos sensibles",
        "Rastreabilidad completa de lotes",
        "Larga vida útil en ambientes médicos",
        "Diseño modular para diferentes dispositivos"
    ];

    const projectImages = [
        "assets/img/project/tarimas_medica_1.jpg",
        "assets/img/project/tarimas_medica_2.jpg",
        "assets/img/project/tarimas_medica_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/tarimas_sector_medico.jpg" alt="Tarimas en Sector Médico" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title text-start">Tarimas Especializadas para el Sector Médico</h2>
                                <p className='text-start'>
                                    Desarrolladas bajo los más estrictos estándares de calidad y biocompatibilidad,
                                    nuestras tarimas están diseñadas específicamente para el manejo, almacenamiento y
                                    transporte de dispositivos médicos, equipos hospitalarios y productos farmacéuticos.
                                    Fabricadas con materiales certificados y procesos controlados, garantizan la protección
                                    integral de productos sensibles y críticos para la salud.
                                </p>
                                <p className='text-start'>
                                    Cada tarima cumple con los requisitos de limpieza, esterilización y trazabilidad
                                    necesarios para operaciones en hospitales, laboratorios, plantas farmacéuticas y
                                    centros de distribución médica. Nuestros diseños incorporan características anti-microbianas
                                    y sistemas de contención para productos estériles.
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

                                <h4 className="mt-40 mb-20 text-start">Ingeniería y Fabricación para Aplicaciones Médicas</h4>
                                <p className="mb-10 text-start">
                                    Nuestro proceso de fabricación sigue los protocolos ISO 13485, incorporando
                                    controles de biocompatibilidad y documentación completa de trazabilidad.
                                    Utilizamos polímeros médicos, aceros inoxidables y materiales certificados
                                    que garantizan la seguridad necesaria para soportar dispositivos implantables,
                                    equipos de diagnóstico y productos farmacéuticos, manteniendo propiedades
                                    anti-microbianas permanentes.
                                </p>

                                <p className="mb-40 text-start">
                                    Implementamos sistemas de sujeción especializados y superficies lisas
                                    que previenen la acumulación de contaminantes durante el transporte. Cada tarima incluye
                                    sistemas de identificación por colores según clasificación de riesgo y características
                                    que cumplen con los estándares de seguridad para operaciones en áreas controladas
                                    y salas limpias.
                                </p>

                                <h4 className="mt-40 mb-20 text-start">Certificaciones y Cumplimiento Normativo</h4>
                                <p className="mb-10 text-start">
                                    Nuestras tarimas están certificadas bajo los estándares médicos más
                                    exigentes, incluyendo FDA para dispositivos médicos y COFEPRIS para
                                    productos sanitarios. Cumplimos con las especificaciones de la NOM
                                    para establecimientos de salud y contamos con certificación para
                                    operaciones en áreas estériles y salas limpias.
                                </p>

                                <p className="mb-40 text-start">
                                    Todos nuestros materiales cuentan con certificados de biocompatibilidad
                                    y trazabilidad completa desde la materia prima hasta el producto final.
                                    Implementamos controles de calidad microbiológicos que garantizan
                                    cero contaminación y mantenemos registros detallados para auditorías
                                    de autoridades sanitarias y clientes.
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

                <h4 className="mt-40 mb-20 text-start">Características Técnicas para Productos Sensibles</h4>
                <p className="mb-40 text-start">
                    Diseñadas para proteger productos médicos críticos, nuestras tarimas presentan resistencia
                    a procesos de esterilización (autoclave, ETO, radiación gamma), baja generación de partículas
                    y compatibilidad con ambientes controlados. Incorporamos sistemas de identificación por códigos
                    de colores según tipo de producto y características anti-microbianas para prevención de
                    contaminación cruzada. La estructura modular permite configuraciones personalizadas para
                    diferentes tipos de dispositivos: implantables, diagnóstico, monouso y farmacéuticos.
                </p>

                <h4 className="mt-40 mb-20 text-start">Aplicaciones en el Sector Médico</h4>
                <p className="mb-40 text-start">
                    Especialmente diseñadas para el manejo de dispositivos médicos, equipos hospitalarios,
                    productos farmacéuticos, reactivos de laboratorio y material de curación. Compatibles
                    con sistemas de almacenamiento en farmacias hospitalarias, centrales de esterilización
                    y centros de distribución médica. Utilizadas por hospitales, laboratorios clínicos,
                    fabricantes de dispositivos médicos y distribuidores farmacéuticos para garantizar
                    la integridad de productos críticos a lo largo de toda la cadena de suministro médica.
                </p>

                <h4 className="mt-40 mb-20 text-start">Soluciones para Áreas Específicas</h4>
                <p className="mb-20 text-start">
                    <strong>Quirófanos y Áreas Críticas:</strong> Tarimas con certificación para salas limpias y manejo de material estéril.
                </p>
                <p className="mb-20 text-start">
                    <strong>Farmacia Hospitalaria:</strong> Diseños específicos para medicamentos controlados y productos de alto valor.
                </p>
                <p className="mb-20 text-start">
                    <strong>Laboratorios Clínicos:</strong> Materiales compatibles con reactivos y muestras biológicas.
                </p>
                <p className="mb-40 text-start">
                    <strong>Central de Esterilización:</strong> Soluciones resistentes a procesos de esterilización repetidos.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt={`Aplicación tarimas médicas ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;