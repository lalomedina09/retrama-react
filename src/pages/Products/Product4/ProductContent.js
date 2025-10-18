import React from 'react';

const ProductContent = () => {
    const serviceProcess = [
        {
            icon: "assets/img/icon/process_2_1.svg",
            title: "Diseño y Planificación",
            description: "Analizamos sus necesidades específicas para diseñar tarimas híbridas que combinen la resistencia del plástico con la versatilidad de la madera."
        },
        {
            icon: "assets/img/icon/process_2_2.svg",
            title: "Fabricación Personalizada",
            description: "Utilizamos tecnología avanzada para fabricar tarimas híbridas que optimizan el espacio y maximizan la durabilidad en cada aplicación."
        },
        {
            icon: "assets/img/icon/process_2_3.svg",
            title: "Control de Calidad",
            description: "Cada tarima híbrida pasa por rigurosas pruebas de carga, resistencia y durabilidad para garantizar el máximo rendimiento."
        }
    ];

    return (
        <div className="page-single">
            <div className="page-img global-img mb-35">
                <img src="assets/img/service/tarimas_hibridas.jpg" alt="Tarimas Híbridas" />
            </div>
            <div className="page-content">
                <h2 className="h2 page-title mb-20">Tarimas Híbridas de Madera y Plástico</h2>
                <p className="blog-text">
                    Ofrecemos soluciones innovadoras en tarimas híbridas que combinan lo mejor de la madera
                    y el plástico reciclado. Nuestras tarimas híbridas representan la evolución en el sector
                    del almacenamiento y transporte, proporcionando una alternativa superior que supera
                    las limitaciones de los materiales tradicionales. Diseñadas para soportar las condiciones
                    más exigentes, estas tarimas ofrecen una vida útil excepcionalmente larga.
                </p>
                <p className="blog-text mb-30">
                    La estructura híbrida permite una resistencia optimizada a la humedad, plagas y
                    condiciones climáticas extremas, mientras mantiene la capacidad de carga necesaria
                    para operaciones logísticas intensivas. Nuestro proceso de fabricación incorpora
                    plásticos reciclados de alta calidad con refuerzos de madera tratada, creando un
                    producto final que es tanto funcional como sostenible.
                </p>

                <h4 className="mt-35">Ventajas de las Tarimas Híbridas</h4>
                <p className="blog-text mb-30">
                    Las tarimas híbridas ofrecen beneficios significativos sobre los modelos tradicionales.
                    Su diseño inteligente reduce el peso total mientras mantiene la resistencia estructural,
                    lo que se traduce en ahorros en costos de transporte y manipulación. Además, son
                    completamente reciclables al final de su vida útil, contribuyendo a una economía
                    circular y reduciendo el impacto ambiental de sus operaciones logísticas.
                </p>

                <div className="row gy-4 gx-40">
                    <div className="col-xl-4">
                        <div className="checklist style6">
                            <ul>
                                <li>Resistencia superior a la humedad</li>
                                <li>Inmunes a plagas y hongos</li>
                                <li>Peso optimizado para transporte</li>
                                <li>Mayor vida útil que tarimas tradicionales</li>
                                <li>Materiales 100% reciclables</li>
                                <li>Capacidad de carga mejorada</li>
                                <li>Mínimo mantenimiento requerido</li>
                                <li>Compatibilidad con sistemas automatizados</li>
                                <li>Resistencia química superior</li>
                                <li>Certificación internacional de calidad</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/tarima_hibrida_1.jpg" alt="Estructura Híbrida" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/tarima_hibrida_2.jpg" alt="Aplicaciones Industriales" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mt-20">Nuestro Proceso de Fabricación</h4>
                <p className="blog-text mb-35">
                    Desarrollamos cada tarima híbrida mediante un proceso tecnológicamente avanzado que
                    asegura la perfecta integración entre los componentes de plástico reciclado y madera
                    tratada. Desde la selección de materias primas hasta el ensamblaje final, cada etapa
                    está optimizada para producir tarimas que superan los estándares de la industria
                    en durabilidad, seguridad y eficiencia operativa.
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

                <h4 className="mt-35">Aplicaciones Ideales</h4>
                <p className="blog-text mb-30">
                    Nuestras tarimas híbridas son perfectas para industrias que requieren máxima higiene
                    como alimentaria y farmacéutica, así como para operaciones en ambientes húmedos o
                    refrigerados. También son ideales para cadenas de suministro internacionales donde
                    la durabilidad y el cumplimiento de normativas fitosanitarias son críticos.
                </p>
            </div>
        </div>
    );
};

export default ProductContent;