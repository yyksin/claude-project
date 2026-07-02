import { profile } from '../data'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About</h2>
        <p className="about__text">{profile.about}</p>
      </div>
    </section>
  )
}
