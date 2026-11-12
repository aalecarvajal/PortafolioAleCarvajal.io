import { rutaPublica } from '../utils/rutas.js';

// Cada objeto es un proyecto de la sección "Proyectos".
// Para agregar otro proyecto, copia un objeto completo, pégalo debajo y cambia sus datos.
// Los textos tienen dos versiones: es (español) y en (inglés).
// Si un enlace todavía no existe, déjalo vacío ('') y su botón no se mostrará.
export const proyectos = [
  {
    id: 'ajolote-grulla',
    titulo: {
      es: 'Ajolote & Grulla · E-commerce de papelería japonesa',
      en: 'Ajolote & Grulla · Japanese stationery e-commerce',
    },
    resumen: {
      es: 'E-commerce full stack de papelería japonesa para el mercado mexicano, desarrollado por un equipo de 9 personas con metodología Scrum. Fui Scrum Master y participé en el frontend y el backend.',
      en: 'Full stack e-commerce for Japanese stationery aimed at the Mexican market, built by a 9-person team using Scrum. I was the Scrum Master and contributed to both the frontend and the backend.',
    },
    imagen: rutaPublica('portafolio/portada-ajolote-grulla.jpg'),
    proposito: {
      es: 'Una PYME de papelería japonesa necesitaba vender en línea en México. Creamos una tienda con un catálogo curado y filtros por funcionalidad y estilo de diseño, carrito, pedidos, panel de administración y un chatbot que recomienda productos.',
      en: 'A small Japanese stationery business needed to sell online in Mexico. We built a store with a curated catalog filtered by function and design style, a shopping cart, orders, an admin panel and a chatbot that recommends products.',
    },
    contexto: {
      es: 'Equipo de 9 personas trabajando en 8 semanas, divididas en 3 sprints. Fui Scrum Master: facilité las ceremonias ágiles y gestioné el Product Backlog en Jira y GitHub. También elaboré la guía de diseño con wireframes y participé en el desarrollo del frontend y del backend.',
      en: 'A 9-person team working for 8 weeks, split into 3 sprints. As Scrum Master, I facilitated the agile ceremonies and managed the Product Backlog in Jira and GitHub. I also created the design guide with wireframes and contributed to frontend and backend development.',
    },
    desafios: [
      {
        reto: { es: 'Coordinar a un equipo de 9 personas.', en: 'Coordinating a 9-person team.' },
        solucion: {
          es: 'Facilité la adopción de Scrum: cuidé que se cumplieran las ceremonias ágiles y promoví la autogestión y una cultura colaborativa.',
          en: 'I helped the team adopt Scrum: I made sure the agile ceremonies took place and promoted self-management and a collaborative culture.',
        },
      },
      {
        reto: { es: 'Entregar un e-commerce completo en solo 3 sprints.', en: 'Delivering a complete e-commerce in just 3 sprints.' },
        solucion: {
          es: 'Gestioné el Product Backlog en Jira y GitHub con prioridades claras, para que cada sprint se enfocara en lo que más valor aportaba.',
          en: 'I managed the Product Backlog in Jira and GitHub with clear priorities, so each sprint focused on what delivered the most value.',
        },
      },
      {
        reto: {
          es: 'Mantener un diseño coherente con muchas personas trabajando en el frontend.',
          en: 'Keeping the design consistent with many people working on the frontend.',
        },
        solucion: {
          es: 'Elaboré una guía de diseño con wireframes que sirvió como referencia común para todo el equipo.',
          en: 'I created a design guide with wireframes that became a shared reference for the whole team.',
        },
      },
    ],
    resultados: [
      { es: 'E-commerce full stack organizado en 3 sprints de Scrum.', en: 'Full stack e-commerce organized in 3 Scrum sprints.' },
      {
        es: 'Catálogo con filtros, carrito, pedidos, panel de administración y chatbot recomendador.',
        en: 'Catalog with filters, shopping cart, orders, admin panel and recommendation chatbot.',
      },
      { es: 'Demo publicada en GitHub Pages.', en: 'Demo published on GitHub Pages.' },
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Spring Boot', 'MySQL'],
    enlaces: {
      github: 'https://github.com/EdGodinez/Ajolote-y-Grulla',
      demo: 'https://edgodinez.github.io/Ajolote-y-Grulla/',
    },
  },
  {
    id: 'runup',
    titulo: {
      es: 'RunUp · Ecommerce de tienda deportiva',
      en: 'RunUp · Sporting goods e-commerce',
    },
    resumen: {
      es: 'Ecommerce de una tienda de artículos para correr, desarrollado en equipo durante un hackatón de 6 horas. Yo construí el catálogo de productos.',
      en: 'E-commerce for a running gear store, built as a team during a 6-hour hackathon. I built the product catalog.',
    },
    imagen: rutaPublica('portafolio/portada-runup-catalogo.png'),
    video: rutaPublica('portafolio/runup-catalogo-v3.mp4'),
    proposito: {
      es: 'Crear una tienda en línea donde los corredores encuentren rápido lo que necesitan. El catálogo resuelve un problema común en cualquier ecommerce: filtrar muchas opciones hasta llegar al producto correcto y elegir talla, color y cantidad antes de agregarlo al carrito.',
      en: 'Create an online store where runners can quickly find what they need. The catalog solves a common e-commerce problem: narrowing down many options to the right product and choosing size, color and quantity before adding it to the cart.',
    },
    contexto: {
      es: 'Hackatón con límite de 6 horas, en un equipo de 4 personas. Desarrollé la página de catálogo y la base de datos de productos. Implementé un sistema de filtros combinables por categoría, género, talla, color, tipo de pisada y rango de precio, además de las tarjetas de producto con selección de talla, color y cantidad.',
      en: 'A 6-hour hackathon in a 4-person team. I developed the catalog page and the product database. I implemented a system of combinable filters by category, gender, size, color, pronation type and price range, plus product cards with size, color and quantity selection.',
    },
    desafios: [
      {
        reto: { es: 'Entregar un sitio funcional en solo 6 horas.', en: 'Delivering a working site in just 6 hours.' },
        solucion: {
          es: 'Trabajamos bajo presión con prioridades claras: primero lo indispensable (inicio, catálogo y carrito) y después los detalles. Así entregamos a tiempo un sitio completo.',
          en: 'We worked under pressure with clear priorities: the essentials first (home page, catalog and cart) and the details later. That’s how we delivered a complete site on time.',
        },
      },
      {
        reto: { es: 'Trabajar los 4 al mismo tiempo sobre el mismo código.', en: 'Four people working on the same code at the same time.' },
        solucion: {
          es: 'Usamos un flujo de trabajo en GitHub: cada integrante desarrolló en su propia rama, revisamos el código mediante pull requests y resolvimos juntos los conflictos de merge antes de integrar la versión final.',
          en: 'We used a GitHub workflow: each member developed on their own branch, we reviewed the code through pull requests and solved merge conflicts together before integrating the final version.',
        },
      },
      {
        reto: { es: 'Combinar seis filtros a la vez.', en: 'Combining six filters at once.' },
        solucion: {
          es: 'Una sola función revisa todos los filtros activos y muestra únicamente los productos que cumplen con todos.',
          en: 'A single function checks every active filter and shows only the products that match all of them.',
        },
      },
    ],
    resultados: [
      { es: 'Sitio funcional con inicio, catálogo y carrito de compras.', en: 'Working site with home page, catalog and shopping cart.' },
      { es: 'Diseño 100% responsive.', en: '100% responsive design.' },
      { es: 'Entregado dentro del tiempo límite.', en: 'Delivered within the time limit.' },
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Vite', 'Git', 'GitHub'],
    enlaces: {
      github: '', // pega aquí el enlace al repositorio
      demo: '',   // pega aquí el enlace a la página publicada
    },
  },
];
