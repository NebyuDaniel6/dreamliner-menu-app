#!/bin/bash
# Update image references from PNG to JPG in component files

echo "Updating image references..."

# List of PNG files that were converted to JPG
files=(
  "ajwaini-fish-tikka.png:ajwaini-fish-tikka.jpg"
  "aloo-tikki.png:aloo-tikki.jpg"
  "cheese-stuffed-naan.png:cheese-stuffed-naan.jpg"
  "chicken-dum-biryani.png:chicken-dum-biryani.jpg"
  "chicken-pad-pao.png:chicken-pad-pao.jpg"
  "chicken-tikka-makhni.png:chicken-tikka-makhni.jpg"
  "chicken-tikka-masala.png:chicken-tikka-masala.jpg"
  "chicken-tikka.png:chicken-tikka.jpg"
  "dal-tadkha.png:dal-tadkha.jpg"
  "espresso-martini.png:espresso-martini.jpg"
  "fennel-collins.png:fennel-collins.jpg"
  "fish-amritsari.png:fish-amritsari.jpg"
  "garlic-butter-naan.png:garlic-butter-naan.jpg"
  "goan-fish-curry.png:goan-fish-curry.jpg"
  "gulaab-sour.png:gulaab-sour.jpg"
  "gulab-jamum.png:gulab-jamum.jpg"
  "kadhai-paneer.png:kadhai-paneer.jpg"
  "kahada-palak-gosht.png:kahada-palak-gosht.jpg"
  "keema-samosa.png:keema-samosa.jpg"
  "kulfi.png:kulfi.jpg"
  "lamb-rogan-josh.png:lamb-rogan-josh.jpg"
  "macchiato.png:macchiato.jpg"
  "mango-lassi.png:mango-lassi.jpg"
  "masala-tea.png:masala-tea.jpg"
  "missi-roti.png:missi-roti.jpg"
  "mixed-veg.png:mixed-veg.jpg"
  "murgh-awadhi-korma.png:murgh-awadhi-korma.jpg"
  "negroni.png:negroni.jpg"
  "non-v-platter.png:non-v-platter.jpg"
  "non-v-thali.png:non-v-thali.jpg"
  "palak-paneer.png:palak-paneer.jpg"
  "paneer-pasanda.png:paneer-pasanda.jpg"
  "pineapple-paneer-tikka.png:pineapple-paneer-tikka.jpg"
  "roasted-papad.png:roasted-papad.jpg"
  "samosas-full.png:samosas-full.jpg"
  "vegetable-biryani.png:vegetable-biryani.jpg"
  "virgin-mojito.png:virgin-mojito.jpg"
  "virgin-sour.png:virgin-sour.jpg"
)

for mapping in "${files[@]}"; do
  old="${mapping%%:*}"
  new="${mapping##*:}"
  if [ -f "public/$new" ]; then
    # Update in component files
    find components -name "*.tsx" -exec sed -i '' "s|/$old|/$new|g" {} \;
    echo "✅ Updated: $old → $new"
  fi
done

echo ""
echo "Update complete!"
