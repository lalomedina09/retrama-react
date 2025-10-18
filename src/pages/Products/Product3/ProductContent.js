import React from 'react';

const ProductContent = () => {
    const serviceProcess = [
        {
            icon: "assets/img/icon/process_2_1.svg",
            title: "Evaluación y Clasificación",
            description: "Recibimos las tarimas usadas y realizamos una evaluación exhaustiva para determinar su estado y potencial de re-acondicionamiento."
        },
        {
            icon: "assets/img/icon/process_2_2.svg",
            title: "Reparación y Restauración",
            description: "Reparamos daños, reemplazamos tablas defectuosas y reforzamos la estructura para garantizar máxima resistencia y durabilidad."
        },
        {
            icon: "assets/img/icon/process_2_3.svg",
            title: "Control de Calidad",
            description: "Cada tarima pasa por rigurosos controles de calidad para asegurar que cumple con los estándares de seguridad y funcionalidad."
        }
    ];

    return (
        <div className="page-single">
            <div className="page-img global-img mb-35">
                <img src="assets/img/service/tarimas_reacondicionadas.jpg" alt="Tarimas de Madera Re-acondicionadas" />
            </div>
            <div className="page-content">
                <h2 className="h2 page-title mb-20">Tarimas de Madera Re-acondicionadas</h2>
                <p className="blog-text">
                    Ofrecemos soluciones completas en tarimas de madera re-acondicionadas, desde la recolección
                    de material usado hasta la entrega de productos restaurados. Nuestras tarimas son ideales
                    para almacenamiento, transporte y distribución en diversos sectores industriales y comerciales.
                    Cada tarima es tratada y reparada siguiendo estrictos protocolos de calidad que garantizan
                    su resistencia, seguridad y larga vida útil.
                </p>
                <p className="blog-text mb-30">
                    Contribuimos al medio ambiente mediante la reutilización de madera, reduciendo la tala
                    de árboles y minimizando residuos. Nuestro proceso de re-acondicionamiento incluye
                    inspección, reparación estructural, tratamiento contra plagas y refuerzo de componentes,
                    asegurando productos confiables y económicos para su negocio.
                </p>

                <h4 className="mt-35">Beneficios de Nuestro Servicio</h4>
                <p className="blog-text mb-30">
                    Al elegir nuestras tarimas re-acondicionadas, no solo obtiene productos de alta calidad
                    a precios competitivos, sino que también participa activamente en la economía circular.
                    Nuestro compromiso con la sostenibilidad se refleja en cada etapa del proceso, desde
                    la selección de materias primas hasta la entrega final, asegurando un impacto positivo
                    en el medio ambiente y en su cadena de suministro.
                </p>

                <div className="row gy-4 gx-40">
                    <div className="col-xl-4">
                        <div className="checklist style6">
                            <ul>
                                <li>Ahorro de hasta 40% vs. tarimas nuevas</li>
                                <li>Calidad certificada y garantizada</li>
                                <li>Entrega rápida y puntual</li>
                                <li>Proceso eco-amigable</li>
                                <li>Personalización de medidas</li>
                                <li>Resistencia y durabilidad comprobada</li>
                                <li>Soporte técnico especializado</li>
                                <li>Cumplimiento de normas internacionales</li>
                                <li>Tratamiento anti-hongos y plagas</li>
                                <li>Servicio de recolección de material usado</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/tarima_proceso_1.jpg" alt="Proceso de Re-acondicionamiento" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/tarima_proceso_2.jpg" alt="Tarimas Finalizadas" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mt-20">Nuestro Proceso de Trabajo</h4>
                <p className="blog-text mb-35">
                    Desarrollamos un proceso meticuloso que asegura la máxima calidad en cada tarima
                    re-acondicionada. Desde la recepción del material hasta el control final, cada etapa
                    está diseñada para optimizar recursos, garantizar seguridad y ofrecer productos que
                    superan las expectativas de nuestros clientes en el sector logístico e industrial.
                </p>

                <div className="service-process-wrap">
                    {serviceProcess.map((process, index) => (
                        <div className="service-process" key={index}>
                            <div className="service-process_img">
                                <img src={process.icon} alt={process.title} />
                            </div>
                            <div className="service-process_centent">
                                <h5 className="service-process_title">{process.title}</h5>
                                <p className="service-process_text">{process.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductContent;