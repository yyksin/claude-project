import { profile } from '../data'

export function Contact() {
  return (
    <section id="contact" className="section section--muted">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="contact__text">언제든 편하게 연락 주세요.</p>
        <div className="hero__actions">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            이메일 보내기
          </a>
          <a
            className="button button--ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub 방문하기
          </a>
        </div>
      </div>
    </section>
  )
}
