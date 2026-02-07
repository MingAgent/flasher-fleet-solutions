# Flasher Fleet Solutions — Step-by-Step Build & Deploy Plan

## Current State Assessment

**The site is fully built.** All 8 pages, 9 components, CSS, assets, routing, and the n8n webhook integration are production-ready. A `dist/` build already exists and a `gh-pages` branch is live on the remote.

**Repository:** https://github.com/MingAgent/flasher-fleet-solutions
**Live URL:** https://mingagent.github.io/flasher-fleet-solutions/
**Stack:** React 19 + Vite 7 + React Router 7 (HashRouter) + GitHub Pages

---

## Phase 1: Pre-Flight Checks (5 minutes)

These are the things to verify before touching anything.

### Step 1 — Confirm the development environment is ready

```bash
cd /Users/joshmeunier/flasher-fleet-solutions
node -v        # Should be 18+ (Vite 7 requires it)
npm -v         # Should be 8+
git status     # Should show clean working tree (or just PROJECT_INSTRUCTIONS.md untracked)
```

### Step 2 — Verify vite.config.js base path

Open `vite.config.js` and confirm it says:

```js
base: '/flasher-fleet-solutions/',
```

This is the single most important setting. If this is wrong, the entire site shows a blank white page. It's currently correct.

### Step 3 — Verify HashRouter is in place

Open `src/main.jsx` and confirm it imports `HashRouter` (not `BrowserRouter`). GitHub Pages doesn't support server-side routing, so HashRouter is required. URLs will look like `site.com/#/about`. This is currently correct.

### Step 4 — Spot-check asset paths in components

Every image/video path in JSX files must start with `/flasher-fleet-solutions/`. Quick way to check:

```bash
grep -r "'/images/" src/ --include="*.jsx"
grep -r "'/videos/" src/ --include="*.jsx"
```

If any results DON'T start with `/flasher-fleet-solutions/`, they need to be fixed. Currently all paths are correct.

---

## Phase 2: Build the Site (2 minutes)

### Step 5 — Install dependencies (if needed)

```bash
npm install
```

Only needed if `node_modules/` is missing or you changed `package.json`.

### Step 6 — Run the production build

```bash
npm run build
```

This does two things (defined in `package.json`):
1. Runs `vite build` — compiles React into static HTML/CSS/JS in the `dist/` folder
2. Runs `cp dist/index.html dist/404.html` — creates a 404 fallback so hash routing works on GitHub Pages

### Step 7 — Verify the build output

```bash
ls dist/
```

You should see: `index.html`, `404.html`, `assets/` (JS/CSS bundles), `images/`, `videos/`, `flasher-logo.svg`, `robots.txt`, `sitemap.xml`.

### Step 8 — Preview locally (optional but recommended)

```bash
npm run preview
```

Opens a local server (usually http://localhost:4173) so you can click through the site and verify everything loads correctly before deploying.

---

## Phase 3: Deploy to GitHub Pages (3 minutes)

### Step 9 — Commit any changes to main

```bash
git add -A
git commit -m "Build for deployment"
git push origin main
```

### Step 10 — Deploy the dist/ folder to gh-pages branch

```bash
git subtree push --prefix dist origin gh-pages
```

This pushes ONLY the `dist/` folder contents to the `gh-pages` branch, which GitHub Pages serves.

**If this fails with a conflict error**, run these two commands instead:

```bash
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
```

### Step 11 — Verify GitHub Pages is configured

Go to: https://github.com/MingAgent/flasher-fleet-solutions/settings/pages

Confirm:
- **Source:** "Deploy from a branch"
- **Branch:** `gh-pages` / `/ (root)`

If it says "main" instead of "gh-pages", change it to `gh-pages`.

### Step 12 — Wait and verify the live site

GitHub Pages takes 1-3 minutes to update. Visit:

**https://mingagent.github.io/flasher-fleet-solutions/**

Walk through every page and check:
- [ ] Home page loads with hero video
- [ ] Partner carousel scrolls with vendor logos
- [ ] Law Enforcement page loads with hero image
- [ ] Amber Market page loads with hero image
- [ ] About page loads
- [ ] Portfolio page loads with project images and filter works
- [ ] Contact page loads and form submits (test with a business email)
- [ ] Privacy Policy and Terms of Service pages load
- [ ] Navigation works between all pages
- [ ] Mobile menu (hamburger) works on small screens

---

## Phase 4: Custom Domain Setup (Optional — 15 minutes + 24-48hr DNS wait)

If you want the site at `flasher-fleet-solutions.com` instead of the GitHub Pages URL, there are additional steps. **This is a bigger change** because all asset paths need updating.

### Step 13 — Create a CNAME file

Create `public/CNAME` with exactly this content (no trailing newline, no www):

```
www.flasher-fleet-solutions.com
```

### Step 14 — Change vite.config.js base path

```js
base: '/',    // was '/flasher-fleet-solutions/'
```

### Step 15 — Update ALL asset paths in components

Every file that has `/flasher-fleet-solutions/images/...` or `/flasher-fleet-solutions/videos/...` needs to change to just `/images/...` and `/videos/...`. The files to update:

| File | What to change |
|------|----------------|
| `src/pages/Home.jsx` | Service images, hero video paths |
| `src/pages/About.jsx` | Hero background |
| `src/pages/Portfolio.jsx` | Hero background, all 8 project images |
| `src/pages/LawEnforcement.jsx` | Hero background |
| `src/pages/AmberMarket.jsx` | Hero background |
| `src/components/PartnerCarousel.jsx` | All 9 partner logo paths |

A quick way to do this in one shot:

```bash
# From the project root
find src/ -name "*.jsx" -exec sed -i '' 's|/flasher-fleet-solutions/|/|g' {} +
```

### Step 16 — Update index.html canonical URLs

In `index.html`, update the canonical and OG URLs to match the custom domain:

```html
<link rel="canonical" href="https://www.flasher-fleet-solutions.com/" />
```

(Note: This is already pointing to the custom domain URL, so it may already be correct.)

### Step 17 — Rebuild and deploy

```bash
npm run build
git add -A
git commit -m "Configure for custom domain"
git push origin main
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
```

### Step 18 — Configure DNS at Hostinger

In Hostinger's DNS settings for `flasher-fleet-solutions.com`, add:

**A Records (all 4 required):**

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME Record:**

| Type | Name | Value |
|------|------|-------|
| CNAME | www | mingagent.github.io |

### Step 19 — Enable custom domain in GitHub

Go to: https://github.com/MingAgent/flasher-fleet-solutions/settings/pages

- Enter `www.flasher-fleet-solutions.com` in the "Custom domain" field
- Click Save
- Wait for DNS check to pass (can take up to 48 hours)
- Check "Enforce HTTPS" once DNS is verified

---

## Phase 5: n8n Webhook / CRM Integration (5 minutes)

The contact form already sends data to n8n. Here's how to verify or set it up.

### Step 20 — Verify the webhook URL

In `src/components/ContactForm.jsx`, confirm the webhook URL:

```js
const WEBHOOK_URL = 'https://mingma-dev.app.n8n.cloud/webhook/flasher-fleet-contact'
```

### Step 21 — Import the n8n workflow

1. Open your n8n instance at `https://mingma-dev.app.n8n.cloud`
2. Import the workflow from `n8n-workflows/flasher-fleet-contact-to-pipedrive.json`
3. Add your Pipedrive API credentials to all Pipedrive nodes
4. Activate the workflow

### Step 22 — Test the form end-to-end

Submit a test entry through the contact form using a business email address. Verify:
- [ ] Form shows success message
- [ ] Person is created in Pipedrive
- [ ] Deal is created in Pipedrive with correct title
- [ ] Note is attached to the deal with all form details

---

## Phase 6: Post-Launch Checklist

### Step 23 — SEO verification

- [ ] `robots.txt` is accessible at `{site-url}/robots.txt`
- [ ] `sitemap.xml` is accessible at `{site-url}/sitemap.xml`
- [ ] Schema.org structured data is in `index.html` (LocalBusiness type)
- [ ] OG meta tags are present for social sharing

### Step 24 — Performance check

- [ ] Open Chrome DevTools → Network tab → verify images and videos load
- [ ] Check that hero video plays (28MB file — may take a moment)
- [ ] Test on mobile (responsive design)

### Step 25 — Submit to Google Search Console

Once the site is live on the custom domain:
1. Go to https://search.google.com/search-console
2. Add property for `flasher-fleet-solutions.com`
3. Submit the sitemap URL

---

## Quick Reference: The 3 Commands That Deploy

If everything is already built and you just need to push an update:

```bash
npm run build
git add -A && git commit -m "Update site" && git push origin main
git push origin --delete gh-pages && git subtree push --prefix dist origin gh-pages
```

---

## Architecture Summary

```
User visits site
       ↓
GitHub Pages serves dist/index.html from gh-pages branch
       ↓
React app loads → HashRouter handles #/routes
       ↓
Pages render with images from /public/images/
       ↓
Contact form → POST to n8n webhook
       ↓
n8n workflow → Creates Person + Deal + Note in Pipedrive CRM
```

## Known Issues / Flags

1. **Canonical URL mismatch:** `index.html` points canonical to `flasherfleetsolutions.com` (no hyphens, Squarespace domain) but the actual domain is `flasher-fleet-solutions.com` (with hyphens, Hostinger). This should be corrected.

2. **No CNAME file yet:** Currently deploying to GitHub Pages subdirectory URL. Custom domain requires adding CNAME + path changes (Phase 4).

3. **Large video files:** 6 hero videos in `public/videos/`. The main one (`hero-main.mp4`) is ~28MB. Consider compressing for faster page load.

4. **PROJECT_INSTRUCTIONS.md is untracked:** This file exists locally but hasn't been committed to git yet.

5. **index.lock warning:** Git shows a `.git/index.lock` warning which may need cleanup (`rm .git/index.lock`).
