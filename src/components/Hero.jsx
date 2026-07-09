import { useEffect, useState } from 'react'
import { LuArrowRight, LuDownload, LuMail, LuLinkedin, LuMapPin } from 'react-icons/lu'
import { profile } from '../data/content'

const ROLES = [
  profile.title,
  ...profile.focus.split(' · '),
  profile.degree.split(' — ')[0],
]

function useTypewriter(roles) {
  const [ri, setRi] = useState(0)
  const [shown, setShown] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = roles[ri]
    if (!deleting) {
      if (shown.length < target.length) {
        const t = setTimeout(() => setShown(target.slice(0, shown.length + 1)), 75)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }
    if (shown.length > 0) {
      const t = setTimeout(() => setShown(shown.slice(0, -1)), 35)
      return () => clearTimeout(t)
    }
    setDeleting(false)
    setRi((ri + 1) % roles.length)
  }, [shown, deleting, ri, roles])

  return shown
}

export default function Hero() {
  const shown = useTypewriter(ROLES)

  return (
    <section id="top" className="hero">
      <div className="hero-badge">
        <LuMapPin size={13} />
        {profile.location} · {profile.degree.split(' — ')[1]}
      </div>

      <p className="eyebrow">{profile.focus}</p>
      <h1>
        Hola, soy <span className="gradient-text">{profile.name.split(' ')[0]}</span>
      </h1>

      <div className="hero-typewriter">
        <span>{shown}</span>
        <span className="hero-cursor">|</span>
      </div>

      <p className="hero-sub">
        {profile.degree} — {profile.university}
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          Ver proyectos
          <LuArrowRight size={16} />
        </a>
        <a className="btn btn-secondary" href={profile.cvUrl} download>
          <LuDownload size={16} />
          Descargar CV
        </a>
      </div>

      <div className="hero-social">
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <LuMail size={17} />
        </a>
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LuLinkedin size={17} />
        </a>
      </div>
    </section>
  )
}
