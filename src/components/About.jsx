import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">Sobre mí</h2>
      <p className="section-text">{profile.bio}</p>
      {profile.cvUrl && (
        <a className="btn btn-secondary" href={profile.cvUrl} download>
          Descargar CV
        </a>
      )}
    </section>
  )
}
