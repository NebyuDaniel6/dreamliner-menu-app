"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Instagram, Facebook, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoadingScreen } from "@/components/loading-screen"
import { MenuSection } from "@/components/menu-section"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("thali")

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Decorative border frame */}
        <div className="absolute inset-8 border-2 border-border/40 pointer-events-none" />
        <div className="absolute inset-12 border border-border/20 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Ornamental top decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-border" />
              <div className="w-2 h-2 rotate-45 border border-border" />
              <div className="h-px w-16 bg-border" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.4em] text-foreground/70 font-medium mb-8 font-sans"
          >
            Authentic Indian Cuisine
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-balance leading-none text-foreground"
          >
            ZAIKA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-border" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-20 bg-border" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-foreground/80 mb-12 font-light max-w-xl mx-auto leading-relaxed font-sans italic"
          >
            Traditional recipes passed down through generations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-sm font-medium uppercase tracking-wider transition-all duration-300 font-sans"
            >
              View Menu
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-foreground/30 text-foreground hover:bg-foreground hover:text-background px-10 py-6 text-sm font-medium uppercase tracking-wider transition-all duration-300 bg-transparent font-sans"
            >
              <a href="tel:+251900000000">Call to Order</a>
            </Button>
          </motion.div>

          {/* Ornamental bottom decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-border" />
              <div className="w-2 h-2 rotate-45 border border-border" />
              <div className="h-px w-16 bg-border" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-border" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-12 bg-border" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-foreground">MENU</h2>
            <p className="text-foreground/70 text-sm uppercase tracking-[0.3em] font-sans">Our Selection</p>
          </motion.div>

          {/* Menu category buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12 border-y border-border/40 py-6"
          >
            {["thali", "starters", "main", "fish", "vegetarian", "biryani", "breads", "desserts", "drinks"].map(
              (tab) => (
                <Button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  variant="ghost"
                  className={`capitalize px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 font-sans ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/60 hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {tab === "main" ? "Main Course" : tab}
                </Button>
              ),
            )}
          </motion.div>

          {/* Menu Items */}
          <MenuSection activeTab={activeTab} />
        </div>
      </section>

      <section className="py-20 px-4 bg-background border-y-2 border-border/40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-border" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-12 bg-border" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">OUR STORY</h2>
            <p className="text-foreground/80 text-base leading-relaxed mb-6 font-sans">
              At Zaika, we honor centuries-old culinary traditions. Our chefs craft each dish with hand-selected spices
              and premium ingredients, creating an authentic experience that celebrates India's rich gastronomic
              heritage.
            </p>
            <p className="text-foreground/70 text-sm italic font-sans">
              From the vibrant streets of Delhi to the royal courts of Rajasthan
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-border" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-12 bg-border" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">VISIT US</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 border-y border-border/40 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Phone className="w-6 h-6 mx-auto mb-3 text-primary" />
              <h3 className="font-serif font-semibold mb-2 text-foreground text-sm uppercase tracking-wider">Phone</h3>
              <a
                href="tel:+251900000000"
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-sans"
              >
                +251 900 000 000
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <MapPin className="w-6 h-6 mx-auto mb-3 text-primary" />
              <h3 className="font-serif font-semibold mb-2 text-foreground text-sm uppercase tracking-wider">
                Location
              </h3>
              <p className="text-foreground/70 text-sm font-sans">Addis Ababa, Ethiopia</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Clock className="w-6 h-6 mx-auto mb-3 text-primary" />
              <h3 className="font-serif font-semibold mb-2 text-foreground text-sm uppercase tracking-wider">Hours</h3>
              <p className="text-foreground/70 text-xs font-sans">Lunch: 12:00 - 15:00</p>
              <p className="text-foreground/70 text-xs font-sans">Dinner: 18:00 - 00:00</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            <Button
              size="icon"
              variant="ghost"
              className="w-10 h-10 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Instagram className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="w-10 h-10 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Facebook className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="w-10 h-10 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Mail className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 px-4 border-t-2 border-border/40 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-border" />
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="h-px w-8 bg-border" />
          </div>
          <p className="text-xs text-foreground/60 mb-2 font-sans uppercase tracking-wider">© 2025 Zaika</p>
          <p className="text-xs text-foreground/50 font-sans italic">
            Prices not inclusive of 10% service charge and 15% VAT
          </p>
        </div>
      </footer>
    </main>
  )
}
