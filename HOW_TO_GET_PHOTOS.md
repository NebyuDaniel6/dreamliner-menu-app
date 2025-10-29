# How to Get Real Menu Photos

## 📸 Current Status
- ✅ Placeholder images deployed (SVG files)
- ⚠️ Need real food photos

## Options to Get Real Photos

### Option 1: Hotel's Own Photos (Recommended)
**Best quality and authentic:**
- Take photos of your actual dishes
- Use professional photographer if available
- Ensures accurate representation

### Option 2: Free Stock Photo Sites
Download from free stock photo sites:

**Recommended Sites:**
1. **Unsplash** (https://unsplash.com)
   - Search: "indian food", "chicken tikka", "butter chicken"
   - Free to use, high quality
   - Download and rename to match menu items

2. **Pexels** (https://www.pexels.com)
   - Search: "indian cuisine", "biryani", "naan"
   - Free commercial use
   - High resolution available

3. **Pixabay** (https://pixabay.com)
   - Free food photography
   - No attribution required
   - Various formats available

### Option 3: AI-Generated Photos
**Modern solution:**
- **Midjourney** or **DALL-E** for food photography
- Can generate consistent style
- Professional looking results

### Option 4: Stock Photo Services
**Paid but professional:**
- **Getty Images** - Professional food photography
- **Shutterstock** - Extensive food library
- **Adobe Stock** - High-quality images

## Quick Download Guide

### Step 1: Download Images
For each menu item, search and download:
- `chicken-tikka.png` → Search "chicken tikka" on Unsplash
- `butter-chicken.png` → Search "butter chicken"
- Continue for all 58 items

### Step 2: Resize Images
**Recommended:** 400x300px or 800x600px

**Tools:**
- Online: https://www.iloveimg.com/resize-image
- Desktop: Photoshop, GIMP, Preview (Mac)
- Command line: `sips -Z 400 <image>`

### Step 3: Optimize for Web
**Reduce file size:**
- Online: https://tinypng.com or https://squoosh.app
- Keep under 500KB per image
- Maintain quality

### Step 4: Rename Files
**Must match exactly:**
- Use lowercase with hyphens
- Match filenames in `image_files.txt`
- Example: `chicken-tikka.png` (not `Chicken Tikka.png`)

### Step 5: Upload
```bash
# Place in public/ folder
cp downloaded-images/* public/

# Auto-upload
./auto-upload.sh
```

## Automated Download Script

I can create a script that downloads images automatically from Unsplash API. Would you like me to set that up?

## Image Requirements Checklist

- [ ] Format: PNG or JPG
- [ ] Size: 400x300px minimum
- [ ] File size: < 500KB
- [ ] File naming: lowercase-hyphens.png
- [ ] Total: 58 images required

## Next Steps

1. **Choose your photo source** (above options)
2. **Download/resize all 58 images**
3. **Place in `public/` folder**
4. **Run `./auto-upload.sh`** to deploy automatically

## Need Help?

If you want me to:
- Set up automatic stock photo download → Say "yes"
- Create better placeholder images → Say "yes"
- Help with specific image → Describe it
