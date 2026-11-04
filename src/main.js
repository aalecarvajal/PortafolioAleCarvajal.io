import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

import '@fontsource/noto-serif/400.css'
import '@fontsource/noto-serif/600.css'
import '@fontsource/noto-serif/700.css'

import './style.css'

import { patronus } from './data/patronus.js'
import { crearPatronus } from './components/patronus.js'
import { redes } from './data/redes.js'
import { crearEnlacesRedes } from './components/redes.js'
import { datosContacto } from './data/contacto.js'
import { crearTarjetaContacto } from './components/tarjetaContacto.js'

const contenedor = document.querySelector('#patronus-contenedor');
patronus.forEach((datos) => {
  contenedor.appendChild(crearPatronus(datos));
});

// ===== Redes y tarjeta de contacto=====

document.querySelectorAll('.contenedor-redes').forEach((contenedor) => {
  contenedor.appendChild(crearEnlacesRedes(redes));
});

document.querySelectorAll('.contenedor-tarjeta-contacto').forEach((contenedor) => {
  contenedor.appendChild(crearTarjetaContacto(datosContacto));
});