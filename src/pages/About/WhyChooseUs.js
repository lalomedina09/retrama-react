import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: "assets/img/icon/about_3_1.svg",
            title: "Expertos en Tarimas de Madera",
            description: "Contamos con años de experiencia especializada en la fabricación de tarimas de madera. Nuestro equipo técnico domina todos los procesos desde la selección de maderas hasta los tratamientos especializados para cada industria."
        },
        {
            icon: "assets/img/icon/about_3_2.svg",
            title: "Soporte al Cliente Personalizado",
            description: "Ofrecemos atención personalizada y seguimiento continuo a cada proyecto. Nuestros asesores están disponibles para garantizar que sus tarimas cumplan exactamente con sus requerimientos operativos y logísticos."
        }
    ];

    const stats = [
        {
            image: "assets/img/normal/choose_2_1.jpg",
            number: "15,000",
            text: "Hemos fabricado más de 15,000+ tarimas para clientes satisfechos"
        },
        {
            image: "assets/img/normal/choose_2_2.jpg",
            number: "500",
            text: "Empresas confían en nuestra calidad y servicio para sus operaciones"
        }
    ];

    return (
        <div className="bg-title overflow-hidden" data-bg-src="assets/img/bg/choose_bg_3.png">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="space-extra">
                            <div className="title-area mb-30">
                                <span className="sub-title">¿Por Qué Elegirnos?</span>
                                <h2 className="sec-title sec-title2 text-white">Tarimas de Madera: Duraderas, Económicas y Confiables</h2>
                                <p className="sec-desc2">
                                    En RETRAMA nos especializamos en la fabricación de tarimas de madera que combinan durabilidad,
                                    resistencia y costo-beneficio ideal. Utilizamos maderas de primera calidad y procesos certificados
                                    que garantizan productos confiables para cualquier necesidad logística e industrial.
                                </p>
                            </div>
                            <div className="choose-feature2-wrap">
                                {features.map((feature, index) => (
                                    <div className="choose-feature2" key={index}>
                                        <div className="box-icon">
                                            <img src={feature.icon} alt="Icon" />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="box-title">{feature.title}</h3>
                                            <p className="box-text">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="choose-wrapper2">
                            {stats.map((stat, index) => (
                                <div className="choose-item2" key={index}>
                                    <div className="choose-img">
                                        <img src={stat.image} alt="" />
                                    </div>
                                    <div className="choose-content">
                                        <h3 className="box-number"><span className="counter-number">{stat.number}</span>+</h3>
                                        <p className="box-text">{stat.text}</p>
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

export default WhyChooseUs;