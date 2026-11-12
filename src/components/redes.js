import { t } from '../i18n/idioma.js';

// Lista de botones con mis redes. Se usa en el Hero y en Contacto.
export function crearEnlacesRedes(redes) {
  const lista = document.createElement('ul');
  lista.className = 'list-unstyled d-flex flex-wrap gap-3 mb-0';

  redes.forEach((red) => {
    const url = t(red.url);
    // Los enlaces externos se abren en otra pestaña
    const externo = url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : '';
    const descarga = red.descargar ? 'download' : '';

    const item = document.createElement('li');
    item.innerHTML = `
      <a class="btn boton-neon" href="${url}" ${externo} ${descarga}>
        <i class="bi ${red.icono}" aria-hidden="true"></i>
        ${t(red.nombre)}
      </a>
    `;
    lista.appendChild(item);
  });

  return lista;
}
