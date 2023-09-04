import About from '@/components/about/about'
import Intro from '@/components/intro/intro'
import SectionDivider from '@/components/section/section-divider'
import TempUnderDevelopment from '@/components/temp-under-development'

export default function Home() {
  return (
    <main className="relative mx-auto flex max-w-7xl flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />

      {/* Temporary */}
      <TempUnderDevelopment />
    </main>
  )
}
