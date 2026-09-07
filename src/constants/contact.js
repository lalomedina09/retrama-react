export const PHONE_DISPLAY = '+52 81 2039 7189';
export const PHONE_TEL = '+528120397189';
export const EMAIL = 'contacto@retrama.com.mx';
export const WHATSAPP_URL = 'https://wa.me/528120397189';
export const QUOTE_WHATSAPP_MESSAGE = 'Hola, me gustaría solicitar una cotización con Retrama.';

export const getWhatsAppUrl = (text = '') => {
    const base = WHATSAPP_URL;
    if (!text) {
        return base;
    }
    return `${base}?text=${encodeURIComponent(text)}`;
};
