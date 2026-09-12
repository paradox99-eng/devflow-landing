export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="brand-logo footer-logo">
            <svg viewBox="0 0 32 32" width="24" height="24" fill="none">
              <rect width="32" height="32" rx="8" fill="#4F46E5" />
              <path d="M9 16L14 21L23 11" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>DevFlow</span>
          </div>
          <p className="footer-tagline">Continuous delivery and runtime infrastructure for modern web applications.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <span className="footer-col-title">Platform</span>
            <a href="#features">Edge Network</a>
            <a href="#features">Serverless APIs</a>
            <a href="#features">CI/CD Engine</a>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Resources</span>
            <a href="#hero">Documentation</a>
            <a href="#hero">Architecture Guides</a>
            <a href="#features">System Status</a>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Company</span>
            <a href="#testimonials">Case Studies</a>
            <a href="#contact">Contact Sales</a>
            <a href="#contact">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; 2026 DevFlow Inc. All rights reserved.</p>
        <p>Built with React, Vite, and Semantic HTML5.</p>
      </div>
    </footer>
  );
}