import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-card">
            <h3>{group.category}</h3>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item} className="tag">
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
