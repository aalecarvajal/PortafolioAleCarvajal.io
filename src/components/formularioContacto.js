import { t } from '../i18n/idioma.js';
import { textos } from '../i18n/textos.js';

// Le da vida al formulario de contacto:
// 1. Revisa que los campos obligatorios estén bien llenos (validación de Bootstrap).
// 2. Envía el mensaje a Formspree, que me lo reenvía a mi correo.
//    Si todavía no hay dirección de Formspree, abre la app de correo como respaldo.
export function activarFormularioContacto(formulario, { formspreeUrl, correoDestino }) {
  const aviso = formulario.querySelector('#aviso-contacto');
  const textoBoton = formulario.querySelector('[data-i18n="contacto.enviar"]');
  const boton = formulario.querySelector('button[type="submit"]');

  // Muestra el aviso verde (éxito) o rojo (error) debajo del botón
  function mostrarAviso(texto, tipo) {
    aviso.textContent = texto;
    aviso.classList.remove('d-none', 'alert-success', 'alert-danger');
    aviso.classList.add(tipo === 'error' ? 'alert-danger' : 'alert-success');
  }

  // Deja el formulario vacío y listo para otro mensaje
  function limpiar() {
    formulario.reset();
    formulario.classList.remove('was-validated');
  }

  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault(); // evita que la página se recargue

    // checkValidity() revisa los "required" y que el correo tenga formato válido
    if (!formulario.checkValidity()) {
      formulario.classList.add('was-validated'); // Bootstrap pinta en rojo lo que falta
      aviso.classList.add('d-none');
      return;
    }

    const datos = new FormData(formulario);

    // Respaldo: sin Formspree configurado, abre la app de correo con el mensaje armado
    if (!formspreeUrl) {
      const cuerpo = `${datos.get('nombre')} (${datos.get('email')})\n\n${datos.get('mensaje')}`;
      window.location.href =
        `mailto:${correoDestino}?subject=${encodeURIComponent(datos.get('asunto'))}&body=${encodeURIComponent(cuerpo)}`;
      mostrarAviso(t(textos.contacto.exitoCorreo), 'exito');
      limpiar();
      return;
    }

    // "_subject" es un campo especial de Formspree: se vuelve el asunto del correo que me llega
    datos.append('_subject', `Portafolio: ${datos.get('asunto')}`);

    // Mientras se envía, el botón se desactiva para que no se mande dos veces
    boton.disabled = true;
    textoBoton.textContent = t(textos.contacto.enviando);

    try {
      // fetch envía los datos a Formspree sin salir de la página.
      // "await" espera la respuesta antes de seguir con la siguiente línea.
      const respuesta = await fetch(formspreeUrl, {
        method: 'POST',
        body: datos,
        headers: { Accept: 'application/json' }, // pide la respuesta en JSON en lugar de otra página
      });

      if (!respuesta.ok) throw new Error('Formspree respondió con un error');

      mostrarAviso(t(textos.contacto.exito), 'exito');
      limpiar();
    } catch (error) {
      // Llega aquí si no hay internet o si Formspree rechazó el envío
      mostrarAviso(t(textos.contacto.error), 'error');
    } finally {
      // "finally" se ejecuta siempre, haya salido bien o mal
      boton.disabled = false;
      textoBoton.textContent = t(textos.contacto.enviar);
    }
  });
}
