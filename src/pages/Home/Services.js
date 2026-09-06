// src/components/Services.js - Para Swiper 8.x
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

// Importar estilos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Services = () => {
    const services = [
        {
            id: 1,
            iconClass: "fa-solid fa-pallet-boxes",
            title: "Compra de tarimas usadas",
            text: "Adquirimos sus tarimas usadas en buen estado, ofreciendo un valor justo y contribuyendo al ciclo de reutilización."
        },
        {
            id: 2,
            iconClass: "fa-solid fa-hammer",
            title: "Reparacion de tarimas",
            text: "Restauramos tarimas dañadas para extender su vida útil, manteniendo los más altos estándares de calidad y seguridad."
        },
        {
            id: 3,
            iconClass: "fa-solid fa-badge-check",
            title: "Cumplimiento con la norma 144",
            text: "Garantizamos que todas nuestras tarimas cumplen con la normativa NMX-144 para exportación y uso internacional."
        },
        {
            id: 4,
            iconClass: "fa-solid fa-recycle",
            title: "Tarimas hibridas",
            text: "Combinamos madera recuperada con materiales nuevos para crear tarimas económicas y ambientalmente responsables."
        },
        {
            id: 5,
            iconClass: "fa-solid fa-ruler-combined",
            title: "Tarimas a la medida",
            text: "Diseñamos y fabricamos tarimas personalizadas según sus especificaciones técnicas y requerimientos de carga."
        },
        {
            id: 6,
            iconClass: "fa-solid fa-truck-ramp-box",
            title: "Asesoría técnica",
            text: "Brindamos consultoría especializada para optimizar sus procesos de embalaje, almacenamiento y transporte."
        }
    ];

    return (
        <section className="overflow-hidden space-top space-bottom" id="services-section">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-6">
                        <div className="title-area text-center pe-xl-3 ps-xl-3">
                            <span className="sub-title sub-title3">Nuestras soluciones</span>
                            <h2 className="sec-title">
                                Como plus a nuestra calidad y servicio, te ofrecemos
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="slider-area">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                            1400: { slidesPerView: 4 },
                        }}
                        className="th-slider has-shadow"
                    >
                        {services.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="service-box style2">
                                    <div className="box-content">
                                        <div className="box-icon">
                                            <i className={service.iconClass} aria-hidden="true"></i>
                                        </div>
                                        <h3 className="box-title">{service.title}</h3>
                                        <p className="box-text">{service.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Services;    
