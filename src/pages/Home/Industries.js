import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Industries = () => {
    const industries = [
        {
            image: "/assets/img/service/service_2_1.jpg",
            title: "Alimenticia",
            text: "Tarimas sanitarias y embalajes especializados para el manejo seguro de productos alimenticios, cumpliendo con normativas de higiene."
        },
        {
            image: "/assets/img/industries/aeronatica.jpeg",
            title: "Aeronáutica",
            text: "Soluciones de empaque y embalaje para componentes aeronáuticos, garantizando protección máxima durante el transporte internacional."
        },
        {
            image: "/assets/img/industries/automotriz.jpg",
            title: "Automotriz",
            text: "Tarimas robustas para el transporte de autopartes y componentes automotrices, diseñadas para soportar cargas pesadas."
        },
        {
            image: "/assets/img/industries/construccion.jpg",
            title: "Construcción",
            text: "Embalajes resistentes para materiales de construcción, herramientas y equipos pesados del sector construcción."
        },
        {
            image: "/assets/img/industries/electronica.jpg",
            title: "Electrónica",
            text: "Tarimas y huacales especializados para la protección de equipos electrónicos sensibles durante el almacenamiento y transporte."
        },
        {
            image: "/assets/img/industries/energy.jpg",
            title: "Energía",
            text: "Soluciones de empaque para componentes de energía renovable, transformadores y equipos del sector energético."
        }
    ];

    return (
        <section
            className="z-index-common overflow-hidden space"
            id="service-sec"
            data-bg-src="/assets/img/bg/service_bg_2.png"
            style={{ backgroundImage: 'url(/assets/img/bg/service_bg_2.png)' }}
        >
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <div className="title-area text-center text-lg-start">
                            <span className="sub-title sub-title3">Tipo de industrias</span>
                            <h2 className="sec-title text-white">Soluciones para diversas industrias</h2>
                        </div>
                    </div>
                </div>

                <div className="slider-area slider-drag-wrap">
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
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            992: { slidesPerView: 2 },
                            1400: { slidesPerView: 3 },
                        }}
                        className="th-slider has-shadow"
                    >
                        {industries.map((industry, index) => (
                            <SwiperSlide key={index}>
                                <div className="service-grid">
                                    <div className="service-grid_content">
                                        <h3 className="box-title">{industry.title}</h3>
                                        <p className="box-text">{industry.text}</p>
                                    </div>
                                    <div className="box-img th-anim">
                                        <img
                                            src={industry.image}
                                            alt={industry.title}
                                            onError={(e) => {
                                                e.target.src = "/assets/img/service/service_2_1.jpg";
                                            }}
                                        />
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

export default Industries;
