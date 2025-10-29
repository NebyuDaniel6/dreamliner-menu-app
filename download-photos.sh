#!/bin/bash
# Auto-Download Menu Photos from Unsplash
# Requires: curl, API key (free at unsplash.com/developers)

echo "=== Automatic Photo Download ==="
echo ""
echo "This script downloads food photos from Unsplash"
echo ""

# Check if images already exist
if [ -f "public/chicken-tikka.png" ] && [ ! -f "public/chicken-tikka.png" ] || [ "$(file public/chicken-tikka.png | grep -c SVG)" -gt 0 ]; then
    echo "⚠️  Placeholder images detected"
    echo "Need to replace with real photos"
    echo ""
fi

echo "Options:"
echo "1. Download from Unsplash (requires API key)"
echo "2. Use your own photos (manual upload)"
echo ""
echo "For Unsplash download:"
echo "  - Get free API key: https://unsplash.com/developers"
echo "  - Add to .env: UNSPLASH_ACCESS_KEY=your_key"
echo ""
echo "For manual upload:"
echo "  - See HOW_TO_GET_PHOTOS.md"
echo "  - Place photos in public/ folder"
echo "  - Run: ./auto-upload.sh"
