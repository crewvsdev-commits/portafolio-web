import { LuCalendarCheck, LuMapPin } from 'react-icons/lu'
import { profile, stats } from '../data/content'

const nameParts = profile.name.split(' ')
const initials = `${nameParts[0][0]}${nameParts[2]?.[0] ?? nameParts[1][0]}`

export default function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">Sobre mí</h2>

      <div className="about-grid">
        <div className="about-avatar-col">
          <div className="about-avatar">
            <span>{initials}</span>
            <div className="about-avatar-dot" />
          </div>
          <div className="about-avatar-pill">
            <strong>{profile.degree.split(' — ')[1]}</strong>
            <span>en curso</span>
          </div>
        </div>

        <div className="about-text-col">
          <p className="section-text" style={{ margin: 0 }}>
            {profile.bio}
          </p>

          <div className="about-meta">
            <span className="meta-pill">
              <LuMapPin size={13} />
              {profile.location}
            </span>
            <span className="meta-pill">
              <LuCalendarCheck size={13} />
              {profile.degree} · {profile.university}
            </span>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="about-stat">
                <div className="about-stat-value gradient-text">{s.value}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
