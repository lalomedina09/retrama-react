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
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Tu Nombre Completo" />
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
                                        <option value="Cotización de Tarimas Estándar">Cotización de Tarimas Estándar</option>
                                        <option value="Cotización de Tarimas Personalizadas">Cotización de Tarimas Personalizadas</option>
                                        <option value="Tarimas para Exportación">Tarimas para Exportación</option>
                                        <option value="Tarimas para Industria Alimenticia">Tarimas para Industria Alimenticia</option>
                                        <option value="Tarimas con Tratamientos Especiales">Tarimas con Tratamientos Especiales</option>
                                        <option value="Tarimas de Alta Capacidad">Tarimas de Alta Capacidad</option>
                                        <option value="Pedidos por Volumen">Pedidos por Volumen</option>
                                        <option value="Solicitud de Muestras">Solicitud de Muestras</option>
                                        <option value="Información Técnica">Información Técnica</option>
                                        <option value="Certificaciones y Normas">Certificaciones y Normas</option>
                                        <option value="Logística y Entregas">Logística y Entregas</option>
                                        <option value="Garantías y Soporte">Garantías y Soporte</option>
                                        <option value="Asesoría Técnica">Asesoría Técnica</option>
                                        <option value="Servicio al Cliente">Servicio al Cliente</option>
                                        <option value="Colaboraciones Comerciales">Colaboraciones Comerciales</option>
                                        <option value="Otro">Otro</option>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14792.434434430781!2d-100.46808216757336!3d25.776151424334948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629b129eadae4b%3A0x103ac258262df5f4!2sretrama!5e0!3m2!1ses-419!2smx!4v1760637939463!5m2!1ses-419!2smx"                             
                            allowfullscreen="" 
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