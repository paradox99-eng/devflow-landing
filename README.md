# DevFlow — Modern Cloud Deployment Platform

A responsive, production-grade landing page built for the **Full Stack Development Internship**. The project demonstrates modular React component architecture, accessibility compliance (WCAG 2.1 AA), search engine optimization (SEO), and robust client-side form validation without external UI component libraries.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Requirements Fulfilled](#requirements-fulfilled)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
- [Form Validation Details](#form-validation-details)
- [SEO & Accessibility Compliance](#seo--accessibility-compliance)
- [Available Scripts](#available-scripts)
- [Author](#author)

---

## Project Overview

This project satisfies the initial internship evaluation task:
> *"Build a responsive, multi-section landing website using HTML, CSS, and JavaScript (or a framework). The site must include a navbar, hero section, features section, testimonials, and a contact form with validation."*

The application is engineered as a single-page application (SPA) featuring smooth anchor navigation across all primary sections, built with modular React functional components and styled with custom CSS variables (Design Tokens).

---

## Requirements Fulfilled

| Requirement | Implementation Details |
| :--- | :--- |
| **Responsive Design** | Fluid layouts using CSS Grid and Flexbox; adaptive across desktop, tablet, and mobile screens. |
| **Navbar** | Sticky glassmorphic header with dynamic scroll shadow and an accessible mobile hamburger drawer. |
| **Hero Section** | Value proposition headline, gradient typography, real-time metrics, dual action CTAs, and a syntax-highlighted terminal preview window. |
| **Features Section** | 3-column responsive grid detailing platform capabilities with custom SVG icons and hover lift effects. |
| **Testimonials Section** | Customer feedback cards featuring 5-star rating markers, client quotes, author initials, and titles. |
| **Contact Form** | Controlled form inputs, real-time and on-blur validation, simulated async API submission with loading spinner, and success notifications. |

---

## Tech Stack

- **Framework / Library**: [React 18+](https://react.dev/) (Functional Components, Hooks: `useState`, `useEffect`)
- **Build Tool**: [Vite](https://vite.dev/) (Fast HMR & Optimized Rollup Bundling)
- **Styling**: Pure CSS with Custom Properties (Design Tokens), Flexbox, and CSS Grid
- **Typography**: [Inter font](https://fonts.google.com/specimen/Inter) with asynchronous non-blocking preloading
- **Standards**: Semantic HTML5, Schema.org JSON-LD Structured Data, WCAG 2.1 AA contrast compliance

---

## Project Architecture

```text
devflow-landing/
├── public/
│   ├── favicon.svg             # Website favicon
│   ├── robots.txt              # Search engine crawler directives
│   └── llms.txt                # Markdown documentation for LLM crawlers
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx          # Sticky navigation & responsive mobile drawer
│   │   ├── Hero.jsx            # Headline, metrics & terminal code preview
│   │   ├── Features.jsx        # Platform capabilities grid
│   │   ├── Testimonials.jsx    # Client reviews and star ratings
│   │   ├── Contact.jsx         # Controlled contact form with validation
│   │   └── Footer.jsx          # Multi-column footer and copyright
│   ├── App.css                 # Unified stylesheet with design tokens
│   ├── App.jsx                 # Root layout assembling all sections
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML5 shell with complete SEO/OpenGraph tags
├── package.json                # Project dependencies and build scripts
└── vite.config.js              # Vite configuration
```

---

## Getting Started

### Prerequisites
- Node.js (version 18.0.0 or higher)
- npm (version 9.0.0 or higher)

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/your-username/devflow-landing.git](https://github.com/your-username/devflow-landing.git)
   cd devflow-landing
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to the local URL displayed in your terminal (typically `http://localhost:5173`).

---

## Form Validation Details

The contact form in `src/Components/Contact.jsx` uses controlled React state to enforce strict validation rules:

| Field | Rule | Error Message |
| :--- | :--- | :--- |
| **Full Name** | Required, minimum 3 characters | `"Full name is required."` / `"Name must be at least 3 characters."` |
| **Work Email** | Required, valid RFC 5322 regex pattern | `"Work email is required."` / `"Please enter a valid work email."` |
| **Message** | Required, minimum 15 characters | `"Project overview cannot be empty."` / `"Please provide at least 15 characters of detail."` |

### Form Submission Behavior
1. Validation rules are verified upon form submission.
2. If invalid, the offending input receives a red border and a dedicated error message appears below the field.
3. If valid, the submit button enters an animated loading state (`is-loading` with CSS spinner) for 1.2 seconds, simulating a `POST` request to a backend API.
4. Upon successful receipt, the form resets and a temporary green confirmation banner is displayed.

---

## SEO & Accessibility Compliance

### 1. Search Engine Optimization (Lighthouse 100/100)
- Optimized `<title>` and `<meta name="description">` within search engine character limits.
- Complete Open Graph (`og:*`) and Twitter Card (`twitter:*`) tags for rich social previews.
- Schema.org JSON-LD structured data defining `Organization`, `WebSite`, and `SoftwareApplication` entities.
- Crawler configuration via `public/robots.txt` and `public/llms.txt`.

### 2. Accessibility (a11y)
- **High Contrast**: Text contrast ratios exceed **6.8:1**, passing the WCAG 2.1 AA standard (4.5:1).
- **Screen Reader Support**: ARIA attributes (`aria-expanded`, `aria-label`, `role="alert"`) used throughout interactive components.
- **Keyboard Navigation**: Full keyboard navigation support with visible focus outlines and `Escape` key handler for the mobile drawer.

---

## Available Scripts

- **`npm run dev`**: Starts the development server with Hot Module Replacement (HMR).
- **`npm run build`**: Compiles and minifies the application into the `dist/` folder for production deployment.
- **`npm run preview`**: Runs a local web server serving the built `dist/` folder to benchmark production performance.

---

## Author
Developed by the candidate as part of the **Full Stack Development Internship** evaluation.