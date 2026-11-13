// Textos fijos de la página en los dos idiomas.
// En el HTML se conectan con atributos como data-i18n="nav.proyectos".
export const textos = {
  pagina: {
    titulo: {
      es: 'Ale Carvajal | Desarrolladora Full Stack Java',
      en: 'Ale Carvajal | Java Full Stack Developer',
    },
    descripcion: {
      es: 'Portafolio de Aída Alejandra Carvajal, Desarrolladora Full Stack Java Jr.',
      en: 'Portfolio of Aída Alejandra Carvajal, Junior Java Full Stack Developer.',
    },
  },

  // Menú. También se usan en los títulos de cada sección
  nav: {
    etiqueta: { es: 'Navegación principal', en: 'Main navigation' },
    logo: { es: 'Ale Carvajal - Inicio', en: 'Ale Carvajal - Home' },
    abrirMenu: { es: 'Abrir menú', en: 'Open menu' },
    proyectos: { es: 'Proyectos', en: 'Projects' },
    sobreMi: { es: 'Sobre Mí', en: 'About Me' },
    skills: { es: 'Skills', en: 'Skills' },
    contacto: { es: 'Contacto', en: 'Contact' },
    cambiarIdioma: { es: 'Cambiar idioma a inglés', en: 'Switch language to Spanish' },
  },

  sidebar: {
    etiqueta: { es: 'Skills principales', en: 'Key skills' },
    instruccion: { es: 'Haz clic en cada patronus.', en: 'Click each patronus.' },
    botonMovil: { es: 'Mis soft skills', en: 'My soft skills' },
    cerrar: { es: 'Cerrar', en: 'Close' },
  },

  hero: {
    texto: {
      es: 'Soy una <strong>Desarrolladora Full Stack Java Jr</strong> con especial interés en el impacto de la colaboración humana para lograr el mejor resultado en el desarrollo de producto. Tengo gran capacidad para detectar áreas de oportunidad en la comunicación de los equipos y establecer soluciones para optimizarla.<span class="d-block mt-3">Estoy certificada como <strong>Professional Scrum Master</strong>.</span>',
      en: 'I’m a <strong>Junior Java Full Stack Developer</strong> who’s especially interested in how human collaboration leads to better products. I have a knack for identifying communication gaps within teams and putting practical solutions in place to close them.<span class="d-block mt-3">I’m also a certified <strong>Professional Scrum Master</strong>.</span>',
    },
    foto: {
      es: 'Fotografía de Aída Alejandra Carvajal',
      en: 'Photo of Aída Alejandra Carvajal',
    },
  },

  // Sección de contacto y formulario
  contacto: {
    intro: {
      es: '¡Colaboremos! Déjame tu mensaje y con gusto me pondré en contacto contigo.',
      en: 'Let’s work together! Send me a message and I’ll get back to you.',
    },
    encuentrame: { es: 'O encuéntrame en:', en: 'Or reach me at:' },
    nombre: { es: 'Nombre', en: 'Name' },
    nombrePh: { es: 'Tu nombre', en: 'Your name' },
    correo: { es: 'Correo electrónico', en: 'Email' },
    telefono: { es: 'Teléfono (opcional)', en: 'Phone (optional)' },
    asunto: { es: 'Asunto', en: 'Subject' },
    asuntoPh: { es: '¿En qué puedo ayudarte?', en: 'How can I help you?' },
    mensaje: { es: 'Mensaje', en: 'Message' },
    mensajePh: { es: 'Escribe tu mensaje aquí...', en: 'Write your message here...' },
    enviar: { es: 'Enviar mensaje', en: 'Send message' },
    errorNombre: { es: 'Escribe tu nombre.', en: 'Please enter your name.' },
    errorCorreo: { es: 'Escribe un correo válido.', en: 'Please enter a valid email.' },
    errorAsunto: { es: 'Escribe el asunto.', en: 'Please enter a subject.' },
    errorMensaje: { es: 'Escribe tu mensaje.', en: 'Please write your message.' },
    enviando: { es: 'Enviando...', en: 'Sending...' },
    exito: {
      es: '¡Gracias! Tu mensaje fue enviado. Te responderé pronto.',
      en: 'Thanks! Your message has been sent. I’ll be in touch soon.',
    },
    error: {
      es: 'No se pudo enviar el mensaje. Intenta de nuevo o escríbeme directo a mi correo.',
      en: 'The message couldn’t be sent. Please try again or email me directly.',
    },
  },

  // Textos que usa la tarjeta de proyecto
  proyecto: {
    proposito: { es: 'Propósito y problema', en: 'Goal and problem' },
    desafios: { es: 'Desafíos y soluciones', en: 'Challenges and solutions' },
    resultados: { es: 'Resultados', en: 'Results' },
    tecnologias: { es: 'Tecnologías', en: 'Technologies' },
    verCodigo: { es: 'Ver código', en: 'View code' },
    verDemo: { es: 'Ver demo', en: 'View demo' },
    videoDe: { es: 'Video demo de', en: 'Demo video of' },
    capturaDe: { es: 'Captura de', en: 'Screenshot of' },
    sinVideo: {
      es: 'Tu navegador no puede reproducir este video.',
      en: 'Your browser can’t play this video.',
    },
  },
};
