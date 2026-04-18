'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Code2, Brain, Zap } from 'lucide-react'

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Writing maintainable, scalable code with best practices' },
  { icon: Brain, label: 'Problem Solver', desc: 'Breaking complex challenges into elegant solutions' },
  { icon: Zap, label: 'Fast Learner', desc: 'Adapting to new technologies with curiosity and speed' },
]

const certifications = [
  { name: 'Full-Stack Web Development', org: 'Self-Learning', year: '2024' },
  { name: 'Python Programming', org: 'Coursera', year: '2023' },
  { name: 'Industrial Training', org: 'Dhoot Automotive', year: '2025' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080f1e]/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-10 h-10 rounded-lg glass border border-cyan-400/20 flex items-center justify-center">
            <span className="text-cyan-400 text-lg">👩‍💻</span>
          </div>
          <div>
            <p className="font-mono text-xs text-cyan-400/60 tracking-widest uppercase mb-1">01 / about</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">About Me</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/20 to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
              <MapPin size={14} className="text-cyan-400" />
              Jalgaon, India
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Aspiring Full-Stack Developer skilled in <span className="text-cyan-400">HTML, CSS, JavaScript, React, Python, Java, and C</span>.
                Passionate about scalable applications and continuous learning.
              </p>
              <p>
                My approach combines clean architecture with real-world practicality — I build systems
                that are not just functional, but maintainable and scalable. I love turning complex
                requirements into simple, elegant solutions.
              </p>
              <p>
                With hands-on industrial exposure at leading automotive companies, I understand the
                importance of precision, process, and quality — values I carry directly into my code.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid gap-3 pt-2">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="glass glass-hover rounded-xl p-4 flex items-start gap-4 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-white text-sm">{label}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Certifications + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '3+', label: 'Full-Stack Projects' },
                { value: '5+', label: 'Technologies Mastered' },
                { value: '2', label: 'Industrial Trainings' },
                { value: '100%', label: 'Passion & Drive' },
              ].map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-5 text-center border border-cyan-400/5 hover:border-cyan-400/20 transition-all duration-300"
                >
                  <p className="font-display text-3xl font-bold gradient-text">{value}</p>
                  <p className="text-slate-400 text-xs mt-1">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-6 border border-cyan-400/10">
              <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">📜</span> Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map(({ name, org, year }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                  >
                    <div>
                      <p className="text-white text-sm font-medium">{name}</p>
                      <p className="text-slate-500 text-xs">{org}</p>
                    </div>
                    <span className="text-cyan-400 font-mono text-xs px-2 py-1 rounded bg-cyan-400/10">
                      {year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
