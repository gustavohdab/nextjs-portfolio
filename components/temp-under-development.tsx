'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TempUnderDevelopment() {
  return (
    <motion.div
      className="absolute left-0 top-0 -translate-x-1/2 transform"
      initial={{ opacity: 0, y: -1000 }} // A imagem começa fora da tela (topo)
      // A imagem deve ir para o fim da tela (baixo)
      animate={{ opacity: 1, y: 1000, rotate: 15 }}
      transition={{ duration: 5, delay: 0.175 }} // Aumente o 'duration' para "câmera lenta"
    >
      <Image
        src="/under-development.png"
        alt="Under development"
        width={500}
        height={500}
      />
    </motion.div>
  )
}
