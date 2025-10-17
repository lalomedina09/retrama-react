import React from 'react';
import { Link } from 'react-router-dom';
const FAQContent = () => {
    const faqItems = [
        {
            id: "collapse-1",
            itemId: "collapse-item-1",
            question: "¿Qué tipos de madera utilizan para fabricar las tarimas?",
            answer: "Utilizamos principalmente pino y ocote, maderas reconocidas por su resistencia, durabilidad y propiedades ideales para la fabricación de tarimas. Estas maderas son tratadas para garantizar máxima calidad y larga vida útil.",
            active: true
        },
        {
            id: "collapse-2",
            itemId: "collapse-item-2",
            question: "¿Qué medidas estándar manejan en sus tarimas?",
            answer: "Manejamos medidas estándar como 1.20m x 1.00m, 1.20m x 1.20m y 1.00m x 1.00m. Sin embargo, podemos fabricar tarimas con medidas especiales según sus necesidades específicas.",
            active: false
        },
        {
            id: "collapse-3",
            itemId: "collapse-item-3",
            question: "¿Realizan tratamientos especiales a la madera?",
            answer: "Sí, ofrecemos tratamientos térmicos y de fumigación según los requerimientos internacionales para exportación. Estos tratamientos garantizan que la madera esté libre de plagas y cumpla con las normas fitosanitarias.",
            active: false
        },
        {
            id: "collapse-4",
            itemId: "collapse-item-4",
            question: "¿Cuál es la capacidad de carga promedio de sus tarimas?",
            answer: "Nuestras tarimas estándar tienen una capacidad de carga que varía entre 1,000 y 2,500 kg, dependiendo del diseño, tipo de madera y especificaciones requeridas.",
            active: false
        },
        {
            id: "collapse-5",
            itemId: "collapse-item-5",
            question: "¿Ofrecen servicio de entrega?",
            answer: "Sí, contamos con servicio de entrega en toda la República Mexicana. El costo y tiempo de entrega varían según la ubicación y el volumen del pedido.",
            active: false
        },
        {
            id: "collapse-6",
            itemId: "collapse-item-6",
            question: "¿Cuál es el tiempo de entrega aproximado?",
            answer: "Para pedidos estándar, el tiempo de entrega es de 3 a 5 días hábiles. Para pedidos personalizados o grandes volúmenes, el tiempo puede extenderse según la complejidad.",
            active: false
        },
        {
            id: "collapse-7",
            itemId: "collapse-item-7",
            question: "¿Manejan tarimas para uso alimenticio?",
            answer: "Sí, fabricamos tarimas especiales para la industria alimenticia, utilizando tratamientos y acabados que cumplen con las normas de seguridad e higiene requeridas.",
            active: false
        },
        {
            id: "collapse-8",
            itemId: "collapse-item-8",
            question: "¿Qué tipos de tarimas manejan?",
            answer: "Fabricamos tarimas cerradas, abiertas, de doble entrada, de cuatro entradas, tarimas display, tarimas europeas y tarimas especiales según las necesidades del cliente.",
            active: false
        },
        {
            id: "collapse-9",
            itemId: "collapse-item-9",
            question: "¿Las tarimas incluyen el costo de clavado y armado?",
            answer: "Sí, todas nuestras tarimas incluyen el clavado y armado completo. No hay costos adicionales por este concepto.",
            active: false
        },
        {
            id: "collapse-10",
            itemId: "collapse-item-10",
            question: "¿Pueden fabricar tarimas con medidas especiales?",
            answer: "Absolutamente. Contamos con servicio de fabricación de tarimas a medida según las especificaciones y requerimientos particulares de cada cliente.",
            active: false
        },
        {
            id: "collapse-11",
            itemId: "collapse-item-11",
            question: "¿Qué garantía ofrecen en sus productos?",
            answer: "Ofrecemos garantía en la fabricación y materiales. La duración de la garantía varía según el tipo de tarima y las condiciones de uso.",
            active: false
        },
        {
            id: "collapse-12",
            itemId: "collapse-item-12",
            question: "¿Manejan tarimas usadas o solo nuevas?",
            answer: "Nos especializamos en la fabricación y venta de tarimas nuevas. Sin embargo, podemos asesorarle sobre el mejor tipo de tarima según su presupuesto y necesidades.",
            active: false
        },
        {
            id: "collapse-13",
            itemId: "collapse-item-13",
            question: "¿Cuál es el precio de una tarima estándar?",
            answer: "El precio varía según el tipo de madera, medidas, diseño y cantidad. Contáctenos para proporcionarle un cotización precisa según sus requerimientos.",
            active: false
        },
        {
            id: "collapse-14",
            itemId: "collapse-item-14",
            question: "¿Ofrecen descuentos por volumen?",
            answer: "Sí, ofrecemos descuentos progresivos según el volumen de compra. A mayor cantidad, mejor precio.",
            active: false
        },
        {
            id: "collapse-15",
            itemId: "collapse-item-15",
            question: "¿Qué normas de calidad cumplen sus tarimas?",
            answer: "Nuestras tarimas cumplen con las normas NMX-2015 y los estándares internacionales para tarimas de madera, incluyendo los tratamientos fitosanitarios requeridos.",
            active: false
        },
        {
            id: "collapse-16",
            itemId: "collapse-item-16",
            question: "¿Pueden fabricar tarimas para exportación?",
            answer: "Sí, fabricamos tarimas con todos los tratamientos y certificaciones necesarias para exportación, incluyendo el marcado según normas internacionales.",
            active: false
        },
        {
            id: "collapse-17",
            itemId: "collapse-item-17",
            question: "¿Qué tipo de mantenimiento requieren las tarimas de madera?",
            answer: "Las tarimas de madera requieren un mantenimiento mínimo. Se recomienda almacenarlas en lugares cubiertos y secos, y revisarlas periódicamente para detectar cualquier daño.",
            active: false
        },
        {
            id: "collapse-18",
            itemId: "collapse-item-18",
            question: "¿Manejan tarimas plásticas o solo de madera?",
            answer: "Nos especializamos exclusivamente en tarimas de madera, aprovechando nuestra experiencia y los beneficios naturales de este material.",
            active: false
        },
        {
            id: "collapse-19",
            itemId: "collapse-item-19",
            question: "¿Cuál es la vida útil promedio de una tarima de madera?",
            answer: "La vida útil varía según el uso y condiciones de almacenamiento, pero en promedio nuestras tarimas tienen una vida útil de 3 a 7 años con uso normal.",
            active: false
        },
        {
            id: "collapse-20",
            itemId: "collapse-item-20",
            question: "¿Pueden personalizar las tarimas con logotipos o marcas?",
            answer: "Sí, ofrecemos servicio de marcado y personalización con logotipos, códigos o cualquier identificación que requiera para su control de inventario.",
            active: false
        },
        {
            id: "collapse-21",
            itemId: "collapse-item-21",
            question: "¿Qué grosor de madera utilizan en sus tarimas?",
            answer: "Utilizamos grosores que varían entre 15mm y 22mm, dependiendo del tipo de tarima y la capacidad de carga requerida.",
            active: false
        },
        {
            id: "collapse-22",
            itemId: "collapse-item-22",
            question: "¿Manejan tarimas para industrias específicas?",
            answer: "Sí, fabricamos tarimas especializadas para industrias como alimenticia, farmacéutica, automotriz, química y muchas más.",
            active: false
        },
        {
            id: "collapse-23",
            itemId: "collapse-item-23",
            question: "¿Qué métodos de pago aceptan?",
            answer: "Aceptamos transferencias bancarias, tarjetas de crédito/débito y efectivo. Para clientes corporativos manejamos condiciones especiales de pago.",
            active: false
        },
        {
            id: "collapse-24",
            itemId: "collapse-item-24",
            question: "¿Ofrecen servicio de reparación de tarimas?",
            answer: "Nuestro enfoque principal es la fabricación de tarimas nuevas, pero podemos asesorarle sobre el mantenimiento y reparación de sus tarimas existentes.",
            active: false
        },
        {
            id: "collapse-25",
            itemId: "collapse-item-25",
            question: "¿Cuál es su área de cobertura de entrega?",
            answer: "Entregamos en toda la República Mexicana, con cobertura nacional. Contamos con alianzas logísticas para garantizar entregas puntuales en todo el país.",
            active: false
        },
        {
            id: "collapse-26",
            itemId: "collapse-item-26",
            question: "¿Pueden fabricar tarimas resistentes a humedad o intemperie?",
            answer: "Sí, fabricamos tarimas con tratamientos especiales para resistir condiciones de humedad y intemperie, ideales para almacenamiento exterior o transporte marítimo.",
            active: false
        }
    ];

    return (
        <div className="overflow-hidden space" id="faq-sec">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="me-xl-5 pe-xl-3">
                            <span className="sub-title sub-title2">PREGUNTAS FRECUENTES</span>
                            <h2 className="sec-title">¿Tiene Alguna Pregunta sobre Nuestras Tarimas?</h2>
                            <p>
                                Encuentre respuestas a las dudas más comunes sobre nuestros productos de tarimas y estibas de madera. Desde tipos de madera y medidas estándar, hasta tratamientos especiales, capacidad de carga y opciones de entrega, aquí aclaramos todo lo que necesita saber para tomar la mejor decisión para su negocio.
                            </p>
                            <div className="text-center text-xl-center">
                                <Link to="/contact" className="th-btn th-icon">
                                    <span className="btn-text" data-back="Contactanos" data-front="Contactanos"></span>
                                    <i className="fa-regular fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 mt-35 mt-xl-0">
                        <div className="accordion-area accordion" id="faqAccordion">
                            {faqItems.map((faq, index) => (
                                <div className={`accordion-card style2 ${faq.active ? 'active' : ''}`} key={index}>
                                    <div className="accordion-header" id={faq.itemId}>
                                        <button
                                            className={`accordion-button ${faq.active ? '' : 'collapsed'}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${faq.id}`}
                                            aria-expanded={faq.active ? "true" : "false"}
                                            aria-controls={faq.id}
                                        >
                                            {faq.question}
                                        </button>
                                    </div>
                                    <div
                                        id={faq.id}
                                        className={`accordion-collapse collapse ${faq.active ? 'show' : ''}`}
                                        aria-labelledby={faq.itemId}
                                        data-bs-parent="#faqAccordion"
                                    >
                                        <div className="accordion-body text-start">
                                            <p className="faq-text">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQContent;