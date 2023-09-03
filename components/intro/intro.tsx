import IntroContent from './intro-content'
import IntroImage from './intro-image'
import IntroInteractions from './intro-interactions'

export default function Intro() {
  return (
    // Intro Wrapper
    <section className="mb-28 max-w-[50rem] justify-center text-center sm:mb-0">
      <IntroImage />
      <IntroContent />
      <IntroInteractions />
    </section>
  )
}
