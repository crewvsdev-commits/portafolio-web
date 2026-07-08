import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contacto</h2>
      <p className="section-text">
        ¿Tienes un proyecto en mente o quieres conversar? Escríbeme.
      </p>
      <div className="contact-links">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="social-links">
          <a href={profile.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
