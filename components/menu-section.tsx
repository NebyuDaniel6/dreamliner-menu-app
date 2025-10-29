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

const menuData: Record<string, MenuItem[]> = {
  thali: [
    {
      name: "Non-V Thali",
      description: "Chicken, lamb, dal, rice, roti naan",
      price: "1790br",
      image: "/non-v-thali.jpg",
      isSpecial: true,
    },
    {
      name: "Non-Veg Platter",
      description: "Fish tikka, Murgh malai tikka, Chicken tikka, Keema samosa, Haryali chicken tikka",
      price: "1950br",
      image: "/non-v-platter.jpg",
      isSpecial: true,
    },
  ],
  starters: [
    {
      name: "Chicken tikka",
      description: "Boneless chicken, yogurt, garam masala, spices",
      price: "999br",
      image: "/chicken-tikka.jpg?v=1",
      isSpecial: true,
    },
    {
      name: "Chicken tikka masala",
      description: "Chicken tikka in creamy tomato sauce",
      price: "1100br",
      image: "/chicken-tikka-masala.jpg?v=1",
      isSpecial: true,
    },
    {
      name: "Chicken tikka makhni",
      description: "Chicken tikka in rich butter sauce",
      price: "1150br",
      image: "/chicken-tikka-makhni.jpg?v=2",
      isSpecial: true,
    },
    {
      name: "Ajwaini fish tikka",
      description: "Nile Perch, chick peas, yoghurt, Indian spice",
      price: "990br",
      image: "/ajwaini-fish-tikka.jpg?v=2",
    },
    {
      name: "Keema samosa",
      description: "Spiced minced meat, crispy pastry",
      price: "450br",
      image: "/keema-samosa.jpg?v=2",
    },
    {
      name: "Mix pakora",
      description: "Assorted vegetables, chickpea flour batter",
      price: "500br",
      image: "/mixed-veg.jpg",
    },
    {
      name: "Vegetable spring rolls",
      description: "Fresh vegetables, crispy wrapper",
      price: "400br",
      image: "/vegetable-spring-rolls.jpg",
    },
    {
      name: "Lamb seekh kebab",
      description: "Minced lamb, spices, herbs",
      price: "1200br",
      image: "/lamb-seekh-kebab.jpg",
      isSpecial: true,
    },
    {
      name: "Indian samosas",
      description: "Spiced potatoes, peas, crispy pastry",
      price: "450br",
      image: "/samosas-full.jpg",
    },
    {
      name: "Roasted papad",
      description: "Crispy lentil wafers",
      price: "150br",
      image: "/roasted-papad.jpg",
    },
  ],
  main: [
    {
      name: "Butter chicken",
      description: "Chicken, tomato cream sauce, spices",
      price: "1100br",
      image: "/butter-chicken.png",
      isSpecial: true,
    },
    {
      name: "Chicken pad pao",
      description: "Chicken, capsicum, tomatoes, onions",
      price: "1015br",
      image: "/chicken-pad-pao.jpg",
    },
    {
      name: "Chicken kadha palak",
      description: "Chicken, onions, tomatoes, spices, herbs, spinach",
      price: "1015br",
      image: "/palak-paneer.jpg",
    },
    {
      name: "Murgh awadhi korma",
      description: "Chicken, cashew, onions, creamy sauce",
      price: "990br",
      image: "/murgh-awadhi-korma.jpg",
    },
    {
      name: "Lamb rogan josh",
      description: "Lamb, tomatoes, onions, Indian spices",
      price: "1025br",
      image: "/lamb-rogan-josh.jpg",
      isSpecial: true,
    },
    {
      name: "Lamb vindaloo",
      description: "Lamb, potatoes, vinegar, spices",
      price: "1050br",
      image: "/lamb-vindaloo.jpg",
      isSpecial: true,
    },
    {
      name: "Kahada palak gosht",
      description: "Mutton, spinach, onions, tomatoes, potatoes",
      price: "990br",
      image: "/kahada-palak-gosht.jpg",
    },
    {
      name: "Kadhai gosht",
      description: "Mutton, spinach, onions, tomatoes, capsicum",
      price: "1050br",
      image: "/kadhai-mutton.jpg",
    },
  ],
  fish: [
    {
      name: "Goan fish curry",
      description: "Nile perch, coconut, Indian spices, herbs",
      price: "1025br",
      image: "/goan-fish-curry.jpg",
      isSpecial: true,
    },
    {
      name: "Fish amritsari",
      description: "Nile perch, chickpea flour, spices, herbs",
      price: "990br",
      image: "/fish-amritsari.jpg",
    },
    {
      name: "Fish tikka",
      description: "Nile perch, yogurt, spices, herbs",
      price: "950br",
      image: "/fish-tikka.jpg",
    },
    {
      name: "Vibrant fish curry",
      description: "Nile perch, tomatoes, onions, Indian spices",
      price: "975br",
      image: "/vibrant-fish-curry.png",
    },
  ],
  vegetarian: [
    {
      name: "Palak paneer",
      description: "Cheese cubes, spinach, spices",
      price: "990br",
      image: "/palak-paneer.jpg",
      isSpecial: true,
    },
    {
      name: "Paneer makhini",
      description: "Ricotta cheese, tomato sauce",
      price: "990br",
      image: "/paneer-tikka-masala.png",
      isSpecial: true,
    },
    {
      name: "Kadhai paneer",
      description: "Paneer, capsicum, tomatoes, onions",
      price: "950br",
      image: "/kadhai-paneer.jpg",
    },
    {
      name: "Paneer pasanda",
      description: "Paneer, cream, cashews, spices",
      price: "1000br",
      image: "/paneer-pasanda.jpg",
    },
    {
      name: "Paneer pakora",
      description: "Spiced paneer, besan or chickpea flour batter",
      price: "750br",
      image: "/paneer-pakora.jpg",
    },
    {
      name: "Pineapple paneer tikka",
      description: "Pineapple, cheese, yoghurt, chick pea powder, fresh lemon, Indian spices",
      price: "990br",
      image: "/pineapple-paneer-tikka.jpg",
      isNew: true,
    },
    {
      name: "Aloo jeera",
      description: "Potatoes, cumin seeds, spices",
      price: "450br",
      image: "/aloo-jeera.jpg",
    },
    {
      name: "Aloo palak",
      description: "Potatoes, spinach, spices",
      price: "480br",
      image: "/aloo-palak.jpg",
    },
    {
      name: "Aloo gobi",
      description: "Potatoes, cauliflower, spices",
      price: "500br",
      image: "/aloo-gobi.jpg",
    },
    {
      name: "Dal tadka",
      description: "Lentils, spices, herbs",
      price: "550br",
      image: "/dal-tadkha.jpg",
    },
    {
      name: "Chana masala",
      description: "Chickpeas, tomatoes, onions, spices",
      price: "600br",
      image: "/chana-masala.jpg",
    },
    {
      name: "Aloo tikki",
      description: "Boiled & mashed potatoes, spices and herb",
      price: "420br",
      image: "/aloo-tikki.jpg",
    },
  ],
  biryani: [
    {
      name: "Chicken dum biryani",
      description: "Basmati rice, chicken, herbs, spices",
      price: "1200br",
      image: "/chicken-dum-biryani.jpg",
      isSpecial: true,
    },
    {
      name: "Lamb biryani",
      description: "Basmati rice, lamb, herbs, spices",
      price: "1250br",
      image: "/lamb-biryani.jpg",
      isSpecial: true,
    },
    {
      name: "Vegetable biryani",
      description: "Basmati rice, vegetables, herbs, spices",
      price: "990br",
      image: "/vegetable-biryani.jpg",
    },
    {
      name: "Prawn biryani",
      description: "Basmati rice, prawns, herbs, spices",
      price: "1300br",
      image: "/prawn-biryani.jpg",
      isSpecial: true,
    },
  ],
  breads: [
    {
      name: "Cheese stuffed naan",
      description: "Naan stuffed with cheese",
      price: "270br",
      image: "/cheese-stuffed-naan.jpg",
      isSpecial: true,
    },
    {
      name: "Garlic butter naan",
      description: "Naan with garlic and butter",
      price: "250br",
      image: "/garlic-butter-naan.jpg",
    },
    {
      name: "Butter naan",
      description: "Naan with butter",
      price: "250br",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Missi roti",
      description: "Brown flour, chick pea powder, green chili, Indian spices",
      price: "300br",
      image: "/missi-roti.jpg",
    },
  ],
  desserts: [
    {
      name: "Gulab jamun",
      description: "Milk, sweet syrup",
      price: "500br",
      image: "/gulab-jamum.jpg",
      isSpecial: true,
    },
    {
      name: "Rasmalai",
      description: "Cottage cheese, milk, saffron",
      price: "550br",
      image: "/rasmalai.png",
      isSpecial: true,
    },
    {
      name: "Kulfi",
      description: "Milk, dry fruits",
      price: "425br",
      image: "/kulfi.jpg",
      isSpecial: true,
    },
    {
      name: "Creamy kheer",
      description: "Rice pudding, milk, dry fruits",
      price: "450br",
      image: "/creamy-kheer.png",
    },
  ],
  drinks: [
    {
      name: "Lassi (sweet or salted)",
      description: "Traditional yogurt drink",
      price: "310br",
      image: "/mango-lassi.jpg",
      isSpecial: true,
    },
    {
      name: "Mango lassi",
      description: "Sweet yogurt drink with mango",
      price: "297br",
      image: "/mango-lassi.jpg",
      isSpecial: true,
    },
    {
      name: "Masala chai",
      description: "Spiced tea with milk",
      price: "198br",
      image: "/masala-tea.jpg",
    },
    {
      name: "Lime soda",
      description: "Fresh lime with soda water",
      price: "150br",
      image: "/lime-soda.jpg",
    },
    {
      name: "Rose milk",
      description: "Sweet milk with rose flavor",
      price: "200br",
      image: "/rose-milk.jpg",
    },
    {
      name: "Fresh juices",
      description: "Fresh fruit juices",
      price: "308br",
      image: "/lime-soda.jpg",
    },
    {
      name: "Hot drinks",
      description: "Tea, coffee and more",
      price: "198br",
      image: "/masala-chai.jpg",
    },
    {
      name: "Sparkling water",
      description: "Refreshing sparkling water",
      price: "119br",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Soft drinks",
      description: "Assorted soft drinks",
      price: "119br",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Espresso martini",
      description: "Coffee cocktail with vodka and coffee liqueur",
      price: "450br",
      image: "/espresso-martini.jpg",
      isSpecial: true,
    },
    {
      name: "Fennel collins",
      description: "Gin cocktail with fennel and citrus",
      price: "420br",
      image: "/fennel-collins.jpg",
    },
    {
      name: "Virgin mojito",
      description: "Non-alcoholic mint and lime drink",
      price: "280br",
      image: "/virgin-mojito.jpg",
    },
    {
      name: "Virgin sour",
      description: "Non-alcoholic citrus sour drink",
      price: "300br",
      image: "/virgin-sour.jpg",
    },
    {
      name: "Gulaab sour",
      description: "Rose-flavored sour cocktail",
      price: "380br",
      image: "/gulaab-sour.jpg",
      isSpecial: true,
    },
    {
      name: "Macchiato",
      description: "Espresso with steamed milk",
      price: "250br",
      image: "/macchiato.jpg",
    },
    {
      name: "Negroni",
      description: "Classic Italian cocktail",
      price: "450br",
      image: "/negroni.jpg",
      isSpecial: true,
    },
  ],
}

export function MenuSection({ activeTab }: { activeTab: string }) {
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
