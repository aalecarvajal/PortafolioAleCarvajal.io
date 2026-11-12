import { t } from '../i18n/idioma.js';

// Tarjeta de una categoría de skills: título con ícono y la lista de habilidades.
// Regresa una columna de Bootstrap (.col) para acomodarse en la cuadrícula.
export function crearTarjetaSkill(categoria) {
  const columna = document.createElement('div');
  columna.className = 'col';

  const lista = categoria.skills
    .map((skill) => `
      <li>
        <i class="bi ${skill.icono}" aria-hidden="true"></i>
        ${t(skill.nombre)}
      </li>
    `)
    .join('');

  columna.innerHTML = `
    <article class="tarjeta tarjeta-brillo tarjeta-skill h-100">
      <h3 class="tarjeta-titulo skill-titulo">
        <i class="bi ${categoria.icono}" aria-hidden="true"></i>
        ${t(categoria.titulo)}
      </h3>
      <ul class="lista-skills">${lista}</ul>
    </article>
  `;

  return columna;
}
