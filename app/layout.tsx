import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AnimatedBlur from '@/components/animated-blur'
import Header from '@/components/header'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gustavo | Personal Portfolio',
  description:
    'Gustavo is a full-stack developer based in Brazil. He is passionate about building web applications and learning new technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grainy relative pt-28 text-gray-950 sm:pt-36`}
      >
        {/* Blur effects */}
        <AnimatedBlur />

        {/* Header */}
        <Header />

        {/* Content */}
        {children}
      </body>
    </html>
  )
}
