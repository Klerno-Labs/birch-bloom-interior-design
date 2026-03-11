# Deployment Guide — Birch & Bloom

This guide will walk you through deploying the Birch & Bloom Interior Design website to production using Vercel.

## Prerequisites

1. A Vercel account (Free tier is sufficient).
2. The project code pushed to a Git repository (GitHub, GitLab, or Bitbucket).
3. Access to domain DNS settings (if using a custom domain).

---

## Step 1: Environment Variables

Before deploying, ensure you have the necessary environment variables configured.

1. In your local project, create a copy of `.env.example` and name it `.env.local`.
2. Fill in the required values (see `.env.example` for details).
3. **Crucial:** When deploying to Vercel, you must add these variables in the Vercel Dashboard as well.

## Step 2: Deploy to Vercel

### Automatic Deployment (Recommended)

1. Log in to [Vercel](https://vercel.com/dashboard).
2. Click **"Add New..."** > **"Project"**.
3. Import the Git repository containing your code.
4. Vercel will automatically detect that this is a **Next.js** project.
5. Configure the project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (Leave as default)
   - **Build Command:** `npm run build` (Vercel usually sets this automatically)
   - **Output Directory:** `.next` (Automatically detected)
6. Click **"Environment Variables"**.
   - Add the variables defined in your `.env.local` file.
   - Example Key: `NEXT_PUBLIC_SITE_URL`
   - Example Value: `https://www.birchandbloom.com`
7. Click **"Deploy"**.

Vercel will take a few minutes to build your site. Once finished, you will receive a live URL (e.g., `birch-and-bloom.vercel.app`).

## Step 3: Domain Setup

### Using a Custom Domain

1. Go to your **Project Settings** in Vercel > **Domains**.
2. Enter your domain name (e.g., `birchandbloom.com`).
3. Select the recommended option (usually `www.birchandbloom.com` and `birchandbloom.com`).

### Configuring DNS

Vercel will provide you with configuration records. Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and update your DNS records:

1. **If using `www` as the primary domain:**
   - Add an **A Record**:
     - Name: `@`
     - Value: `76.76.21.21` (Vercel's IPv4 address)
   - Add a **CNAME Record**:
     - Name: `www`
     - Value: `cname.vercel-dns.com`

2. **If using the root domain (`birchandbloom.com`) without `www`:**
   - Vercel will instruct you to use specific nameservers. Follow the prompt in the Vercel dashboard to "Use your own nameservers."

### SSL Certificates

Vercel automatically provisions and renews SSL certificates for all domains. This happens automatically once your DNS records propagate.

---

## Post-Deployment Checklist

Once the site is live, verify the following:

- [ ] **Site URL:** Does the site load correctly at your domain?
- [ ] **SSL Lock:** Is there a padlock icon in the browser address bar? (HTTPS enabled)
- [ ] **Images:** Do all photos load? Check the browser console for 404 errors.
- [ ] **Contact Form:** Test the contact form. Does the submit button show a "Sending..." state? Do you receive the email?
- [ ] **Mobile Responsiveness:** Open the site on a mobile phone. Does the menu work? Is the text readable?
- [ ] **SEO:** View the page source. Are the `<title>` and `<meta description>` tags correct?
- [ ] **Links:** Click all navigation links and social media icons to ensure they work.

---

## Troubleshooting

**Build Fails on Vercel:**
- Check the "Build Logs" in the Vercel dashboard.
- Ensure you are using Node.js version 18 or higher in Vercel Project Settings.

**Images Not Loading:**
- Ensure `src/config/images.ts` URLs are publicly accessible.
- If using local images in `public/`, ensure the path in the code matches the filename exactly.

**Contact Form Not Sending:**
- Verify your environment variables for the email service (e.g., `RESEND_API_KEY`) are set in Vercel, not just locally.
- Check the "Function Logs" in the Vercel dashboard for the `/api/contact` route.

---

## Maintenance

To update the site in the future:
1. Make changes to your local code (e.g., updating text in `page.tsx` or images in `config/images.ts`).
2. Commit and push to your Git repository.
3. Vercel will automatically detect the push and redeploy the site.

*Support: hello@birchandbloom.com*