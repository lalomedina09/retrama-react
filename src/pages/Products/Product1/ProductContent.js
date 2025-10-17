import React from 'react';

const ProductContent = () => {
    const serviceProcess = [
        {
            icon: "assets/img/icon/process_2_1.svg",
            title: "Selección de Madera",
            description: "Seleccionamos cuidadosamente maderas de pino y ocote de primera calidad, evaluando cada pieza para garantizar durabilidad y resistencia óptima."
        },
        {
            icon: "assets/img/icon/process_2_2.svg",
            title: "Proceso de Fabricación",
            description: "Cortamos, cepillamos y ensamblamos las tarimas con precisión, utilizando clavado especializado que asegura máxima estabilidad y carga."
        },
        {
            icon: "assets/img/icon/process_2_3.svg",
            title: "Control de Calidad",
            description: "Cada tarima pasa por rigurosos controles de calidad, verificando medidas, resistencia y aplicando tratamientos especiales cuando son requeridos."
        }
    ];

    return (
        <div className="page-single">
            <div className="page-img global-img mb-35">
                <img src="assets/img/service/service_details.jpg" alt="Fabricación de Tarimas" />
            </div>
            <div className="page-content">
                <h2 className="h2 page-title mb-20">Fabricación de Tarimas Nuevas de Madera</h2>
                <p className="blog-text">
                    En RETRAMA nos especializamos en la fabricación de tarimas nuevas de madera de la más alta calidad.
                    Utilizamos maderas seleccionadas como pino y ocote, sometidas a procesos de secado y tratamiento
                    que garantizan durabilidad, resistencia y cumplimiento con las normas internacionales. Nuestras
                    tarimas están diseñadas para satisfacer las necesidades de almacenamiento y logística de diversos
                    sectores industriales.
                </p>
                <p className="blog-text mb-30">
                    Ofrecemos soluciones completas desde el diseño hasta la entrega, incluyendo tratamientos térmicos
                    y de fumigación para exportación. Cada tarima es fabricada con precisión para asegurar capacidad
                    de carga óptima, estabilidad en el apilamiento y larga vida útil, incluso en las condiciones
                    más demandantes de almacenamiento y transporte.
                </p>

                <h4 className="mt-35">Beneficios de Nuestras Tarimas</h4>
                <p className="blog-text mb-30">
                    Nuestras tarimas de madera ofrecen ventajas competitivas significativas: son económicas,
                    ecológicas, reciclables y altamente resistentes. La madera proporciona amortiguación natural
                    contra impactos, protegiendo sus productos durante el manejo y transporte. Además, ofrecen
                    excelente tracción para montacargas y son fácilmente reparables, extendiendo su vida útil
                    y reduciendo costos a largo plazo.
                </p>

                <div className="row gy-4 gx-40">
                    <div className="col-xl-4">
                        <div className="checklist style6">
                            <ul>
                                <li>Materiales de Primera Calidad</li>
                                <li>Resistencia y Durabilidad</li>
                                <li>Capacidad de Carga Optimizada</li>
                                <li>Tratamientos Especializados</li>
                                <li>Medidas Estándar y Personalizadas</li>
                                <li>Cumplimiento de Normas Internacionales</li>
                                <li>Logística de Entrega Nacional</li>
                                <li>Asesoría Técnica Especializada</li>
                                <li>Precios Competitivos</li>
                                <li>Soporte Post-Venta</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/service_inner_1.jpg" alt="Proceso de Fabricación" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/service_inner_2.jpg" alt="Tarimas Terminadas" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mt-20">Proceso de Fabricación</h4>
                <p className="blog-text mb-35">
                    Nuestro proceso de fabricación combina técnicas tradicionales con tecnología moderna para
                    garantizar tarimas de máxima calidad. Desde la selección de la materia prima hasta el
                    embalaje final, cada etapa está supervisada por nuestro equipo de expertos para asegurar
                    que cada tarima cumpla con los más altos estándares de la industria.
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