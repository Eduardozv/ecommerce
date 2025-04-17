//These file defines constants for all application 
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/ga_instalaciones_comerciales/';
const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://www.facebook.com/p/LCA-instalaciones-comerciales-100075777861077/?locale=es_LA';
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/ga-lca-7b051b2a2/';

const constants = {
  API_URL,
  instagramUrl,
  facebookUrl,
  linkedinUrl,
  // Add other constants here
}

export default constants;