'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Filter } from 'lucide-react'

const projects = [
  {
    title: 'Apna Ghar',
    subtitle: 'PG Rental Platform',
    desc: 'Full-stack application with separate dashboards for tenants and landlords. Features authentication, property listings, pricing management, and search with filters.',
    tech: ['React', 'Python', 'MongoDB', 'FastAPI'],
    tags: ['Full-Stack'],
    color: '#22d3ee',
    gradient: 'from-cyan-500/20 to-blue-600/10',
    icon: '🏠',
    impact: 'Streamlined PG discovery & booking for 50+ users',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'FoodieHub',
    subtitle: 'Food Delivery Platform',
    desc: 'Complete food delivery solution with real-time order tracking, restaurant dashboard, menu management, and customer interface. Built with live update features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    tags: ['Full-Stack'],
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-orange-600/10',
    icon: '🍔',
    impact: 'Real-time order tracking with sub-second updates',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'SevaDesk',
    subtitle: 'Government Service Platform',
    desc: 'AI-guided multi-service government platform streamlining citizen applications. Features intelligent workflow routing, document management, and status tracking.',
    tech: ['React', 'Python', 'AI/ML', 'MongoDB'],
    tags: ['Full-Stack', 'AI'],
    color: '#7c3aed',
    gradient: 'from-violet-500/20 to-purple-600/10',
    icon: '🏛️',
    impact: 'Reduced service application time by 70%',
    github: 'https://github.com',
    live: '#',
  },
]

const filters = ['All', 'Full-Stack', 'AI']

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePos({ x: (x - 0.5) * 12, y: (y - 0.5) * -12 })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      whileHover={{ rotateX: mousePos.y, rotateY: mousePos.x }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }) }}
      style={{ transformStyle: 'preserve-3d' }}
      className="relative project-card glass rounded-2xl overflow-hidden border border-white/5 cursor-pointer group"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at center, ${project.color}15, transparent 70%)` }}
      />

      {/* Top gradient bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      {/* Preview area */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <motion.span
          animate={{ scale: hovered ? 1.2 : 1 }}
          transition={{ duration: 0.4 }}
          className="text-6xl"
        >
          {project.icon}
        </motion.span>

        {/* Floating tech badges on hover */}
        <div className={`absolute inset-0 flex items-end justify-start p-4 gap-2 flex-wrap transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          {project.tech.map(t => (
            <span key={t} className="text-xs font-mono px-2 py-1 rounded-full bg-black/50 border border-white/10 text-white">
              {t}
            </span>
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full shrink-0"
              style={{ color: project.color, background: `${project.color}15` }}
            >
              {project.tags[0]}
            </span>
          </div>
          <p style={{ color: project.color }} className="text-sm font-medium">{project.subtitle}</p>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{project.desc}</p>

        {/* Impact badge */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-black/30 border border-white/5">
          <span className="text-xs">⚡</span>
          <p className="text-xs text-slate-300 font-medium">{project.impact}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors border border-white/10 hover:border-white/20 rounded-lg px-3 py-2"
          >
            <Github size={14} /> GitHub
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-sm rounded-lg px-3 py-2 font-medium transition-all"
            style={{ color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}30` }}
          >
            <ExternalLink size={14} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter))

  return (
    <section id="projects" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#080f1e]/30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-10 rounded-lg glass border border-cyan-400/20 flex items-center justify-center">
            <span className="text-lg">🚀</span>
          </div>
          <div>
            <p className="font-mono text-xs text-cyan-400/60 tracking-widest uppercase mb-1">04 / projects</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/20 to-transparent ml-4" />
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center gap-2 mb-12"
        >
          <Filter size={14} className="text-slate-500" />
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-cyan-400 text-[#040811] font-semibold'
                  : 'border border-white/10 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-400'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
