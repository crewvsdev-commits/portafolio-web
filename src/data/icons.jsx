// Mapa de tecnología/tag -> ícono. Los que no tienen logo de marca
// (SQL genérico, ETL, RAG, etc.) usan un ícono conceptual de Lucide.
import {
  SiPhp,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiSpring,
  SiApachetomcat,
  SiNodedotjs,
  SiMysql,
  SiDocker,
  SiCloudflare,
  SiFirebase,
  SiOllama,
  SiCloudinary,
  SiScrumalliance,
  SiFastapi,
  SiJsonwebtokens,
  SiPostgresql,
  SiRailway,
  SiSqlalchemy,
  SiRedis,
} from 'react-icons/si'
import { DiJava, DiCss3 } from 'react-icons/di'
import {
  LuDatabase,
  LuChartColumn,
  LuWorkflow,
  LuBrain,
  LuSparkles,
  LuShield,
  LuShieldCheck,
  LuServer,
  LuTable,
  LuWebhook,
  LuGlobe,
  LuKeyRound,
  LuCode,
  LuSmartphone,
  LuCloud,
} from 'react-icons/lu'

export const techIcons = {
  PHP: SiPhp,
  Java: DiJava,
  JavaScript: SiJavascript,
  Python: SiPython,
  HTML: SiHtml5,
  CSS: DiCss3,
  React: SiReact,
  TypeScript: SiTypescript,
  Flutter: SiFlutter,
  Dart: SiDart,
  Spring: SiSpring,
  JSP: LuServer,
  'Node.js': SiNodedotjs,
  'Apache Tomcat': SiApachetomcat,
  SQL: LuDatabase,
  'Power BI': LuChartColumn,
  'Excel (Macros)': LuTable,
  ETL: LuWorkflow,
  'Firebase Firestore': SiFirebase,
  Firebase: SiFirebase,
  Ollama: SiOllama,
  RAG: LuBrain,
  LoRA: LuSparkles,
  'Fine-tuning LoRA': LuSparkles,
  MySQL: SiMysql,
  Docker: SiDocker,
  Cloudflare: SiCloudflare,
  'VPN Site-to-Site': LuShield,
  'Big Data': LuDatabase,
  BI: LuChartColumn,
  Scrum: SiScrumalliance,
  Cloudinary: SiCloudinary,
  FastAPI: SiFastapi,
  'APIs REST': LuWebhook,
  JWT: SiJsonwebtokens,
  OAuth2: LuShieldCheck,
  CORS: LuGlobe,
  'ORM (SQLAlchemy)': SiSqlalchemy,
  PostgreSQL: SiPostgresql,
  Railway: SiRailway,
  'Zero Trust': LuShieldCheck,
  Seguridad: LuShieldCheck,
  Encriptación: LuKeyRound,
  Redis: SiRedis,
}

export function TechIcon({ name, ...props }) {
  const Icon = techIcons[name]
  if (!Icon) return null
  return <Icon aria-hidden="true" {...props} />
}

// Ícono representativo por categoría de skills (sección Skills).
export const categoryIcons = {
  Lenguajes: LuCode,
  'Frontend / Móvil': LuSmartphone,
  Backend: LuServer,
  'Datos & BI': LuChartColumn,
  'IA / LLMs': LuBrain,
  Infraestructura: LuCloud,
}

export function CategoryIcon({ name, ...props }) {
  const Icon = categoryIcons[name]
  if (!Icon) return null
  return <Icon aria-hidden="true" {...props} />
}
