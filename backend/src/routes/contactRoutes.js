const express = require('express');
const { submitContactForm } = require('../controllers/contactController');
const rateLimit = require('express-rate-limit');

// Limitar a 5 solicitudes por hora por IP
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hora
    max: 5,
    message: {
        success: false,
        message: 'Demasiados intentos de contacto. Por favor, intenta nuevamente en una hora.'
    }
});

const router = express.Router();

router.post('/contact', contactLimiter, submitContactForm);

module.exports = router;