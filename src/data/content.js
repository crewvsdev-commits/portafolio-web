// Contenido centralizado del portafolio.

export const profile = {
  name: 'Victor Ricardo Santamaria Machaca',
  title: 'Desarrollador de Software',
  focus: 'Móvil · Web · Datos',
  university: 'Universidad Nacional Federico Villarreal',
  degree: 'Ingeniería Informática — 9° ciclo',
  bio: 'Estudiante de Ingeniería Informática (UNFV) con experiencia en proyectos de desarrollo tecnológico en áreas como gestión de responsabilidad social, domótica y control de acceso. Trabajo con PHP, Java, JavaScript, Flutter y herramientas de datos como SQL y Power BI, con foco en resolver problemas reales de forma proactiva y en equipo.',
  email: 'crewvsdev@gmail.com',
  phone: '+51 994 934 507',
  location: 'Lima Metropolitana, Perú',
  social: {
    github: '#', // TODO: link a GitHub
    linkedin: 'https://linkedin.com/in/crewdev',
  },
  cvUrl: '/cv.pdf',
}

// `level` es un 0-100 orientativo (uso real en proyectos + experiencia),
// se usa para el radar y los anillos de la sección Skills.
export const skills = [
  {
    category: 'Lenguajes',
    level: 85,
    items: ['PHP', 'Java', 'JavaScript', 'Python', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend / Móvil',
    level: 75,
    items: ['React', 'TypeScript', 'Flutter', 'Dart'],
  },
  {
    category: 'Backend',
    level: 70,
    items: ['Spring', 'JSP', 'Node.js', 'Apache Tomcat'],
  },
  {
    category: 'Datos & BI',
    level: 80,
    items: ['SQL', 'Power BI', 'Excel (Macros)', 'ETL', 'Firebase Firestore'],
  },
  {
    category: 'IA / LLMs',
    level: 65,
    items: ['Ollama', 'RAG', 'Fine-tuning LoRA'],
  },
  {
    category: 'Infraestructura',
    level: 60,
    items: ['MySQL', 'Docker', 'Cloudflare', 'VPN Site-to-Site'],
  },
]

export const projects = [
  {
    title: 'E-Tutor UNFV',
    description:
      'Asistente académico con IA para la UNFV, nacido en un Hackaton: chatbot con base de conocimiento institucional cerrada (cursos y sílabos), motor RAG sobre documentos de la universidad, fine-tuning LoRA de un LLM local (llama3:8b vía Ollama) y una interfaz web en React + TypeScript.',
    tags: ['React', 'TypeScript', 'Python', 'Ollama', 'RAG', 'LoRA'],
    link: null,
    status: 'En progreso',
  },
  {
    title: 'App Móvil de Responsabilidad Social',
    description:
      'App multiplataforma en Flutter para fortalecer la interacción alumno–universidad: publicaciones en tiempo real, notificaciones push, afiliación estudiantil y recompensas, con datos en Firebase Firestore y multimedia en Cloudinary.',
    tags: ['Flutter', 'Firebase', 'Cloudinary'],
    link: null,
    status: 'Finalizado',
  },
  {
    title: 'App Móvil de Compra y Subasta de Productos',
    description:
      'App multiplataforma en Flutter para compra y subasta de productos, con autenticación de usuarios, subastas en tiempo real, notificaciones push y base de datos en Firebase Firestore.',
    tags: ['Flutter', 'Firebase'],
    link: null,
    status: 'Finalizado',
  },
  {
    title: 'Gestión y Análisis de Data — Proyecto BI',
    description:
      'Proyecto de Business Intelligence para una empresa de electricidad: análisis de consumo eléctrico, integración de múltiples fuentes de datos, procesos ETL y dashboards de KPIs en Power BI.',
    tags: ['Power BI', 'ETL', 'BI'],
    link: null,
    status: 'Finalizado',
  },
  {
    title: 'Sistema de Responsabilidad Social',
    description:
      'Sistema web para la gestión de actividades de responsabilidad social universitaria: registro de usuarios, publicación de contenido, blog informativo y mantenimiento del sistema.',
    tags: ['PHP', 'SQL', 'Scrum'],
    link: null,
    status: 'Finalizado',
  },
  {
    title: 'Proyecto en Data Growth',
    description:
      'Aplicación de Big Data para el análisis y gestión de participantes entre actores, orientada a la toma de decisiones basada en datos.',
    tags: ['Big Data'],
    link: null,
    status: 'Finalizado',
  },
  {
    title: 'Bóveda Digital',
    description: 'PLACEHOLDER: descripción del proyecto.',
    tags: [],
    link: null,
    status: 'En progreso',
  },
]

export const experience = [
  {
    role: 'Practicante de Sistemas // TI',
    company: 'Vidawasi',
    period: 'Abril — Julio 2025',
    description:
      'Implementé y configuré el ERP Openclinic sobre Apache Tomcat, desarrollé el módulo odontológico (odontograma) con multidiagnóstico y reportes, y llevé a cabo la conexión VPN Site-to-Site entre las sedes de Lima y Cusco. Mapeo de base de datos e integración con Spring, evaluación de infraestructura tecnológica y documentación técnica de sistemas y red.',
  },
]

export const blogPosts = [
  // PLACEHOLDER: agregar posts cuando existan.
  // { title: '...', date: '...', excerpt: '...', link: '#' },
]
