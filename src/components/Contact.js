import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
    };

    return (
        <div className="consultation-sec pt-60 pb-60 bg-theme overflow-hidden" style={{ backgroundColor: '#57b33e' }}>
            <div className="container">
                <div className="row gy-4 align-items-center justify-content-between">
                    <div className="col-xxl-4 col-xl-5 mb-3 mb-lg-0">
                        <div className="title-area text-center mb-0 text-xl-start">
                            <span className="sub-title style1 text-white">Contáctanos</span>
                            <h2 className="sec-title text-white mb-0">
                                Solicita una cotización sin compromiso.
                            </h2>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-7">
                        <div className="consultation-area">
                            <form onSubmit={handleSubmit} className="consultation-form">
                                <div className="row gy-4 justify-content-end">
                                    <div className="col-md-4 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Tu nombre"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Correo"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row gy-4 justify-content-end mt-3">
                                    <div className="col-md-4 form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Teléfono"
                                            className="form-control"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 form-group">
                                        <input
                                            type="text"
                                            name="message"
                                            placeholder="Mensaje"
                                            className="form-control"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3 form-group mb-0">
                                        <button type="submit" className="th-btn black-btn2 th-radius th-icon fw-btn">
                                            <span className="btn-text" data-back="Enviar" data-front="Enviar"></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;