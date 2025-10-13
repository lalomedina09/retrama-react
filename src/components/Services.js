import React from 'react';

const Services = () => {
    const services = [
        {
            icon: "assets/img/icon/service_1_1.svg",
            title: "Compra de tarimas usadas",
            text: "Wind energy is a clean, inexhaustible resource that harnesses natural the wind power."
        },
        {
            icon: "assets/img/icon/service_1_2.svg",
            title: "Reparacion de tarimas",
            text: "Harnessing the Winds: The Power and Potential of Wind energy is indeed Wind Energy"
        },
        {
            icon: "assets/img/icon/service_1_3.svg",
            title: "Cumplimiento con la norma 144",
            text: "Wind Energy A Clean and Inexhaustible Resource crucial the Harnessing Natural Power"
        },
        {
            icon: "assets/img/icon/service_1_4.svg",
            title: "Tarimas hibridas",
            text: "Wind Energy A Clean and Resource sustainable energ solution emissions the Natural Power"
        }
    ];

    return (
        <section className="overflow-hidden space-top">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-6">
                        <div className="title-area text-center pe-xl-3 ps-xl-3">
                            <span className="sub-title sub-title3">Nuestras Soluciones</span>
                            <h2 className="sec-title">Como plus a nuestra calidad y servicio, te ofrecemos</h2>
                        </div>
                    </div>
                </div>
                <div className="slider-area">
                    <div className="swiper th-slider has-shadow" id="serviceSlide3">
                        <div className="swiper-wrapper">
                            {services.map((service, index) => (
                                <div key={index} className="swiper-slide">
                                    <div className="service-box style2">
                                        <div className="box-content">
                                            <div className="box-icon">
                                                <img src={service.icon} alt="Icon" />
                                            </div>
                                            <h3 className="box-title">
                                                <a href="#service-details">{service.title}</a>
                                            </h3>
                                            <p className="box-text">{service.text}</p>
                                            <a href="#service" className="th-btn border-btn th-radius th-icon fw-semibold">
                                                <span className="btn-text" data-back="Read More" data-front="Read More"></span>
                                                <i className="fa-regular fa-arrow-right ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;