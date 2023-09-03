'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function IntroContent() {
  // Define the segments array to control the text and styles of the animated introduction.
  // Each element can either be a string or an object with 'text' and 'style' properties.
  const segments = [
    "Hi, I'm ",
    { text: 'Gustavo', style: 'font-bold' },
    '. A 22 yo ',
    { text: 'full-stack developer', style: 'font-bold' },
    ' based in Brazil with 1 year of experience. I enjoy building ',
    { text: 'sites & apps', style: 'text-blue-500 italic' },
    '. My focus is ',
    { text: 'React (Next.js)', style: 'underline' },
    '.',
  ]

  // Initialize an index variable to assign unique keys for each animated element.
  let index = 0

  return (
    // Wrap the paragraph with AnimatePresence to enable animation transitions.
    <AnimatePresence>
      <p className="mb-10 mt-4 px-4 text-2xl font-medium tracking-wide sm:text-4xl">
        {segments.map((segment) => {
          // Handle string segments.
          if (typeof segment === 'string') {
            return segment.split('').map((char) => {
              index++
              // Use 'motion.span' for animating each character.
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  {char}
                </motion.span>
              )
            })
          } else {
            // Handle object segments with custom styles.
            return segment.text.split('').map((char) => {
              index++
              return (
                <motion.span
                  key={index}
                  className={segment.style}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  {char}
                </motion.span>
              )
            })
          }
        })}
      </p>
    </AnimatePresence>
  )
}
