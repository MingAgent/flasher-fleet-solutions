# Flasher Fleet Solutions - Media Placement Plan

## Overview
This document maps every placeholder and media opportunity on the website to the correct media asset.

---

## 🎬 HERO VIDEOS (Ready to Deploy)

### Available Hero Videos:
| File | Theme | Duration | Size | Location |
|------|-------|----------|------|----------|
| `hero_law_enforcement.mp4` | Law Enforcement | 10s | 2.8MB | `/assets/hero/` |
| `hero_amber_construction.mp4` | Amber/Construction | 10s | 2.9MB | `/assets/hero/` |
| `hero_craftsmanship.mp4` | Craftsmanship | 10s | 4.2MB | `/assets/hero/` |

### Placement Map:

| Page | Current State | Recommended Media | Code Change Needed |
|------|---------------|-------------------|-------------------|
| **Home.jsx** | No background | `hero_law_enforcement.mp4` OR rotating all 3 | Add `backgroundVideo` prop |
| **LawEnforcement.jsx** | No background | `hero_law_enforcement.mp4` | Add `backgroundImage` with poster frame |
| **AmberMarket.jsx** | No background | `hero_amber_construction.mp4` | Add `backgroundImage` with poster frame |
| **Portfolio.jsx** | No background | `hero_craftsmanship.mp4` | Add `backgroundImage` with poster frame |

---

## 🖼️ PORTFOLIO PAGE - 8 PLACEHOLDERS NEED IMAGES

**File:** `src/pages/Portfolio.jsx`
**Current State:** Line 114 shows `<div className="project-placeholder">` instead of actual images

### Available Images from Media Killshot:

| Project | Category | Recommended Image | Why |
|---------|----------|-------------------|-----|
| **1. Police Interceptor Full Build** | law-enforcement | `IMG_2142.jpg` | Dual truck shot, dramatic lighting |
| **2. DOT Highway Maintenance Fleet** | amber | `20250809_204130.jpg` | 3 trucks with amber lights |
| **3. Mobile Command Center** | specialty | `20260114_153428.mp4` (frame) | Texas S&R vehicle |
| **4. Tow Truck Warning System** | amber | `IMG_2144.jpg` | Black Silverado with grille lights |
| **5. Unmarked Detective Vehicle** | law-enforcement | `IMG_2146.jpg` | White Ford with lights |
| **6. Utility Service Truck** | amber | `20251125_135553.mp4` (frame) | Cargo storage system |
| **7. K-9 Unit Vehicle** | specialty | `IMG_2138.jpg` | Close-up work shot |
| **8. Quick Response Vehicle** | specialty | `20250912_195816.mp4` (frame) | Night emergency lights |

### Implementation Steps:
1. Copy images to `/public/portfolio/`
2. Rename to `project-1.jpg` through `project-8.jpg`
3. Update Portfolio.jsx to use `<img>` instead of placeholder div

---

## 🏭 VENDOR LOGOS - PARTNER CAROUSEL

**File:** `src/components/PartnerCarousel.jsx`
**Needs:** 7 vendor logos

### Required Logos:
| Vendor | Source | Status |
|--------|--------|--------|
| Feniex | feniex.com | Need to download |
| Federal Signal | fedsig.com | Need to download |
| SoundOff Signal | soundoffsignal.com | Need to download |
| Code 3 | code3esg.com | Need to download |
| Jotto Desk | gojotto.com | Need to download |
| Havis | havis.com | Need to download |
| Troy Products | troyproducts.com | Need to download |

### Size Requirements:
- Desktop: 160x70px
- Mobile: 140x60px
- Format: PNG with transparency

---

## 📁 SERVICE CARD IMAGES (Optional Enhancement)

**File:** `src/components/ServiceCard.jsx`
**Current:** No images, just title/description

### Recommended Images:
| Service | Recommended Image |
|---------|-------------------|
| Law Enforcement | `IMG_2142.jpg` (cropped) |
| Amber Market | `IMG_2144.jpg` (cropped) |
| Custom Upfitting | `hero_craftsmanship.mp4` (frame) |

---

## 📋 COMPLETE MEDIA INVENTORY

### Videos Ready:
```
/assets/hero/
├── hero_law_enforcement.mp4 (2.8MB)
├── hero_amber_construction.mp4 (2.9MB)
└── hero_craftsmanship.mp4 (4.2MB)

/assets/
├── FFS_teaser_10sec.mp4 (1.7MB)
├── FFS_video_30sec.mp4 (17MB)
└── FFS_video_60sec.mp4 (30MB)
```

### Images Ready:
```
/assets/Media Killshot/
├── Landscape Images (16:9, excellent quality):
│   ├── 20250809_204130.jpg - 3 trucks hero shot ⭐
│   ├── 20250809_204512.jpg - Similar angle
│   ├── 20250912_153419.jpg - Daytime
│   ├── 20251109_133600.jpg - Detail
│   ├── 20251109_133623.jpg - Detail
│   ├── 20251117_152426.jpg - Daytime
│   └── 20251219_085332.jpg - Winter
│
├── Professional Photos (6000x4000):
│   ├── IMG_2127.jpg - White Ford rear
│   ├── IMG_2128.jpg - Detail shot
│   ├── IMG_2130.jpg - Work in progress
│   ├── IMG_2132.jpg - Interior work
│   ├── IMG_2134.jpg - Console work
│   ├── IMG_2138.jpg - Close-up detail
│   ├── IMG_2141.jpg - Wiring detail
│   ├── IMG_2142.jpg - Dual trucks ⭐
│   ├── IMG_2144.jpg - Black Silverado ⭐
│   ├── IMG_2146.jpg - Night shot ⭐
│   └── IMG_2153.jpg - Finished work
│
└── Canon RAW (need conversion):
    └── IMG_8248.CR3 - IMG_8400.CR3 (8 files)
```

---

## 🚀 IMPLEMENTATION PRIORITY

### Phase 1 - Critical (Portfolio Images)
1. Copy 8 images to `/public/portfolio/`
2. Update Portfolio.jsx to show actual images
3. **Impact:** High - Portfolio currently broken

### Phase 2 - High Impact (Hero Videos)
1. Update Hero.jsx to support video backgrounds
2. Add hero videos to each page
3. **Impact:** High - Major visual upgrade

### Phase 3 - Medium (Vendor Logos)
1. Download/source all vendor logos
2. Add to PartnerCarousel
3. **Impact:** Medium - Credibility boost

### Phase 4 - Enhancement (Service Cards)
1. Add image support to ServiceCard component
2. Assign appropriate images
3. **Impact:** Low-Medium - Nice to have

---

## 📝 CODE CHANGES SUMMARY

### Hero.jsx - Add Video Support
```jsx
// Add backgroundVideo prop alongside backgroundImage
function Hero({
  // ... existing props
  backgroundVideo,
  backgroundImage,
}) {
  return (
    <section className="hero">
      {backgroundVideo && (
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      {/* rest of component */}
    </section>
  )
}
```

### Portfolio.jsx - Replace Placeholders
```jsx
// Line 112-116: Replace placeholder with actual image
<div className="project-image">
  <img src={project.image} alt={project.title} />
</div>
```

---

*Generated: February 7, 2026*
*Ready for implementation*
