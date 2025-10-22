"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

interface SpecialDishProps {
  name: string
  description: string
  price: string
  image: string
  delay: number
}

export function SpecialDish({ name, description, price, image, delay }: SpecialDishProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

        {/* Floating badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3, type: "spring" }}
          className="absolute top-4 right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        >
          <Star className="w-6 h-6 fill-current" />
        </motion.div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-xl font-bold mb-2 text-balance group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-xl">{price}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
