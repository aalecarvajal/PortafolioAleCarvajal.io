import { t } from '../i18n/idioma.js';

// Correo y celular, sin tarjeta: van directo sobre el fondo.
// Se puede usar en el Hero y en Contacto.
export function crearDatosContacto(datos) {
  const bloque = document.createElement('address');
  bloque.className = 'datos-contacto';

  bloque.innerHTML = datos
    .map((dato) => `
      <p class="dato-contacto">
        <i class="bi ${dato.icono}" aria-hidden="true"></i>
        <span class="visually-hidden">${t(dato.etiqueta)}:</span>
        <span class="dato-valor">${dato.valor}</span>
      </p>
    `)
    .join('');

  return bloque;
}
