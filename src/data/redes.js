import { rutaPublica } from '../utils/rutas.js';

// Si cambio un enlace aquí, se actualiza en toda la página.
// Cuando tengas tu CV en inglés, guárdalo en /public y cambia la ruta de "en".
export const redes = [
  {
    nombre: 'GitHub',
    url: 'https://github.com/aalecarvajal',
    icono: 'bi-github',
  },
  {
    nombre: 'LinkedIn',
    url: 'https://www.linkedin.com/in/aalecarvajal/',
    icono: 'bi-linkedin',
  },
  {
    nombre: { es: 'Descargar CV', en: 'Download CV' },
    url: {
      es: rutaPublica('cv-ale-carvajal.pdf'),
      en: rutaPublica('cv-ale-carvajal.pdf'),
    },
    icono: 'bi-file-earmark-arrow-down',
    descargar: true,
  },
];
