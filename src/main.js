// ===== Estilos y librerías =====
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap' // JS de Bootstrap: necesario para el menú hamburguesa de la navbar

import '@fontsource/noto-serif/400.css'
import '@fontsource/noto-serif/600.css'
import '@fontsource/noto-serif/700.css'

import './style.css'

// ===== Datos y componentes =====
import { patronus } from './data/patronus.js'
import { redes } from './data/redes.js'
import { datosContacto } from './data/contacto.js'
import { crearPatronus } from './components/patronus.js'
import { crearEnlacesRedes } from './components/redes.js'
import { crearTarjetaContacto } from './components/tarjetaContacto.js'

// ===== Patronus =====
const contenedorPatronus = document.querySelector('#patronus-contenedor');
patronus.forEach((datos) => {
  contenedorPatronus.appendChild(crearPatronus(datos));
});

// ===== Redes (Hero y Contacto) =====
document.querySelectorAll('.contenedor-redes').forEach((contenedor) => {
  contenedor.appendChild(crearEnlacesRedes(redes));
});

// ===== Tarjeta de contacto (Hero y Contacto) =====
document.querySelectorAll('.contenedor-tarjeta-contacto').forEach((contenedor) => {
  contenedor.appendChild(crearTarjetaContacto(datosContacto));
});
