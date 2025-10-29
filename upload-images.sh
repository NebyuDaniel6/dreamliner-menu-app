#!/bin/bash
# Auto Upload Images Script
# This script helps automatically upload menu images to GitHub

echo "=== Dreamliner Menu - Image Upload Script ==="
echo ""

# Check if images exist
if [ ! -d "public" ]; then
    mkdir -p public
    echo "Created public/ directory"
fi

# Count existing images
existing_images=$(find public -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) 2>/dev/null | wc -l | tr -d ' ')
echo "Current images in public/: $existing_images"

# Check required images
required_count=$(cat image_files.txt 2>/dev/null | wc -l | tr -d ' ')
echo "Required images: $required_count"
echo ""

# Check for missing images
missing_count=0
if [ -f "image_files.txt" ]; then
    echo "Checking for missing images..."
    while IFS= read -r img; do
        if [ ! -f "public/$img" ]; then
            echo "  ⚠️  Missing: $img"
            missing_count=$((missing_count + 1))
        fi
    done < image_files.txt
    
    if [ $missing_count -eq 0 ]; then
        echo "✅ All required images are present!"
    else
        echo ""
        echo "⚠️  Missing $missing_count images"
    fi
fi

echo ""
echo "=== Upload Options ==="
echo ""
echo "1. Upload images to GitHub (if images exist):"
echo "   git add public/*.png public/*.jpg public/*.jpeg"
echo "   git commit -m 'Add menu images'"
echo "   git push origin main"
echo ""
echo "2. To add images manually:"
echo "   - Place images in public/ folder"
echo "   - Run this script again to verify"
echo "   - Then run: git add public/ && git commit -m 'Add images' && git push"
echo ""
echo "3. Check image list:"
echo "   cat image_files.txt"
echo ""

# Auto-upload if images exist and git is clean
if [ $existing_images -gt 0 ]; then
    echo "=== Auto-Upload Available ==="
    echo ""
    read -p "Upload images to GitHub now? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Adding images to git..."
        git add public/*.png public/*.jpg public/*.jpeg 2>/dev/null
        
        if git diff --cached --quiet; then
            echo "No new images to commit"
        else
            echo "Committing images..."
            git commit -m "Add menu images (auto-upload)"
            
            echo "Pushing to GitHub..."
            git push origin main
            
            echo ""
            echo "✅ Images uploaded successfully!"
            echo "Render will automatically redeploy in 2-3 minutes"
        fi
    fi
fi
