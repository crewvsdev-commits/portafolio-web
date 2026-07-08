import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experiencia</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div key={`${job.role}-${job.company}`} className="timeline-item">
            <div className="timeline-head">
              <h3>{job.role}</h3>
              <span className="timeline-period">{job.period}</span>
            </div>
            <p className="timeline-company">{job.company}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
