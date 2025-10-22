"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface MenuItem {
  name: string
  description: string
  price: string
  image?: string
  isSpecial?: boolean
  isNew?: boolean
}

const menuData: Record<string, MenuItem[]> = {
  "main-dishes": [
    // Chicken
    {
      name: "Stir-fried Chicken",
      description: "Tender chicken pieces stir-fried with vegetables and aromatic spices",
      price: "675",
    },
    {
      name: "Chicken Wings in Honey Sauce",
      description: "Crispy chicken wings glazed with sweet honey sauce",
      price: "455",
    },
    {
      name: "Chicken Drumstick",
      description: "Grilled chicken drumstick with herbs and spices",
      price: "410",
    },
    {
      name: "Chicken Kebab with French Fries",
      description: "Marinated chicken kebab served with crispy French fries",
      price: "399",
    },
    // Beef
    {
      name: "Beef Steak",
      description: "Premium beef steak cooked to perfection",
      price: "850",
    },
    {
      name: "Beef Wrap",
      description: "Beef fillet with onion, garlic, green chili, cream, cheese served with French fries",
      price: "450",
    },
    {
      name: "Two Mini Beef Burger",
      description: "Minced beef, egg, garlic, bread crumbs, mixed spice, with French fries",
      price: "750",
    },
    {
      name: "Meat Kebab with French Fries",
      description: "Grilled meat kebab served with crispy French fries",
      price: "399",
    },
    // Fish
    {
      name: "Grilled Fish",
      description: "Fresh fish grilled with herbs and lemon",
      price: "720",
    },
    {
      name: "Fish Finger with French Fries",
      description: "Crispy fish fingers served with French fries",
      price: "500",
    },
    {
      name: "Fish Amritsari",
      description: "Nile perch, chickpea flour, spices, herbs",
      price: "990",
    },
    // Soups
    {
      name: "Chicken Soup",
      description: "Hearty chicken soup with vegetables",
      price: "350",
    },
    {
      name: "Vegetable Soup",
      description: "Fresh vegetable soup with herbs",
      price: "320",
    },
    // National Corner
    {
      name: "Lamb Tibs/Yebeg Tibs",
      description: "Traditional Ethiopian lamb dish with spices",
      price: "775",
    },
    {
      name: "Doro Wat",
      description: "Traditional Ethiopian chicken stew",
      price: "650",
    },
    {
      name: "Kitfo",
      description: "Traditional Ethiopian minced beef dish",
      price: "720",
    },
    // Spaghetti
    {
      name: "Spaghetti Carbonara",
      description: "Classic Italian pasta with cream, eggs, and cheese",
      price: "450",
    },
    {
      name: "Spaghetti Bolognese",
      description: "Italian pasta with meat sauce",
      price: "480",
    },
    {
      name: "Spaghetti Aglio e Olio",
      description: "Simple pasta with garlic and olive oil",
      price: "420",
    },
    // Burgers
    {
      name: "Classic Beef Burger",
      description: "Beef patty with lettuce, tomato, onion, and special sauce",
      price: "550",
    },
    {
      name: "Chicken Burger",
      description: "Grilled chicken breast with fresh vegetables",
      price: "480",
    },
    {
      name: "Vegetarian Burger",
      description: "Plant-based patty with fresh vegetables",
      price: "420",
    },
    // Sandwiches
    {
      name: "Club Sandwich",
      description: "Triple-decker sandwich with chicken, bacon, and vegetables",
      price: "450",
    },
    {
      name: "Chicken Wrap",
      description: "Grilled chicken, onion, garlic, green chili, fresh cream, cheese served with French fries",
      price: "350",
    },
    {
      name: "Vegetable Wrap",
      description: "Seasonal vegetables, onion, garlic, green chili, fresh cream, cheese served with French fries",
      price: "400",
    },
  ],
  "breakfast": [
    {
      name: "Simple Two Eggs",
      description: "Poached, boiled, scrambled or fried with toast",
      price: "395",
    },
    {
      name: "Omelet",
      description: "With onion, bell pepper, spinach, chili, cheese, mushroom and tomato",
      price: "395",
    },
    {
      name: "Three Pancakes",
      description: "With maple syrup and seasonal fruit",
      price: "355",
    },
    {
      name: "French Toast",
      description: "With maple syrup and seasonal fruit",
      price: "355",
    },
    {
      name: "Three Toast Bread",
      description: "With butter and jam",
      price: "325",
    },
    {
      name: "Oatmeal",
      description: "With honey cinnamon and strawberry",
      price: "325",
    },
    {
      name: "Buffet Breakfast",
      description: "Extensive breakfast selection including local dishes, fresh pastries, healthy cereals, eggs & waffle station & much more with your choice of fresh juices, coffee or tea",
      price: "999",
    },
    {
      name: "American Breakfast",
      description: "Omelet, fried, boiled, scrambled or poached with onion, chili, cheese mushroom, ham and tomato toast bread & homemade bakery with jam and butter sliced seasonal fruit & fresh juice coffee or tea",
      price: "715",
    },
    {
      name: "Continental Breakfast",
      description: "Toast bread and homemade bakery with jam and butter, slice seasonal fruit, fresh juices, coffee and tea",
      price: "625",
    },
    {
      name: "Chechebsa",
      description: "Fresh dough homemade bread scrambles and mixed with berbere butter sauce or honey",
      price: "425.35",
    },
  ],
  "pizza": [
    {
      name: "Pizza Margherita",
      description: "Mozzarella cheese, tomato sauce oregano, garlic, oil",
      price: "575.25",
    },
    {
      name: "Pizza Al Bero",
      description: "Mozzarella cheese, tomato sauce, tuna fish, onions, chili, garlic oil, basil",
      price: "575.75",
    },
    {
      name: "Pizza Own",
      description: "Mozzarella cheese, tomato sauce, olive oil, oregano garlic and your choice of topping",
      price: "725",
    },
    {
      name: "Pizza Calzone",
      description: "Mozzarella cheese, tomato sauce, ham, beef sausage, basil, garlic olive",
      price: "655",
    },
    {
      name: "Beef Pizza",
      description: "Mozzarella cheese, tomato sauce, minced beef, garlic olive, oregano",
      price: "775",
    },
    {
      name: "Home Special Pizza",
      description: "Mozzarella and Provolone cheese, tomato sauce, minced beef, chicken, chili, garlic oil, basil, vegetable",
      price: "955",
    },
  ],
  "salads": [
    {
      name: "Healthy Salad",
      description: "Grilled carrot, baby marrow, eggplant, lettuce",
      price: "450",
    },
    {
      name: "Chicken Caesar Salad",
      description: "Lettuce, grilled/roasted chicken, parmesan cheese, croutons, lemon juice, served with Caesar and salad dressing",
      price: "425",
    },
    {
      name: "Mixed Vegetable Salad",
      description: "Carrots, lettuce, onions, tomatoes and seasonal fruits and vegetables served",
      price: "410",
    },
  ],
  "snacks": [
    {
      name: "French Fries",
      description: "Crispy golden French fries",
      price: "390",
    },
    {
      name: "Vegetable Samosa",
      description: "Spiced vegetable samosas",
      price: "450",
    },
    {
      name: "Tuna Canapés",
      description: "Elegant tuna canapés",
      price: "499",
    },
    {
      name: "Special Assorted Canapés",
      description: "Selection of assorted canapés",
      price: "399",
    },
  ],
  "drinks": [
    {
      name: "Sparkling Water Small/Medium",
      description: "Refreshing sparkling water",
      price: "71.14/90.90",
    },
    {
      name: "Soda/Soft Drinks/Ambo",
      description: "Assorted soft drinks and local beverages",
      price: "102.76",
    },
    {
      name: "Malt/Non-Alcoholic",
      description: "Non-alcoholic malt beverages",
      price: "134.38",
    },
    {
      name: "Local Small Beer",
      description: "Local brewery beer",
      price: "134.38",
    },
    {
      name: "Arada Beer",
      description: "Premium local beer",
      price: "150",
    },
    {
      name: "Heineken",
      description: "International premium beer",
      price: "169.96",
    },
    {
      name: "Red Bull",
      description: "Energy drink",
      price: "700",
    },
  ],
  "hot-drinks": [
    {
      name: "Tea",
      description: "Traditional tea",
      price: "79.05",
    },
    {
      name: "Coffee",
      description: "Freshly brewed coffee",
      price: "118.57",
    },
    {
      name: "Café Americano",
      description: "Classic American coffee",
      price: "125",
    },
    {
      name: "Macchiato",
      description: "Espresso with steamed milk",
      price: "150.19",
    },
    {
      name: "Large Macchiato",
      description: "Large macchiato",
      price: "197.62",
    },
    {
      name: "Teas with Coffee",
      description: "Tea and coffee blend",
      price: "94.86",
    },
    {
      name: "Mocca",
      description: "Chocolate coffee drink",
      price: "125",
    },
    {
      name: "Coffee Latte",
      description: "Espresso with steamed milk",
      price: "118.57",
    },
    {
      name: "Double Espresso",
      description: "Strong double shot espresso",
      price: "197.62",
    },
    {
      name: "Masala Tea",
      description: "Spiced Indian tea",
      price: "197.62",
    },
    {
      name: "Fasting Macchiato",
      description: "Special fasting macchiato",
      price: "197.62",
    },
    {
      name: "Hot Chocolate",
      description: "Rich hot chocolate",
      price: "197.62",
    },
    {
      name: "Tea with Milk",
      description: "Tea with fresh milk",
      price: "146.24",
    },
    {
      name: "Cappuccino",
      description: "Espresso with foamed milk",
      price: "197.62",
    },
    {
      name: "Milk",
      description: "Fresh milk",
      price: "158.10",
    },
    {
      name: "Coffee with Milk",
      description: "Coffee with fresh milk",
      price: "197.62",
    },
    {
      name: "Special Tea",
      description: "House special tea blend",
      price: "197.62",
    },
    {
      name: "Fresh Ginger Tea",
      description: "Fresh ginger tea",
      price: "197.62",
    },
  ],
  "wine": [
    {
      name: "Alvinde Reserva Syrah (75cl)",
      description: "Premium imported red wine",
      price: "3,461",
    },
    {
      name: "Louis Eschenauer (75cl)",
      description: "Fine imported wine",
      price: "5,509",
    },
    {
      name: "Grand Epoque (75cl)",
      description: "Elegant imported wine",
      price: "4,798",
    },
    {
      name: "Lamothe Parrot (75cl)",
      description: "Premium imported wine",
      price: "5,467",
    },
    {
      name: "Sunrise (75cl)",
      description: "Smooth imported wine",
      price: "3,350",
    },
    {
      name: "Western Cellar Chardonnay (75cl)",
      description: "Premium white wine",
      price: "6,067",
    },
    {
      name: "Baron d'Arignac (75cl)",
      description: "Classic imported wine",
      price: "2,937",
    },
    {
      name: "Alvinde Reserva Chardonnay (75cl)",
      description: "Premium white wine",
      price: "4,842",
    },
    {
      name: "Cellar Cask Select (75cl)",
      description: "Select imported wine",
      price: "5,546",
    },
    {
      name: "Two Oceans Chardonnay",
      description: "South African white wine",
      price: "3,995",
    },
    {
      name: "Long Champ (75cl)",
      description: "Premium imported wine",
      price: "5,396",
    },
    {
      name: "Acacia Dry (75cl)",
      description: "Local dry wine",
      price: "1,995",
    },
    {
      name: "Acacia Medium Sweet (75cl)",
      description: "Local medium sweet wine",
      price: "1,995",
    },
    {
      name: "Rift Valley Cuvee Prestige Chardonnay (75cl)",
      description: "Premium local white wine",
      price: "2,390",
    },
    {
      name: "Rift Valley Merlot (75cl)",
      description: "Local red wine",
      price: "2,390",
    },
    {
      name: "Rift Valley Syrah (75cl)",
      description: "Local red wine",
      price: "2,390",
    },
    {
      name: "Glass of Wine",
      description: "Single glass of wine",
      price: "475",
    },
  ],
  "alcohols": [
    {
      name: "Camus V.S.O.P (100cl)",
      description: "Premium cognac",
      price: "650 / 20.304",
    },
    {
      name: "Courvoisier V.S (70cl)",
      description: "Fine cognac",
      price: "620 / 20.270",
    },
    {
      name: "Camus Cognac X.O (70cl)",
      description: "Extra old cognac",
      price: "1125 / 65,500",
    },
    {
      name: "Remy Martin V.S.O.P (100cl)",
      description: "Premium cognac",
      price: "1,025 / 24,956",
    },
    {
      name: "Remy Martin X.O (70cl)",
      description: "Extra old cognac",
      price: "1,590 / 79,000",
    },
    {
      name: "Beefeater Gin",
      description: "Premium gin",
      price: "355 / 1.200",
    },
    {
      name: "Beefeater Pink Gin (100cl)",
      description: "Pink gin",
      price: "355 / 10,975",
    },
    {
      name: "Bombay Sapphire (70cl)",
      description: "Premium gin",
      price: "355 / 12,100",
    },
    {
      name: "Gordon's Gin",
      description: "Classic gin",
      price: "315 / 9,997",
    },
    {
      name: "Bacardi White (100cl)",
      description: "White rum",
      price: "370 / 15.011",
    },
    {
      name: "Bacardi Gold (100cl)",
      description: "Gold rum",
      price: "350 / 14.221",
    },
    {
      name: "Captain Morgan (100cl)",
      description: "Spiced rum",
      price: "350 / 14,150",
    },
    {
      name: "Malibu (100cl)",
      description: "Coconut rum",
      price: "200 / 5,525",
    },
    {
      name: "J.W Black Label (50cl, 100cl)",
      description: "Premium whiskey",
      price: "375 / 7.700/6.995",
    },
    {
      name: "J.W Double Black Label (50cl, 100cl)",
      description: "Premium whiskey",
      price: "405 / 7.905/20.000",
    },
    {
      name: "J.W Blue Label (100cl)",
      description: "Ultra premium whiskey",
      price: "4154 / 97,997",
    },
    {
      name: "J.W Gold Label (100cl)",
      description: "Premium whiskey",
      price: "555 / 23,990",
    },
    {
      name: "J.W Red Label (50cl, 100cl)",
      description: "Classic whiskey",
      price: "295 / 6.933/11.000",
    },
    {
      name: "Jack Daniel's (50cl, 100cl)",
      description: "Tennessee whiskey",
      price: "355 / 6.500/15.000",
    },
    {
      name: "Chivas 12 (50cl, 100cl)",
      description: "Premium scotch",
      price: "395 / 15.700",
    },
    {
      name: "Glenfiddich 15 (100cl)",
      description: "Single malt scotch",
      price: "700 / 28,500",
    },
    {
      name: "Glenfiddich 18 (75cl)",
      description: "Aged single malt",
      price: "1000 / 39,900",
    },
    {
      name: "Glenfiddich 21 (70cl)",
      description: "Ultra premium single malt",
      price: "1100 / 59,900",
    },
    {
      name: "Dimple 15 (100cl)",
      description: "Premium scotch",
      price: "455 / 27,500",
    },
    {
      name: "White Horse (100cl)",
      description: "Classic scotch",
      price: "250 / 8,900",
    },
    {
      name: "Absolut (50cl, 100cl)",
      description: "Premium vodka",
      price: "275 / 3.950/6.970",
    },
    {
      name: "Grey Goose (100cl)",
      description: "Ultra premium vodka",
      price: "399 / 10,997",
    },
    {
      name: "Ciroc Blue (100cl)",
      description: "Premium vodka",
      price: "275 / 10,500",
    },
    {
      name: "Smirnoff (75cl)",
      description: "Classic vodka",
      price: "200 / 3,475",
    },
    {
      name: "Stolichnaya Gold (100cl)",
      description: "Premium vodka",
      price: "315 / 7,509",
    },
    {
      name: "Stolichnaya Elite (100cl)",
      description: "Ultra premium vodka",
      price: "367 / 10,999",
    },
    {
      name: "Stolichnaya Vodka (50cl, 75cl)",
      description: "Classic vodka",
      price: "295 / 3.900/6.195",
    },
    {
      name: "Sky Vodka (100cl)",
      description: "Premium vodka",
      price: "200 / 3,870",
    },
    {
      name: "Russian Standard Vodka (100cl)",
      description: "Premium vodka",
      price: "295 / 8,015",
    },
    {
      name: "Winter Palace",
      description: "Premium vodka",
      price: "200 / 4,764",
    },
    {
      name: "Ketel One Vodka (75cl)",
      description: "Premium vodka",
      price: "275 / 7,897",
    },
    {
      name: "Baileys Irish (100cl)",
      description: "Irish cream liqueur",
      price: "250 / 7,000",
    },
    {
      name: "Drambuie (100cl)",
      description: "Scotch liqueur",
      price: "325 / 8,988",
    },
    {
      name: "Cointreau (100cl)",
      description: "Orange liqueur",
      price: "345 / 9,100",
    },
    {
      name: "Amarula (100cl)",
      description: "Cream liqueur",
      price: "256 / 6,765",
    },
    {
      name: "Sambuca (75cl)",
      description: "Anise liqueur",
      price: "267 / 7,015",
    },
    {
      name: "Kahlua (100cl)",
      description: "Coffee liqueur",
      price: "200 / 6,910",
    },
    {
      name: "Jaegermeister (100cl)",
      description: "Herbal liqueur",
      price: "295 / 7,999",
    },
  ],
  "cocktails": [
    {
      name: "Vodka Sour",
      description: "Vodka, lemon juice, simple syrup",
      price: "595",
    },
    {
      name: "Rum Sour",
      description: "Rum, lemon juice, simple syrup",
      price: "595",
    },
    {
      name: "Negroni",
      description: "Gin, Campari, Martini Rosso",
      price: "655",
    },
    {
      name: "Long Island",
      description: "Vodka, rum, gin, triple sec, lemon juice, simple syrup",
      price: "655",
    },
    {
      name: "Gin Fizz",
      description: "50ml gin, 25ml lemon juice, 2 tsp sugar syrup, ice, sparkling water, lemon slice",
      price: "655",
    },
    {
      name: "Black Russian",
      description: "Vodka, Kahlua",
      price: "695",
    },
    {
      name: "Tequila Sunrise",
      description: "1 ½ oz (3 parts) tequila, ½ oz (1 part) grenadine syrup, 3 oz (6 parts) orange juices",
      price: "545",
    },
    {
      name: "Blue Monday",
      description: "1.5 oz vodka, ½ ounces Cointreau, or triple sec, ½ ounce Blue curacao",
      price: "825",
    },
    {
      name: "B-52",
      description: "⅔ Coffee liqueur, Kahlua, ⅔ bailey's, ⅔ Cointreau",
      price: "605",
    },
    {
      name: "Chocolate Martini",
      description: "4 oz bailey's Irish cream, 4 oz chocolate liqueur, 8 oz vodka, 3 tsp chocolate syrup or ganache",
      price: "905",
    },
    {
      name: "Sangria",
      description: "Red wine, gin, vodka, fresh fruits",
      price: "825",
    },
    {
      name: "Kamikaze",
      description: "1 ½ ounces vodka, ½ ounce triple sec, Dash of lime juice: Lime",
      price: "615",
    },
    {
      name: "Virgin Mojito",
      description: "Tonic water, sprite, soda water, lemon juice, sugar, mint leaves",
      price: "350",
    },
    {
      name: "Virgin Sour",
      description: "Watermelon juice, orange juice, lemon juice, simple syrup",
      price: "350",
    },
  ],
}

const categories = [
  { id: "main-dishes", name: "Main Dishes", icon: "🍽️" },
  { id: "breakfast", name: "Breakfast", icon: "🥞" },
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "salads", name: "Salads", icon: "🥗" },
  { id: "snacks", name: "Snacks", icon: "🍟" },
  { id: "drinks", name: "Drinks", icon: "🥤" },
  { id: "hot-drinks", name: "Hot Drinks", icon: "☕" },
  { id: "wine", name: "Wine", icon: "🍷" },
  { id: "alcohols", name: "Alcohols", icon: "🥃" },
  { id: "cocktails", name: "Cocktails", icon: "🍸" },
]

export function OakMenuSection({ activeTab }: { activeTab: string }) {
  const items = menuData[activeTab] || []
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 2 // Show 2 items at a time on desktop

  const totalPages = Math.ceil(items.length / itemsPerPage)
  const currentItems = items.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleOrder = (itemName: string) => {
    console.log("[v0] Order placed for:", itemName)
    // Add order logic here
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
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {(item.isSpecial || item.isNew) && (
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                      {item.isSpecial && (
                        <span className="bg-amber-500 text-slate-900 px-2 py-1 rounded text-xs font-sans uppercase tracking-wider shadow-lg">
                          ★ Special
                        </span>
                      )}
                      {item.isNew && (
                        <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs font-sans uppercase tracking-wider shadow-lg">
                          New
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wide leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-amber-100 text-base leading-relaxed font-sans">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-amber-500/30">
                    <span className="font-serif text-2xl font-bold text-amber-500">{item.price} ETB</span>
                    <Button
                      onClick={() => handleOrder(item.name)}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-sans uppercase tracking-wider text-sm px-6 py-2.5 h-auto shadow-md hover:shadow-lg transition-all duration-300"
                    >
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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-amber-500 w-8" : "bg-amber-500/50 hover:bg-amber-500/70"
                  }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
