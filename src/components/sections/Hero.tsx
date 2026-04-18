'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, ChevronRight } from 'lucide-react'

const ROLES = ['Full-Stack Developer', 'React Enthusiast', 'Python Developer', 'Problem Solver']

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (paused) {
      timeout = setTimeout(() => { setDeleting(true); setPaused(false) }, 1800)
    } else if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      setPaused(true)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((roleIdx + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, paused, roleIdx])

  return (
    <span className="text-cyan-400 font-display">
      {displayed}
      <span className="typing-cursor" />
    </span>
  )
}

function Particles() {
  const count = 30
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            background: i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#7c3aed' : '#ec4899',
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
        />
      ))}
    </div>
  )
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      <Particles />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm font-mono">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <p className="font-mono text-sm text-slate-500 tracking-widest uppercase">
                Hi, I&apos;m
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05]">
                Ashwini
                <br />
                <span className="gradient-text">Sonawane</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={fadeUp} className="font-display text-2xl md:text-3xl text-slate-300 min-h-[1.2em]">
              <TypingText />
            </motion.div>

            {/* Tagline */}
            <motion.p variants={fadeUp} className="text-slate-400 max-w-lg leading-relaxed">
              Building scalable and responsive web applications. Passionate about creating modern,
              user-friendly solutions with strong problem-solving skills.
            </motion.p>

            {/* Terminal-style stats */}
            <motion.div
              variants={fadeUp}
              className="glass rounded-xl p-4 border border-cyan-400/10 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-slate-500 text-xs">portfolio.ts</span>
                <span className="ml-auto text-green-400 text-xs">● online</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <p><span className="text-violet-400">const</span> <span className="text-cyan-400">role</span> <span className="text-white">=</span> <span className="text-green-400">&quot;Full-Stack Developer&quot;</span></p>
                <p><span className="text-violet-400">const</span> <span className="text-cyan-400">location</span> <span className="text-white">=</span> <span className="text-green-400">&quot;Jalgaon, India&quot;</span></p>
                <p><span className="text-violet-400">const</span> <span className="text-cyan-400">passion</span> <span className="text-white">=</span> <span className="text-green-400">&quot;Building impactful products&quot;</span></p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#projects')}
                className="flex items-center gap-2 bg-cyan-400 text-[#040811] px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20"
              >
                View Projects <ChevronRight size={16} />
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon px-6 py-3 rounded-full font-semibold text-sm"
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:sonawaneashwini073@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors border border-white/5"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-72 h-72">
              {/* Central avatar placeholder */}
              <div className="absolute inset-8 rounded-full glass border border-cyan-400/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-violet-600/10 to-pink-500/10" />
                <span className="font-display text-6xl font-bold gradient-text z-10">AS</span>
              </div>

              {/* Orbiting ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-cyan-400/15 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
              </motion.div>

              {/* Orbiting ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 border border-violet-500/15 rounded-full"
              >
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50" />
              </motion.div>

              {/* Floating skill badges */}
              {[
                { label: 'React', x: '-60%', y: '10%', color: 'cyan' },
                { label: 'Python', x: '100%', y: '20%', color: 'violet' },
                { label: 'MongoDB', x: '-40%', y: '80%', color: 'pink' },
                { label: 'Node.js', x: '90%', y: '75%', color: 'green' },
              ].map(({ label, x, y, color }, i) => (
                <motion.div
                  key={label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  className="absolute glass px-3 py-1 rounded-full text-xs font-mono border border-white/10"
                  style={{ left: x, top: y }}
                >
                  <span className={`text-${color}-400`}>{label}</span>
                </motion.div>
              ))}

              {/* Glow */}
              <div className="absolute inset-0 -z-10 blur-2xl">
                <div className="absolute inset-8 bg-cyan-500/15 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollTo('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
