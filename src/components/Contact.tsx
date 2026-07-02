import { brand } from '../data'

export function Contact() {
  return (
    <section id="visit" className="section">
      <div className="container">
        <h2 className="section__title">매장안내</h2>
        <div className="visit">
          <ul className="visit__list">
            <li>
              <strong>주소</strong>
              <span>{brand.address}</span>
            </li>
            <li>
              <strong>영업시간</strong>
              <span>{brand.hours}</span>
            </li>
            <li>
              <strong>전화</strong>
              <span>{brand.phone}</span>
            </li>
          </ul>
          <div className="hero__actions">
            <a className="button button--primary" href={`mailto:${brand.email}`}>
              멤버십 문의하기
            </a>
            <a
              className="button button--ghost"
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
            >
              인스타그램 방문하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
