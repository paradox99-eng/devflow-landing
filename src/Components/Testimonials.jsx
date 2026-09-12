const testimonialsData = [
  {
    id: 1,
    quote: "Transitioning our MERN stack clusters to DevFlow halved our infrastructure spend and reduced our mean deployment window from 18 minutes to 40 seconds.",
    name: "Sarah Chen",
    title: "VP of Engineering, Prism Media",
    initials: "SC"
  },
  {
    id: 2,
    quote: "The developer experience is extraordinary. Form validation, edge caching, and server logs work seamlessly without dedicated DevOps configuration.",
    name: "Marcus Reynolds",
    title: "Principal Cloud Architect, Nexus",
    initials: "MR"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-badge">Customer Success</div>
        <h2 className="section-title">Validated by leaders in software engineering</h2>
        <p className="section-description">
          Learn how high-performing teams use DevFlow to accelerate delivery cycles.
        </p>

        <div className="testimonials-grid">
          {testimonialsData.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="testimonial-body">"{t.quote}"</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div className="author-meta">
                  <span className="author-name">{t.name}</span>
                  <span className="author-title">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}