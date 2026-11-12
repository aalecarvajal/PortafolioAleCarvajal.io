import { rutaPublica } from '../utils/rutas.js';

// Si cambio un enlace aquí, se actualiza en toda la página.
// El botón de CV descarga la versión del idioma elegido (los PDF están en /public).
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
      es: rutaPublica('Aida_Carvajal_Aguado_CV_Desarrollador_Java_Full_Stack_Jr.pdf'),
      en: rutaPublica('Aida_Carvajal_Aguado_Resume_Junior_Java_Full_Stack_Developer_EN.pdf'),
    },
    icono: 'bi-file-earmark-arrow-down',
    descargar: true,
  },
];
