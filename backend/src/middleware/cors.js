const cors = require('cors');

const corsOptions = {
    origin: function (origin, callback) {
        // Permitir solicitudes sin origen (como mobile apps) o desde tu frontend
        const allowedOrigins = [
            'http://localhost:3000',
            'http://localhost:3001',
            'https://tudominio.com'
        ];

        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};

module.exports = cors(corsOptions);