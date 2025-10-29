import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');
        setErrorMessage('');

        // Validaciones básicas
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
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
                message: formData.message,
                to_email: 'admin@tudominio.com', // Email del admin
                to_name: 'Administrador',
                subject: 'Nueva solicitud de cotización',
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
                subject: 'Confirmación de solicitud de cotización'
            }, userID);

            setSubmitStatus('success');
            console.log('Formulario enviado exitosamente:', formData);

            // Resetear formulario después de éxito
            setFormData({
                name: '',
                email: '',
                phone: '',
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
        <div className="consultation-sec pt-60 pb-60 bg-theme overflow-hidden" style={{ backgroundColor: '#57b33e' }}>
            <div className="container">
                <div className="row gy-4 align-items-center justify-content-between">
                    <div className="col-xxl-4 col-xl-5 mb-3 mb-lg-0">
                        <div className="title-area text-center mb-0 text-xl-start">
                            <span className="sub-title style1 text-white">Contáctanos</span>
                            <h2 className="sec-title text-white mb-0">
                                Solicita una cotización sin compromiso.
                            </h2>
                            <p className="text-white mt-3 opacity-75" style={{ fontSize: '14px' }}>
                                Completa el formulario y te contactaremos dentro de las próximas 24 horas.
                            </p>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-7">
                        <div className="consultation-area">
                            {/* Mensajes de estado mejorados */}
                            {submitStatus === 'success' && (
                                <div className="alert alert-success mb-4" style={{
                                    backgroundColor: '#d4edda',
                                    border: '1px solid #c3e6cb',
                                    color: '#155724',
                                    padding: '16px 20px',
                                    borderRadius: '8px',
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
                                    padding: '16px 20px',
                                    borderRadius: '8px',
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

                            <form onSubmit={handleSubmit} className="consultation-form">
                                <div className="row gy-4 justify-content-start">
                                    <div className="col-md-6 form-group">
                                        <label className="form-label text-white mb-2" style={{ fontSize: '14px' }}>
                                            Nombre completo *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Ej: Juan Pérez"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            style={{
                                                opacity: isSubmitting ? 0.7 : 1,
                                                cursor: isSubmitting ? 'not-allowed' : 'text',
                                                padding: '12px 15px',
                                                border: '1px solid #e0e0e0',
                                                borderRadius: '6px'
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="form-label text-white mb-2" style={{ fontSize: '14px' }}>
                                            Correo electrónico *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Ej: tu@email.com"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            style={{
                                                opacity: isSubmitting ? 0.7 : 1,
                                                cursor: isSubmitting ? 'not-allowed' : 'text',
                                                padding: '12px 15px',
                                                border: '1px solid #e0e0e0',
                                                borderRadius: '6px'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row gy-4 justify-content-end mt-3">
                                    <div className="col-md-4 form-group">
                                        <label className="form-label text-white mb-2" style={{ fontSize: '14px' }}>
                                            Teléfono *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Ej: +51 987 654 321"
                                            className="form-control"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            style={{
                                                opacity: isSubmitting ? 0.7 : 1,
                                                cursor: isSubmitting ? 'not-allowed' : 'text',
                                                padding: '12px 15px',
                                                border: '1px solid #e0e0e0',
                                                borderRadius: '6px'
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-4 form-group">
                                        <label className="form-label text-white mb-2" style={{ fontSize: '14px' }}>
                                            Mensaje *
                                        </label>
                                        <input
                                            type="text"
                                            name="message"
                                            placeholder="Ej: Necesito cotización para..."
                                            className="form-control"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                            style={{
                                                opacity: isSubmitting ? 0.7 : 1,
                                                cursor: isSubmitting ? 'not-allowed' : 'text',
                                                padding: '12px 15px',
                                                border: '1px solid #e0e0e0',
                                                borderRadius: '6px'
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-4 form-group mb-0 d-flex align-items-end">
                                        <button
                                            type="submit"
                                            className="th-btn black-btn2 th-radius th-icon fw-btn w-100"
                                            disabled={isSubmitting}
                                            style={{
                                                opacity: isSubmitting ? 0.7 : 1,
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                padding: '14px 20px',
                                                backgroundColor: isSubmitting ? '#6c757d' : '#000',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                fontWeight: '600',
                                                fontSize: '16px',
                                                transition: 'all 0.3s ease',
                                                height: '50px'
                                            }}
                                            onMouseOver={(e) => {
                                                if (!isSubmitting) {
                                                    e.target.style.backgroundColor = '#333';
                                                    e.target.style.transform = 'translateY(-2px)';
                                                }
                                            }}
                                            onMouseOut={(e) => {
                                                if (!isSubmitting) {
                                                    e.target.style.backgroundColor = '#000';
                                                    e.target.style.transform = 'translateY(0)';
                                                }
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <span>
                                                    <i className="fas fa-spinner fa-spin me-2"></i>
                                                    Enviando...
                                                </span>
                                            ) : (
                                                <span>
                                                    📨 Enviar Solicitud
                                                </span>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Información de privacidad mejorada */}
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div style={{
                                            color: 'white',
                                            fontSize: '12px',
                                            opacity: 0.8,
                                            textAlign: 'center',
                                            margin: 0,
                                            padding: '15px',
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            borderRadius: '6px'
                                        }}>
                                            <strong>🔒 Tus datos están protegidos</strong>
                                            <br />
                                            Al enviar este formulario aceptas nuestra política de privacidad.
                                            No compartimos tu información con terceros.
                                        </div>
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