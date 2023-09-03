'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function IntroImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
            alt="Gustavo's intro image"
            width={192}
            height={192}
            quality={100}
            priority
            className="h-24 w-24 rounded-full border-2 border-white object-cover object-center shadow-xl"
          />
        </motion.div>

        <motion.span
          className="absolute bottom-0 right-0 text-2xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            damping: 20,
            delay: 0.1,
            duration: 0.5,
          }}
        >
          👋
        </motion.span>
      </div>
    </div>
  )
}
