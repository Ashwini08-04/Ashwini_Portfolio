'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'Dhoot Automotive Systems Pvt. Ltd.',
    role: 'Industrial Trainee',
    period: 'Jan 2025 – Mar 2025',
    location: 'Aurangabad, India',
    type: 'Internship',
    color: '#22d3ee',
    highlights: [
      'Gained hands-on exposure to automotive manufacturing processes and quality systems',
      'Understood real-world production workflows and lean manufacturing principles',
      'Collaborated with engineering teams on process documentation and improvement initiatives',
      'Applied analytical thinking to identify quality control bottlenecks',
    ],
    tech: ['Quality Control', 'Process Analysis', 'Documentation'],
  },
  {
    company: 'Hitachi Astemo India Pvt. Ltd.',
    role: 'Industrial Trainee',
    period: 'Jun 2024 – Aug 2024',
    location: 'Manesar, India',
    type: 'Internship',
    color: '#7c3aed',
    highlights: [
      'Observed and contributed to automotive component testing and verification procedures',
      'Gained deep understanding of industry-standard quality metrics and KPI tracking',
      'Worked alongside senior engineers to understand system integration workflows',
      'Developed discipline, attention to detail, and systematic problem-solving approach',
    ],
    tech: ['Component Testing', 'KPI Tracking', 'System Integration'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-10 h-10 rounded-lg glass border border-cyan-400/20 flex items-center justify-center">
            <Briefcase size={18} className="text-cyan-400" />
          </div>
          <div>
            <p className="font-mono text-xs text-cyan-400/60 tracking-widest uppercase mb-1">03 / experience</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Experience</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/20 to-transparent ml-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-violet-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#040811] z-10"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02]"
                    style={{ borderColor: `${exp.color}20` }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full mb-2 inline-block"
                          style={{ color: exp.color, background: `${exp.color}15` }}
                        >
                          {exp.type}
                        </span>
                        <h3 className="font-display text-lg font-bold text-white">{exp.company}</h3>
                        <p style={{ color: exp.color }} className="text-sm font-medium">{exp.role}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-mono mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: exp.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
