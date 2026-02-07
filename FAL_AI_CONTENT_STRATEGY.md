# Flasher Fleet Solutions - fal.ai Content Strategy
## Media Analysis & Cost-Effective Recommendations

---

## 📊 Media Inventory Analysis

### Videos (9 files, ~55 seconds total)

| File | Resolution | Duration | Quality | Best Use |
|------|------------|----------|---------|----------|
| 20250912_195816.mp4 | 4K (3840x2160) | 5.6s | HEVC | Hero background |
| 20251125_135553.mp4 | 4K (3840x2160) | 5.8s | HEVC | Hero background |
| 20260114_153428.mp4 | 4K (3840x2160) | 6.0s | HEVC | Hero background |
| Working 1.MP4 | 1080p | 5.9s | H.264 | Action sequence |
| Working 2.MP4 | 1080p | 11.9s | H.264 | Feature showcase |
| Working 3.MP4 | 1080p | 9.2s | H.264 | Capabilities reel |
| Working 4.MP4 | 1080p | 3.4s | H.264 | Quick cut |
| Working 5.MP4 | 1080p | 3.6s | H.264 | Quick cut |
| Working 6.MP4 | 1080p | 9.7s | H.264 | Behind-the-scenes |

### Images (17 JPGs + 8 RAW files)

**Hero-Quality Shots:**
- `20250809_204130.jpg` - **BEST HERO IMAGE** - 3 trucks at dusk, lights blazing, shop in background
- `IMG_2142.jpg` - Dual truck shot (white Ford + black Chevy), dramatic lighting
- `IMG_2144.jpg` - Black Silverado with grille lights illuminated

**Portfolio Shots:**
- `IMG_2127.jpg` - White Ford Super Duty rear view
- `IMG_2146.jpg`, `IMG_2153.jpg`, `IMG_2158.jpg` - Various completed builds

**RAW Files (CR3):**
- 8 Canon RAW files available for highest-quality processing if needed

---

## 🎬 Recommended Hero Video Strategy

### Option A: FFmpeg Compose (MOST COST-EFFECTIVE) ✅ RECOMMENDED

**What it does:** Combines your existing clips into a professional 10-second hero video with transitions

**Recommended sequence:**
1. `20250809_204130.jpg` (static hero shot) - 2 seconds
2. `Working 1.MP4` (action) - 3 seconds
3. `20251125_135553.mp4` (4K footage) - 3 seconds
4. `Working 4.MP4` or `Working 5.MP4` (quick cut finale) - 2 seconds

**Cost:** ~$0.01-0.05 per render
**Turnaround:** Instant

### Option B: AI-Enhanced Video (Kling/Wan)

**What it does:** Takes your best image and generates motion/animation

**Use case:** Create subtle motion on the hero image (lights pulsing, slight camera drift)
- Kling 2.5 Turbo Pro: $0.07/second = $0.70 for 10 seconds
- Wan 2.5: $0.05/second = $0.50 for 10 seconds

**Best for:** If you want cinematic movement added to still photos

---

## 🖼️ Image Strategy

### Critical Finding: YOUR PHOTOS ARE ALREADY EXCELLENT

After reviewing John's media, I strongly recommend **NOT using AI image generation**. Here's why:

1. The existing photos are **professional quality** with perfect lighting
2. They show **real completed work** which builds trust
3. AI-generated images could look artificial and undermine credibility

### Recommended Image Approach:

**For Hero Section:**
- Use `20250809_204130.jpg` (3 trucks at dusk) - NO changes needed

**For Gallery/Portfolio:**
- Rotate the sideways images using basic processing
- Minor color correction if needed using fal.ai's image enhancement (~$0.02/image)

**Optional Enhancement:**
- FLUX Kontext Pro ($0.04/image) - Can upscale or enhance existing photos while preserving realism

---

## 💰 Cost Breakdown

### Minimum Viable (RECOMMENDED)
| Task | Method | Cost |
|------|--------|------|
| Hero Video (10 sec) | FFmpeg Compose | $0.05 |
| Image Rotation/Fixes | Local processing | $0.00 |
| **TOTAL** | | **$0.05** |

### Enhanced Package
| Task | Method | Cost |
|------|--------|------|
| Hero Video (10 sec) | FFmpeg Compose | $0.05 |
| AI Motion Hero | Wan 2.5 (10 sec) | $0.50 |
| Image Enhancement (5 images) | FLUX Kontext | $0.20 |
| **TOTAL** | | **$0.75** |

### Premium Package
| Task | Method | Cost |
|------|--------|------|
| Multiple Hero Videos (3x10 sec) | FFmpeg Compose | $0.15 |
| AI Motion Videos (2x10 sec) | Kling 2.5 Pro | $1.40 |
| Full Image Enhancement (17 images) | FLUX Kontext | $0.68 |
| **TOTAL** | | **$2.23** |

---

## 🎯 My Recommendation

**Go with the Minimum Viable approach first:**

1. **Hero Video:** Use FFmpeg Compose to create a 10-second loop from your best clips
2. **Hero Image:** Use `20250809_204130.jpg` as-is - it's already perfect
3. **Gallery:** Use the existing high-quality photos with basic rotation fixes

**Total cost: Under $1**

This approach:
- Showcases REAL work (builds trust)
- Uses professional photography (already have it)
- Keeps costs minimal while testing what resonates
- Can always add AI-enhanced content later based on results

---

## 🔧 Implementation Steps

### Step 1: Create Hero Video with FFmpeg Compose
```javascript
// fal.ai FFmpeg Compose API call structure
{
  "tracks": [
    {
      "id": "track1",
      "type": "video",
      "keyframes": [
        {"timestamp": 0, "duration": 3, "url": "working1.mp4"},
        {"timestamp": 3, "duration": 4, "url": "20251125_135553.mp4"},
        {"timestamp": 7, "duration": 3, "url": "working5.mp4"}
      ]
    }
  ],
  "duration": 10,
  "resolution": {"width": 1920, "height": 1080}
}
```

### Step 2: Prepare Images
- Rotate `20251109_133600.jpg` (currently sideways)
- Optimize all images for web (compress to ~500KB)
- Create thumbnail versions for gallery

### Step 3: Deploy to Website
- Hero section: Video background + static fallback image
- Gallery: Optimized JPGs with lightbox

---

## 📋 Files Ready for Use

**Best Hero Images:**
1. `/assets/Media Killshot/20250809_204130.jpg` - 3 trucks at dusk ⭐
2. `/assets/Media Killshot/IMG_2142.jpg` - Dual truck dramatic shot
3. `/assets/Media Killshot/IMG_2144.jpg` - Black Silverado lights on

**Best Video Clips:**
1. `Working 1.MP4` - Clean 6-second action clip
2. `20251125_135553.mp4` - 4K quality showcase
3. `Working 4.MP4` + `Working 5.MP4` - Quick 3-second cuts

---

*Strategy created: February 6, 2026*
*Ready for implementation with fal.ai*
