// Contenido centralizado del portafolio.
// TODO: reemplazar los PLACEHOLDER una vez llegue el CV de Victor.

export const profile = {
  name: 'Victor Ricardo Santamaria Machaca',
  title: 'Desarrollador de Software',
  focus: 'Móvil · Web · Software',
  university: 'Universidad Nacional Federico Villarreal',
  degree: 'Ingeniería Informática (estudiante)',
  bio: 'PLACEHOLDER: bio corta de 2-3 líneas sobre tu experiencia y lo que te apasiona construir. Se actualizará con los datos del CV.',
  email: 'desarrollo.esystemtic@gmail.com',
  location: 'Lima, Perú',
  social: {
    github: '#', // TODO: link a GitHub
    linkedin: '#', // TODO: link a LinkedIn
  },
  cvUrl: null, // TODO: subir /public/cv.pdf y poner '/cv.pdf'
}

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript'], // PLACEHOLDER: confirmar con CV
  },
  {
    category: 'Backend',
    items: ['Python', 'Node.js'], // PLACEHOLDER
  },
  {
    category: 'Móvil',
    items: ['Flutter', 'Dart'], // PLACEHOLDER
  },
  {
    category: 'Datos / IA',
    items: ['LLMs (Ollama)', 'RAG', 'Fine-tuning LoRA'], // PLACEHOLDER
  },
  {
    category: 'Infraestructura',
    items: ['MySQL', 'Docker', 'Cloudflare'], // PLACEHOLDER
  },
]

export const projects = [
  {
    title: 'E-Tutor UNFV',
    description:
      'PLACEHOLDER: sistema de tutoría con LLM (llama3:8b) vía Ollama, RAG con documentos de la universidad y fine-tuning LoRA.',
    tags: ['Python', 'Ollama', 'RAG', 'LoRA'],
    link: null,
    status: 'En progreso',
  },
  {
    title: 'Hackaton — Tutoría Universitaria',
    description:
      'PLACEHOLDER: plataforma de tutoría académica construida en React + TypeScript.',
    tags: ['React', 'TypeScript'],
    link: null,
    status: 'En progreso',
  },
  {
    title: 'Lyra ERP',
    description: 'PLACEHOLDER: sistema ERP para gestión financiera.',
    tags: ['ERP', 'MySQL'],
    link: null,
    status: 'Privado',
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
    role: 'PLACEHOLDER: cargo',
    company: 'PLACEHOLDER: empresa/institución',
    period: 'PLACEHOLDER: 2024 — Presente',
    description: 'PLACEHOLDER: descripción breve de responsabilidades y logros.',
  },
]

export const blogPosts = [
  // PLACEHOLDER: agregar posts cuando existan.
  // { title: '...', date: '...', excerpt: '...', link: '#' },
]
