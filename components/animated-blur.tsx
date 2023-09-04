'use client'

import { motion } from 'framer-motion'

const AnimatedBlur = () => {
  // Animação para mover o elemento de desfoque horizontalmente
  const horizontalMotion = {
    initial: { x: 0 },
    animate: {
      x: [0, 50, -450, 0], // Valores em pixels
    },
    transition: {
      duration: 10, // Em segundos
      repeat: Infinity,
      ease: 'linear',
    },
  }

  // Animação para mover o elemento de desfoque verticalmente
  const verticalMotion = {
    initial: { y: 0 },
    animate: {
      y: [0, 50, -250, 0], // Valores em pixels
    },
    transition: {
      duration: 10, // Em segundos
      repeat: Infinity,
      ease: 'linear',
    },
  }

  return (
    <>
      <motion.div
        {...horizontalMotion}
        className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.5rem] w-[31.5rem] rounded-full bg-gradient-to-r from-[#f8c92d] via-[#000000] to-[#f8c92d] opacity-70 blur-[10rem] sm:w-[68.75rem]"
      />
      <motion.div
        {...verticalMotion}
        className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.5rem] w-[50rem] rounded-full bg-gradient-to-r from-[#000000] via-[#2d74f8] to-[#000000] opacity-70 blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
      />
    </>
  )
}

export default AnimatedBlur
