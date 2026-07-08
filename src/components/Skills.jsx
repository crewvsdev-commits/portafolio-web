import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/content'
import { TechIcon } from '../data/icons'

// true una vez que el bloque de skills entra en pantalla, para disparar
// la animación de dibujo del radar y los anillos.
function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

function SkillRadar({ data, active }) {
  const size = 320
  const center = size / 2
  const radius = size / 2 - 56
  const angleStep = (Math.PI * 2) / data.length
  const point = (fraction, i) => {
    const angle = angleStep * i - Math.PI / 2
    const r = fraction * radius
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)]
  }
  const ringLevels = [0.25, 0.5, 0.75, 1]
  const areaPoints = data.map((d, i) => point(d.level / 100, i).join(',')).join(' ')

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="skill-radar" role="img" aria-label="Radar de skills por categoría">
      {ringLevels.map((level) => (
        <polygon
          key={level}
          points={data.map((_, i) => point(level, i).join(',')).join(' ')}
          className="skill-radar-ring"
        />
      ))}
      {data.map((d, i) => {
        const [x, y] = point(1, i)
        return <line key={d.category} x1={center} y1={center} x2={x} y2={y} className="skill-radar-axis" />
      })}
      <g className={`skill-radar-fill${active ? ' skill-radar-fill--in' : ''}`} style={{ transformOrigin: `${center}px ${center}px` }}>
        <polygon points={areaPoints} className="skill-radar-area" />
        {data.map((d, i) => {
          const [x, y] = point(d.level / 100, i)
          return <circle key={d.category} cx={x} cy={y} r="4" className="skill-radar-dot" />
        })}
      </g>
      {data.map((d, i) => {
        const [x, y] = point(1.24, i)
        return (
          <text key={d.category} x={x} y={y} className="skill-radar-label" textAnchor="middle" dominantBaseline="middle">
            {d.category}
          </text>
        )
      })}
    </svg>
  )
}

function SkillRing({ level, active }) {
  const size = 64
  const stroke = 6
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference - (active ? level / 100 : 0) * circumference

  return (
    <svg width={size} height={size} className="skill-ring" role="img" aria-label={`Nivel ${level} de 100`}>
      <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} className="skill-ring-track" fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        strokeWidth={stroke}
        className="skill-ring-fill"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" className="skill-ring-text">
        {level}
      </text>
    </svg>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="section" ref={ref}>
      <h2 className="section-title">Skills</h2>
      <p className="section-text muted">Ficha de estadísticas por área, con el nivel de uso real en proyectos y experiencia.</p>

      <div className="skill-radar-wrap">
        <SkillRadar data={skills} active={inView} />
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-card">
            <div className="skill-card-head">
              <h3>{group.category}</h3>
              <SkillRing level={group.level} active={inView} />
            </div>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item} className="tag">
                  <TechIcon name={item} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
