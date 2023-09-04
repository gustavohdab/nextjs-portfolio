'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type IntroCustomDrawProps = {
  className?: string
}

export default function IntroCustomDraw({ className }: IntroCustomDrawProps) {
  return (
    <motion.div
      className="absolute left-full top-1/2 z-10 h-48 w-48 transform"
      initial={{ opacity: 0, y: 100, rotate: -40 }}
      animate={{ opacity: 1, y: -100, rotate: -40 }}
      transition={{ duration: 0.9, delay: 2, type: 'just' }}
    >
      <Image
        src="/check-github.png"
        alt="Gustavo"
        layout="fill"
        objectFit="contain"
        className={className}
      />
    </motion.div>
  )
}
