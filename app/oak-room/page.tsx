"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { LoadingScreen } from "@/components/loading-screen"
import { OakRoomMenuSection, oakRoomCategories } from "@/components/oak-room-menu-section"

export default function OakRoomPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState(oakRoomCategories[0].id)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  const scrollToMenu = () => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })

  if (isLoading) return <LoadingScreen />

  return (
    <main className="min-h-screen bg-slate-900">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-8 border-2 border-amber-500/40 pointer-events-none" />
        <div className="absolute inset-12 border border-amber-500/20 pointer-events-none" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-amber-100 font-medium mb-8 font-sans"
          >
            Fine Dining Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none text-white"
          >
            OAK
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base md:text-lg text-amber-100 mb-12 font-light max-w-xl mx-auto leading-relaxed font-sans italic"
          >
            Room Service • 17% included in prices
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button onClick={scrollToMenu} size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-6 text-sm font-medium uppercase tracking-wider">
              View Room Menu
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-amber-500/60 text-amber-100 hover:bg-amber-500 hover:text-slate-900 px-10 py-6 text-sm font-medium uppercase tracking-wider">
              <a href="tel:+251900000000">Call Room Service</a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-amber-500/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <div className="h-px w-12 bg-amber-500/60" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">MENU</h2>
            <p className="text-amber-100 text-sm uppercase tracking-[0.3em] font-sans">Our Selection</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap justify-center gap-2 mb-12 border-y border-amber-500/40 py-6">
            {oakRoomCategories.map((c) => (
              <Button key={c.id} onClick={() => setActiveTab(c.id)} variant="ghost" className={`capitalize px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 font-sans ${activeTab === c.id ? "bg-amber-500 text-slate-900" : "text-amber-100/60 hover:text-amber-100 hover:bg-amber-500/20"}`}>
                {c.name}
              </Button>
            ))}
          </motion.div>

          <OakRoomMenuSection activeTab={activeTab} />
        </div>
      </section>
    </main>
  )
}


