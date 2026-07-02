import { features } from '../data'

export function Features() {
  return (
    <section id="features" className="section section--muted">
      <div className="container">
        <h2 className="section__title">이런 점이 다릅니다</h2>
        <div className="features">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-card__icon" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
