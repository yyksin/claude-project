import { products } from '../data'

export function Menu() {
  return (
    <section id="menu" className="section">
      <div className="container">
        <h2 className="section__title">인기 상품</h2>
        <div className="menu-grid">
          {products.map((item) => (
            <div key={item.name} className="menu-card">
              <span className="menu-card__tag">{item.tag}</span>
              <h3 className="menu-card__title">{item.name}</h3>
              <p className="menu-card__description">{item.description}</p>
              <p className="menu-card__price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
