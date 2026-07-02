import { skills } from '../data'

export function Skills() {
  return (
    <section id="skills" className="section section--muted">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill} className="skills__item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
