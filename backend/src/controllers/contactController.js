const { createTransporter, adminTemplate, userTemplate } = require('../config/emailConfig');

const submitContactForm = async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validación básica
    if (!name || !email || !phone || !message) {
        return res.status(400).json({
            success: false,
            message: 'Todos los campos son requeridos'
        });
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'El formato del email no es válido'
        });
    }

    try {
        const transporter = createTransporter();

        // 1. Email para el admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: '📄 Nueva Solicitud de Cotización',
            html: adminTemplate({ name, email, phone, message })
        };

        // 2. Email de confirmación para el usuario
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: '✅ Confirmación de Solicitud - [Tu Empresa]',
            html: userTemplate({ name, email, phone, message })
        };

        // Enviar ambos emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        console.log('Formulario enviado exitosamente para:', email);

        res.status(200).json({
            success: true,
            message: 'Formulario enviado exitosamente. Revisa tu email para la confirmación.'
        });

    } catch (error) {
        console.error('Error enviando emails:', error);

        res.status(500).json({
            success: false,
            message: 'Error al enviar el formulario. Por favor, intenta nuevamente.'
        });
    }
};

module.exports = {
    submitContactForm
};