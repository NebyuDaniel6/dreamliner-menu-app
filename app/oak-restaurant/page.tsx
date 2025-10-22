"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, MapPin, Instagram, Facebook, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoadingScreen } from "@/components/loading-screen"
import { OakMenuSection } from "@/components/oak-menu-section"

export default function OakRestaurantPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("main-dishes")

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
    <main className="min-h-screen bg-slate-900">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Decorative border frame */}
        <div className="absolute inset-8 border-2 border-amber-500/40 pointer-events-none" />
        <div className="absolute inset-12 border border-amber-500/20 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Ornamental top decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-amber-500/60" />
              <div className="w-2 h-2 rotate-45 border border-amber-500/60" />
              <div className="h-px w-16 bg-amber-500/60" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.4em] text-amber-100 font-medium mb-8 font-sans"
          >
            Fine Dining Experience
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-balance leading-none text-white"
          >
            OAK
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-amber-500/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <div className="h-px w-20 bg-amber-500/60" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-lg text-amber-100 mb-12 font-light max-w-xl mx-auto leading-relaxed font-sans italic"
          >
            Culinary excellence at Dreamliner Hotel
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
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 text-sm font-medium uppercase tracking-wider transition-all duration-300 font-sans"
            >
              View Menu
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-amber-500/60 text-amber-100 hover:bg-amber-500 hover:text-slate-900 px-10 py-6 text-sm font-medium uppercase tracking-wider transition-all duration-300 bg-transparent font-sans"
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
              <div className="h-px w-16 bg-amber-500/60" />
              <div className="w-2 h-2 rotate-45 border border-amber-500/60" />
              <div className="h-px w-16 bg-amber-500/60" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-amber-500/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <div className="h-px w-12 bg-amber-500/60" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">MENU</h2>
            <p className="text-amber-100 text-sm uppercase tracking-[0.3em] font-sans">Our Selection</p>
          </motion.div>

          {/* Menu category buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12 border-y border-amber-500/40 py-6"
          >
            {[
              { id: "main-dishes", name: "Main Dishes" },
              { id: "breakfast", name: "Breakfast" },
              { id: "pizza", name: "Pizza" },
              { id: "salads", name: "Salads" },
              { id: "snacks", name: "Snacks" },
              { id: "drinks", name: "Drinks" },
              { id: "hot-drinks", name: "Hot Drinks" },
              { id: "wine", name: "Wine" },
              { id: "alcohols", name: "Alcohols" },
              { id: "cocktails", name: "Cocktails" },
            ].map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                variant="ghost"
                className={`capitalize px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 font-sans ${
                  activeTab === category.id
                    ? "bg-amber-500 text-slate-900"
                    : "text-amber-100/60 hover:text-amber-100 hover:bg-amber-500/20"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Menu Items */}
          <OakMenuSection activeTab={activeTab} />
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900 border-y-2 border-amber-500/40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-amber-500/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <div className="h-px w-12 bg-amber-500/60" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white">OUR STORY</h2>
            <p className="text-amber-100 text-base leading-relaxed mb-6 font-sans">
              At Oak Restaurant, we celebrate the art of fine dining with a commitment to culinary excellence. 
              Our chefs craft each dish with precision, using the finest ingredients to create memorable dining experiences.
            </p>
            <p className="text-amber-100 text-base leading-relaxed font-sans">
              Located at Dreamliner Hotel, we offer an extensive menu featuring international cuisine, premium beverages, 
              and exceptional service in an elegant atmosphere.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-amber-500/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <div className="h-px w-12 bg-amber-500/60" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white">CONTACT US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span className="text-lg text-amber-100">+251 900 000 000</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <span className="text-lg text-amber-100">Daily 11:00 AM - 11:00 PM</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span className="text-lg text-amber-100">oak@dreamlinerhotel.com</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  <span className="text-lg text-amber-100">Dreamliner Hotel, Addis Ababa</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://instagram.com/oakrestaurant', '_blank')}
                className="border-2 border-amber-500/60 text-amber-100 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://facebook.com/oakrestaurant', '_blank')}
                className="border-2 border-amber-500/60 text-amber-100 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-amber-100/60 text-sm uppercase tracking-wider font-sans">
                ALL PRICES ARE IN ETB & EXCLUSIVE OF 10% SERVICE CHARGE AND 15% VAT
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
