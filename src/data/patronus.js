import { rutaPublica } from '../utils/rutas.js';

// Cada objeto es un patronus de la barra lateral.
// Los textos tienen dos versiones: es (español) y en (inglés).
export const patronus = [
  {
    nombre: { es: 'Abejas', en: 'Bees' },
    skill: { es: 'Comunicación', en: 'Communication' },
    imagen: rutaPublica('animales/abejas.png'),
    descripcion: {
      es: 'Mi mayor fortaleza es la comunicación. Tengo una gran capacidad para escuchar, entender y transmitir a otros una idea clara y adaptada a su perspectiva. Por ejemplo, en producción de TV me asignaban para escuchar las indicaciones del productor, interpretarlas y comunicarlas al equipo.',
      en: 'Communication is my greatest strength. I’m good at listening, understanding and explaining ideas clearly, in a way that makes sense to each person. For example, in TV production I was often the one who listened to the producer’s instructions, interpreted them and passed them on to the team.',
    },
    justificacion: {
      es: 'Las abejas tienen un gran método de comunicación: bailan. Lo hacen para indicar a sus compañeras dónde hay polen para comer. Su comunicación es tan efectiva que transmiten la dirección, la distancia y la calidad del polen.',
      en: 'Bees have an amazing way of communicating: they dance. They do it to show other bees where to find pollen, and their dance is so precise that it tells them its direction, distance and quality.',
    },
  },
  {
    nombre: { es: 'Búfalo', en: 'Buffalo' },
    skill: { es: 'Colaboración con propósito', en: 'Collaboration with purpose' },
    imagen: rutaPublica('animales/bufalo.png'),
    descripcion: {
      es: 'El sentido de propósito es una gran motivación para lograr la colaboración entre los miembros de un equipo. Entender el objetivo de un proyecto y transmitirlo a mis compañeros es una de mis fortalezas.',
      en: 'A shared sense of purpose is what gets a team truly working together. One of my strengths is understanding a project’s goal and helping my teammates see it too.',
    },
    justificacion: {
      es: 'Los búfalos tienen una dinámica de colaboración muy fuerte. Con el propósito claro de sobrevivir ante los depredadores, unen sus fuerzas y son conocidos por ganar la batalla constantemente.',
      en: 'Buffalo are incredibly cooperative. With one clear goal, surviving predators, they band together and are known to come out on top again and again.',
    },
  },
  {
    nombre: { es: 'Elefante', en: 'Elephant' },
    skill: { es: 'Adaptabilidad y aprendizaje', en: 'Adaptability and learning' },
    imagen: rutaPublica('animales/elefante.png'),
    descripcion: {
      es: 'Me adapto con facilidad a nuevos entornos, tecnologías o metodologías porque disfruto aprender y conectar los nuevos conocimientos con mi experiencia previa.',
      en: 'I adapt easily to new environments, technologies and methodologies because I enjoy learning and connecting new knowledge with what I already know.',
    },
    justificacion: {
      es: 'Los elefantes son conocidos por su memoria, pero lo que hay detrás de esto es que tienen una gran capacidad de aprendizaje; por ejemplo, aprenden un nuevo lugar donde encontrar agua.',
      en: 'Elephants are known for their memory, but what’s really behind it is their great ability to learn; for example, they remember new places where they can find water.',
    },
  },
  {
    nombre: { es: 'Pingüino', en: 'Penguin' },
    skill: { es: 'Trabajo en equipo', en: 'Teamwork' },
    imagen: rutaPublica('animales/pinguino.png'),
    descripcion: {
      es: 'Llevo 10 años trabajando en equipo y considero que el potencial individual se multiplica colaborando.',
      en: 'I’ve been working in teams for 10 years, and I believe each person’s potential multiplies when we collaborate.',
    },
    justificacion: {
      es: 'Los pingüinos hacen casi todo en comunidad: anidan, cazan y se alimentan. El ejemplo más claro de su trabajo en equipo es que, para sobrevivir al frío, se juntan todos para conservar el calor.',
      en: 'Penguins do almost everything as a community: they nest, hunt and feed together. The clearest example of their teamwork is that, to survive the cold, they huddle together to keep warm.',
    },
  },
  {
    nombre: { es: 'Castor', en: 'Beaver' },
    skill: { es: 'Creatividad e innovación', en: 'Creativity and innovation' },
    imagen: rutaPublica('animales/castor.png'),
    descripcion: {
      es: 'Me gusta usar la creatividad como herramienta para la resolución de problemas: si algo no está funcionando, es porque necesita un cambio. Muchas veces las ideas creativas son las que nos dan una solución.',
      en: 'I like to use creativity to solve problems: if something isn’t working, it’s a sign that something needs to change. Often, it’s the creative ideas that lead to the solution.',
    },
    justificacion: {
      es: 'Los castores son grandes innovadores. Para mejorar su hábitat y asegurar su supervivencia, construyen presas desde cero para bloquear flujos de agua o hacer pequeños arroyos.',
      en: 'Beavers are great innovators. To improve their habitat and ensure their survival, they build dams from scratch to hold back water or create small streams.',
    },
  },
  {
    nombre: { es: 'Lobo gris', en: 'Gray wolf' },
    skill: { es: 'Resiliencia', en: 'Resilience' },
    imagen: rutaPublica('animales/lobo.png'),
    descripcion: {
      es: 'La resiliencia la he ganado a lo largo de mi trayectoria. He aprendido a ser flexible y a reconocer la importancia de tener una motivación clara que me sirva de guía, y esto me impulsa a seguir adelante.',
      en: 'I’ve built resilience throughout my career. I’ve learned to be flexible and to recognize the importance of having a clear motivation to guide me, and that keeps me moving forward.',
    },
    justificacion: {
      es: 'El lobo gris es capaz de recorrer hasta 50 km al día en busca de alimento. En el camino enfrenta climas hostiles y hambre, pero sigue adelante en búsqueda de su objetivo.',
      en: 'The gray wolf can travel up to 50 km a day in search of food. Along the way it faces harsh weather and hunger, but it keeps going toward its goal.',
    },
  },
  {
    nombre: { es: 'Lémur', en: 'Lemur' },
    skill: { es: 'Mi patronus es el lémur', en: 'My patronus is the lemur' },
    imagen: rutaPublica('animales/lemur.png'),
    descripcion: {
      es: 'El lémur es mi animal favorito, y no solo porque sea adorable: es curioso, sociable y siempre está explorando. Creo que nos parecemos bastante.',
      en: 'The lemur is my favorite animal, and not just because it’s adorable: it’s curious, social and always exploring. I think we’re pretty alike.',
    },
    justificacion: {
      es: 'Los lémures de cola anillada toman el sol cada mañana sentados con los brazos abiertos, como en una pose de yoga. Así recargan energía antes de empezar el día.',
      en: 'Ring-tailed lemurs sunbathe every morning sitting with their arms open, like in a yoga pose. That’s how they recharge before starting the day.',
    },
  },
];
