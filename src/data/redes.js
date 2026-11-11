import { rutaPublica } from '../utils/rutas.js';

// Si cambio un enlace aquí, se actualiza en toda la página
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
    nombre: 'Descargar CV',
    url: rutaPublica('cv-ale-carvajal.pdf'),
    icono: 'bi-file-earmark-arrow-down',
    descargar: true,
  },
];
