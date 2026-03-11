// ── Image Configuration ──────────────────────────────────────────────
// ✏️  HOW TO CHANGE IMAGES:
// 1. Find the slot you want to change below (e.g. "hero", "about", "service-1")
// 2. Replace the "src" URL with your own image URL
// 3. Update the "alt" text to describe the new image
// 4. Save — every component on the site updates automatically
//
// All components import from this file. This is the ONLY file you need
// to edit to swap any image on the entire website.

export const images = {
  // Homepage hero banner — the first image visitors see
  "hero": {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
    alt: "Warm minimalist living room with beige sofa and natural light",
    width: 2000,
    height: 1333,
  },

  // Alternative hero image (used on inner pages or as fallback)
  "hero-alt": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    alt: "Modern open plan living and dining area",
    width: 2000,
    height: 1333,
  },

  // About page or About section on homepage
  "about": {
    src: "https://images.unsplash.com/photo-1580216643062-1c4482d32097?q=80&w=1200&auto=format&fit=crop",
    alt: "Interior designer reviewing blueprints in studio",
    width: 1200,
    height: 1600,
  },

  // First service card image (Full Home Design)
  "service-1": {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Elegant living room design with earth tones",
    width: 1200,
    height: 800,
  },

  // Second service card image (Room Refresh)
  "service-2": {
    src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200&auto=format&fit=crop",
    alt: "Cozy bedroom corner with textured bedding",
    width: 1200,
    height: 800,
  },

  // Third service card image (Consultation)
  "service-3": {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    alt: "Modern kitchen with stone countertops",
    width: 1200,
    height: 800,
  },

  // Gallery image 1
  "gallery-1": {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    alt: "Beige interior design with archways",
    width: 1200,
    height: 1600,
  },

  // Gallery image 2
  "gallery-2": {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    alt: "Scandinavian style dining room",
    width: 1200,
    height: 800,
  },

  // Team member photo (Claire Whitfield)
  "team-1": {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    alt: "Portrait of Claire Whitfield",
    width: 800,
    height: 1000,
  },

  // Gallery image 3
  "gallery-3": {
    src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop",
    alt: "Minimalist home office setup",
    width: 1200,
    height: 800,
  },

  // Call-to-action section background
  "cta": {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop",
    alt: "Sunlit living room with sheer curtains",
    width: 2000,
    height: 1200,
  },

  // Testimonials section background or decoration
  "testimonial-bg": {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2000&auto=format&fit=crop",
    alt: "Abstract interior texture background",
    width: 2000,
    height: 1333,
  },
} as const;

export type ImageSlot = keyof typeof images;