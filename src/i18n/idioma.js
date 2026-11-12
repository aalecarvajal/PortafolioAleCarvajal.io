// Guarda y consulta el idioma actual de la página ('es' o 'en').

const IDIOMAS = ['es', 'en'];
const CLAVE_GUARDADO = 'idioma-portafolio';

// Al abrir la página, usa el idioma que la persona eligió la última vez (si lo hay).
function idiomaInicial() {
  try {
    const guardado = localStorage.getItem(CLAVE_GUARDADO);
    if (IDIOMAS.includes(guardado)) return guardado;
  } catch (error) {
    // Algunos navegadores bloquean localStorage; en ese caso empezamos en español.
  }
  return 'es';
}

let idiomaActual = idiomaInicial();

export function obtenerIdioma() {
  return idiomaActual;
}

export function cambiarIdioma(nuevoIdioma) {
  idiomaActual = nuevoIdioma;
  try {
    localStorage.setItem(CLAVE_GUARDADO, nuevoIdioma);
  } catch (error) {
    // Si no se puede guardar, el cambio funciona igual mientras la página esté abierta.
  }
}

// t = "traducir".
// Si recibe { es: '...', en: '...' } regresa el texto del idioma actual.
// Si recibe un texto normal (por ejemplo 'JavaScript'), lo regresa tal cual.
export function t(valor) {
  if (valor && typeof valor === 'object' && !Array.isArray(valor)) {
    return valor[idiomaActual] ?? valor.es;
  }
  return valor;
}
