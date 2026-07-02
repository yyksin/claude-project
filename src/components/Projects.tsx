import { projects } from '../data'

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="projects">
          {projects.map((project) => (
            <a
              key={project.title}
              className="card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="card__title">{project.title}</h3>
              <p className="card__description">{project.description}</p>
              <ul className="card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
