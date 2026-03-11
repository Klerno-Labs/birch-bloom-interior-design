// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically

export const images = {
  // Homepage hero banner — Interior, warm, natural light
  "hero": {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2600&auto=format&fit=crop",
    alt: "Sunlit modern living room with beige furniture and natural wood accents",
    width: 2600,
    height: 1733,
  },

  // Alternative hero / Nav background
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
    alt: "Minimalist kitchen with warm stone tones",
    width: 1200,
    height: 800,
  },

  // About page or About section
  "about": {
    src: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000&auto=format&fit=crop",
    alt: "Interior designer reviewing fabric swatches in a sunlit studio",
    width: 1200,
    height: 1600,
  },

  // First service card (Full Home Design)
  "service-1": {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2600&auto=format&fit=crop",
    alt: "Luxury living room renovation with architectural details",
    width: 1200,
    height: 800,
  },

  // Second service card (Room Refresh)
  "service-2": {
    src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2600&auto=format&fit=crop",
    alt: "Cozy bedroom corner with curated decor and textiles",
    width: 1200,
    height: 800,
  },

  // Third service card (Design Consultation)
  "service-3": {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2600&auto=format&fit=crop",
    alt: "Architectural floor plans and blueprints on a desk",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop",
    alt: "Modern dining room with dark table and warm lighting",
    width: 1200,
    height: 1600,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2600&auto=format&fit=crop",
    alt: "Contemporary bathroom with stone vanity and warm tones",
    width: 1200,
    height: 800,
  },

  // Team member photo
  "team-1": {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    alt: "Claire Whitfield, Principal Designer",
    width: 800,
    height: 1000,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2600&auto=format&fit=crop",
    alt: "Open concept living and kitchen space",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2600&auto=format&fit=crop",
    alt: "Elegant home office space",
    width: 1600,
    height: 900,
  },

  // Testimonials section background
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2600&auto=format&fit=crop",
    alt: "Soft texture of linen fabric",
    width: 1600,
    height: 900,
  },
} as const;

export type ImageSlot = keyof typeof images;