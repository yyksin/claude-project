import { membershipPlans } from '../data'

export function Story() {
  return (
    <section id="story" className="section">
      <div className="container">
        <h2 className="section__title">멤버십 안내</h2>
        <div className="menu-grid">
          {membershipPlans.map((plan) => (
            <div
              key={plan.name}
              className={`menu-card${plan.highlighted ? ' menu-card--highlighted' : ''}`}
            >
              <span className="menu-card__tag">{plan.period}</span>
              <h3 className="menu-card__title">{plan.name}</h3>
              <p className="menu-card__price">{plan.price}</p>
              <ul className="plan-perks">
                {plan.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
