import React from 'react';

const Features = () => {
    // CORRECTO: process.env.PUBLIC_URL ya incluye la URL base cuando es necesario
    const basePath = process.env.PUBLIC_URL || '';

    const features = [
        {
            image: `${basePath}/assets/img/seccion-2/soluciones-a-medida.jpg`,
            fallback: `${basePath}/assets/img/normal/about_4_1.jpg`,
            title: "Soluciones a Medida",
            text: "Desarrollamos tarimas personalizadas según sus necesidades específicas de carga, dimensiones y sector industrial."
        },
        {
            image: `${basePath}/assets/img/seccion-2/sustentable.jpg`,
            fallback: `${basePath}/assets/img/service/service_2_1.jpg`,
            title: "Producción Sostenible",
            text: "Utilizamos madera de fuentes responsables y procesos optimizados para minimizar el impacto ambiental, sin comprometer la calidad."
        }
    ];

    const handleImageError = (e, fallbackImage) => {
        console.warn(`❌ Imagen no encontrada: ${e.target.src}`);
        console.log(`🔄 Usando fallback: ${fallbackImage}`);
        e.target.src = fallbackImage;
    };

    // Función para debug
    const debugImage = (src, alt) => {
        console.log(`🖼 Intentando cargar: ${src}`);
        return (
            <img
                src={src}
                alt={alt}
                onError={(e) => handleImageError(e, `${basePath}/assets/img/avatar/avatar.jpg`)}
                className="img-fluid"
                onLoad={() => console.log(`✅ Imagen cargada: ${src}`)}
            />
        );
    };

    return (
        <>
            <div className="bg-smoke3 overflow-hidden pt-60 pb-60">
                <div className="container">
                    <div className="row gy-4 justify-content-center justify-content-lg-between">

                        {/* Soluciones a Medida - Columna izquierda */}
                        <div className="col-md-6 col-lg-4 col-xxl-5">
                            <div className="choose-feature">
                                <div className="box-img th-anim">
                                    {debugImage(features[0].image, "Soluciones a medida")}
                                </div>
                                <div className="box-content">
                                    <h3 className="box-title">
                                        Soluciones <br /> a Medida
                                    </h3>
                                    <p className="box-text">
                                        {features[0].text}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Clientes/Elementos - Columna central */}
                        <div className="col-md-6 col-lg-4 col-xxl-2">
                            <div className="choose-feature style2">
                                <div className="client-box">
                                    <div className="client-thumb-group">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index} className="thumb">
                                                <img
                                                    src={`${basePath}/assets/img/avatar/avatar.jpg`}
                                                    alt={`Cliente ${index + 1}`}
                                                    className="img-fluid"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <h4 className="box-counter">
                                        <span className="counter-number">100</span>+
                                    </h4>
                                    <span className="box-title">Elementos</span>
                                </div>
                            </div>
                        </div>

                        {/* Producción Sostenible - Columna derecha */}
                        <div className="col-md-6 col-lg-4 col-xxl-5">
                            <div className="choose-feature">
                                <div className="box-img th-anim">
                                    {debugImage(features[1].image, "Producción sostenible")}
                                </div>
                                <div className="box-content">
                                    <h3 className="box-title">
                                        Producción <br /> Sostenible
                                    </h3>
                                    <p className="box-text">
                                        {features[1].text}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;