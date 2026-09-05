export const PHONE_DISPLAY = '+52 81 2039 7138';
export const PHONE_TEL = '+528120397138';
export const EMAIL = 'contacto@retrama.com.mx';
export const WHATSAPP_URL = 'https://wa.me/528120397138';

export const getWhatsAppUrl = (text = '') => {
    const base = WHATSAPP_URL;
    if (!text) {
        return base;
    }
    return `${base}?text=${encodeURIComponent(text)}`;
};
