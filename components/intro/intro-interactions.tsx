'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

export default function IntroInteractions() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Contact */}
      <Link
        href="#contact"
        className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition-transform hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-100"
      >
        Contact me{' '}
        <BsArrowRight className="opacity-70 transition-transform group-hover:translate-x-1" />
      </Link>

      {/* Download CV */}
      <a
        href="/cv.pdf"
        className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 text-black outline-none transition-transform hover:scale-110 hover:bg-gray-100 focus:scale-110 active:scale-100"
        download
      >
        Download CV{' '}
        <HiDownload className="opacity-60 transition-transform group-hover:translate-y-1" />
      </a>

      {/* Social Media */}
      <a
        className="text-white> flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition-transform hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-100"
        href="https://www.linkedin.com/in/gustavo-h-batista/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        className="text-white> flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-xl text-gray-700 transition-transform hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-100"
        href="https://github.com/gustavohdab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
    </motion.div>
  )
}
