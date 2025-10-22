"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface MenuItem {
  name: string
  description?: string
  price: string
  image?: string
  isSpecial?: boolean
  isNew?: boolean
}

// Utility to apply 17% markup to flexible price strings
function applyMarkupToPrice(price: string): string {
  const trim = price.trim()
  // Handle ranges or multi-prices separated by '/'
  if (trim.includes("/")) {
    return trim
      .split("/")
      .map((p) => applyMarkupToPrice(p))
      .join("/")
  }
  // Remove commas and non-number trailing text
  const numeric = parseFloat(trim.replace(/[^0-9.]/g, ""))
  if (Number.isFinite(numeric)) {
    const marked = Math.round(numeric * 1.17 * 100) / 100
    // keep up to 2 decimals only if needed
    const shown = Number.isInteger(marked) ? marked.toFixed(0) : marked.toFixed(2)
    return shown
  }
  return trim
}

const originalMenuData: Record<string, MenuItem[]> = {
  breakfast: [
    {
      name: "Buffet breakfast",
      description:
        "Cold cut, freshly made bakeries, cereals, Ethiopian and international dishes, egg station, fresh fruit juices, freshly brewed coffee, milk, and a selection of tea.",
      price: "889.56",
    },
    {
      name: "Continental (BF)",
      description:
        "Choice of chilled fruit juices, assortment of morning bakeries served with honey, jam, and butter, freshly brewed coffee, tea, or milk.",
      price: "815.61",
    },
    {
      name: "Porridge",
      description: "Served with toast, slice of cake, jam, and butter.",
      price: "290.30",
    },
    {
      name: "American breakfast",
      description:
        "Avocado, baked beans, bakery basket, seasonal fruit, freshly brewed coffee/milk/tea, juice.",
      price: "630.75",
    },
  ],
  eggs: [
    {
      name: "Omelets / Scrambled / Fried / Benedict",
      description:
        "Any style with your choice of beef, chicken ham, mushrooms, vegetables, served with toast, slice of cake, jam, and butter.",
      price: "350.25",
    },
  ],
  "ethiopian-taste": [
    {
      name: "Tibs firfir",
      description:
        "Sautéed onion, garlic, berbere, olive oil, clarified tomato, and green pepper mixed with injera.",
      price: "418.97",
    },
    {
      name: "Fasting firfir",
      description:
        "Sautéed onion, garlic, berbere, clarified Ethiopian butter, tomato, diced beef fillet, and green pepper mixed with injera.",
      price: "400",
    },
    {
      name: "Chechebsa",
      description: "Fresh homemade bread scrambled and mixed with berbere butter sauce or honey.",
      price: "375",
    },
    {
      name: "Morning fruit mix",
      description: "Strawberry, banana, yogurt, honey, apple.",
      price: "375",
    },
  ],
  salads: [
    { name: "Avocado egg salad", description: "Mixed seasonal lettuce, seasoned avocado, and boiled egg with mustard dressing.", price: "410" },
    { name: "Habesha salad", description: "Ethiopian-style salad with tomato, romaine lettuce, onion, green chili, and lemon dressing.", price: "390" },
    { name: "Tuna salad", description: "Tuna chunks, onion, boiled egg, boiled potato, carrot, and French dressing.", price: "390" },
    { name: "Crispy chicken salad", description: "Lettuce, crispy chicken, red pepper, cucumber, and honey mustard dressing.", price: "450" },
    { name: "Chicken Caesar salad", description: "Lettuce, grilled/roasted chicken, parmesan cheese, croutons, lemon juice, and Caesar dressing.", price: "400" },
  ],
  soups: [
    { name: "Beef soup", description: "Homemade soup specialty with tender red meat.", price: "410" },
    { name: "Chicken soup", description: "Made with chicken, onion, celery, carrots, parsley, pepper, and lemon juice.", price: "425" },
    { name: "Hot and sour soup", description: "Mushroom, rice, chili, garlic, ginger, pepper, and onion (immune-boosting).", price: "335" },
    { name: "Pumpkin soup", price: "315" },
    { name: "Vegetable soup", price: "325" },
    { name: "Tomato soup", price: "275" },
    { name: "Soup of the day", price: "437" },
  ],
  pasta: [
    { name: "Baked pasta", description: "Dry pasta mixed with beef, cream, tomato, parmesan, vegetables, and provolone cheese, served gratinated.", price: "475" },
    { name: "Spaghetti bolognese", price: "350" },
    { name: "Spaghetti vegetable", price: "350" },
  ],
  vegetarian: [
    { name: "Eggplant parmigiana", description: "Grilled and marinated eggplant, breaded, fried, and gratinated with mozzarella and parmesan cheese. Served with French fries and sautéed zucchini.", price: "597" },
  ],
  "lake-and-sea": [
    { name: "Herb crush Nile perch", description: "Herb fillet of perch with caramelized citrus fruits, boiled vegetables, lemon, and garlic olive oil.", price: "799" },
    { name: "Mixed grill", description: "Marinated Nile perch, shrimp, and salmon with fried potatoes and couscous, served with oyster soy garlic sauce.", price: "1250" },
  ],
  carnivore: [
    { name: "Chicken mushroom", description: "Supreme chicken sautéed with mixed mushroom, cream, and tomato coulis. Served with browned potatoes and vegetables.", price: "752.57" },
    { name: "Mediterranean chicken grill", description: "Grilled chicken breast marinated in rosemary and garlic, served with mashed potatoes, vegetables, and chicken gravy.", price: "725.57" },
    { name: "Chicken curry", description: "Chicken cubes sautéed with curry sauce, served with steamed rice.", price: "725.75" },
    { name: "Chicken fajita", description: "Chicken strips, onion, capsicum, and spices served with tortilla.", price: "705.75" },
    { name: "Butter chicken", description: "Grilled juicy chicken in rich tomato sauce.", price: "715.50" },
    { name: "Chicken Alfredo with tomato cream", description: "Creamy chicken spaghetti with tomato and fresh basil.", price: "705.75" },
    { name: "Stuffed chicken breast", description: "Chicken with cheese, spinach, herbs, and sun-dried tomatoes.", price: "995.55" },
    { name: "Beef fajita", description: "Beef strips, onion, capsicum, Indian spices, and tortilla.", price: "705.75" },
    { name: "Sautéed beef fillet with eggplant crush", description: "Beef fillet cubes with gravy and special eggplant, served with fried potatoes.", price: "715.55" },
    { name: "Grilled lamb loin skewer", description: "Lamb loin with rosemary and garlic, served with mushroom rice, grilled tomato, pepper, and red wine sauce.", price: "850" },
    { name: "South African grilled chicken breast", description: "Grilled chicken breast in mushroom sauce.", price: "435.25" },
    { name: "Yebeg tibs", description: "Lamb cubes mixed with vegetables and spices, served with injera.", price: "450" },
  ],
  snacks: [
    { name: "Beef burger", description: "With tomato and lettuce, served with fries.", price: "575" },
    { name: "Cheese burger", description: "With cheese or fried egg, served with fries.", price: "597" },
    { name: "Double decker burger (herbed or plain)", description: "With fried egg, cheese, fries, and salad.", price: "755" },
    { name: "Dreamliner club sandwich", description: "Fried egg, beef meat, cheese, chicken mortadella, mayonnaise, and fries.", price: "600" },
    { name: "Chicken sandwich", description: "Grilled chicken, BBQ sauce, mayonnaise, lettuce, and fries.", price: "597" },
    { name: "Mediterranean sandwich", description: "Mushroom, onion, garlic, carrot, zucchini stuffed bread.", price: "575" },
    { name: "Tuna sandwich", description: "Tuna, tomato, lettuce, mayonnaise, baguette bread.", price: "555" },
    { name: "Croque monsieur", description: "Toasted chicken mortadella and cheese sandwich with fries.", price: "495" },
    { name: "Egg tomato on toast", description: "Herbed tomato with fried egg on toast and fries.", price: "399" },
    { name: "Vegetable spring rolls", description: "Served with sweet and sour sauce.", price: "215" },
    { name: "Vegetable samosa", description: "Served with sweet and sour sauce.", price: "215" },
    { name: "French fries", description: "Served with ketchup.", price: "225" },
  ],
  pizza: [
    { name: "Margarita (S/L)", price: "499/599" },
    { name: "Quattro (S/L)", price: "525/575" },
    { name: "Chicken pizza (S/L)", price: "545/595" },
    { name: "Tonno pizza (S/L)", price: "530/597" },
    { name: "Meat lovers (S/L)", price: "597/675" },
    { name: "Dreamliner special (S/L)", price: "497/592.88" },
    { name: "Veggie/Healthy/Fasting (S/L)", price: "400/575" },
  ],
  sandwiches: [
    { name: "Continental", description: "Chicken, garlic, ginger, lettuce, cucumber, tomato, olives.", price: "486.40" },
    { name: "Beef/Cheese burger", description: "Double Cajun spice chicken patty, cheddar, lettuce, and tomato.", price: "425" },
    { name: "Dreamliner club sandwich", description: "Flat omelet, grilled chicken, avocado, tomato, and cheese.", price: "477" },
    { name: "Tuna sandwich", price: "455.57" },
    { name: "Veg sandwich", price: "299.99" },
    { name: "Chicken sandwich", price: "455.57" },
  ],
  canape: [
    { name: "Chicken square", description: "Chicken fillet with capsicum, onion, and oyster sauce.", price: "475" },
    { name: "Fried mozzarella cheese", price: "510" },
    { name: "Steak canape", description: "Sliced beef fillet on bread.", price: "410" },
  ],
  "sweet-corner": [
    { name: "Chocolate cake", price: "235" },
    { name: "Caramel cake", price: "235" },
    { name: "Fruit salad (fasting/healthy)", price: "225" },
    { name: "Tiramisu", price: "225" },
  ],
  extras: [
    { name: "Cheese", price: "177" },
    { name: "Chicken/Beef", price: "177" },
    { name: "Chapatti", price: "72" },
    { name: "Rice/Vegetable/French fries", price: "115" },
  ],
  juices: [
    { name: "Seasonal juices", price: "350" },
    { name: "Orange juice", price: "430" },
  ],
  "kids-menu": [
    { name: "Chicken noodle soup", price: "277" },
    { name: "Oatmeal", price: "255" },
    { name: "Breaded chicken fingers", description: "With fries and house-made BBQ sauce", price: "205" },
    { name: "Mini burger", price: "397" },
    { name: "French fries", price: "255" },
    { name: "Seasonal roast vegetables", price: "245" },
  ],
  "hot-beverages": [
    { name: "Tea", price: "55.33" },
    { name: "Coffee", price: "118.57" },
    { name: "Café Americano", price: "125" },
    { name: "Macchiato", price: "158.10" },
    { name: "Large macchiato", price: "150" },
    { name: "Teas with coffee", price: "65" },
    { name: "Mocca", price: "120" },
    { name: "Coffee latte", price: "125" },
    { name: "Double espresso", price: "125" },
    { name: "Masala tea", price: "200" },
    { name: "Fasting macchiato", price: "200" },
    { name: "Hot chocolate", price: "210" },
    { name: "Tea with milk", price: "210" },
    { name: "Cappuccino", price: "190" },
    { name: "Milk", price: "150" },
    { name: "Coffee with milk", price: "210" },
    { name: "Special tea", price: "210" },
    { name: "Fresh ginger tea", price: "75" },
  ],
  "water-soft-drinks": [
    { name: "Sparkling water", price: "90" },
    { name: "Soda / Soft drinks", price: "115" },
  ],
}

const menuData: Record<string, MenuItem[]> = Object.fromEntries(
  Object.entries(originalMenuData).map(([cat, items]) => [
    cat,
    items.map((item) => ({
      ...item,
      price: applyMarkupToPrice(item.price),
    })),
  ]),
)

export const oakRoomCategories = [
  { id: "breakfast", name: "Breakfast" },
  { id: "eggs", name: "Eggs" },
  { id: "ethiopian-taste", name: "Ethiopian Taste" },
  { id: "salads", name: "Salads" },
  { id: "soups", name: "Soups" },
  { id: "pasta", name: "Pasta" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "lake-and-sea", name: "Lake & Sea" },
  { id: "carnivore", name: "Carnivore" },
  { id: "snacks", name: "Snacks" },
  { id: "pizza", name: "Pizza" },
  { id: "sandwiches", name: "Sandwiches" },
  { id: "canape", name: "Canape" },
  { id: "sweet-corner", name: "Sweet Corner" },
  { id: "extras", name: "Extras" },
  { id: "juices", name: "Juices" },
  { id: "kids-menu", name: "Kids Menu" },
  { id: "hot-beverages", name: "Hot Beverages" },
  { id: "water-soft-drinks", name: "Water & Soft Drinks" },
]

export function OakRoomMenuSection({ activeTab }: { activeTab: string }) {
  const items = menuData[activeTab] || []
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const currentItems = items.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  const handleNext = () => {
    if (currentIndex < totalPages - 1) setCurrentIndex(currentIndex + 1)
  }
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  return (
    <div className="relative">
      {items.length > itemsPerPage && (
        <>
          <Button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-amber-500/90 hover:bg-amber-500 text-slate-900 shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === totalPages - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-amber-500/90 hover:bg-amber-500 text-slate-900 shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            size="icon"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTab}-${currentIndex}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative bg-slate-700 border-2 border-amber-500/40 rounded-lg overflow-hidden hover:border-amber-500/60 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6 p-6">
                <div className="flex-shrink-0 w-full sm:w-44 h-44 relative rounded-lg overflow-hidden border-2 border-amber-500/30 shadow-md">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wide leading-tight">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-amber-100 text-base leading-relaxed font-sans">{item.description}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-amber-500/30">
                    <span className="font-serif text-2xl font-bold text-amber-500">{item.price} ETB</span>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-sans uppercase tracking-wider text-sm px-6 py-2.5 h-auto">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Order
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {items.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-amber-500 w-8" : "bg-amber-500/50 hover:bg-amber-500/70"}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}


