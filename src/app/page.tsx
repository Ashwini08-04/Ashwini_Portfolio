'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from '@/components/ui/Preloader'
import Cursor from '@/components/ui/Cursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#040811]">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.025,
              filter: 'blur(4px)',
            }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
            scale: 0.995,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Cursor />
          <ScrollProgress />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </main>
  )
}