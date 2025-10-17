import React from 'react';
import { Link } from 'react-router-dom';
const AboutContent = () => {
    return (
        <div className="about-area overflow-hidden space" id="about-sec">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-7 mb-30 mb-xl-0">
                        <div className="img-box3">
                            <div className="img1">
                                <img src="assets/img/normal/about-cover.jpg" alt="About" />
                            </div>
                            <div className="img2">
                                <img src="assets/img/normal/about-cover-2.jpg" alt="About" />
                            </div>
                            <div className="about-wrapp">
                                <div className="discount-wrapp style2">
                                    <h2 className="box-counter"><span className="counter-number">10</span></h2>
                                    <div className="discount-tag">
                                        {/*<span className="discount-anime">solak-solak enargy since in 1996</span>*/}
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
                                <span className="sub-title">RETRAMA - Tarimas de Madera</span>
                                <h2 className="sec-title">Líderes en Fabricación de <br></br> Tarimas de Madera de Calidad.</h2>
                            </div>
                            <p className="mb-25">
                                En RETRAMA nos especializamos en la fabricación y comercialización de tarimas de madera de la más alta calidad.
                                Utilizamos maderas seleccionadas como pino y ocote, sometidas a tratamientos especiales que garantizan durabilidad,
                                resistencia y cumplimiento con las normas internacionales para diversos sectores industriales.
                            </p>
                            <div className="checklist list-two-column mb-20">
                                <ul>
                                    <li><i className="fa-sharp fa-solid fa-badge-check"></i>Materiales de Primera Calidad</li>
                                    <li><i className="fa-sharp fa-solid fa-badge-check"></i>Tratamientos Especializados</li>
                                    <li><i className="fa-sharp fa-solid fa-badge-check"></i>Medidas Estándar y Personalizadas</li>
                                    <li><i className="fa-sharp fa-solid fa-badge-check"></i>Certificaciones Internacionales</li>
                                </ul>
                            </div>
                            <div className="about-profile">
                                <div className="signature">
                                    <img src="assets/img/normal/signature.svg" alt="signature" />
                                </div>
                                <h3 className="box-title">Gerente General</h3>
                                <p className="box-text">Director de RETRAMA</p>
                            </div>
                            <div className="btn-group mt-30 justify-content-center">
                                <Link to="/contacto" className="th-btn black-btn th-icon">
                                    <span className="btn-text" data-back="Hablanos" data-front="Hablanos"></span>
                                    <i className="fa-regular fa-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;