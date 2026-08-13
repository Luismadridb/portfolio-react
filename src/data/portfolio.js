export const profile = {
  name: 'Luis Madrid Barboza',
  role: 'Desarrollador Fullstack',
  location: 'Temuco, Chile',
  email: 'luismbarboza97@gmail.com',
  github: 'https://github.com/Luismadridb',
  linkedin: 'https://www.linkedin.com/in/luis-madrid-barboza-41b0b61b3/',
};

export const stackGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'Java', 'Python', 'Streamlit'],
  },
  {
    title: 'Datos',
    items: ['PostgreSQL', 'SQL'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'Docker', 'AWS'],
  },
];

export const experience = [
  {
    date: '2026',
    role: 'Kim_neyun',
    badge: 'Privado',
    badgeType: 'default',
    desc: 'Desarrollo frontend (Python) para un proyecto predictor de eventos hospitalarios en el sector salud. Fue mi primera experiencia profesional en TI: participar en un producto real, con datos reales y un equipo detrás. El repositorio es privado, pero puedo mostrar detalle en entrevista.',
  },
  {
    date: 'Antes de TI',
    role: 'PYME de prótesis en impresión 3D',
    badge: 'Sin código',
    badgeType: 'pub',
    desc: 'Diseño y producción física de prótesis a medida mediante impresión 3D, previo a mi carrera en tecnología — sin desarrollo de software involucrado. De ahí vienen los hábitos que hoy aplico al código: iterar rápido, probar y cuidar el detalle que hace que una pieza (o una función) encaje a la primera.',
  },
];

export const projects = [
  {
    name: 'Kim_neyun',
    badge: 'Privado',
    desc: 'Frontend del predictor de eventos hospitalarios. Mi primera experiencia profesional en TI, en el sector salud.',
    tags: ['Python'],
    link: null,
  },
  {
    name: 'mediturnos-core',
    badge: 'Público',
    desc: 'Core de dominio puro para MediTurnos, sistema de agendamiento de turnos médicos. Entidades desacopladas de frameworks y suite de tests con JUnit 5 y Mockito bajo patrón AAA.',
    tags: ['Java'],
    link: 'https://github.com/Luismadridb/mediturnos-core',
  },
  {
    name: 'tiketon_boleteria',
    badge: 'Público',
    desc: 'Boletería web para gestionar reservas de entradas a eventos, consumiendo información desde un servicio externo.',
    tags: ['TypeScript', 'Vite'],
    link: 'https://github.com/Luismadridb/tiketon_boleteria',
  },
  {
    name: 'taskflow',
    badge: 'Público',
    desc: 'Gestor de tareas en JavaScript puro: programación orientada a objetos, ES6+, eventos, asincronía y consumo de API con persistencia en localStorage.',
    tags: ['JavaScript'],
    link: 'https://github.com/Luismadridb/taskflow',
  },
  {
    name: 'node-express-web-app',
    badge: 'Público',
    desc: 'Backend con Node.js y Express organizado en arquitectura MVC (controllers, services, middlewares) con logging de visitas a archivo.',
    tags: ['Node.js', 'Express'],
    link: 'https://github.com/Luismadridb/node-express-web-app',
  },
  {
    name: 'recordatorio-app',
    badge: 'Público',
    desc: 'Aplicación de recordatorios con backend en Node.js y persistencia en SQL, con una versión adicional para mobile.',
    tags: ['Node.js', 'SQL'],
    link: 'https://github.com/Luismadridb/recordatorio-app',
  },
  {
    name: 'alke_wallet',
    badge: 'Público',
    desc: 'Simulación de wallet virtual: inicio de sesión, depósitos, envío de dinero y visualización de saldo, con Bootstrap y jQuery.',
    tags: ['HTML/CSS/JS'],
    link: 'https://github.com/Luismadridb/alke_wallet',
  },
  {
    name: 'app-web-jwt',
    badge: 'Público',
    desc: 'Aplicación web con autenticación basada en JWT, para practicar manejo de sesiones y rutas protegidas.',
    tags: ['JavaScript'],
    link: 'https://github.com/Luismadridb/app-web-jwt',
  },
  {
    name: 'app-web-crud',
    badge: 'Público',
    desc: 'Aplicación web con operaciones CRUD completas para la gestión de datos.',
    tags: ['JavaScript'],
    link: 'https://github.com/Luismadridb/app-web-crud',
  },
  {
    name: 'aplicacion-en-consola-web-',
    badge: 'Público',
    desc: 'Aplicación pensada originalmente para consola, llevada a una interfaz web.',
    tags: ['JavaScript'],
    link: 'https://github.com/Luismadridb/aplicacion-en-consola-web-',
  },
];

export const education = [
  {
    tag: '2026',
    name: 'Bootcamp Full Stack Java',
    note: 'En curso — ampliando el stack backend.',
  },
  {
    tag: 'Previo',
    name: 'Bootcamp Full Stack JavaScript',
    note: 'Fundamentos de frontend, backend y proyectos integradores.',
  },
  {
    tag: 'Base',
    name: 'Técnico Universitario en Diseño y Producción Industrial',
    note: 'Especialización en moldes y matrices.',
  },
];
