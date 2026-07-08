import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-head">
              <h3>{project.title}</h3>
              <span className="status-badge">{project.status}</span>
            </div>
            <p>{project.description}</p>
            {project.tags.length > 0 && (
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
            {project.link && (
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                Ver proyecto →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
