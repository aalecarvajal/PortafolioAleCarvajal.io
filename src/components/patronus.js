import { t } from '../i18n/idioma.js';

// Orden en que se recorren los estados con cada clic
const ESTADOS = ['animal', 'descripcion', 'justificacion'];

export function crearPatronus(datos) {
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'patronus';
  boton.dataset.estado = 'animal';

  boton.innerHTML = `
    <img class="patronus-imagen" src="${datos.imagen}" alt="Patronus ${t(datos.nombre)}" />

    <span class="tarjeta tarjeta-patronus tarjeta-descripcion">
      <span class="tarjeta-titulo">${t(datos.skill)}</span>
      <span class="tarjeta-texto">${t(datos.descripcion)}</span>
      <span class="tarjeta-flecha" aria-hidden="true">➜</span>
    </span>

    <span class="tarjeta tarjeta-patronus tarjeta-justificacion">
      <span class="tarjeta-titulo">${t(datos.nombre)}</span>
      <span class="tarjeta-texto">${t(datos.justificacion)}</span>
    </span>
  `;

  let paso = 0;
  boton.addEventListener('click', () => {
    paso = (paso + 1) % ESTADOS.length;
    boton.dataset.estado = ESTADOS[paso];
  });

  return boton;
}
