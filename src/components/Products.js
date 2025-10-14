import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Products = () => {
    const products = [
        {
            image: "/assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 1",
            title: "Tarimas Nuevas"
        },
        {
            image: "/assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 2",
            title: "Tarimas a la medida"
        },
        {
            image: "/assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 3",
            title: "Tarimas Reacondicionadas"
        },
        {
            image: "/assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 4",
            title: "Tarimas Hibridas"
        },
        {
            image: "/assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 5",
            title: "Tarimas Exportación"
        },
        {
            image: "/assets/img/project/project_3_1.jpeg",
            subtitle: "Producto 6",
            title: "Tarimas Especiales"
        }
    ];

    const handleProductClick = (e, productTitle) => {
        e.preventDefault();
        console.log(`Navegando a: ${productTitle}`);
    };

    const handlePopupImage = (e, imageUrl) => {
        e.preventDefault();
        console.log(`Abrir popup de imagen: ${imageUrl}`);
        // Aquí puedes implementar un modal para la imagen
    };

    const handleViewMore = (e) => {
        e.preventDefault();
        console.log('Ver más información');
    };

    return (
        <div className="overflow-hidden space" id="project-sec">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title sub-title2">Tipos de tarimas</span>
                    <h2 className="sec-title">Tipo de tarimas que fabricamos</h2>
                </div>
            </div>

            <div className="slider-area">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.products-next',
                        prevEl: '.products-prev',
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            centeredSlides: true
                        },
                        767: {
                            slidesPerView: 2,
                            centeredSlides: true
                        },
                        992: {
                            slidesPerView: 2,
                            centeredSlides: true
                        },
                        1200: {
                            slidesPerView: 3,
                            centeredSlides: true
                        },
                        1400: {
                            slidesPerView: 5,
                            centeredSlides: true
                        },
                    }}
                    className="th-slider projectSlider4 has-shadow"
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="project-item2">
                                <div className="box-img">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        onError={(e) => {
                                            e.target.src = "/assets/img/project/project_3_1.jpeg";
                                        }}
                                    />
                                </div>
                                <div className="box-content">
                                    <p className="box-subtitle">{product.subtitle}</p>
                                    <h3 className="box-title">
                                        <a
                                            href="#project-details"
                                            onClick={(e) => handleProductClick(e, product.title)}
                                        >
                                            {product.title}
                                        </a>
                                    </h3>
                                </div>
                                <div className="box-btn">
                                    <a
                                        href={product.image}
                                        className="icon-btn popup-image"
                                        onClick={(e) => handlePopupImage(e, product.image)}
                                    >
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Botones de navegación */}
                <button className="slider-arrow slider-prev products-prev">
                    <i className="far fa-arrow-left"></i>
                </button>
                <button className="slider-arrow slider-next products-next">
                    <i className="far fa-arrow-right"></i>
                </button>
            </div>

            {/* Botón ver más información */}
            <div className="sec-shape2 text-center mt-3">
                <a
                    href="#project-details"
                    className="line-btn style-radius"
                    onClick={handleViewMore}
                >
                    Ver más información
                    <i className="fa-regular fa-arrow-right ms-2"></i>
                </a>
            </div>
        </div>
    );
};

export default Products;