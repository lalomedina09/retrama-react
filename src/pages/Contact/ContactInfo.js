import React from 'react';

const ContactInfo = () => {
    return (
        <div className="space">
            <div className="container">
                <div className="title-area text-center">
                    <h2 className="sec-title">Nuestra Información de Contacto</h2>
                </div>
                <div className="row gy-4">
                    <div className="col-xl-4 col-md-6">
                        <div className="contact-media">
                            <div className="icon-btn">
                                <i className="fa-sharp fa-light fa-location-dot"></i>
                            </div>
                            <div className="media-body text-start">
                                <h5 className="box-title">Dirección</h5>
                                <p className="box-text">
                                    Triángulos 100, Arco Vial, 66000 Parque Industrial Cdad. Mitras, N.L.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="contact-media">
                            <div className="icon-btn">
                                <i className="fa-light fa-phone"></i>
                            </div>
                            <div className="media-body text-start">
                                <h5 className="box-title">Teléfono de Contacto</h5>
                                <p className="box-text">
                                    <a href="tel:+25862323258">Móvil: +52 1234 5678</a>
                                    <a href="mailto:hola@retrama.com.mx">Correo: hola@retrama.com.mx</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="contact-media">
                            <div className="icon-btn">
                                <i className="fa-light fa-clock"></i>
                            </div>
                            <div className="media-body text-start">
                                <h5 className="box-title">Horario de Atención</h5>
                                <p className="box-text">Lunes - Sábado: 9:00 - 18:00 Domingo: Cerrado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;