import React from 'react';
import IndustrieSidebar from './IndustrieSidebar';

const IndustrieContent = () => {
    const projectStats = [
        {
            number: "FDA",
            unit: "Cert",
            label: "Certificación Alimentaria"
        },
        {
            number: "HACCP",
            unit: "ISO 22000",
            label: "Sistema de Inocuidad"
        },
        {
            number: "1.5",
            unit: "Tons",
            label: "Capacidad de Carga"
        },
        {
            number: "100%",
            unit: "Lavable",
            label: "Higiene Total"
        }
    ];

    const benefits = [
        "Cumple normativas FDA y USDA",
        "Materiales aptos para contacto alimentario",
        "Resistente a humedad y lavados frecuentes",
        "Superficies no porosas y anti-bacteriales",
        "Libre de contaminación cruzada",
        "Estabilidad en cámaras frigoríficas",
        "Trazabilidad completa del producto",
        "Resistente a ácidos y grasas alimentarias",
        "Diseño para limpieza y sanitización rápida"
    ];

    const projectImages = [
        "assets/img/project/tarimas_alimenticia_1.jpg",
        "assets/img/project/tarimas_alimenticia_2.jpg",
        "assets/img/project/tarimas_alimenticia_3.jpg"
    ];

    return (
        <section className="space">
            <div className="container">
                <div className="page-img global-img mb-50">
                    <img src="assets/img/project/tarimas_industria_alimenticia.jpg" alt="Tarimas en Industria Alimenticia y Bebidas" />
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-lg-8">
                        <div className="page-single">
                            <div className="page-content">
                                <h2 className="page-title text-start">Tarimas Especializadas para la Industria Alimenticia y Bebidas</h2>
                                <p className="text-start">
                                    Diseñadas bajo los más estrictos estándares de higiene e inocuidad alimentaria,
                                    nuestras tarimas garantizan la protección integral de alimentos, bebidas e
                                    ingredientes en toda la cadena de suministro. Fabricadas con materiales certificados
                                    para contacto alimentario, previenen contaminación cruzada y mantienen la calidad
                                    de sus productos.
                                </p>
                                <p className="text-start">
                                    Cada tarima cumple con los requisitos HACCP, FDA y USDA para operaciones en
                                    plantas procesadoras, centros de distribución, supermercados y cámaras frigoríficas.
                                    Nuestros diseños incorporan características de drenaje, resistencia a lavados
                                    químicos y compatibilidad con sistemas de limpieza CIP.
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

                                <h4 className="mt-40 mb-20 text-start">Ingeniería para la Inocuidad Alimentaria</h4>
                                <p className="mb-10 text-start">
                                    Nuestro proceso de fabricación sigue los protocolos ISO 22000, incorporando
                                    controles de calidad específicos para la industria alimentaria. Utilizamos
                                    polímeros de grado alimenticio, aceros inoxidables y materiales compuestos
                                    que garantizan la resistencia necesaria para soportar productos perecederos,
                                    líquidos y alimentos procesados, manteniendo condiciones óptimas de higiene.
                                </p>

                                <p className="mb-40 text-start">
                                    Implementamos esquinas redondeadas y superficies lisas que evitan la acumulación
                                    de residuos y facilitan la limpieza profunda. Cada tarima incluye sistemas de
                                    identificación por colores según el tipo de producto y áreas de proceso,
                                    previniendo contaminación cruzada entre materias primas, productos en proceso
                                    y terminados.
                                </p>

                                <h4 className="mt-40 mb-20 text-start">Certificaciones y Cumplimiento Normativo</h4>
                                <p className="mb-10 text-start">
                                    Nuestras tarimas están certificadas bajo los estándares alimentarios más
                                    exigentes, incluyendo FDA (Food and Drug Administration) y USDA (United States
                                    Department of Agriculture). Cumplimos con las especificaciones GMP (Good
                                    Manufacturing Practices) y contamos con certificación BRCGS para empaque
                                    y embalaje alimentario.
                                </p>

                                <p className="mb-40 text-start">
                                    Todos nuestros materiales cuentan con certificados de aptitud para contacto
                                    alimentario y trazabilidad completa desde la materia prima hasta el producto
                                    final. Implementamos programas de limpieza y sanitización validados que
                                    garantizan la inocuidad en cada ciclo de uso y mantenemos registros detallados
                                    para auditorías de clientes y autoridades sanitarias.
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

                <h4 className="mt-40 mb-20 text-start">Características Técnicas para Entornos Alimentarios</h4>
                <p className="mb-40 text-start">
                    Diseñadas para soportar condiciones extremas de humedad, temperaturas de congelación
                    (-30°C) y procesos de lavado con químicos agresivos. Incorporamos sistemas de
                    identificación por código de barras y RFID para gestión automatizada de inventario
                    y trazabilidad de lotes. La estructura modular permite configuraciones personalizadas
                    para diferentes tipos de alimentos: cárnicos, lácteos, panificación, bebidas y
                    productos congelados, optimizando el espacio en almacenes y transporte refrigerado.
                </p>

                <h4 className="mt-40 mb-20 text-start">Aplicaciones en la Industria Alimenticia</h4>
                <p className="mb-40 text-start">
                    Especialmente diseñadas para el manejo de productos perecederos, ingredientes
                    sensibles, bebidas embotelladas y alimentos procesados. Compatibles con sistemas
                    de almacenamiento en cámaras frigoríficas, cuartos de maduración y líneas de
                    producción. Utilizadas por procesadores de alimentos, distribuidores mayoristas,
                    cadenas de retail y servicios de food service para garantizar la inocuidad y
                    calidad de los productos a lo largo de toda la cadena de frío y suministro.
                </p>

                <h4 className="mt-40 mb-20 text-start">Soluciones Específicas por Sector</h4>
                <p className="mb-20 text-start">
                    <strong>Cárnicos y Avícolas:</strong> Tarimas con resistencia a grasas animales y sistemas de drenaje para líquidos.
                </p>
                <p className="mb-20 text-start">
                    <strong>Lácteos y Bebidas:</strong> Diseños estables para botellas y envases, resistentes a impactos y vibraciones.
                </p>
                <p className="mb-20 text-start">
                    <strong>Panificación y Snacks:</strong> Superficies que previenen la absorción de olores y humedad.
                </p>
                <p className="mb-40 text-start">
                    <strong>Frutas y Verduras:</strong> Sistemas de ventilación para mantener frescura y prevenir maduración prematura.
                </p>

                <div className="row">
                    {projectImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="page-img global-img">
                                <img src={image} alt={`Aplicación tarimas alimenticias ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrieContent;