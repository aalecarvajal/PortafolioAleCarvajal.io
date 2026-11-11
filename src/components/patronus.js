// Orden en que se recorren los estados con cada clic
const ESTADOS = ['animal', 'descripcion', 'justificacion'];

export function crearPatronus(datos) {
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'patronus';
  boton.dataset.estado = 'animal';

  boton.innerHTML = `
    <img class="patronus-imagen" src="${datos.imagen}" alt="Patronus ${datos.nombre}" />

    <span class="tarjeta tarjeta-patronus tarjeta-descripcion">
      <span class="tarjeta-titulo">${datos.skill}</span>
      <span class="tarjeta-texto">${datos.descripcion}</span>
      <span class="tarjeta-flecha" aria-hidden="true">➜</span>
    </span>

    <span class="tarjeta tarjeta-patronus tarjeta-justificacion">
      <span class="tarjeta-titulo">${datos.nombre}</span>
      <span class="tarjeta-texto">${datos.justificacion}</span>
    </span>
  `;

  let paso = 0;
  boton.addEventListener('click', () => {
    paso = (paso + 1) % ESTADOS.length;
    boton.dataset.estado = ESTADOS[paso];
  });

  return boton;
}
