import React from 'react';

const ContactForm = () => {
    return (
        <div className="space-bottom">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-7">
                        <form action="mail.php" method="POST" className="contact-form2 input-smoke ajax-contact">
                            <h3 className="h2 mt-n3 mb-25">Contáctanos</h3>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Tu Nombre" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Correo Electrónico" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="tel" className="form-control" name="number" id="number" placeholder="Teléfono" />
                                </div>
                                <div className="form-group col-md-6">
                                    <select name="subject" id="subject" className="form-select nice-select">
                                        <option value="" disabled selected hidden>Selecciona una opción</option>
                                        <option value="Web Design">Diseño Web</option>
                                        <option value="Web Development">Desarrollo Web</option>
                                        <option value="Engine Diagnostics">Diagnóstico de Motor</option>
                                        <option value="Digital Marketing">Marketing Digital</option>
                                    </select>
                                </div>
                                <div className="form-group col-12">
                                    <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder="Tu Mensaje"></textarea>
                                </div>
                                <div className="form-btn col-12">
                                    <button className="th-btn fw-btn">
                                        <span className="btn-text" data-back="Enviar Mensaje" data-front="Enviar Mensaje"></span>
                                    </button>
                                </div>
                            </div>
                            <p className="form-messages mb-0 mt-3"></p>
                        </form>
                    </div>
                    <div className="col-xl-5">
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sthemeholy!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                                allowFullScreen=""
                                loading="lazy"
                                title="Ubicación en Google Maps"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;