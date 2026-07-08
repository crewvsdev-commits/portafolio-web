// Contenido centralizado del portafolio.

export const profile = {
  name: 'Victor Ricardo Santamaria Machaca',
  title: 'Desarrollador de Software',
  focus: 'Backend · APIs · Seguridad',
  university: 'Universidad Nacional Federico Villarreal',
  degree: 'Ingeniería Informática — 9° ciclo',
  bio: 'Estudiante de Ingeniería Informática (UNFV) enfocado en backend: diseño de APIs REST, autenticación (JWT/OAuth2) y seguridad de la información, con experiencia real construyendo un sistema en producción sobre FastAPI + PostgreSQL. También trabajo con PHP, Java, Flutter y herramientas de datos como SQL y Power BI, con foco en resolver problemas reales de forma proactiva y en equipo.',
  email: 'crewvsdev@gmail.com',
  phone: '+51 994 934 507',
  location: 'Lima Metropolitana, Perú',
  social: {
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
    level: 90,
    items: [
      'FastAPI',
      'APIs REST',
      'JWT',
      'OAuth2',
      'CORS',
      'ORM (SQLAlchemy)',
      'Spring',
      'JSP',
      'Node.js',
      'Apache Tomcat',
    ],
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
    level: 72,
    items: ['PostgreSQL', 'MySQL', 'Railway', 'Docker', 'Cloudflare', 'VPN Site-to-Site'],
  },
]

export const projects = [
  {
    title: 'E-zyro',
    description:
      'Sistema integral de gestión para E-System TIC (RRHH, Finanzas y Logística): control de asistencia con huella dactilar y verificación facial por IA, cierre de ejercicio y reportes financieros con exportación PLE SUNAT, facturación electrónica CPE, y un asistente de IA (E-zybot) embebido en la app móvil con más de 40 pantallas. Backend en FastAPI sobre Railway con autenticación JWT, ORM SQLAlchemy sobre PostgreSQL, notificaciones en tiempo real vía Firebase y archivos en Cloudinary. A cargo del desarrollo móvil completo en Flutter.',
    tags: ['FastAPI', 'JWT', 'PostgreSQL', 'ORM (SQLAlchemy)', 'Flutter', 'Firebase', 'Cloudinary', 'Railway'],
    link: null,
    status: 'En progreso',
  },
  {
    title: 'Police Prep',
    description:
      'Plataforma de preparación para el examen de ingreso a la PNP: banco de preguntas, simulacros y flashcards organizados en las 8 áreas reales del examen (Constitución, Derecho Penal, Legislación Policial, Razonamiento Verbal/Lógico, etc.), con rachas de estudio y panel de administración de contenido. Autenticación JWT firmada con RSA (RS256) y control de dispositivo único por huella de dispositivo, que revoca sesiones de otros equipos para evitar el préstamo de cuentas. Rate limiting con Redis (ventana deslizante en login), cabeceras de seguridad, auditoría y trazabilidad (request ID, Sentry, OpenTelemetry) como middleware. Backend en FastAPI + SQLAlchemy 2.0 async sobre PostgreSQL; cliente móvil en Flutter (Clean Architecture + Riverpod) en desarrollo.',
    tags: ['FastAPI', 'PostgreSQL', 'Redis', 'JWT', 'Flutter', 'Seguridad'],
    link: null,
    status: 'En progreso',
  },
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
    description:
      'Bóveda de documentos de cero conocimiento (Zero-Knowledge): el servidor nunca ve contraseñas, llaves de cifrado ni el contenido de los archivos, solo bytes opacos. El cifrado AES-256-GCM ocurre íntegramente en el cliente antes de subir cualquier archivo, las contraseñas se derivan con PBKDF2/Argon2id y nunca viajan en claro, y cada acción queda en una cadena de auditoría firmada con ECDSA y verificada en el servidor sobre una tabla append-only (un trigger de PostgreSQL rechaza cualquier UPDATE/DELETE). Incluye verificación en dos pasos por TOTP, gestión de dispositivos de confianza y una build de producción endurecida (Vite, sin `eval`, CSP estricta sin `unsafe-inline`). Backend en FastAPI + SQLAlchemy async sobre PostgreSQL, desplegado con Docker detrás de Cloudflare Tunnel.',
    tags: ['FastAPI', 'PostgreSQL', 'JWT', 'Docker', 'Cloudflare', 'Seguridad'],
    link: null,
    status: 'En progreso',
  },
]

export const experience = [
  {
    role: 'Asistente TIC',
    company: 'E-System TIC',
    period: 'Abril 2026 — Presente',
    description:
      'Único encargado del desarrollo móvil completo (Flutter) de E-zyro, un sistema integral de gestión (RRHH, Finanzas, Logística) con backend en FastAPI sobre Railway: autenticación JWT con refresh tokens, biometría por huella dactilar y verificación facial con IA para el control de asistencia, ORM con SQLAlchemy sobre PostgreSQL, notificaciones en tiempo real con Firebase Cloud Messaging, almacenamiento de archivos en Cloudinary y envío de correos automatizado vía Google Apps Script.',
  },
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
