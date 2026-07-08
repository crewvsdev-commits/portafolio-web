import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">{profile.focus}</p>
      <h1>{profile.name}</h1>
      <h2 className="hero-title">{profile.title}</h2>
      <p className="hero-sub">
        {profile.degree} — {profile.university}
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          Ver proyectos
        </a>
        <a className="btn btn-secondary" href="#contact">
          Contactarme
        </a>
      </div>
    </section>
  )
}
