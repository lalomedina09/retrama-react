import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');
        setErrorMessage('');

        // Validaciones básicas
        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            setSubmitStatus('error');
            setErrorMessage('Todos los campos son obligatorios');
            setIsSubmitting(false);
            return;
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus('error');
            setErrorMessage('Por favor ingresa un email válido');
            setIsSubmitting(false);
            return;
        }

        try {
            // 🔑 CONFIGURA ESTOS DATOS CON TUS CREDENCIALES REALES DE EMAILJS
            const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_8o2yq8c';
            const adminTemplateID = process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID || 'template_admin123';
            const userTemplateID = process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID || 'template_user123';
            const userID = process.env.REACT_APP_EMAILJS_USER_ID || 'user_123456789';

            // 📧 1. Enviar email profesional al admin
            await emailjs.send(serviceID, adminTemplateID, {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
                to_email: 'admin@tudominio.com', // Email del admin
                to_name: 'Administrador',
                subject_full: `Nueva solicitud: ${formData.subject}`,
                date: new Date().toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                time: new Date().toLocaleTimeString('es-ES', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            }, userID);

            // 📧 2. Enviar email de confirmación profesional al usuario
            await emailjs.send(serviceID, userTemplateID, {
                to_name: formData.name,
                user_email: formData.email,
                user_phone: formData.phone,
                user_subject: formData.subject,
                user_message: formData.message,
                date: new Date().toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                contact_email: 'info@tudominio.com', // Tu email de contacto
                contact_phone: '+1 234 567 8900', // Tu teléfono
                company_name: 'Tu Empresa', // Nombre de tu empresa
                time: Date.now().toString().slice(-6), // Para número de referencia
                subject: `Confirmación: ${formData.subject}`
            }, userID);

            setSubmitStatus('success');
            console.log('Formulario enviado exitosamente:', formData);

            // Resetear formulario después de éxito
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

        } catch (error) {
            console.error('Error enviando el formulario:', error);
            setSubmitStatus('error');

            // Mensajes de error más específicos y amigables
            if (error.text) {
                if (error.text.includes('Invalid template ID')) {
                    setErrorMessage('Error de configuración. Verifica los IDs de las plantillas.');
                } else if (error.text.includes('Invalid user ID')) {
                    setErrorMessage('Error de configuración. Verifica tu User ID de EmailJS.');
                } else {
                    setErrorMessage(`Error del servicio: ${error.text}`);
                }
            } else if (error.status === 0) {
                setErrorMessage('Error de conexión. Verifica tu conexión a internet.');
            } else {
                setErrorMessage('Error al enviar el formulario. Por favor, intenta nuevamente.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-bottom">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-7">
                        <form onSubmit={handleSubmit} className="contact-form2 input-smoke">
                            <h3 className="h2 mt-n3 mb-25">Contáctanos</h3>

                            {/* Mensajes de estado */}
                            {submitStatus === 'success' && (
                                <div className="alert alert-success mb-4" style={{
                                    backgroundColor: '#d4edda',
                                    border: '1px solid #c3e6cb',
                                    color: '#155724',
                                    padding: '12px 15px',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <span style={{
                                        fontSize: '18px',
                                        marginRight: '10px'
                                    }}>✅</span>
                                    <div>
                                        <strong>¡Éxito!</strong> Formulario enviado correctamente.
                                        <br />
                                        <small>Te hemos enviado un email de confirmación y te contactaremos pronto.</small>
                                    </div>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="alert alert-danger mb-4" style={{
                                    backgroundColor: '#f8d7da',
                                    border: '1px solid #f5c6cb',
                                    color: '#721c24',
                                    padding: '12px 15px',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <span style={{
                                        fontSize: '18px',
                                        marginRight: '10px'
                                    }}>❌</span>
                                    <div>
                                        <strong>Error:</strong> {errorMessage}
                                    </div>
                                </div>
                            )}

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        placeholder="Tu Nombre Completo"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Correo Electrónico"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        placeholder="Teléfono"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <select
                                        name="subject"
                                        id="subject"
                                        className="form-select nice-select"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    >
                                        <option value="" disabled hidden>Selecciona una opción</option>
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
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="3"
                                        className="form-control"
                                        placeholder="Tu Mensaje"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>
                                <div className="form-btn col-12">
                                    <button
                                        type="submit"
                                        className="th-btn fw-btn"
                                        disabled={isSubmitting}
                                        style={{
                                            opacity: isSubmitting ? 0.7 : 1,
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        <span className="btn-text">
                                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                        </span>
                                        {isSubmitting && (
                                            <i className="fas fa-spinner fa-spin ms-2"></i>
                                        )}
                                    </button>
                                </div>

                                {/* Información de privacidad */}
                                <div className="col-12 mt-3">
                                    <p className="text-muted small mb-0">
                                        🔒 <strong>Tus datos están protegidos</strong><br />
                                        Al enviar este formulario aceptas nuestra política de privacidad.
                                        No compartimos tu información con terceros.
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-5">
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14792.434434430781!2d-100.46808216757336!3d25.776151424334948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629b129eadae4b%3A0x103ac258262df5f4!2sretrama!5e0!3m2!1ses-419!2smx!4v1760637939463!5m2!1ses-419!2smx"
                                allowFullScreen=""
                                loading="lazy"
                                title="Ubicación en Google Maps"
                                style={{ width: '100%', height: '100%', minHeight: '400px', border: 'none' }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;