import { testimonials } from '../data'

export function Testimonials() {
  return (
    <section id="reviews" className="section section--muted">
      <div className="container">
        <h2 className="section__title">고객 후기</h2>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="testimonial-card">
              <p className="testimonial-card__comment">&ldquo;{testimonial.comment}&rdquo;</p>
              <footer className="testimonial-card__name">{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
