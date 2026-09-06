import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import { getWhatsAppUrl, QUOTE_WHATSAPP_MESSAGE } from '../constants/contact';
import './Products.css';

const productSections = [
    {
        id: 'tarimas-nuevas',
        title: 'Tarimas Nuevas',
        subtitle: 'Nos especializamos en la fabricación de tarimas nuevas de madera de la más alta calidad.',
        image: '/assets/img/project/project_3_1.jpeg',
        fallback: '/assets/img/service/service_details.jpg',
        imageAlt: 'Tarimas nuevas de madera RETRAMA',
        layout: 'image-left',
        paragraphs: [
            'Utilizamos maderas seleccionadas como pino y encino, sometidas a procesos de secado y tratamiento que garantizan durabilidad, resistencia y cumplimiento con las normas internacionales.',
            'Nuestras tarimas están diseñadas para satisfacer las necesidades de almacenamiento y logística de diversos sectores industriales.',
            'Ofrecemos soluciones completas desde el diseño hasta la entrega, incluyendo tratamientos térmicos y de fumigación para exportación. Cada tarima es fabricada con precisión para asegurar capacidad de carga óptima, estabilidad en el apilamiento y larga vida útil, incluso en las condiciones más demandantes de almacenamiento y transporte.'
        ]
    },
    {
        id: 'tarimas-reacondicionadas',
        title: 'Tarimas Re-acondicionadas',
        claim: 'Contribuimos al medio ambiente mediante la reutilización de madera, ahorrando hasta 40% vs. tarimas nuevas',
        image: '/assets/img/service/tarimas_reacondicionadas.jpg',
        fallback: '/assets/img/seccion-2/sustentable.jpeg',
        imageAlt: 'Tarimas de madera reacondicionadas RETRAMA',
        layout: 'image-right',
        paragraphs: [
            'Ofrecemos soluciones completas en tarimas de madera re-acondicionadas, desde la recolección de material usado hasta la entrega de productos restaurados.',
            'Nuestras tarimas son ideales para almacenamiento, transporte y distribución en diversos sectores industriales y comerciales. Cada tarima es tratada y reparada siguiendo estrictos protocolos de calidad que garantizan su resistencia, seguridad y larga vida útil.',
            'Contribuimos al medio ambiente mediante la reutilización de madera, reduciendo la tala de árboles y minimizando residuos. Nuestro proceso de re-acondicionamiento incluye inspección, reparación estructural, tratamiento contra plagas y refuerzo de componentes, asegurando productos confiables y económicos para su negocio.'
        ]
    },
    {
        id: 'tarimas-hibridas',
        title: 'Tarimas Híbridas',
        claim: 'La fuerza de lo nuevo, con la inteligencia de lo reutilizado.',
        image: '/assets/img/service/tarimas_hibridas.jpg',
        fallback: '/assets/img/seccion-2/soluciones-a-medida.jpeg',
        imageAlt: 'Tarimas híbridas de madera RETRAMA',
        layout: 'image-left',
        paragraphs: [
            'En Retrama sustituimos los cargadores por piezas nuevas, reforzando la estructura y prolongando la vida útil de tus tarimas. Así combinamos la resistencia de lo nuevo con el aprovechamiento responsable de materiales en buen estado.',
            'Las tarimas híbridas ofrecen mayor estabilidad y capacidad de carga, reducen costos operativos y contribuyen al cuidado ambiental.',
            'Con disponibilidad inmediata, cumplimiento de la norma NOM-144 y seguridad garantizada, son la solución inteligente para tu logística.'
        ]
    },
    {
        id: 'tarimas-medida',
        title: 'Tarimas a la Medida',
        image: '/assets/img/seccion-2/soluciones-a-medida.jpeg',
        fallback: '/assets/img/service/service_inner_1.jpg',
        imageAlt: 'Tarimas de madera a la medida RETRAMA',
        layout: 'image-right',
        paragraphs: [
            'En RETRAMA entendemos que cada cliente tiene necesidades únicas de almacenamiento y logística. Nos especializamos en la fabricación de tarimas de madera personalizadas diseñadas específicamente para sus requerimientos operativos.',
            'Ya sea que necesite tarimas para productos de dimensiones especiales, cargas pesadas, condiciones específicas de almacenamiento o industrias reguladas, tenemos la solución adecuada.',
            'Nuestro equipo trabaja directamente con el cliente para comprender sus procesos, equipos de manejo como montacargas y patines hidráulicos, y condiciones de almacenamiento.',
            'Desarrollamos tarimas que se adaptan a sus productos, optimizan su espacio de almacenamiento, mejoran la eficiencia en la manipulación y ayudan a garantizar la seguridad de sus mercancías durante el transporte y almacenamiento.'
        ]
    }
];

const Products = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Tarimas de madera | Retrama';
    }, []);

    useEffect(() => {
        if (!location.hash) {
            return undefined;
        }

        const targetId = location.hash.replace('#', '');
        const timeoutId = window.setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 150);

        return () => window.clearTimeout(timeoutId);
    }, [location.hash]);

    return (
        <>
            <Header />
            <main className="page-products-landing">
                <div
                    className="breadcumb-wrapper products-hero"
                    style={{
                        position: 'relative',
                        backgroundImage: "url('/assets/img/bg/breadcumb-bg.jpg')"
                    }}
                >
                    <div className="overlay-grey" />
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="breadcumb-content">
                            <span className="products-hero__eyebrow">NUESTROS PRODUCTOS</span>
                            <h1 className="breadcumb-title">Madera que mueve industrias</h1>
                            <ul className="breadcumb-menu">
                                <li><Link to="/">Inicio</Link></li>
                                <li>Productos</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="products-intro">
                    <div className="container">
                        <div className="products-intro__content text-center">
                            <h2 className="products-intro__title">
                                Retrama: el socio estratégico que tu logística necesita.
                            </h2>
                            <p className="products-intro__text">
                                Ofrecemos soluciones integrales para la transportación de productos con tarimas nuevas, recicladas e híbridas, diseñadas a la medida y con la capacidad de carga que cada negocio necesita. Complementamos nuestra producción con servicios de valor agregado como tratamiento térmico NOM-144 para exportación, stock y entregas programadas, reparación, clasificación de material de primera y entregas simultáneas en distintas plantas. Con atención inmediata en órdenes urgentes y personal especializado en inspección de calidad, garantizamos seguridad, durabilidad y eficiencia logística en cada tarima.
                            </p>
                        </div>
                    </div>
                </section>

                {productSections.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className={`product-block product-block--${section.layout}`}
                    >
                        <div className="container">
                            <article className="product-block__grid">
                                {section.image ? (
                                    <div className="product-block__media">
                                        <img
                                            src={section.image}
                                            alt={section.imageAlt}
                                            onError={(event) => {
                                                event.target.src = section.fallback;
                                            }}
                                        />
                                    </div>
                                ) : null}
                                <div className="product-block__content">
                                    <h2 className="product-block__title">{section.title}</h2>
                                    {section.subtitle ? (
                                        <p className="product-block__subtitle">{section.subtitle}</p>
                                    ) : null}
                                    {section.claim ? (
                                        <p className="product-block__claim">{section.claim}</p>
                                    ) : null}
                                    <div className="product-block__text">
                                        {section.paragraphs.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                ))}

                <section className="products-quality-claim">
                    <div className="container">
                        <p>En Retrama aseguramos entregas puntuales y tarimas de calidad.</p>
                    </div>
                </section>

                <section className="products-cta">
                    <div className="container text-center">
                        <h2 className="sec-title text-white mb-3">¿Listo para cotizar tus tarimas?</h2>
                        <p className="text-white mb-4">
                            Cuéntanos tu necesidad y te ayudamos a elegir la mejor solución para tu operación.
                        </p>
                        <div className="products-cta__actions">
                            <Link to="/contacto#formulario" className="th-btn style1 th-radius th-icon">
                                <span className="btn-text">Solicita tu cotización</span>
                                <i className="fa-regular fa-arrow-right ms-2" aria-hidden="true"></i>
                            </Link>
                            <a
                                href={getWhatsAppUrl(QUOTE_WHATSAPP_MESSAGE)}
                                className="th-btn black-btn2 th-radius"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contactar por WhatsApp"
                            >
                                WhatsApp
                                <i className="fab fa-whatsapp ms-2" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Products;
