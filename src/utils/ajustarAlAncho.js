// Cambia el tamaño de letra de "elemento" para que su línea más larga
// mida lo mismo de ancho que "referencia".
// Se usa para que mi nombre del Hero tenga el mismo ancho que la descripción.
export function ajustarAlAncho(elemento, referencia) {
  // Mide el texto y corrige su tamaño con una regla de tres:
  // si el texto mide la mitad de lo que debería, la letra debe ser el doble de grande.
  function corregir() {
    elemento.style.whiteSpace = 'nowrap'; // mide cada línea completa, sin que se parta
    const anchoTexto = elemento.getBoundingClientRect().width;
    const anchoReferencia = referencia.getBoundingClientRect().width;
    elemento.style.whiteSpace = '';
    if (!anchoTexto || !anchoReferencia) return;

    const tamañoActual = parseFloat(getComputedStyle(elemento).fontSize);
    // El 0.99 deja un margen mínimo para que el redondeo no parta la línea
    elemento.style.fontSize = `${tamañoActual * (anchoReferencia / anchoTexto) * 0.99}px`;
  }

  function ajustar() {
    elemento.style.fontSize = ''; // regresa al tamaño del CSS para medir desde cero
    corregir();
    corregir(); // segunda pasada: afina el resultado (el espacio entre letras no crece exacto)
  }

  ajustar();
  document.fonts.ready.then(ajustar);        // otra vez cuando termina de cargar League Spartan
  window.addEventListener('resize', ajustar); // y cada vez que cambia el tamaño de la ventana
}
