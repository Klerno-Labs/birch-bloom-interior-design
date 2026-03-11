# Birch & Bloom Interior Design

Award-winning interior design studio website built with Next.js 14, Tailwind CSS, and Framer Motion. This site features a bespoke, editorial design with "warm, organic" aesthetics, custom interactions, and a focus on high-performance delivery.

## Tech Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS (Utility-first, no @apply)
- **Animations:** Framer Motion (Scroll-triggered reveals, smooth transitions)
- **Optimization:** `next/image` for automatic WebP/AVIF conversion and lazy loading
- **Fonts:** `next/font` for optimized Google Fonts (Playfair Display, Manrope)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/birch-and-bloom.git
   cd birch-and-bloom
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```text
birch-and-bloom/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── api/contact/    # Contact form API route
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Main homepage (includes all sections)
│   ├── components/
│   │   ├── ui/              # Reusable primitives (Buttons, Inputs)
│   │   ├── sections/        # Page-specific sections (Hero, Portfolio, etc.)
│   │   └── layout/          # Navbar, Footer
│   ├── config/
│   │   └── images.ts        # ⚡ CENTRAL IMAGE CONFIGURATION
│   ├── lib/
│   │   └── utils.ts         # Helper functions (cn)
│   └── types/
│       └── index.ts         # TypeScript interfaces
├── .env.example
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Image Customization

All images on the website are managed centrally to ensure consistency and performance. **Do not search for image URLs inside component files.**

### How to Change Images

1. Open `src/config/images.ts`.
2. Find the specific "slot" you want to change (e.g., `"hero"`, `"about"`, `"service-1"`).
3. Replace the `src` URL with your new image URL (Unsplash, Cloudinary, S3, or local relative path).
4. Update the `alt` text to describe the new image for SEO and accessibility.
5. Save the file. The change will reflect immediately on the site.

### Image Slot Map

| Slot Key | Location on Site | Recommended Aspect Ratio |
| :--- | :--- | :--- |
| `hero` | Homepage Hero Section (Full bleed) | 16:9 (Landscape) |
| `hero-alt` | Inner page heroes / About section | 16:9 (Landscape) |
| `about` | About Section (Team/Office) | 3:2 or 4:3 |
| `service-1` | Services Card 1 | 1:1 (Square) or 4:3 |
| `service-2` | Services Card 2 | 1:1 (Square) or 4:3 |
| `service-3` | Services Card 3 | 1:1 (Square) or 4:3 |
| `gallery-1` | Portfolio / Gallery Grid | 3:2 or Variable |
| `gallery-2` | Portfolio / Gallery Grid | 3:2 or Variable |
| `gallery-3` | Portfolio / Gallery Grid | 3:2 or Variable |
| `team-1` | Team Section | 3:4 (Portrait) |
| `testimonial-bg` | Testimonials Background | 16:9 (Landscape) |
| `cta` | Call to Action Section | 16:9 (Landscape) |

## Brand Customization

### Changing Colors
The site uses a warm, neutral palette defined in `tailwind.config.ts`.
1. Open `tailwind.config.ts`.
2. Modify the `colors` object in the `extend` section.
3. Key tokens:
   - `primary`: Main text color (#2c2c2c)
   - `secondary`: Accent/CTA color (#8b7355)
   - `accent`: Sand color for backgrounds (#d4c5b2)

### Changing Fonts
1. Open `src/app/layout.tsx`.
2. Import new fonts from `next/font/google`.
3. Replace the font variables passed to `className` in the `<body>` tag.

### Changing Logo
If you have a custom logo image:
1. Place your logo file in `public/logo.png`.
2. Update the `<Image />` component in `src/components/layout/Navbar.tsx` to point to `/logo.png`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build (Static Export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root directory. See `.env.example` for required variables.

## Deployment

This project is optimized for **Vercel**.

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket.
2. Go to [Vercel](https://vercel.com) and click "Add New Project".
3. Import your repository.
4. Framework Preset: **Next.js**.
5. Build Command: `npm run build` (or `next build`).
6. Output Directory: `.next` (Vercel detects this automatically, but for static export, ensure `output: 'export'` is in `next.config.js`).
7. Add Environment Variables in the Vercel dashboard.
8. Click **Deploy**.

## Support

For technical issues or questions regarding this build, please contact the development team at hello@birchandbloom.com.