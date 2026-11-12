import { t } from '../i18n/idioma.js';
import { textos } from '../i18n/textos.js';

// Tarjeta de un proyecto: demo en video (o imagen), resumen, tecnologías,
// detalles en acordeón de Bootstrap y botones a GitHub y al demo.

// Parte visual: si el proyecto tiene video, se muestra con la imagen como portada (poster).
function crearMedia(datos) {
  if (datos.video) {
    return `
      <video class="proyecto-media" controls preload="none" playsinline
             poster="${datos.imagen}" aria-label="${t(textos.proyecto.videoDe)} ${t(datos.titulo)}">
        <source src="${datos.video}" type="video/mp4" />
        ${t(textos.proyecto.sinVideo)}
      </video>
    `;
  }
  return `<img class="proyecto-media" src="${datos.imagen}" alt="${t(textos.proyecto.capturaDe)} ${t(datos.titulo)}" />`;
}

// Etiquetas de tecnologías
function crearTecnologias(tecnologias) {
  return tecnologias
    .map((tecnologia) => `<li class="etiqueta-tecnologia">${tecnologia}</li>`)
    .join('');
}

// Un panel del acordeón. "idPadre" hace que solo haya uno abierto a la vez.
function crearPanel(idPadre, idPanel, titulo, contenido) {
  return `
    <div class="accordion-item">
      <h4 class="accordion-header">
        <button class="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#${idPanel}"
                aria-expanded="false" aria-controls="${idPanel}">
          ${titulo}
        </button>
      </h4>
      <div id="${idPanel}" class="accordion-collapse collapse" data-bs-parent="#${idPadre}">
        <div class="accordion-body">${contenido}</div>
      </div>
    </div>
  `;
}

// Lista de desafíos con su solución
function crearDesafios(desafios) {
  const items = desafios
    .map((d) => `<li><strong>${t(d.reto)}</strong> ${t(d.solucion)}</li>`)
    .join('');
  return `<ul class="lista-desafios">${items}</ul>`;
}

// Lista sencilla de textos (por ejemplo, los resultados)
function crearLista(items) {
  const elementos = items.map((item) => `<li>${t(item)}</li>`).join('');
  return `<ul class="lista-desafios">${elementos}</ul>`;
}

// Botón de enlace; si la url está vacía no se dibuja nada
function crearBoton(url, texto, icono) {
  if (!url) return '';
  return `
    <a class="btn boton-neon" href="${url}" target="_blank" rel="noopener noreferrer">
      <i class="bi ${icono}" aria-hidden="true"></i> ${texto}
    </a>
  `;
}

export function crearTarjetaProyecto(datos) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta tarjeta-brillo tarjeta-proyecto';

  const idAcordeon = `acordeon-${datos.id}`;

  tarjeta.innerHTML = `
    <div class="row g-4">
      <div class="col-xl-7">
        ${crearMedia(datos)}
      </div>

      <div class="col-xl-5 d-flex flex-column gap-3">
        <h3 class="tarjeta-titulo proyecto-titulo">${t(datos.titulo)}</h3>
        <p class="tarjeta-texto mb-0">${t(datos.resumen)}</p>

        <ul class="list-unstyled d-flex flex-wrap gap-2 mb-0" aria-label="${t(textos.proyecto.tecnologias)}">
          ${crearTecnologias(datos.tecnologias)}
        </ul>

        <div class="accordion acordeon-proyecto" id="${idAcordeon}">
          ${crearPanel(idAcordeon, `${datos.id}-proposito`, t(textos.proyecto.proposito), `<p class="mb-0">${t(datos.proposito)}</p>`)}
          ${crearPanel(idAcordeon, `${datos.id}-contexto`, t(textos.proyecto.contexto), `<p class="mb-0">${t(datos.contexto)}</p>`)}
          ${crearPanel(idAcordeon, `${datos.id}-desafios`, t(textos.proyecto.desafios), crearDesafios(datos.desafios))}
          ${crearPanel(idAcordeon, `${datos.id}-resultados`, t(textos.proyecto.resultados), crearLista(datos.resultados))}
        </div>

        <div class="d-flex flex-wrap gap-3 mt-auto">
          ${crearBoton(datos.enlaces.github, t(textos.proyecto.verCodigo), 'bi-github')}
          ${crearBoton(datos.enlaces.demo, t(textos.proyecto.verDemo), 'bi-box-arrow-up-right')}
        </div>
      </div>
    </div>
  `;

  return tarjeta;
}
