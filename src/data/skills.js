// Habilidades técnicas de la sección "Skills", agrupadas por categoría.
// Cada categoría es una tarjeta. Los íconos son de Bootstrap Icons (https://icons.getbootstrap.com).
export const categoriasSkills = [
  {
    titulo: 'Frontend',
    icono: 'bi-code-slash',
    skills: [
      { nombre: 'HTML5', icono: 'bi-filetype-html' },
      { nombre: 'CSS3', icono: 'bi-filetype-css' },
      { nombre: 'JavaScript', icono: 'bi-filetype-js' },
      { nombre: 'Bootstrap', icono: 'bi-bootstrap' },
    ],
  },
  {
    titulo: 'Backend',
    icono: 'bi-server',
    skills: [
      { nombre: 'Java', icono: 'bi-cup-hot' },
      { nombre: 'Spring Boot', icono: 'bi-leaf' },
      { nombre: 'Python', icono: 'bi-filetype-py' },
      { nombre: { es: 'Programación Orientada a Objetos', en: 'Object-Oriented Programming' }, icono: 'bi-boxes' },
    ],
  },
  {
    titulo: { es: 'Bases de datos', en: 'Databases' },
    icono: 'bi-database',
    skills: [
      { nombre: 'SQL', icono: 'bi-filetype-sql' },
      { nombre: 'MySQL', icono: 'bi-database' },
    ],
  },
  {
    titulo: { es: 'Metodologías ágiles', en: 'Agile methodologies' },
    icono: 'bi-arrow-repeat',
    skills: [
      { nombre: 'Scrum', icono: 'bi-people' },
      { nombre: 'Agile', icono: 'bi-lightning-charge' },
      { nombre: 'Jira', icono: 'bi-kanban' },
    ],
  },
  {
    titulo: { es: 'Herramientas', en: 'Tools' },
    icono: 'bi-tools',
    skills: [
      { nombre: 'Git', icono: 'bi-git' },
      { nombre: 'GitHub', icono: 'bi-github' },
      { nombre: { es: 'IA generativa (prompting)', en: 'Generative AI (prompting)' }, icono: 'bi-stars' },
    ],
  },
];
