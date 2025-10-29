# Automatic Image Upload Guide

## 🚀 Quick Upload Methods

### Method 1: Using the Upload Script (Recommended)

```bash
# Run the automatic upload script
./upload-images.sh
```

This script will:
- Check for existing images
- Verify required images
- Optionally upload to GitHub automatically

### Method 2: Drag & Drop via Git

1. **Place images in `public/` folder**
   - Drag and drop image files into `public/` directory
   - Ensure filenames match exactly (case-sensitive)

2. **Upload via Git:**
```bash
# Add all images
git add public/*.png public/*.jpg public/*.jpeg

# Commit
git commit -m "Add menu images"

# Push (auto-deploys on Render)
git push origin main
```

### Method 3: Bulk Upload Script

Create a script for bulk uploads:

```bash
#!/bin/bash
# Bulk upload images from a folder

SOURCE_FOLDER="/path/to/your/images"
TARGET_FOLDER="public"

# Copy images
cp "$SOURCE_FOLDER"/*.png "$TARGET_FOLDER/" 2>/dev/null
cp "$SOURCE_FOLDER"/*.jpg "$TARGET_FOLDER/" 2>/dev/null

# Upload to GitHub
git add "$TARGET_FOLDER"/*.png "$TARGET_FOLDER"/*.jpg
git commit -m "Bulk upload menu images"
git push origin main
```

### Method 4: Via GitHub Web Interface

1. Go to `https://github.com/NebyuDaniel6/dreamliner-menu-app`
2. Navigate to `public/` folder
3. Click "Upload files"
4. Drag and drop images
5. Commit changes
6. Render auto-deploys

## 📋 Pre-Upload Checklist

Before uploading, verify:
- [ ] All images are in `public/` folder
- [ ] Filenames match exactly (case-sensitive)
- [ ] Images are optimized (< 500KB each)
- [ ] Format is PNG or JPG

## ✅ Post-Upload Verification

After uploading, verify images are accessible:

```bash
# Test image URLs
curl -I https://dreamliner-menu-app.onrender.com/chicken-tikka.png
curl -I https://dreamliner-menu-app.onrender.com/butter-chicken.png
```

Or visit in browser:
- `https://dreamliner-menu-app.onrender.com/chicken-tikka.png`

## 🔄 Automatic Deployment

**Render automatically redeploys** when you push to GitHub:
- Push images → Wait 2-3 minutes → Images available
- No manual deploy needed!

## 📝 Image Requirements

- **Format**: PNG or JPG
- **Size**: 400x300px (recommended)
- **File Size**: < 500KB per image
- **Naming**: Lowercase with hyphens
- **Total**: 58 images required

See `IMAGE_UPLOAD_GUIDE.md` for complete list.
