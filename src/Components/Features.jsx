const featuresData = [
  {
    id: 1,
    title: 'Instant Edge Deployment',
    text: 'Git push workflows automatically compile assets and distribute static and SSR bundles to over 300 edge locations globally.',
    tag: 'CI/CD Pipeline',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Automated TLS & Security',
    text: 'Zero-configuration certificates, DDoS mitigation, web application firewalls (WAF), and automated vulnerability auditing.',
    tag: 'SOC2 & ISO Ready',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Real-Time Observability',
    text: 'Structured logs, OpenTelemetry tracing, and memory diagnostics without third-party monitoring plugins or agents.',
    tag: 'Telemetry',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-badge">Platform Capabilities</div>
        <h2 className="section-title">Engineered for performance and compliance</h2>
        <p className="section-description">
          A unified control plane built from the ground up to replace fragmented developer tooling.
        </p>

        <div className="features-grid">
          {featuresData.map((f) => (
            <div key={f.id} className="feature-card">
              <div className="feature-icon-wrapper">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
              <span className="feature-tag">{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}