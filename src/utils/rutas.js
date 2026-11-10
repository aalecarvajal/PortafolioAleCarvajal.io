// Construye la ruta correcta a un archivo de la carpeta /public.
// import.meta.env.BASE_URL lo llena Vite con el valor de "base" de vite.config.js:
//   - en GitHub Pages vale '/Portafolio/'
// Así la misma ruta funciona en local y publicada, sin cambiar nada a mano.
export function rutaPublica(archivo) {
  return `${import.meta.env.BASE_URL}${archivo}`;
}
