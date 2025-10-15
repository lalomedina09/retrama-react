import React from 'react';

const ContactBrands = () => {
    return (
        <div className="brand-sec overflow-hidden pt-60 pb-60">
            <div className="container th-container">
                <div className="slider-area text-center">
                    <div className="swiper th-slider" id="brandSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"476":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"6"}}}'>
                        <div className="swiper-wrapper">
                            {[...Array(12)].map((_, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="brand-item">
                                        <a href="/">
                                            <img className="original" src={`assets/img/brand/brand_1_${(index % 6) + 1}.svg`} alt="Brand Logo" />
                                            <img className="gray" src={`assets/img/brand/brand_1_${(index % 6) + 1}.svg`} alt="Brand Logo" />
                                        </a>
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

export default ContactBrands;