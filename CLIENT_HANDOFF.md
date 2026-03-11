# Birch & Bloom Website Handoff

## Overview
We have built a bespoke website for Birch & Bloom Interior Design, showcasing their award-winning services and portfolio. Below is a page-by-page overview.

### Home Page
- Features a cinematic hero section with a large headline and call-to-action.
- Includes sections for the design philosophy, featured projects, and testimonials.

### Portfolio Page
- Displays selected projects in a visually engaging grid layout.
- Includes a filter bar for easy navigation through project categories.

### Services Page
- Highlights the various services offered with detailed descriptions and pricing.

### About Page
- Introduces the lead designer with a personal touch and showcases press features.

### Process Page
- Outlines the design process in a clear, visual timeline format.

### Contact Page
- Provides contact information and an inquiry form for potential clients.

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site.

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., `hero`).
3. Replace the `src` URL with your new image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats:
- Any web-accessible image URL (Cloudinary, S3, Vercel Blob, etc.).
- For best results: use images at least 1200px wide, landscape orientation for heroes.

## Changing Logo
If a logo slot exists, update the image URL in `src/config/images.ts` similarly to how you change other images.

## Changing Colors
To modify the colors, edit the `tailwind.config.js` file. Update the color values as needed.

## Changing Fonts
To swap the Google Font, update the `layout.tsx` file to include your desired font.

## Updating Text Content
Edit the text content directly in the respective page files located in `src/app/pages`.

## Requesting Changes
For any changes or updates, please contact Pegrio support.

## Hosting and Maintenance
The website is hosted on Vercel. Regular updates and maintenance can be requested through Pegrio support.

## Contact
For support, reach out to Pegrio at [support@pegrio.com](mailto:support@pegrio.com).