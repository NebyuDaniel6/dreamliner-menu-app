#!/bin/bash
# Auto-Detect and Upload Images
# Watches for new images and automatically uploads them

echo "🔄 Auto-Upload System Started"
echo ""

# Check for new images
NEW_IMAGES=$(git status --porcelain public/*.png public/*.jpg public/*.jpeg public/*.svg 2>/dev/null | grep "^??" | wc -l | tr -d ' ')

if [ "$NEW_IMAGES" -gt 0 ]; then
    echo "✅ Found $NEW_IMAGES new image(s) to upload"
    echo ""
    
    # Add all images
    git add public/*.png public/*.jpg public/*.jpeg public/*.svg
    
    # Commit
    git commit -m "Auto-upload menu images - $(date +%Y-%m-%d)"
    
    # Push
    git push origin main
    
    echo ""
    echo "✅ Images uploaded successfully!"
    echo "🚀 Render will auto-deploy in 2-3 minutes"
    echo ""
    echo "View deployment: https://dreamliner-menu-app.onrender.com"
else
    echo "ℹ️  No new images detected"
    echo "Place images in public/ folder to auto-upload"
fi
