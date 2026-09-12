import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    topic: 'sales',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Work email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid work email.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Project overview cannot be empty.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters of detail.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setStatusMessage('');

    // Simulate async API call (e.g., Express POST /api/contact)
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage('Request received. An engineer will reach out within 24 hours.');
      setFormData({ fullName: '', email: '', topic: 'sales', message: '' });

      setTimeout(() => setStatusMessage(''), 6000);
    }, 1200);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="section-badge">Get in Touch</div>
            <h2 className="section-title text-left">Connect with an enterprise specialist</h2>
            <p className="section-description text-left">
              Have questions regarding migration, dedicated clusters, or SLA guarantees? Reach out directly.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="info-label">Direct Inquiries</span>
                  <p className="info-val">enterprise@devflow.live</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="info-label">Guaranteed SLA</span>
                  <p className="info-val">&lt; 24 Hour Response Window</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'is-invalid' : ''}
                    placeholder="Alexander Wright"
                  />
                  <span className="error-msg">{errors.fullName}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email <span className="req">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'is-invalid' : ''}
                    placeholder="alexander@company.com"
                  />
                  <span className="error-msg">{errors.email}</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="topic">Inquiry Type</label>
                <select id="topic" name="topic" value={formData.topic} onChange={handleChange}>
                  <option value="sales">Enterprise Architecture & Pricing</option>
                  <option value="technical">Technical Consultation</option>
                  <option value="migration">Stack Migration & Support</option>
                  <option value="other">General Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Overview <span className="req">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'is-invalid' : ''}
                  placeholder="Briefly describe your tech stack and requirements..."
                />
                <span className="error-msg">{errors.message}</span>
              </div>

              <button type="submit" className={`btn btn-primary btn-block ${isLoading ? 'is-loading' : ''}`} disabled={isLoading}>
                <span className="btn-text">Submit Request</span>
                <span className="btn-spinner" aria-hidden="true"></span>
              </button>

              {statusMessage && (
                <div className="form-banner success" role="alert">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}