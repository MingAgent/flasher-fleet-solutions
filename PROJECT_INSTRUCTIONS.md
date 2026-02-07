# Flasher Fleet Solutions - Complete Project Instructions

## Quick Reference - Get Site Live NOW

**Run these commands on your Mac to deploy immediately:**

```bash
cd /Users/joshmeunier/flasher-fleet-solutions
npm run build
git add -A
git commit -m "Deploy site"
git push origin main
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
```

**Site will be live at:** https://mingagent.github.io/flasher-fleet-solutions/

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Critical Configuration - THE ROOT CAUSE OF ALL ISSUES](#2-critical-configuration)
3. [Project Structure](#3-project-structure)
4. [File Reference](#4-file-reference)
5. [Deployment Instructions](#5-deployment-instructions)
6. [DNS Configuration](#6-dns-configuration)
7. [n8n Webhook Setup](#7-n8n-webhook-setup)
8. [Troubleshooting Guide](#8-troubleshooting-guide)
9. [Fresh Start Instructions](#9-fresh-start-instructions)
10. [Website Copy Reference](#10-website-copy-reference)

---

## 1. Project Overview

**Company:** Flasher Fleet Solutions
**Type:** React/Vite Single Page Application
**Repository:** https://github.com/MingAgent/flasher-fleet-solutions
**Hosting:** GitHub Pages
**Current URL:** https://mingagent.github.io/flasher-fleet-solutions/

### Tech Stack
- React 19.2.0
- Vite 7.2.4
- React Router DOM 7.13.0 (using HashRouter)
- GitHub Pages for hosting
- n8n for form webhook automation
- Pipedrive CRM integration

### Key Features
- Hero section with video background
- Partner carousel with vendor logos
- Contact form with n8n webhook integration
- Responsive design
- Multiple service pages (Law Enforcement, Amber Market, Portfolio)

---

## 2. Critical Configuration

### THE #1 CAUSE OF BLANK PAGES

**When deploying to GitHub Pages at `mingagent.github.io/flasher-fleet-solutions/`, ALL asset paths MUST include the `/flasher-fleet-solutions/` prefix.**

#### vite.config.js - MUST HAVE THIS:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/flasher-fleet-solutions/',
})
```

#### All Component Files - MUST USE FULL PATHS:

**WRONG (causes blank page):**
```javascript
image: '/images/services/law-enforcement.jpg'
backgroundImage: '/images/hero/home-hero.jpg'
video: '/videos/hero-main.mp4'
```

**CORRECT:**
```javascript
image: '/flasher-fleet-solutions/images/services/law-enforcement.jpg'
backgroundImage: '/flasher-fleet-solutions/images/hero/home-hero.jpg'
video: '/flasher-fleet-solutions/videos/hero-main.mp4'
```

### Files That Need Path Prefixes

| File | Paths to Update |
|------|-----------------|
| `src/pages/Home.jsx` | Service images, hero background, video paths |
| `src/pages/About.jsx` | Hero background image |
| `src/pages/Portfolio.jsx` | Hero background, all 8 project images |
| `src/pages/LawEnforcement.jsx` | Hero background image |
| `src/pages/AmberMarket.jsx` | Hero background image |
| `src/components/PartnerCarousel.jsx` | All 9 partner logo paths |

### HashRouter vs BrowserRouter

The project uses **HashRouter** (not BrowserRouter) which is REQUIRED for GitHub Pages. This is configured in `src/main.jsx`:

```javascript
import { HashRouter } from 'react-router-dom'
// URLs will look like: site.com/#/about instead of site.com/about
```

---

## 3. Project Structure

```
flasher-fleet-solutions/
├── public/
│   ├── images/
│   │   ├── hero/              # Hero background images
│   │   ├── partners/          # Vendor logos (9 files)
│   │   ├── portfolio/         # Project images (8 files)
│   │   ├── services/          # Service card images
│   │   └── locations/         # San Antonio/Victoria images
│   ├── videos/
│   │   └── hero-main.mp4      # Hero video (28MB)
│   ├── flasher-logo.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation
│   │   ├── Footer.jsx         # Footer with contact info
│   │   ├── Hero.jsx           # Hero section with video
│   │   ├── ContactForm.jsx    # Form with webhook
│   │   ├── PartnerCarousel.jsx # Vendor logo carousel
│   │   ├── ServiceCard.jsx
│   │   ├── StatsSection.jsx
│   │   └── CtaSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── LawEnforcement.jsx
│   │   ├── AmberMarket.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfService.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx                # Main routes
│   └── main.jsx               # Entry point with HashRouter
├── n8n-workflows/
│   └── flasher-fleet-contact-to-pipedrive.json
├── dist/                      # Built files (deployed to gh-pages)
├── vite.config.js             # CRITICAL: base path config
├── package.json
└── PROJECT_INSTRUCTIONS.md    # This file
```

---

## 4. File Reference

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/flasher-fleet-solutions/',
})
```

### package.json scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && cp dist/index.html dist/404.html",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### src/main.jsx
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
```

### Partner Logos (PartnerCarousel.jsx)
```javascript
const partners = [
  { name: 'Feniex', logo: '/flasher-fleet-solutions/images/partners/feniex.webp' },
  { name: 'Whelen', logo: '/flasher-fleet-solutions/images/partners/whelen.jpg' },
  { name: 'Federal Signal', logo: '/flasher-fleet-solutions/images/partners/federal-signal.jpg' },
  { name: 'SoundOff Signal', logo: '/flasher-fleet-solutions/images/partners/soundoff-signal.png' },
  { name: 'Code 3', logo: '/flasher-fleet-solutions/images/partners/code3.png' },
  { name: 'Setina', logo: '/flasher-fleet-solutions/images/partners/setina.png' },
  { name: 'Jotto Desk', logo: '/flasher-fleet-solutions/images/partners/jotto-desk.webp' },
  { name: 'Havis', logo: '/flasher-fleet-solutions/images/partners/havis.png' },
  { name: 'Troy Products', logo: '/flasher-fleet-solutions/images/partners/troy-products.webp' },
]
```

### Contact Form Webhook (ContactForm.jsx)
```javascript
const WEBHOOK_URL = 'https://mingma-dev.app.n8n.cloud/webhook/flasher-fleet-contact'
```

---

## 5. Deployment Instructions

### Standard Deployment (Recommended)

```bash
# 1. Navigate to project
cd /Users/joshmeunier/flasher-fleet-solutions

# 2. Build the project
npm run build

# 3. Commit changes
git add -A
git commit -m "Update site"
git push origin main

# 4. Deploy to gh-pages
git subtree push --prefix dist origin gh-pages
```

### If gh-pages Push Fails (Conflicts)

```bash
# Delete the remote gh-pages branch first
git push origin --delete gh-pages

# Then push fresh
git subtree push --prefix dist origin gh-pages
```

### Full Reset Deployment

```bash
cd /Users/joshmeunier/flasher-fleet-solutions

# Clean everything
rm -rf dist node_modules/.cache

# Reinstall and build
npm install
npm run build

# Reset git
git add -A
git commit -m "Fresh build"
git push origin main

# Delete and recreate gh-pages
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
```

### Verify Deployment

After deployment, the site should be live at:
- **GitHub Pages URL:** https://mingagent.github.io/flasher-fleet-solutions/

Check GitHub repository Settings > Pages to confirm deployment status.

---

## 6. DNS Configuration

### Current Domain Setup

**Primary Domain:** flasher-fleet-solutions.com (with hyphens)
**Registered at:** Hostinger
**Note:** flasherfleetsolutions.com (no hyphens) is registered at Squarespace and blocked by Google Workspace

### GitHub Pages DNS (in Hostinger)

**A Records (point to GitHub):**
| Type | Name | Points to | TTL |
|------|------|-----------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**CNAME Record:**
| Type | Name | Points to | TTL |
|------|------|-----------|-----|
| CNAME | www | mingagent.github.io | 3600 |

### Adding Custom Domain to GitHub Pages

1. Create `public/CNAME` file with domain:
```
www.flasher-fleet-solutions.com
```

2. Update `vite.config.js` for custom domain:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/',  // Change to '/' for custom domain
})
```

3. Update ALL component file paths to remove `/flasher-fleet-solutions/` prefix

4. Rebuild and deploy

5. In GitHub repo Settings > Pages > Custom domain, enter: `www.flasher-fleet-solutions.com`

6. Enable "Enforce HTTPS"

### IMPORTANT: Domain Changes Affect ALL Paths

| Hosting | vite.config.js base | Asset path prefix |
|---------|--------------------|--------------------|
| GitHub Pages (no custom domain) | `/flasher-fleet-solutions/` | `/flasher-fleet-solutions/` |
| Custom domain | `/` | `/` (no prefix) |

---

## 7. n8n Webhook Setup

### Webhook URL
```
https://mingma-dev.app.n8n.cloud/webhook/flasher-fleet-contact
```

### Form Data Sent to Webhook
```javascript
{
  firstName: "John",
  lastName: "Doe",
  email: "john@company.com",
  phone: "210-555-1234",
  company: "ABC Company",
  industry: "Law Enforcement",
  fleetSize: "6-15 vehicles",
  message: "Project details...",
  fullName: "John Doe",
  source: "Website Contact Form",
  submittedAt: "2025-02-07T12:00:00.000Z",
  pageUrl: "https://site.com/#/contact"
}
```

### n8n Workflow (flasher-fleet-contact-to-pipedrive.json)

The workflow does:
1. **Webhook Trigger** - Receives form data
2. **Create Person in Pipedrive** - Creates contact with name, email, phone
3. **Create Deal in Pipedrive** - Creates deal titled "Quote Request - {Company} ({Industry})"
4. **Add Note to Deal** - Adds all form details as a note
5. **Respond to Webhook** - Returns success response

### Setting Up in n8n

1. Import `n8n-workflows/flasher-fleet-contact-to-pipedrive.json`
2. Add Pipedrive API credentials
3. Update credential IDs in all Pipedrive nodes
4. Activate the workflow

### Blocked Email Domains (Contact Form)

The form blocks personal email domains:
- gmail.com, yahoo.com, hotmail.com, outlook.com
- icloud.com, me.com, mac.com, aol.com
- protonmail.com, mail.com, live.com, msn.com

---

## 8. Troubleshooting Guide

### Problem: Blank/White Screen

**Cause:** Asset paths don't match vite.config.js base path

**Fix:**
1. Check `vite.config.js` has correct `base` value
2. Ensure ALL component files use matching path prefix
3. Rebuild: `npm run build`
4. Redeploy: `git subtree push --prefix dist origin gh-pages`

### Problem: 404 Error on Page Refresh

**Cause:** GitHub Pages doesn't support client-side routing

**Fix:** Already handled by:
- Using HashRouter (URLs like `/#/about`)
- Build script copies `dist/index.html` to `dist/404.html`

### Problem: gh-pages Push Rejected

**Cause:** Branch conflicts

**Fix:**
```bash
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
```

### Problem: Images/Video Not Loading

**Cause:** Missing path prefix or wrong file location

**Check:**
1. File exists in `public/images/` or `public/videos/`
2. Path in component includes `/flasher-fleet-solutions/` prefix
3. File extension matches (case-sensitive on Linux)

### Problem: Form Submission Fails

**Check:**
1. Webhook URL is correct in ContactForm.jsx
2. n8n workflow is activated
3. CORS is not blocking (n8n handles this)
4. Network tab in browser DevTools for errors

### Problem: DNS Not Working

**Timeline:** DNS changes take 24-48 hours to propagate

**Verify:**
```bash
# Check A records
dig flasher-fleet-solutions.com +short

# Should return:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

# Check CNAME
dig www.flasher-fleet-solutions.com +short
# Should return: mingagent.github.io
```

---

## 9. Fresh Start Instructions

### Option A: Clean Rebuild (Same Repo)

```bash
cd /Users/joshmeunier/flasher-fleet-solutions

# Remove build artifacts
rm -rf dist node_modules

# Reinstall
npm install

# Build
npm run build

# Deploy fresh
git add -A
git commit -m "Clean rebuild"
git push origin main
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
```

### Option B: New Repository

```bash
# 1. Create new repo on GitHub (e.g., flasher-fleet-v2)

# 2. Clone existing project to new location
cp -r /Users/joshmeunier/flasher-fleet-solutions /Users/joshmeunier/flasher-fleet-v2
cd /Users/joshmeunier/flasher-fleet-v2

# 3. Remove old git history
rm -rf .git

# 4. Initialize fresh git
git init
git add -A
git commit -m "Initial commit"

# 5. Connect to new repo
git remote add origin https://github.com/MingAgent/flasher-fleet-v2.git
git push -u origin main

# 6. Deploy
npm run build
git subtree push --prefix dist origin gh-pages
```

### Option C: Use gh-pages Package

```bash
cd /Users/joshmeunier/flasher-fleet-solutions

# Install gh-pages if not present
npm install --save-dev gh-pages

# Deploy using package
npm run deploy
```

---

## 10. Website Copy Reference

### Company Information

**Name:** Flasher Fleet Solutions
**Parent Company:** Flasher Equipment Company (since 1956)
**Experience:** 68+ years combined industry experience

**San Antonio Location:**
- 5827 W Highway 90
- San Antonio, TX 78227
- Phone: (210) 201-6121

**Victoria Location:**
- 8718 Nursery Dr
- Victoria, TX 77904
- Phone: (210) 201-6121

### Taglines

- "Professional Vehicle Upfitting Built for the Mission"
- "Premium workmanship, cutting-edge technology, and innovative solutions"
- "Texas's trusted upfitting partner"

### Core Values (Pillars)

1. **Premium Workmanship** - Every install meets the highest standards
2. **Speed to Delivery** - Streamlined processes get vehicles back on the road faster
3. **Reliability** - Equipment that works when you need it most
4. **Trust** - Built reputation on doing the job right, every time

### Services

**Law Enforcement:**
- Emergency Lighting (lightbars, LEDs, traffic advisors)
- Communication Systems (radios, PA, speakers)
- Console & Mounting (laptop mounts, weapon mounts)
- Prisoner Transport (partitions, transport seats)
- Video Systems (in-car video, body camera integration)
- Electrical Systems (auxiliary wiring, power management)

**Amber Market:**
- DOT & Highway vehicles
- Construction & Utility fleets
- Tow & Recovery
- UTVs & Trailers
- 18 Wheelers
- Commercial Fleet

### Vendor Partners

- Feniex
- Whelen
- Federal Signal
- SoundOff Signal
- Code 3
- Setina
- Jotto Desk
- Havis
- Troy Products

### Form Industries

- Law Enforcement
- DOT/Highway
- Tow/Recovery
- Utilities
- Construction
- Other

### Fleet Sizes

- 1-5 vehicles
- 6-15 vehicles
- 16-50 vehicles
- 51-100 vehicles
- 100+ vehicles

---

## Appendix: Full Path Reference

### Home.jsx Paths
```javascript
// Services
'/flasher-fleet-solutions/images/services/law-enforcement.jpg'
'/flasher-fleet-solutions/images/services/amber-market.jpg'
'/flasher-fleet-solutions/images/services/custom-upfitting.jpg'

// Hero
'/flasher-fleet-solutions/images/hero/home-hero.jpg'
'/flasher-fleet-solutions/videos/hero-main.mp4'
```

### About.jsx Paths
```javascript
'/flasher-fleet-solutions/images/hero/about-hero.jpg'
```

### Portfolio.jsx Paths
```javascript
'/flasher-fleet-solutions/images/hero/portfolio-hero.jpg'
'/flasher-fleet-solutions/images/portfolio/project-1.jpg'
'/flasher-fleet-solutions/images/portfolio/project-2.jpg'
'/flasher-fleet-solutions/images/portfolio/project-3.jpg'
'/flasher-fleet-solutions/images/portfolio/project-4.jpg'
'/flasher-fleet-solutions/images/portfolio/project-5.jpg'
'/flasher-fleet-solutions/images/portfolio/project-6.jpg'
'/flasher-fleet-solutions/images/portfolio/project-7.jpg'
'/flasher-fleet-solutions/images/portfolio/project-8.jpg'
```

### LawEnforcement.jsx Paths
```javascript
'/flasher-fleet-solutions/images/hero/law-enforcement-hero.jpg'
```

### AmberMarket.jsx Paths
```javascript
'/flasher-fleet-solutions/images/hero/amber-hero.jpg'
```

### PartnerCarousel.jsx Paths
```javascript
'/flasher-fleet-solutions/images/partners/feniex.webp'
'/flasher-fleet-solutions/images/partners/whelen.jpg'
'/flasher-fleet-solutions/images/partners/federal-signal.jpg'
'/flasher-fleet-solutions/images/partners/soundoff-signal.png'
'/flasher-fleet-solutions/images/partners/code3.png'
'/flasher-fleet-solutions/images/partners/setina.png'
'/flasher-fleet-solutions/images/partners/jotto-desk.webp'
'/flasher-fleet-solutions/images/partners/havis.png'
'/flasher-fleet-solutions/images/partners/troy-products.webp'
```

---

*Document created: February 7, 2026*
*For Flasher Fleet Solutions by Mingma.io*
