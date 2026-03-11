# Birch & Bloom — Website Handoff Guide

Congratulations! Your new bespoke website is ready. This document explains how to manage your new digital home without needing a developer.

Built by Pegrio.

---

## 1. Changing Images

We have built a system where you can change **any** image on the entire website by editing just **one single file**. You do not need to edit code in multiple places.

### How to do it:

1. Open the file named `images.ts` located in the `src/config` folder.
   - *Path:* `src/config/images.ts`
2. You will see a list of "slots". Each slot corresponds to a specific photo on the site (e.g., the hero banner, the About section photo, etc.).
3. Find the slot you want to change.
4. Replace the URL inside the `src: "..."` quotes with your new image URL.
5. Update the text inside `alt: "..."` to describe the new photo (this helps with Google searches).
6. **Save the file.**

The website will update automatically.

### Where do I get image URLs?

You can use any link to an image that is hosted online.
- **Unsplash:** High-quality, free professional photography.
- **Cloudinary:** If you have a professional photography account.
- **Direct File Hosting:** If you host your own files.

**Pro Tip:** For best results, use images that are at least **1200 pixels wide**.

### Image Reference Guide

| Slot Name | Where it appears |
| :--- | :--- |
| `hero` | The very big photo at the top of the Home page. |
| `about` | The photo in the "About" / "The Designer" section. |
| `service-1` | Photo for the "Full Home Design" service. |
| `service-2` | Photo for the "Room Refresh" service. |
| `service-3` | Photo for the "Design Consultation" service. |
| `team-1` | Photo of the team member (Claire Whitfield). |
| `gallery-1` | First photo in the portfolio/grid section. |
| `gallery-2` | Second photo in the portfolio/grid section. |
| `gallery-3` | Third photo in the portfolio/grid section. |
| `testimonial-bg` | Background texture behind customer reviews. |
| `cta` | Background image for the "Ready to start?" section at the bottom. |

---

## 2. Changing Text & Content

Most of the text on your website (Headlines, Paragraphs, Service descriptions) is located in the main file for each page.

- **Home Page:** `src/app/page.tsx`
- **About Page:** `src/app/about/page.tsx` (if separate)
- **Contact Page:** `src/app/contact/page.tsx` (if separate)

*Note: If you see weird looking code like `<p>` or `<h1>`, do not delete the triangle brackets `< >`. Just change the text inside them.*

**Example:**
Change this: `<h1>Spaces That Tell Your Story</h1>`
To this: `<h1>Designing Your Dream Home</h1>`

---

## 3. Changing Colors & Fonts

We have selected a "Warm, Organic" palette (Cream, Charcoal, Bronze) to match the Birch & Bloom brand. If you ever need to tweak these:

- **Colors:** Open `tailwind.config.ts` in the root folder. Look for `colors` inside `extend`.
- **Fonts:** Open `src/app/layout.tsx`. Look for `fontHeading` and `fontBody`.

*We recommend asking your developer to make these changes to ensure the design remains balanced.*

---

## 4. The Contact Form

Your contact form is fully set up. When a visitor fills it out:
1. The data is validated (checking for real email addresses).
2. It is sent to your email server.
3. You will receive an email at the address configured in your settings.

**To check where emails go:**
Look for a file named `.env` in your project folder or check your hosting dashboard (Vercel) for "Environment Variables". Look for `CONTACT_EMAIL`.

---

## 5. Hosting & Maintenance

Your website is currently hosted on Vercel. This ensures it is fast, secure, and backed up automatically.

**Monthly/Daily Tasks:**
- **Update Images:** You can swap out seasonal photos anytime using the method in Section 1.
- **Blog/News:** If you need to add a blog, let us know! This requires adding a specific feature.

---

## 6. Support & Questions

If you run into anything you can't fix or if you want to add a major new feature (like an online shop or booking calendar), please reach out to us.

**Contact:** Pegrio Development Team
**Email:** hello@birchandbloom.com

Thank you for choosing us to build your digital presence!

*Pegrio — Crafting Digital Excellence.*