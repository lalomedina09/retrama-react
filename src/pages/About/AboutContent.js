import React from 'react';

const AboutContent = () => {
    return (
        <div className="about-area overflow-hidden space" id="about-sec">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-7 mb-30 mb-xl-0">
                        <div className="img-box3">
                            <div className="img1">
                                <img src="assets/img/normal/about_3_1.jpg" alt="About" />
                            </div>
                            <div className="img2">
                                <img src="assets/img/normal/about_3_2.jpg" alt="About" />
                            </div>
                            <div className="about-wrapp">
                                <div className="discount-wrapp style2">
                                    <h2 className="box-counter"><span className="counter-number">36</span></h2>
                                    <div className="discount-tag">
                                        <span className="discount-anime">solak-solak enargy since in 1996</span>
                                    </div>
                                </div>
                            </div>
                            <div className="about-shape">
                                <img src="assets/img/shape/shape-4.png" alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="ps-xxl-5 ms-xxl-5 me-xl-2">
                            <div className="title-area mb-40">
                                <span className="sub-title">Solak - Solar & Renewable Energy</span>
                                <h2 className="sec-title">We Strive to Lead the way in the Solar Energy.</h2>
                            </div>
                            <p className="mb-25">
                                Solar panels with PV cells convert sunlight directly into electricity. PV panels
                                are often installed on rooftops, in solar farms, and even in smaller portable chargers. When
                                sunlight hits the cells.
                            </p>
                            <div className="checklist list-two-column mb-20">
                                <ul>
                                    <li><i className="fa-sharp fa-solid fa-badge-check"></i>Clean and Renewable</li>
                                    <li><i className="fa-sharp fa-solid fa-badge-check"></i>Energy Independence</li>
                                    <li><i className="fa-sharp fa-solid fa-badge-check"></i>Low Maintenance</li>
                                    <li><i className="fa-sharp fa-solid fa-badge-check"></i>Solar Scalability</li>
                                </ul>
                            </div>
                            <div className="about-profile">
                                <div className="signature">
                                    <img src="assets/img/normal/signature.svg" alt="signature" />
                                </div>
                                <h3 className="box-title">Alines Jannie</h3>
                                <p className="box-text">Director of Renewable Group</p>
                            </div>
                            <div className="btn-group mt-30 justify-content-start">
                                <a href="contact.html" className="th-btn black-btn th-icon">
                                    <span className="btn-text" data-back="More About Us" data-front="More About Us"></span>
                                    <i className="fa-regular fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;