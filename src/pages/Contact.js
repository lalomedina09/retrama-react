import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        alert('¡Mensaje enviado! Te contactaremos pronto.');
    };

    return (
        
        <main className="page-contact">
            <div className="container">
                <h1>Contacto</h1>

                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Información de Contacto</h2>
                        <div className="contact-item">
                            <strong>Email:</strong> info@retrama.com
                        </div>
                        <div className="contact-item">
                            <strong>Teléfono:</strong> +34 912 345 678
                        </div>
                        <div className="contact-item">
                            <strong>Dirección:</strong> Calle Ejemplo 123, Madrid
                        </div>
                        <div className="contact-item">
                            <strong>Horario:</strong> Lunes a Viernes 9:00 - 18:00
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Envíanos un Mensaje</h2>

                        <div className="form-group">
                            <label htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;