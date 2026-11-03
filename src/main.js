import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import '@fontsource/noto-serif/400.css'
import '@fontsource/noto-serif/600.css'
import '@fontsource/noto-serif/700.css'

import './style.css'

// ===== Barra lateral Soft Skills Patronus =====
import { patronus } from './data/patronus.js'
import { crearPatronus } from './components/patronus.js'

const contenedor = document.querySelector('#patronus-contenedor');
patronus.forEach((datos) => {
  contenedor.appendChild(crearPatronus(datos));
});

