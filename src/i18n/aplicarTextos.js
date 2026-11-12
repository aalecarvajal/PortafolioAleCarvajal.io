import { textos } from './textos.js';
import { t, obtenerIdioma } from './idioma.js';

// Busca un texto con una ruta como 'nav.proyectos' dentro del objeto "textos".
function buscar(ruta) {
  return ruta.split('.').reduce((objeto, parte) => objeto?.[parte], textos);
}

// Recorre el HTML y cambia cada texto marcado con data-i18n al idioma actual.
export function aplicarTextos() {
  document.documentElement.lang = obtenerIdioma();
  document.title = t(textos.pagina.titulo);
  document.querySelector('meta[name="description"]').content = t(textos.pagina.descripcion);

  // Texto simple
  document.querySelectorAll('[data-i18n]').forEach((elemento) => {
    elemento.textContent = t(buscar(elemento.dataset.i18n));
  });

  // Texto con etiquetas HTML adentro (por ejemplo <strong>)
  document.querySelectorAll('[data-i18n-html]').forEach((elemento) => {
    elemento.innerHTML = t(buscar(elemento.dataset.i18nHtml));
  });

  // Texto alternativo de imágenes
  document.querySelectorAll('[data-i18n-alt]').forEach((elemento) => {
    elemento.alt = t(buscar(elemento.dataset.i18nAlt));
  });

  // Texto de ejemplo dentro de los campos del formulario
  document.querySelectorAll('[data-i18n-placeholder]').forEach((elemento) => {
    elemento.placeholder = t(buscar(elemento.dataset.i18nPlaceholder));
  });

  // Etiquetas para lectores de pantalla
  document.querySelectorAll('[data-i18n-aria]').forEach((elemento) => {
    elemento.setAttribute('aria-label', t(buscar(elemento.dataset.i18nAria)));
  });
}
