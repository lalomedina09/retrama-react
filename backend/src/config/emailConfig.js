const nodemailer = require('nodemailer');

// Configuración para Gmail
const createTransporter = () => {
    return nodemailer.createTransporter({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

// Plantilla para el admin
const adminTemplate = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #57b33e; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #333; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nueva Solicitud de Cotización</h1>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Nombre:</span> ${formData.name}
            </div>
            <div class="field">
                <span class="label">Email:</span> ${formData.email}
            </div>
            <div class="field">
                <span class="label">Teléfono:</span> ${formData.phone}
            </div>
            <div class="field">
                <span class="label">Mensaje:</span> ${formData.message}
            </div>
            <div class="field">
                <span class="label">Fecha:</span> ${new Date().toLocaleString()}
            </div>
        </div>
    </div>
</body>
</html>
`;

// Plantilla para el usuario
const userTemplate = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #57b33e; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>¡Gracias por contactarnos!</h1>
        </div>
        <div class="content">
            <p>Hola <strong>${formData.name}</strong>,</p>
            <p>Hemos recibido tu solicitud de cotización y nos pondremos en contacto contigo muy pronto.</p>
            <p><strong>Resumen de tu solicitud:</strong></p>
            <ul>
                <li><strong>Teléfono:</strong> ${formData.phone}</li>
                <li><strong>Mensaje:</strong> ${formData.message}</li>
            </ul>
            <p>Te contactaremos dentro de las próximas 24 horas.</p>
            <p>Saludos cordiales,<br>El equipo de [Tu Empresa]</p>
        </div>
    </div>
</body>
</html>
`;

module.exports = {
    createTransporter,
    adminTemplate,
    userTemplate
};