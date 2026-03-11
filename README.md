# Birch & Bloom Interior Design Website

## Project Description
This is a bespoke, hand-crafted website for Birch & Bloom, an award-winning interior design studio specializing in residential transformations. The website features a warm, editorial aesthetic with a focus on user experience and conversion.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next/image for optimized images
- next/font for web fonts

## Getting Started

### Install
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/birch-and-bloom.git
   cd birch-and-bloom
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### Build
To create an optimized production build:
```bash
npm run build
```

### Deploy
To deploy the application, follow the instructions in the DEPLOYMENT_GUIDE.md.

## Project Structure Overview
```
/src
  /app
    /api
    /components
    /config
    /pages
  /public
  /styles
  /utils
```

## Image Customization
To change any image on the site, edit the `src/config/images.ts` file. Each image slot is defined with a comment explaining where it appears.

### Image Slots
- **hero**: Homepage hero banner
- **hero-alt**: Alternative hero image for inner pages
- **about**: About page image
- **service-1**: First service card image
- **service-2**: Second service card image
- **service-3**: Third service card image
- **gallery-1**: Gallery image 1
- **gallery-2**: Gallery image 2
- **team-1**: Team member photo
- **gallery-3**: Gallery image 3
- **cta**: Call-to-action section background
- **testimonial-bg**: Testimonials section background

## Brand Customization
### Colors
To change the colors, modify the `tailwind.config.js` file.

### Fonts
To change the fonts, update the `layout.tsx` file to include your desired Google Fonts.

### Logo
If a logo slot exists, update the image URL in `src/config/images.ts`.

## Environment Variables
- `NEXT_PUBLIC_API_URL`: Your API URL
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: Your Google Analytics ID

## Deployment Instructions
Follow the instructions in the DEPLOYMENT_GUIDE.md for deploying the application to Vercel.