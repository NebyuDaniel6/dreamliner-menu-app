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
  image: string
  isSpecial?: boolean
  isNew?: boolean
}

// Helper function to apply 17% markup to prices
const applyRoomServiceMarkup = (price: string): string => {
  // Extract the number from price string (e.g., "999br" -> 999)
  const match = price.match(/(\d+)/)
  if (!match) return price
  
  const basePrice = parseInt(match[1])
  const roomPrice = Math.round(basePrice * 1.17) // 17% markup
  return price.replace(/\d+/, roomPrice.toString())
}

const menuData: Record<string, MenuItem[]> = {
  thali: [
    {
      name: "Non-v thali",
      description: "Chicken, lamb, dal, rice, roti naan",
      price: applyRoomServiceMarkup("1790br"),
      image: "/non-v-thali.png",
      isSpecial: true,
    },
    {
      name: "Non-veg platter",
      description: "Fish tikka, Murgh malai tikka, Chicken tikka, Keema samosa, Haryali chicken tikka",
      price: applyRoomServiceMarkup("1950br"),
      image: "/non-v-platter.png",
      isSpecial: true,
    },
  ],
  starters: [
    {
      name: "Chicken tikka",
      description: "Boneless chicken, yogurt, garam masala, spices",
      price: applyRoomServiceMarkup("999br"),
      image: "/chicken-tikka.png?v=1",
      isSpecial: true,
    },
    {
      name: "Chicken tikka masala",
      description: "Chicken tikka in creamy tomato sauce",
      price: applyRoomServiceMarkup("1100br"),
      image: "/chicken-tikka-masala.png?v=1",
      isSpecial: true,
    },
    {
      name: "Chicken tikka makhni",
      description: "Chicken tikka in rich butter sauce",
      price: applyRoomServiceMarkup("1150br"),
      image: "/chicken-tikka-makhni.png?v=2",
      isSpecial: true,
    },
    {
      name: "Ajwaini fish tikka",
      description: "Nile Perch, chick peas, yoghurt, Indian spice",
      price: applyRoomServiceMarkup("990br"),
      image: "/ajwaini-fish-tikka.png?v=2",
    },
    {
      name: "Keema samosa",
      description: "Spiced minced meat, crispy pastry",
      price: applyRoomServiceMarkup("450br"),
      image: "/keema-samosa.png?v=2",
    },
    {
      name: "Mix pakora",
      description: "Assorted vegetables, chickpea flour batter",
      price: applyRoomServiceMarkup("500br"),
      image: "/mixed-veg.png",
    },
    {
      name: "Vegetable spring rolls",
      description: "Fresh vegetables, crispy wrapper",
      price: applyRoomServiceMarkup("400br"),
      image: "/vegetable-spring-rolls.jpg",
    },
    {
      name: "Lamb seekh kebab",
      description: "Minced lamb, spices, herbs",
      price: applyRoomServiceMarkup("1200br"),
      image: "/lamb-seekh-kebab.jpg",
      isSpecial: true,
    },
    {
      name: "Indian samosas",
      description: "Spiced potatoes, peas, crispy pastry",
      price: applyRoomServiceMarkup("450br"),
      image: "/samosas-full.png",
    },
    {
      name: "Roasted papad",
      description: "Crispy lentil wafers",
      price: applyRoomServiceMarkup("150br"),
      image: "/roasted-papad.png",
    },
  ],
  main: [
    {
      name: "Butter chicken",
      description: "Chicken, tomato cream sauce, spices",
      price: applyRoomServiceMarkup("1100br"),
      image: "/butter-chicken.png",
      isSpecial: true,
    },
    {
      name: "Chicken pad pao",
      description: "Chicken, capsicum, tomatoes, onions",
      price: applyRoomServiceMarkup("1015br"),
      image: "/chicken-pad-pao.png",
    },
    {
      name: "Chicken kadha palak",
      description: "Chicken, onions, tomatoes, spices, herbs, spinach",
      price: applyRoomServiceMarkup("1015br"),
      image: "/palak-paneer.png",
    },
    {
      name: "Murgh awadhi korma",
      description: "Chicken, cashew, onions, creamy sauce",
      price: applyRoomServiceMarkup("990br"),
      image: "/murgh-awadhi-korma.png",
    },
    {
      name: "Lamb rogan josh",
      description: "Lamb, tomatoes, onions, Indian spices",
      price: applyRoomServiceMarkup("1025br"),
      image: "/lamb-rogan-josh.png",
      isSpecial: true,
    },
    {
      name: "Lamb vindaloo",
      description: "Lamb, potatoes, vinegar, spices",
      price: applyRoomServiceMarkup("1050br"),
      image: "/lamb-vindaloo.jpg",
      isSpecial: true,
    },
    {
      name: "Kahada palak gosht",
      description: "Mutton, spinach, onions, tomatoes, potatoes",
      price: applyRoomServiceMarkup("990br"),
      image: "/kahada-palak-gosht.png",
    },
    {
      name: "Kadhai gosht",
      description: "Mutton, spinach, onions, tomatoes, capsicum",
      price: applyRoomServiceMarkup("1050br"),
      image: "/kadhai-mutton.jpg",
    },
  ],
  fish: [
    {
      name: "Goan fish curry",
      description: "Nile perch, coconut, Indian spices, herbs",
      price: applyRoomServiceMarkup("1025br"),
      image: "/goan-fish-curry.png",
      isSpecial: true,
    },
    {
      name: "Fish amritsari",
      description: "Nile perch, chickpea flour, spices, herbs",
      price: applyRoomServiceMarkup("990br"),
      image: "/fish-amritsari.png",
    },
    {
      name: "Fish tikka",
      description: "Nile perch, yogurt, spices, herbs",
      price: applyRoomServiceMarkup("950br"),
      image: "/fish-tikka.jpg",
    },
    {
      name: "Vibrant fish curry",
      description: "Nile perch, tomatoes, onions, Indian spices",
      price: applyRoomServiceMarkup("975br"),
      image: "/vibrant-fish-curry.png",
    },
  ],
  vegetarian: [
    {
      name: "Palak paneer",
      description: "Cheese cubes, spinach, spices",
      price: applyRoomServiceMarkup("990br"),
      image: "/palak-paneer.png",
      isSpecial: true,
    },
    {
      name: "Paneer makhini",
      description: "Ricotta cheese, tomato sauce",
      price: applyRoomServiceMarkup("990br"),
      image: "/paneer-tikka-masala.png",
      isSpecial: true,
    },
    {
      name: "Kadhai paneer",
      description: "Paneer, capsicum, tomatoes, onions",
      price: applyRoomServiceMarkup("950br"),
      image: "/kadhai-paneer.png",
    },
    {
      name: "Paneer pasanda",
      description: "Paneer, cream, cashews, spices",
      price: applyRoomServiceMarkup("1000br"),
      image: "/paneer-pasanda.png",
    },
    {
      name: "Paneer pakora",
      description: "Spiced paneer, besan or chickpea flour batter",
      price: applyRoomServiceMarkup("750br"),
      image: "/paneer-pakora.jpg",
    },
    {
      name: "Pineapple paneer tikka",
      description: "Pineapple, cheese, yoghurt, chick pea powder, fresh lemon, Indian spices",
      price: applyRoomServiceMarkup("990br"),
      image: "/pineapple-paneer-tikka.png",
      isNew: true,
    },
    {
      name: "Aloo jeera",
      description: "Potatoes, cumin seeds, spices",
      price: applyRoomServiceMarkup("450br"),
      image: "/aloo-jeera.jpg",
    },
    {
      name: "Aloo palak",
      description: "Potatoes, spinach, spices",
      price: applyRoomServiceMarkup("480br"),
      image: "/aloo-palak.jpg",
    },
    {
      name: "Aloo gobi",
      description: "Potatoes, cauliflower, spices",
      price: applyRoomServiceMarkup("500br"),
      image: "/aloo-gobi.jpg",
    },
    {
      name: "Dal tadka",
      description: "Lentils, spices, herbs",
      price: applyRoomServiceMarkup("550br"),
      image: "/dal-tadkha.png",
    },
    {
      name: "Chana masala",
      description: "Chickpeas, tomatoes, onions, spices",
      price: applyRoomServiceMarkup("600br"),
      image: "/chana-masala.jpg",
    },
    {
      name: "Aloo tikki",
      description: "Boiled & mashed potatoes, spices and herb",
      price: applyRoomServiceMarkup("420br"),
      image: "/aloo-tikki.png",
    },
  ],
  biryani: [
    {
      name: "Chicken dum biryani",
      description: "Basmati rice, chicken, herbs, spices",
      price: applyRoomServiceMarkup("1200br"),
      image: "/chicken-dum-biryani.png",
      isSpecial: true,
    },
    {
      name: "Lamb biryani",
      description: "Basmati rice, lamb, herbs, spices",
      price: applyRoomServiceMarkup("1250br"),
      image: "/lamb-biryani.jpg",
      isSpecial: true,
    },
    {
      name: "Vegetable biryani",
      description: "Basmati rice, vegetables, herbs, spices",
      price: applyRoomServiceMarkup("990br"),
      image: "/vegetable-biryani.png",
    },
    {
      name: "Prawn biryani",
      description: "Basmati rice, prawns, herbs, spices",
      price: applyRoomServiceMarkup("1300br"),
      image: "/prawn-biryani.jpg",
      isSpecial: true,
    },
  ],
  breads: [
    {
      name: "Cheese stuffed naan",
      description: "Naan stuffed with cheese",
      price: applyRoomServiceMarkup("270br"),
      image: "/cheese-stuffed-naan.png",
      isSpecial: true,
    },
    {
      name: "Garlic butter naan",
      description: "Naan with garlic and butter",
      price: applyRoomServiceMarkup("250br"),
      image: "/garlic-butter-naan.png",
    },
    {
      name: "Butter naan",
      description: "Naan with butter",
      price: applyRoomServiceMarkup("250br"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Missi roti",
      description: "Brown flour, chick pea powder, green chili, Indian spices",
      price: applyRoomServiceMarkup("300br"),
      image: "/missi-roti.png",
    },
  ],
  desserts: [
    {
      name: "Gulab jamun",
      description: "Milk, sweet syrup",
      price: applyRoomServiceMarkup("500br"),
      image: "/gulab-jamum.png",
      isSpecial: true,
    },
    {
      name: "Rasmalai",
      description: "Cottage cheese, milk, saffron",
      price: applyRoomServiceMarkup("550br"),
      image: "/rasmalai.png",
      isSpecial: true,
    },
    {
      name: "Kulfi",
      description: "Milk, dry fruits",
      price: applyRoomServiceMarkup("425br"),
      image: "/kulfi.png",
      isSpecial: true,
    },
    {
      name: "Creamy kheer",
      description: "Rice pudding, milk, dry fruits",
      price: applyRoomServiceMarkup("450br"),
      image: "/creamy-kheer.png",
    },
  ],
  drinks: [
    {
      name: "Lassi (sweet or salted)",
      description: "Traditional yogurt drink",
      price: applyRoomServiceMarkup("310br"),
      image: "/mango-lassi.png",
      isSpecial: true,
    },
    {
      name: "Mango lassi",
      description: "Sweet yogurt drink with mango",
      price: applyRoomServiceMarkup("297br"),
      image: "/mango-lassi.png",
      isSpecial: true,
    },
    {
      name: "Masala chai",
      description: "Spiced tea with milk",
      price: applyRoomServiceMarkup("198br"),
      image: "/masala-tea.png",
    },
    {
      name: "Lime soda",
      description: "Fresh lime with soda water",
      price: applyRoomServiceMarkup("150br"),
      image: "/lime-soda.jpg",
    },
    {
      name: "Rose milk",
      description: "Sweet milk with rose flavor",
      price: applyRoomServiceMarkup("200br"),
      image: "/rose-milk.jpg",
    },
    {
      name: "Fresh juices",
      description: "Fresh fruit juices",
      price: applyRoomServiceMarkup("308br"),
      image: "/lime-soda.jpg",
    },
    {
      name: "Hot drinks",
      description: "Tea, coffee and more",
      price: applyRoomServiceMarkup("198br"),
      image: "/masala-chai.jpg",
    },
    {
      name: "Sparkling water",
      description: "Refreshing sparkling water",
      price: applyRoomServiceMarkup("119br"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Soft drinks",
      description: "Assorted soft drinks",
      price: applyRoomServiceMarkup("119br"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Espresso martini",
      description: "Coffee cocktail with vodka and coffee liqueur",
      price: applyRoomServiceMarkup("450br"),
      image: "/espresso-martini.png",
      isSpecial: true,
    },
    {
      name: "Fennel collins",
      description: "Gin cocktail with fennel and citrus",
      price: applyRoomServiceMarkup("420br"),
      image: "/fennel-collins.png",
    },
    {
      name: "Virgin mojito",
      description: "Non-alcoholic mint and lime drink",
      price: applyRoomServiceMarkup("280br"),
      image: "/virgin-mojito.png",
    },
    {
      name: "Virgin sour",
      description: "Non-alcoholic citrus sour drink",
      price: applyRoomServiceMarkup("300br"),
      image: "/virgin-sour.png",
    },
    {
      name: "Gulaab sour",
      description: "Rose-flavored sour cocktail",
      price: applyRoomServiceMarkup("380br"),
      image: "/gulaab-sour.png",
      isSpecial: true,
    },
    {
      name: "Macchiato",
      description: "Espresso with steamed milk",
      price: applyRoomServiceMarkup("250br"),
      image: "/macchiato.png",
    },
    {
      name: "Negroni",
      description: "Classic Italian cocktail",
      price: applyRoomServiceMarkup("450br"),
      image: "/negroni.png",
      isSpecial: true,
    },
  ],
}

const categories = [
  { id: "thali", name: "Thali & Platters", icon: "🍽️" },
  { id: "starters", name: "Starters", icon: "🥘" },
  { id: "main", name: "Main Course", icon: "🍛" },
  { id: "fish", name: "Fish Specialties", icon: "🐟" },
  { id: "vegetarian", name: "Vegetarian", icon: "🥬" },
  { id: "biryani", name: "Biryani", icon: "🍚" },
  { id: "breads", name: "Breads", icon: "🥖" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "drinks", name: "Drinks", icon: "🥤" },
]

export function RoomMenuSection({ activeTab }: { activeTab: string }) {
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === totalPages - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
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
              className="group relative bg-card border-2 border-border/40 rounded-lg overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6 p-6">
                <div className="flex-shrink-0 w-full sm:w-44 h-44 relative rounded-lg overflow-hidden border-2 border-border/30 shadow-md">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {(item.isSpecial || item.isNew) && (
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                      {item.isSpecial && (
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-sans uppercase tracking-wider shadow-lg">
                          ★ Special
                        </span>
                      )}
                      {item.isNew && (
                        <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-sans uppercase tracking-wider shadow-lg">
                          New
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-foreground uppercase tracking-wide leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-foreground/70 text-base leading-relaxed font-sans">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
                    <span className="font-serif text-2xl font-bold text-primary">{item.price}</span>
                    <Button
                      onClick={() => handleOrder(item.name)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans uppercase tracking-wider text-sm px-6 py-2.5 h-auto shadow-md hover:shadow-lg transition-all duration-300"
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
                index === currentIndex ? "bg-primary w-8" : "bg-border/50 hover:bg-border"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
