"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Instagram, Facebook, Mail, Clock, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoadingScreen } from "@/components/loading-screen"
import { RoomMenuSection } from "@/components/room-menu-section"

export default function ZaikaRoomPage() {
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
            🏨 Room Service • Authentic Indian Cuisine
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
            Traditional recipes delivered to your room with premium service
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
              View Room Service Menu
            </Button>
            <Button
              onClick={() => window.open('tel:+1234567890')}
              size="lg"
              variant="outline"
              className="border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 text-sm font-medium uppercase tracking-wider transition-all duration-300 font-sans"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Room Service
            </Button>
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
          <RoomMenuSection activeTab={activeTab} />
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
            <p className="text-foreground/80 text-base leading-relaxed font-sans">
              From our kitchen to your room, we deliver the same exceptional quality and flavors that have made us a
              beloved destination for authentic Indian cuisine.
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
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-border" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-12 bg-border" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">CONTACT US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-lg">+251 900 000 000</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-lg">Daily 11:00 AM - 11:00 PM</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-lg">info@zaika.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-lg">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://instagram.com/zaika', '_blank')}
                className="border-2 border-border/40 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://facebook.com/zaika', '_blank')}
                className="border-2 border-border/40 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
