'use client'

import { motion } from 'framer-motion'

import SectionHeading from '../section/section-heading'

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading heading="About Me" />
      <p className="mb-3">
        I&apos;m currently pursuing a degree in{' '}
        <span className="font-medium">Computer Science</span> and have always
        been passionate about programming. I enrolled in a coding Bootcamp and
        learned <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className="font-medium">
          React, Next.js, Node.js, and SQL databases
        </span>
        . I am also familiar with TypeScript, Tailwind and Prisma ORM, and
        others. I&apos;m a <span className="font-medium">fast learner</span> and
        I&apos;m always looking to learn new technologies.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and playing with my dog. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning <span className="font-medium">Korean</span>{' '}
        <span className="text-xs">(in my spare time)</span> on my own.{' '}
      </p>
    </motion.section>
  )
}
