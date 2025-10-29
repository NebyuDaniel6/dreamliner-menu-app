# Required Menu Images - Upload Guide

## 📁 Location
All images must be placed in the `public/` folder.

## 📊 Total Images Required: 55 unique images

## 📝 Image Files List

### Thali & Platters
- non-v-thali.png
- non-v-platter.png

### Starters
- chicken-tikka.png
- chicken-tikka-masala.png
- chicken-tikka-makhni.png
- ajwaini-fish-tikka.png
- keema-samosa.png
- mixed-veg.png
- vegetable-spring-rolls.jpg
- lamb-seekh-kebab.jpg
- samosas-full.png
- roasted-papad.png

### Main Course
- butter-chicken.png
- chicken-pad-pao.png
- palak-paneer.png
- murgh-awadhi-korma.png
- lamb-rogan-josh.png
- lamb-vindaloo.jpg
- kahada-palak-gosht.png
- kadhai-mutton.jpg

### Fish Specialties
- goan-fish-curry.png
- fish-amritsari.png
- fish-tikka.jpg
- vibrant-fish-curry.png

### Vegetarian
- paneer-tikka-masala.png
- kadhai-paneer.png
- paneer-pasanda.png
- paneer-pakora.jpg
- pineapple-paneer-tikka.png
- aloo-jeera.jpg
- aloo-palak.jpg
- aloo-gobi.jpg
- dal-tadkha.png
- chana-masala.jpg
- aloo-tikki.png

### Biryani
- chicken-dum-biryani.png
- lamb-biryani.jpg
- vegetable-biryani.png
- prawn-biryani.jpg

### Breads
- cheese-stuffed-naan.png
- garlic-butter-naan.png
- missi-roti.png

### Desserts
- gulab-jamum.png
- rasmalai.png
- kulfi.png
- creamy-kheer.png

### Drinks
- mango-lassi.png
- masala-tea.png
- lime-soda.jpg
- rose-milk.jpg
- masala-chai.jpg

### Cocktails
- espresso-martini.png
- fennel-collins.png
- virgin-mojito.png
- virgin-sour.png
- gulaab-sour.png
- macchiato.png
- negroni.png

## 📋 Image Specifications

### Recommended Settings:
- **Format**: PNG or JPG
- **Size**: 400x300px or similar aspect ratio (4:3)
- **File Size**: < 500KB per image (optimized for web)
- **Naming**: Use lowercase with hyphens (e.g., `chicken-tikka.png`)
- **Case Sensitivity**: Must match exactly (case-sensitive)

## 🚀 Upload Instructions

### Method 1: Via File Manager
1. Navigate to `public/` folder in your project
2. Upload all image files directly
3. Ensure filenames match exactly (case-sensitive)

### Method 2: Via Git
1. Place all images in `public/` folder
2. Commit: `git add public/*.png public/*.jpg`
3. Push: `git push origin main`
4. Render will automatically redeploy

### Method 3: Via cPanel (for IT team)
1. Log into cPanel File Manager
2. Navigate to `public_html/menu-app/public/`
3. Upload all image files
4. Restart application

## ✅ Verification

After uploading, verify images are accessible:
- `https://dreamliner-menu-app.onrender.com/chicken-tikka.png`
- `https://dreamliner-menu-app.onrender.com/butter-chicken.png`

## 🔍 Current Status

Check which images are missing:
```bash
# List missing images
for img in $(cat image_files.txt); do
  if [ ! -f "public/$img" ]; then
    echo "Missing: $img"
  fi
done
```

## 📞 Notes

- Images are referenced with `/` prefix in code (e.g., `/chicken-tikka.png`)
- Cache-busting parameters (`?v=1`) are optional but recommended
- Missing images will show placeholder or broken image icon
- All 4 menus (Zaika Restaurant, Zaika Room, Oak Restaurant, Oak Room) use the same images from `public/`
