/**
Se usa en el Hero y en Contacto.
 */
export function crearTarjetaContacto(datos) {
  const tarjeta = document.createElement('address');
  tarjeta.className = 'tarjeta tarjeta-contacto';

  tarjeta.innerHTML = datos
    .map((dato) => `
      <p class="dato-contacto">
        <i class="bi ${dato.icono}" aria-hidden="true"></i>
        <span class="visually-hidden">${dato.etiqueta}:</span>
        <span class="dato-valor">${dato.valor}</span>
      </p>
    `)
    .join('');

  return tarjeta;
}