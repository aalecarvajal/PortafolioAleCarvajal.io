/**
 * Lista de botones con los enlaces a redes.
 * Reutilizable: se usa en el Hero y en Contacto.
 */
export function crearEnlacesRedes(redes) {
  const lista = document.createElement('ul');
  lista.className = 'list-unstyled d-flex flex-wrap gap-3 mb-0';

  redes.forEach((red) => {
    // Los enlaces externos (https://...) se abren en otra pestaña
    const esExterno = red.url.startsWith('http');
    const atributosExternos = esExterno ? 'target="_blank" rel="noopener noreferrer"' : '';
    const atributoDescarga = red.descargar ? 'download' : '';

   const item = document.createElement('li');
   item.innerHTML = `
      <a class="btn boton-neon" href="${red.url}" ${atributosExternos} ${atributoDescarga}>
        <i class="bi ${red.icono}" aria-hidden="true"></i>
        ${red.nombre}
      </a>
    `;
    
    lista.appendChild(item);
  });

  return lista;
}

