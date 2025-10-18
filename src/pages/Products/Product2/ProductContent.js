import React from 'react';

const ProductContent = () => {
    const serviceProcess = [
        {
            icon: "assets/img/icon/process_2_1.svg",
            title: "Análisis de Requerimientos",
            description: "Evaluamos sus necesidades específicas: tipo de productos, peso, medidas de almacenamiento, condiciones de uso y requerimientos de manipulación para diseñar la tarima ideal."
        },
        {
            icon: "assets/img/icon/process_2_2.svg",
            title: "Diseño Personalizado",
            description: "Desarrollamos planos y especificaciones técnicas adaptadas a sus operaciones. Consideramos tipo de madera, refuerzos necesarios, tratamientos especiales y medidas exactas."
        },
        {
            icon: "assets/img/icon/process_2_3.svg",
            title: "Fabricación y Entrega",
            description: "Fabricamos sus tarimas con los más altos estándares de calidad y coordinamos la logística de entrega para garantizar que reciba sus tarimas en tiempo y forma."
        }
    ];

    return (
        <div className="page-single">
            <div className="page-img global-img mb-35">
                <img src="assets/img/service/service_details.jpg" alt="Fabricación de Tarimas a Medida" />
            </div>
            <div className="page-content">
                <h2 className="h2 page-title mb-20">Tarimas de Madera a la Medida</h2>
                <p className="blog-text">
                    En RETRAMA entendemos que cada cliente tiene necesidades únicas de almacenamiento y logística.
                    Especializamos en la fabricación de tarimas de madera personalizadas diseñadas específicamente
                    para sus requerimientos operativos. Ya sea que necesite tarimas para productos de dimensiones
                    especiales, cargas pesadas, condiciones específicas de almacenamiento o industrias reguladas,
                    tenemos la solución perfecta para usted.
                </p>
                <p className="blog-text mb-30">
                    Nuestro equipo de expertos trabaja directamente con usted para comprender sus procesos,
                    equipos de manejo (montacargas, patines hidráulicos) y condiciones de almacenamiento.
                    Desarrollamos tarimas que no solo se adaptan a sus productos, sino que también optimizan
                    su espacio de almacenamiento, mejoran la eficiencia en la manipulación y garantizan la
                    seguridad de sus mercancías durante el transporte y almacenamiento.
                </p>

                <h4 className="mt-35">Ventajas de las Tarimas a Medida</h4>
                <p className="blog-text mb-30">
                    Las tarimas personalizadas ofrecen beneficios significativos: maximizan el espacio en sus
                    almacenes, se adaptan perfectamente a sus productos reduciendo daños, optimizan los procesos
                    de carga y descarga, y pueden diseñarse con características especiales como resistencias
                    específicas, tratamientos para exportación, o adaptaciones para automatización. Invertir en
                    tarimas a medida significa eficiencia, seguridad y durabilidad a largo plazo.
                </p>

                <div className="row gy-4 gx-40">
                    <div className="col-xl-4">
                        <div className="checklist style6">
                            <ul>
                                <li>Diseño 100% Personalizado</li>
                                <li>Optimización de Espacios</li>
                                <li>Mayor Seguridad en Carga</li>
                                <li>Reducción de Daños</li>
                                <li>Adaptación a Equipos de Manejo</li>
                                <li>Materiales Específicos por Necesidad</li>
                                <li>Tratamientos Especializados</li>
                                <li>Asesoría Técnica Especializada</li>
                                <li>Cumplimiento de Normativas</li>
                                <li>Entrega en Tiempo Record</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/service_inner_1.jpg" alt="Tarimas Personalizadas" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="page-img style1 global-img">
                                    <img className="w-100" src="assets/img/service/service_inner_2.jpg" alt="Proceso de Diseño" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mt-20">Nuestro Proceso de Personalización</h4>
                <p className="blog-text mb-35">
                    Desarrollamos cada proyecto de tarimas personalizadas mediante un proceso colaborativo.
                    Comenzamos con una consulta detallada para entender sus desafíos específicos, luego
                    presentamos propuestas de diseño con renderizados en 3D, fabricamos prototipos cuando
                    es necesario, y finalmente producimos su pedido con control de calidad en cada etapa.
                    Nuestro objetivo es entregarle tarimas que no solo cumplan, sino que superen sus expectativas.
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

                <div className="cta-box bg-smoke mt-50 p-4 rounded">
                    <h4 className="mb-3">¿Necesita Tarimas Especiales?</h4>
                    <p className="mb-4">Nuestros expertos están listos para analizar sus requerimientos y desarrollar la solución perfecta para su operación.</p>
                    <a href="contacto.html" className="th-btn">Solicitar Cotización Personalizada</a>
                </div>
            </div>
        </div>
    );
};

export default ProductContent;