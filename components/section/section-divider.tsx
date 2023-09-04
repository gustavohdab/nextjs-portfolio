'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 hidden h-16 w-1 rounded-full bg-gray-300 sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    />
  )
}
