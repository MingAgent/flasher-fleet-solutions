# Flasher Fleet Solutions - Production Deployment Plan

## Overview
This document outlines the step-by-step plan for implementing UI improvements and deploying to production.

---

## PHASE 1: PRE-DEPLOYMENT AUDIT ✓
**Status:** Current state reviewed

### 1.1 Current Site Structure (Home Page)
```
Hero Section (with video rotation)
    ↓
Services Section (3 cards - needs images)
    ↓
Stats Section
    ↓
Pillars Section ("Why Flasher Fleet Solutions?")
    ↓
Partner Carousel (needs to move up, needs logos)
    ↓
Locations Section (needs city images)
    ↓
CTA Section
```

### 1.2 Files to Modify
| File | Changes Required |
|------|------------------|
| `src/pages/Home.jsx` | Move PartnerCarousel, add service images |
| `src/components/Hero.jsx` | Add play/pause button |
| `src/components/Hero.css` | Style play/pause button (mobile-first) |
| `src/components/ServiceCard.jsx` | Add image prop support |
| `src/components/ServiceCard.css` | Style card images (mobile-first) |
| `src/components/PartnerCarousel.jsx` | Replace placeholders with logos |
| `src/components/PartnerCarousel.css` | Optimize for mobile-first |
| `src/pages/Home.css` | Location card image styles |

### 1.3 Assets Needed
- [ ] 3 service card images (Law Enforcement, Amber, Custom)
- [ ] 8 partner logos (Feniex, Whelen, Federal Signal, SoundOff, Code 3, Setina, Jotto Desk, Havis)
- [ ] 2 location images (San Antonio skyline, Victoria TX)

---

## PHASE 2: MOVE VENDOR CAROUSEL (Mobile-First)

### 2.1 Restructure Home.jsx Layout
**Before:**
```jsx
<Hero />
<Services />
<Stats />
<Pillars />
<PartnerCarousel />  // Current position
<Locations />
<CTA />
```

**After:**
```jsx
<Hero />
<PartnerCarousel />  // New position - directly under hero
<Services />
<Stats />
<Pillars />
<Locations />
<CTA />
```

### 2.2 Update Carousel CSS (Mobile-First)
- Reduce vertical padding on mobile
- Smaller logo containers on mobile
- Faster scroll animation
- Touch-friendly spacing

---

## PHASE 3: HERO PLAY/PAUSE BUTTON

### 3.1 Implementation
- Add `isPlaying` state to Hero component
- Position: Bottom-right corner, low-profile
- Mobile: 32px button, semi-transparent
- Desktop: 40px button on hover reveal
- Icon: Pause bars / Play triangle

### 3.2 Behavior
- Tap/click toggles video playback
- Visual feedback on state change
- Doesn't interfere with video indicators

---

## PHASE 4: SERVICE CARD IMAGES

### 4.1 Update ServiceCard Component
- Add `image` prop
- Image displays above title
- Aspect ratio: 16:9 for consistency
- Lazy loading for performance

### 4.2 Image Requirements
| Service | Image Description | Source |
|---------|-------------------|--------|
| Law Enforcement | Police vehicle with lights | Media Killshot folder |
| Amber Market | Construction/DOT vehicle | Media Killshot folder |
| Custom Upfitting | Workshop/installation shot | Media Killshot folder |

### 4.3 Mobile-First Styling
- Mobile: Full-width images, stacked cards
- Tablet: 2-column grid
- Desktop: 3-column grid

---

## PHASE 5: PARTNER CAROUSEL LOGOS

### 5.1 Partner List
1. **Feniex** - LED lighting manufacturer
2. **Whelen** - Emergency lighting
3. **Federal Signal** - Safety equipment
4. **SoundOff Signal** - LED solutions
5. **Code 3** - Emergency warning
6. **Setina** - Vehicle partitions
7. **Jotto Desk** - Console systems
8. **Havis** - Mobile mounting

### 5.2 Logo Specifications
- Format: PNG with transparency (preferred) or SVG
- Size: 200x80px source, scaled down
- Style: White/light version for dark background
- Fallback: Text placeholder if logo unavailable

### 5.3 Implementation
- Create `/public/images/partners/` directory
- Download/create optimized logos
- Update PartnerCarousel to use `<img>` tags
- Grayscale filter, full color on hover

---

## PHASE 6: LOCATION CARD IMAGES

### 6.1 Image Requirements
| City | Image Type | Dimensions |
|------|------------|------------|
| San Antonio | Skyline/landmark | 600x400px |
| Victoria | City/downtown view | 600x400px |

### 6.2 Implementation
- Add image container to location cards
- Image as card background or header
- Text overlay with good contrast
- Mobile: Stacked layout
- Desktop: Side-by-side

---

## PHASE 7: FINAL TESTING & DEPLOYMENT

### 7.1 Testing Checklist
- [ ] Mobile viewport (375px) - all features work
- [ ] Tablet viewport (768px) - responsive transitions
- [ ] Desktop viewport (1024px+) - full layout
- [ ] Video rotation plays smoothly
- [ ] Play/pause button works
- [ ] Partner carousel scrolls
- [ ] All images load
- [ ] No console errors

### 7.2 Deployment Steps
```bash
# 1. Run local dev server and test
npm run dev

# 2. Build for production
npm run build

# 3. Test production build locally
npm run preview

# 4. Stage all changes
git add .

# 5. Commit with descriptive message
git commit -m "feat: Add hero video controls, service images, partner logos, location images

- Move partner carousel under hero section
- Add play/pause button for hero videos
- Add images to service cards
- Replace carousel placeholders with partner logos
- Add San Antonio and Victoria images to location cards
- Optimize all changes for mobile-first

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# 6. Push to remote
git push origin main
```

---

## Execution Order

| Step | Task | Priority | Est. Time |
|------|------|----------|-----------|
| 1 | Move Partner Carousel | High | 5 min |
| 2 | Add Play/Pause Button | High | 15 min |
| 3 | Add Service Card Images | Medium | 20 min |
| 4 | Add Partner Logos | Medium | 30 min |
| 5 | Add Location Images | Medium | 20 min |
| 6 | Testing | High | 15 min |
| 7 | Deployment | High | 10 min |

**Total Estimated Time: ~2 hours**

---

## Ready to Execute
Proceeding with Phase 2: Move Vendor Carousel...
