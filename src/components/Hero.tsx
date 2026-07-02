import { brand } from '../data'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__eyebrow">Fresh Bakery Every Morning</p>
        <h1 className="hero__name">{brand.name}</h1>
        <p className="hero__role">{brand.tagline}</p>
        <p className="hero__tagline">{brand.description}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#menu">
            메뉴 보기
          </a>
          <a
            className="button button--ghost"
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
          >
            인스타그램
          </a>
        </div>
      </div>
    </section>
  )
}
