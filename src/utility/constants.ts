//These file defines constants for all application 
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/ga_instalaciones_comerciales/';
const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/p/LCA-instalaciones-comerciales-100075777861077/?locale=es_LA';
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/ga-lca-7b051b2a2/';
const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://eduardozv.github.io/portafolio/';
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || 'https://wa.me/+59898331926';
const mail = process.env.NEXT_PUBLIC_MAIL || 'ventas@gainstalacionescomerciales-latam.com';
const mail2 = process.env.NEXT_PUBLIC_MAIL || 'ventas@gainstalacionescomerciales-latam.com';
const phone = process.env.NEXT_PUBLIC_PHONE || '(+598) 98331926';
const phone2 = process.env.NEXT_PUBLIC_PHONE2 || '(+598) 98331926';
const address = process.env.NEXT_PUBLIC_ADDRESS || 'Torre Cali Ofic 2B Piso 2, Zona Libre de Colon, Panama';
const showPrice = false;

const constants = {
    API_URL,
    instagramUrl,
    facebookUrl,
    linkedinUrl,
    portfolioUrl,
    whatsapp,
    mail,
    mail2,
    phone,
    phone2,
    address,
    showPrice,
  // Add other constants here
}

export default constants;