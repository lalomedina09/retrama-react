import React from 'react';

const Features = () => {

    const features = [
        {
            image: "assets/img/seccion-2/soluciones-a-medida.jpg", // SIN %PUBLIC_URL%
            fallback: "assets/img/normal/about_4_1.jpg", // SIN %PUBLIC_URL%
            title: "Soluciones a Medida",
            text: "Desarrollamos tarimas personalizadas según sus necesidades específicas de carga, dimensiones y sector industrial."
        },
        {
            image: "assets/img/seccion-2/sustentable.jpg", // SIN %PUBLIC_URL%
            fallback: "assets/img/service/service_2_1.jpg", // SIN %PUBLIC_URL%
            title: "Producción Sostenible",
            text: "Utilizamos madera de fuentes responsables y procesos optimizados para minimizar el impacto ambiental, sin comprometer la calidad."
        }
    ];

    const handleImageError = (e, fallbackImage) => {
        console.warn(`❌ Imagen no encontrada: ${e.target.src}`);
        console.log(`🔄 Usando fallback: ${fallbackImage}`);
        e.target.src = fallbackImage;
    };

    return (
        <>
            <div className="bg-smoke3 overflow-hidden pt-60 pb-60">
                <div className="container">
                    <div className="row gy-4 justify-content-center justify-content-lg-between">

                        {/* Soluciones a Medida */}
                        <div className="col-md-6 col-lg-4 col-xxl-5">
                            <div className="choose-feature">
                                <div className="box-img th-anim">
                                    <img
                                        src={features[0].image}
                                        alt="Soluciones a medida"
                                        onError={(e) => handleImageError(e, features[0].fallback)}
                                        style={{ width: '100%', height: 'auto' }} // Asegurar que se muestre
                                    />
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

                        {/* Clientes/Elementos */}
                        <div className="col-md-6 col-lg-4 col-xxl-2">
                            <div className="choose-feature style2">
                                <div className="client-box">
                                    <div className="client-thumb-group">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index} className="thumb">
                                                <img
                                                    src="assets/img/avatar/avatar.jpg"
                                                    alt="avatar"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <h4 className="box-counter"><span className="counter-number">100</span>+</h4>
                                    <span className="box-title">Elementos</span>
                                </div>
                            </div>
                        </div>

                        {/* Producción Sostenible */}
                        <div className="col-md-6 col-lg-4 col-xxl-5">
                            <div className="choose-feature">
                                <div className="box-img th-anim">
                                    <img
                                        src={features[1].image}
                                        alt="Producción sostenible"
                                        onError={(e) => handleImageError(e, features[1].fallback)}
                                        style={{ width: '100%', height: 'auto' }} // Asegurar que se muestre
                                    />
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