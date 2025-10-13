import React from 'react';

const About = () => {
    const stats = [
        { number: 25000, text: "Tarimas Producidas Anualmente", icon: "assets/img/icon/counter_2_1.svg" },
        { number: 38000, text: "Reciclado de Tarimas Anualmente", icon: "assets/img/icon/counter_2_2.svg" },
        { number: 1200, text: "Clientes Satisfechos", icon: "assets/img/icon/counter_2_3.svg" },
        { number: 1100, text: "Proyectos Completados", icon: "assets/img/icon/counter_2_4.svg" }
    ];

    return (
        <div className="position-relative overflow-hidden space" id="about-sec">
            <div className="container">
                <div className="row gy-4 justify-content-between">
                    <div className="col-xxl-7">
                        <div className="title-area mb-60 pe-xl-5 me-xl-4">
                            <span className="sub-title sub-title2">Acerca de Nosotros</span>
                            <h2 className="sec-title pe-xl-5 me-xl-5">
                                Producción de tarimas, embalajes y empaques de madera
                            </h2>
                        </div>
                        <div className="img-box7">
                            <div className="img1 th-anim">
                                <img src="assets/img/normal/about_4_1.jpg" alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-5">
                        <div className="ps-xl-4">
                            <p>
                                Somos especialistas en la fabricación de tarimas, embalajes y empaques industriales de madera,
                                diseñados para garantizar la integridad de sus productos en toda la cadena de suministro.
                                En RETRAMA, cada pieza cumple rigurosamente con la normativa nacional e internacional
                                (como NIMF-15 para exportación) y los más altos estándares de calidad.
                            </p>
                            <div className="counter-item-wrap ps-xl-4 mt-4">
                                {stats.map((stat, index) => (
                                    <div key={index} className="counter-item">
                                        <div className="box-icon">
                                            <img src={stat.icon} alt="" />
                                        </div>
                                        <h3 className="box-number">
                                            <span className="counter-number">{stat.number}</span>
                                            <span className="plus">+</span>
                                        </h3>
                                        <div className="media-body">
                                            <p className="counter-text mb-n1">{stat.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;