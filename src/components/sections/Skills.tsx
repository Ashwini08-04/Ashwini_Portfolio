'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    icon: '💻',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 70 },
      { name: 'C', level: 65 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Responsive Design', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    category: 'Backend & DB',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'REST APIs', level: 75 },
      { name: 'MongoDB', level: 72 },
      { name: 'SQL', level: 68 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 82 },
      { name: 'VS Code', level: 90 },
      { name: 'Chrome DevTools', level: 78 },
      { name: 'Figma (Basic)', level: 60 },
    ],
  },
]

const techIcons = [
  { label: 'React', color: '#61dafb', bg: 'rgba(97,218,251,0.1)' },
  { label: 'Python', color: '#3776ab', bg: 'rgba(55,118,171,0.1)' },
  { label: 'Node.js', color: '#68a063', bg: 'rgba(104,160,99,0.1)' },
  { label: 'MongoDB', color: '#4db33d', bg: 'rgba(77,179,61,0.1)' },
  { label: 'JavaScript', color: '#f7df1e', bg: 'rgba(247,223,30,0.1)' },
  { label: 'HTML5', color: '#e34f26', bg: 'rgba(227,79,38,0.1)' },
  { label: 'CSS3', color: '#1572b6', bg: 'rgba(21,114,182,0.1)' },
  { label: 'Git', color: '#f05032', bg: 'rgba(240,80,50,0.1)' },
  { label: 'SQL', color: '#336791', bg: 'rgba(51,103,145,0.1)' },
  { label: 'Java', color: '#ed8b00', bg: 'rgba(237,139,0,0.1)' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080f1e]/40" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-10 h-10 rounded-lg glass border border-cyan-400/20 flex items-center justify-center">
            <span className="text-lg">🛠️</span>
          </div>
          <div>
            <p className="font-mono text-xs text-cyan-400/60 tracking-widest uppercase mb-1">02 / skills</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Technical Stack</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/20 to-transparent ml-4" />
        </motion.div>

        {/* Tech pill cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {techIcons.map(({ label, color, bg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="px-4 py-2 rounded-full border text-sm font-mono font-medium transition-all duration-200"
              style={{ color, background: bg, borderColor: `${color}30` }}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map(({ category, icon, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + gi * 0.1 }}
              className="glass rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/20 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-white mb-5 flex items-center gap-2">
                <span>{icon}</span> {category}
              </h3>
              <div className="space-y-4">
                {skills.map(({ name, level }, si) => (
                  <div key={name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{name}</span>
                      <span className="font-mono text-cyan-400">{level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 + gi * 0.1 + si * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
