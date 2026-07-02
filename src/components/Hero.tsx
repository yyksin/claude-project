import { brand } from '../data'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Warehouse Club Discount Mart</p>
        <h1 className="hero__name">{brand.name}</h1>
        <p className="hero__role">{brand.tagline}</p>
        <p className="hero__tagline">{brand.description}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#menu">
            인기 상품 보기
          </a>
          <a className="button button--ghost" href="#story">
            멤버십 가입하기
          </a>
        </div>
      </div>
    </section>
  )
}
