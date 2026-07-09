import { LuLinkedin, LuMail } from 'react-icons/lu'
import { profile } from '../data/content'

const channels = [
  { Icon: LuMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { Icon: LuLinkedin, label: 'LinkedIn', value: '/in/crewdev', href: profile.social.linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contacto</h2>
      <p className="section-text">
        ¿Tienes un proyecto en mente o quieres conversar? Escríbeme.
      </p>

      <div className="contact-grid">
        {channels.map(({ Icon, label, value, href }) => (
          <a
            key={label}
            className="contact-card"
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span className="contact-card-icon">
              <Icon size={20} />
            </span>
            <span className="contact-card-label">{label}</span>
            <span className="contact-card-value">{value}</span>
          </a>
        ))}
      </div>

      <a className="btn btn-primary contact-cta" href={`mailto:${profile.email}`}>
        <LuMail size={18} />
        Enviar mensaje
      </a>
    </section>
  )
}
