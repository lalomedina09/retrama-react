import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: "assets/img/icon/about_3_1.svg",
            title: "Professional Solar Expert",
            description: "Solar panels, also referred to as solar modules, are made up of multiple solar cells arranged in a grid. They are installed on rooftops, solar farms, and other suitable."
        },
        {
            icon: "assets/img/icon/about_3_2.svg",
            title: "24/7 Customer Support",
            description: "Solar panels, also referred to as solar modules, are made up of multiple solar cells arranged in a grid. They are installed on rooftops, solar farms, and other suitable."
        }
    ];

    const stats = [
        {
            image: "assets/img/normal/choose_2_1.jpg",
            number: "3,600",
            text: "We have over 3,600+ Happy Customers"
        },
        {
            image: "assets/img/normal/choose_2_2.jpg",
            number: "3,650",
            text: "Customers are served by the Solar Power Energy department"
        }
    ];

    return (
        <div className="bg-title overflow-hidden" data-bg-src="assets/img/bg/choose_bg_3.png">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="space-extra">
                            <div className="title-area mb-30">
                                <span className="sub-title">Why Choose Us</span>
                                <h2 className="sec-title sec-title2 text-white">Switch to Solar Sustainable, Affordable, & Reliable Energy</h2>
                                <p className="sec-desc2">
                                    Our advanced energy storage solutions allow you to store excess energy generated from
                                    renewable sources like solar and wind. This enables a constant, uninterrupted power supply,
                                    providing energy independence.
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