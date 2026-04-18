'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Code2, Building2, Lightbulb } from 'lucide-react'

const achievements = [
  {
    icon: Building2,
    title: 'Industrial Training Completed',
    desc: 'Successfully completed two industrial training programs at top automotive companies — Dhoot Automotive and Hitachi Astemo.',
    color: '#22d3ee',
    stat: '2x',
    statLabel: 'Companies',
  },
  {
    icon: Code2,
    title: 'Built Full-Stack Applications',
    desc: 'Designed and developed end-to-end web applications covering frontend, backend APIs, databases, and deployment.',
    color: '#7c3aed',
    stat: '3+',
    statLabel: 'Projects Live',
  },
  {
    icon: Lightbulb,
    title: 'Strong Problem-Solving Skills',
    desc: 'Consistently applied structured thinking and data-driven approaches to debug, optimize, and improve application performance.',
    color: '#f59e0b',
    stat: '100+',
    statLabel: 'Problems Solved',
  },
  {
    icon: Trophy,
    title: 'Hands-On Industry Exposure',
    desc: 'Gained real-world engineering workflow experience, including manufacturing processes, QC standards, and team collaboration.',
    color: '#ec4899',
    stat: '6mo',
    statLabel: 'Experience',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-10 h-10 rounded-lg glass border border-cyan-400/20 flex items-center justify-center">
            <Trophy size={18} className="text-cyan-400" />
          </div>
          <div>
            <p className="font-mono text-xs text-cyan-400/60 tracking-widest uppercase mb-1">05 / achievements</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Achievements</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/20 to-transparent ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map(({ icon: Icon, title, desc, color, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-opacity-40 transition-all duration-300 group relative overflow-hidden"
              style={{ '--hover-color': color } as React.CSSProperties}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${color}10, transparent 70%)` }}
              />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-200">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>

                {/* Stat */}
                <div className="text-right shrink-0">
                  <p className="font-display text-2xl font-bold" style={{ color }}>{stat}</p>
                  <p className="text-slate-500 text-xs">{statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Hire Me section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-8 border border-cyan-400/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Why Hire Me?</h3>
              <p className="text-slate-400 leading-relaxed">
                I build more than code — I deliver solutions that connect frontend elegance with backend logic
                to drive real business outcomes. My focus is on measurable value, clean systems, and continuous improvement.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Strong problem-solving with data-first thinking',
                'End-to-end full-stack delivery experience',
                'Real-world industry exposure & discipline',
                'Fast learner adapting to new technologies',
                'Passionate about clean, maintainable code',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <div className="w-5 h-5 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  </div>
                  {point}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
