#!/bin/bash
# Create SVG placeholders for missing images

echo "Creating placeholders for missing images..."

# List of missing images
missing=(
  "butter-chicken.png"
  "lamb-vindaloo.jpg"
  "lamb-biryani.jpg"
  "prawn-biryani.jpg"
  "fish-tikka.jpg"
  "vibrant-fish-curry.png"
  "kadhai-mutton.jpg"
  "lamb-seekh-kebab.jpg"
  "chana-masala.jpg"
  "aloo-jeera.jpg"
  "aloo-palak.jpg"
  "aloo-gobi.jpg"
  "paneer-pakora.jpg"
  "rasmalai.png"
  "creamy-kheer.png"
  "vegetable-spring-rolls.jpg"
  "lime-soda.jpg"
  "rose-milk.jpg"
  "masala-chai.jpg"
)

for img in "${missing[@]}"; do
  if [ ! -f "public/$img" ]; then
    name="${img%.*}"
    name="${name//-/%20}"
    name="${name//%20/ }"
    name=$(echo "$name" | sed 's/\b\(.\)/\u\1/g')
    
    svg_content="<?xml version='1.0' encoding='UTF-8'?>
<svg width='400' height='300' xmlns='http://www.w3.org/2000/svg'>
  <rect width='400' height='300' fill='#f5f5f5' stroke='#ddd' stroke-width='2'/>
  <text x='200' y='140' font-family='Arial, sans-serif' font-size='16' fill='#666' text-anchor='middle' font-weight='bold'>$name</text>
  <text x='200' y='165' font-family='Arial, sans-serif' font-size='12' fill='#999' text-anchor='middle'>Photo Coming Soon</text>
  <circle cx='200' cy='210' r='25' fill='none' stroke='#999' stroke-width='2'/>
  <text x='200' y='217' font-family='Arial, sans-serif' font-size='20' fill='#999' text-anchor='middle'>📷</text>
</svg>"
    
    if [[ "$img" == *.png ]]; then
      echo "$svg_content" > "public/$img"
    else
      echo "$svg_content" > "public/$img"
    fi
    echo "✅ Created placeholder: $img"
  fi
done

echo ""
echo "Placeholder creation complete!"
