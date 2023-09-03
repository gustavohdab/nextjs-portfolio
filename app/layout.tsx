import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className={`${inter.className} relative bg-gray-50 text-gray-950`}>
        {/* Blur effects */}
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.5rem] w-[31.5rem] rounded-full bg-gradient-to-r from-[#2d74f8] via-[#000000] to-[#2d74f8] opacity-70 blur-[10rem] sm:w-[68.75rem]" />
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.5rem] w-[50rem] rounded-full bg-gradient-to-r from-[#000000] via-[#2d74f8] to-[#000000] opacity-70 blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

        {/* Content */}
        {children}
      </body>
    </html>
  )
}
