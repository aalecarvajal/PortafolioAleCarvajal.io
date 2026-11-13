import { t } from '../i18n/idioma.js';

// Bloque de texto de la sección "Sobre Mí": un párrafo por cada elemento de la lista.
export function crearSobreMi(parrafos) {
  const contenedor = document.createElement('div');
  contenedor.className = 'texto-seccion texto-sobre-mi';

  contenedor.innerHTML = parrafos
    .map((parrafo) => `<p>${t(parrafo)}</p>`)
    .join('');

  return contenedor;
}
