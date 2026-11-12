// ===== Estilos y librerías =====
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap' // JS de Bootstrap: menú hamburguesa, acordeones y scrollspy

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/league-spartan/700.css' // fuente de los títulos

import './style.css'

// ===== Idioma =====
import { obtenerIdioma, cambiarIdioma } from './i18n/idioma.js'
import { aplicarTextos } from './i18n/aplicarTextos.js'

// ===== Datos y componentes =====
import { patronus } from './data/patronus.js'
import { redes } from './data/redes.js'
import { datosContacto, formspreeUrl } from './data/contacto.js'
import { proyectos } from './data/proyectos.js'
import { parrafosSobreMi } from './data/sobreMi.js'
import { categoriasSkills } from './data/skills.js'
import { crearPatronus } from './components/patronus.js'
import { crearEnlacesRedes } from './components/redes.js'
import { crearDatosContacto } from './components/datosContacto.js'
import { crearTarjetaProyecto } from './components/tarjetaProyecto.js'
import { crearSobreMi } from './components/sobreMi.js'
import { crearTarjetaSkill } from './components/tarjetaSkill.js'
import { activarFormularioContacto } from './components/formularioContacto.js'
import { ajustarAlAncho } from './utils/ajustarAlAncho.js'

// ===== Contenedores =====
const contenedorPatronus = document.querySelector('#patronus-contenedor');
const contenedorProyectos = document.querySelector('#proyectos-contenedor');
const contenedorSobreMi = document.querySelector('#sobre-mi-contenedor');
const contenedorSkills = document.querySelector('#skills-contenedor');
const botonIdioma = document.querySelector('#boton-idioma');

// Dibuja (o vuelve a dibujar) toda la página en el idioma actual.
// replaceChildren() quita lo que había en el contenedor y pone lo nuevo.
function renderizarPagina() {
  aplicarTextos();

  contenedorPatronus.replaceChildren(...patronus.map(crearPatronus));

  // Redes y datos de contacto aparecen en el Hero y en Contacto
  document.querySelectorAll('.contenedor-redes').forEach((contenedor) => {
    contenedor.replaceChildren(crearEnlacesRedes(redes));
  });
  document.querySelectorAll('.contenedor-datos-contacto').forEach((contenedor) => {
    contenedor.replaceChildren(crearDatosContacto(datosContacto));
  });

  contenedorProyectos.replaceChildren(...proyectos.map(crearTarjetaProyecto));
  contenedorSobreMi.replaceChildren(crearSobreMi(parrafosSobreMi));
  contenedorSkills.replaceChildren(...categoriasSkills.map(crearTarjetaSkill));

  // Resalta en el botón el idioma que está activo
  botonIdioma.querySelectorAll('[data-idioma]').forEach((opcion) => {
    opcion.classList.toggle('activo', opcion.dataset.idioma === obtenerIdioma());
  });
}

// ===== Botón ES | EN =====
botonIdioma.addEventListener('click', () => {
  const nuevoIdioma = obtenerIdioma() === 'es' ? 'en' : 'es';
  cambiarIdioma(nuevoIdioma);
  renderizarPagina();
});

renderizarPagina();

// ===== Formulario de contacto: los mensajes llegan a mi correo por Formspree =====
activarFormularioContacto(document.querySelector('#formulario-contacto'), formspreeUrl);

// ===== Mi nombre del Hero mide lo mismo de ancho que la descripción =====
ajustarAlAncho(document.querySelector('#nombre-hero'), document.querySelector('.hero-texto'));
