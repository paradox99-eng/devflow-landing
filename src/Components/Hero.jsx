export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-badge">
          <span className="status-indicator"></span>
          <span>Next-Generation MERN Architecture</span>
        </div>

        <h1 className="hero-title">
          Deploy backend microservices and modern web apps <span className="gradient-text">in seconds</span>
        </h1>

        <p className="hero-subtitle">
          DevFlow combines developer agility with enterprise reliability. Automate builds, scale serverless endpoints, and gain end-to-end observability without managing infrastructure.
        </p>

        <div className="hero-cta-group">
          <a href="#contact" className="btn btn-lg btn-primary">
            Start Free Trial
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#features" className="btn btn-lg btn-outline">Documentation</a>
        </div>

        <div className="hero-metrics">
          <div className="metric-item">
            <span className="metric-value">99.99%</span>
            <span className="metric-label">Uptime SLA</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-value">&lt; 35ms</span>
            <span className="metric-label">Edge Latency</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <span className="metric-value">10M+</span>
            <span className="metric-label">Daily Requests</span>
          </div>
        </div>

        <div className="hero-preview-window">
          <div className="window-header">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="window-title">api.devflow.live/v1/deploy</span>
            <span className="window-badge">HTTP 200 OK</span>
          </div>
          <div className="window-body">
            <pre><code>{`import { createServer } from '@devflow/core';

const app = createServer({
  region: 'auto',
  cache: { maxAge: 3600 },
  rateLimit: { max: 1000, windowMs: 60000 }
});

app.route('/users', async (req, res) => {
  return res.json({ status: 'synchronized', cluster: 'iad1' });
});`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}