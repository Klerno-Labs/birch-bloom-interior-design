# Changelog

All notable changes to the Birch & Bloom Interior Design website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2023-10-27

### Added
- **Initial Release Production Build**
- **Design System Implementation**
  - Integrated "Warm, Editorial, Organic" aesthetic.
  - Defined color palette: Soft Charcoal (#2c2c2c), Cognac (#8b7355), Alabaster (#faf8f5).
  - Typography: Playfair Display (Headings) and Manrope (Body) via next/font.

- **Core Pages & Sections**
  - **Hero Section:** Cinematic full-screen entry with gradient overlay and call-to-action.
  - **Selected Works (Portfolio):** Broken grid layout with hover-reveal animations.
  - **Services:** Interactive list with split-screen visual reveal and pricing tiers.
  - **About:** Editorial column layout with Bento-grid "Philosophy" section.
  - **Process:** Vertical timeline with connector lines and nodes.
  - **Contact:** Split layout with functional form and business info directory.

- **Functional Components**
  - **Navigation:** Sticky header with scroll-state detection (transparent to solid). Full-screen mobile menu with staggered link animations.
  - **Contact Form:** 
    - Client-side validation (Email format, phone format).
    - Server-side API route (`/api/contact`) for handling submissions.
    - Honeypot spam prevention implemented.
    - Loading and success state feedback.
  - **Interactive Service List:** Hover logic updates the fixed image column dynamically.

- **Visual Effects & Animations**
  - **Page Transitions:** "Curtain Reveal" effect using Framer Motion.
  - **Scroll Animations:** Intersection Observer-based reveal effects (fade-up) for text and images.
  - **Custom Cursor:** Inverted-color circle cursor with magnetic hover expansion.
  - **Parallax:** Subtle parallax effects on featured images.

- **Performance & SEO**
  - **Image Optimization:** Configured `src/config/images.ts` for centralized asset management. All images use `next/image` with lazy loading (except Hero).
  - **Meta Tags:** Dynamic Open Graph tags and SEO metadata per section.
  - **Structured Data:** LocalBusiness JSON-LD schema included.
  - **Static Export:** Configured `output: 'export'` for static HTML generation.

- **Content Integration**
  - Real business content injected (Hours: Mon-Fri 9am-5pm, Address: 225 Design District Way, Nashville).
  - Team profiles: Claire Whitfield, Megan Park.
  - Testimonials: The Hendersons, Laura M., The Nguyens.
  - Services & Pricing: Full Home Design, Room Refresh, etc.

### Known Limitations
- Custom cursor is disabled on touch devices to prevent UX issues.
- Form submissions currently log to console/send to API; ensure email provider (e.g., Resend, SendGrid) is connected in production environment variables for actual delivery.

---

[Unreleased]: https://github.com/your-username/birch-and-bloom/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/your-username/birch-and-bloom/releases/tag/v1.0.0