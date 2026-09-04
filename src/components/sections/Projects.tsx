'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  Check,
  X,
  ArrowLeft,
} from 'lucide-react'

type Project = {
  number: string
  title: string
  subtitle: string
  description: string
  category: string
  image: string
  tech: string[]
  features: string[]
  accent: string
  github: string
  live?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    number: '01',
    title: 'CareerPilot',
    subtitle: 'AI-Powered Job Management SaaS',
    description:
      'A career management platform that brings job applications, interview pipelines and AI-powered career preparation into one organized workspace.',
    category: 'SaaS',
    image: '/projects/careerpilot.png',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Gemini AI',
      'Puppeteer',
    ],
    features: [
      'Job Application Tracking',
      'AI Resume Critique',
      'JD Matching',
      'Skill Gap Analysis',
      'Mock Interview Preparation',
      'ATS PDF Export',
    ],
    accent: '#22d3ee',
    github: 'https://github.com/Ashwini08-04/CareerPilot',
    live: 'https://res.cloudinary.com/todfvuck/video/upload/v1788342838/careerpilot-demo-compressed_unk3gs.mp4',
    featured: true,
  },

  {
    number: '02',
    title: 'FinTrack',
    subtitle: 'AI-Powered Personal Finance Platform',
    description:
      'A personal finance platform for managing income, expenses, budgets, savings and recurring transactions with interactive analytics and AI-powered financial insights.',
    category: 'FinTech',
    image: '/projects/fintrack.png',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Chart.js',
      'AI',
    ],
    features: [
      'Income & Expense Management',
      'Budget Tracking',
      'Savings Management',
      'Recurring Transactions',
      'Interactive Analytics',
      'AI Financial Insights',
    ],
    accent: '#a78bfa',
    github:
      'https://github.com/Ashwini08-04/PersonalFinancePlatform',
    live: 'https://res.cloudinary.com/todfvuck/video/upload/v1788342855/fintrack-demo-compressed_drvr5k.mp4',
  },

  {
  number: '03',
  title: 'FoodieHub',
  subtitle: 'Full-Stack Food Delivery Platform',
  description:
    'A full-stack food delivery platform for restaurant discovery, menu browsing and order management, with dedicated functionality for customers and restaurants.',
  category: 'Full-Stack',
  image: '/projects/foodiehub.png',
  tech: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT',
  ],
  features: [
    'Restaurant Discovery',
    'Menu Browsing',
    'Cart & Orders',
    'Restaurant Dashboard',
    'Role-Based Access',
    'Order Management',
  ],
  accent: '#fb7185',
  github:
    'https://github.com/Ashwini08-04/FoodieHub',
  live:
    'https://res.cloudinary.com/todfvuck/video/upload/v1788525482/foodiehub-demo-web_qpvtpw.mp4',
},
]

const filters = ['All', 'SaaS', 'FinTech', 'Full-Stack']

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#070b14]">
      {/* Ambient glow */}
      <div
        className="absolute -left-20 -top-20 h-64 w-64 rounded-full blur-[100px]"
        style={{
          background: `${project.accent}18`,
        }}
      />

      <div
        className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full blur-[120px]"
        style={{
          background: `${project.accent}12`,
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />

      {/* Project image */}
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        className="relative z-10 h-full w-full scale-[1.015] object-cover object-top blur-[0.8px] brightness-[0.82] saturate-[0.92] transition-all duration-700 group-hover:scale-[1.045] group-hover:blur-[0.4px] group-hover:brightness-[0.92]"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#040811] via-[#040811]/10 to-transparent opacity-90" />

      {/* Top subtle shine */}
      <div className="absolute inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-white/[0.04] to-transparent" />

      {/* Category */}
      <div className="absolute left-5 top-5 z-40">
        <span
          className="inline-flex items-center rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] backdrop-blur-xl"
          style={{
            borderColor: `${project.accent}45`,
            background: `${project.accent}10`,
            color: project.accent,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Project number */}
      <div className="absolute bottom-4 right-5 z-30">
        <span className="font-mono text-[10px] tracking-[0.3em] text-white/25">
          {project.number}
        </span>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-4 left-5 z-40 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: project.accent,
            boxShadow: `0 0 12px ${project.accent}`,
          }}
        />

        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/60">
          Explore project
        </span>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  isInView,
  onLiveDemo,
}: {
  project: Project
  index: number
  isInView: boolean
  onLiveDemo: (project: Project) => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.65,
        delay: 0.1 + index * 0.1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.16] hover:bg-white/[0.035] hover:shadow-2xl hover:shadow-black/20"
    >
      {/* Accent line */}
      <div
        className="absolute left-0 right-0 top-0 z-50 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent 5%, ${project.accent}, transparent 95%)`,
        }}
      />

      {/* Preview */}
      <div className="relative h-[190px] overflow-hidden sm:h-[205px]">
        <ProjectImage project={project} />

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-40 flex items-center justify-center bg-[#02050a]/25 backdrop-blur-[1px]"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: hovered ? 1 : 0.85,
              opacity: hovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-xl"
          >
            <ArrowUpRight size={19} />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 md:p-5.5">
        {/* Header row */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: project.accent,
                boxShadow: `0 0 10px ${project.accent}80`,
              }}
            />

            <span
              className="font-mono text-[9px] tracking-[0.25em]"
              style={{
                color: `${project.accent}aa`,
              }}
            >
              PROJECT {project.number}
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <div className="mb-4">
          <h3 className="font-display text-[21px] font-semibold tracking-tight text-white md:text-[23px]">
            {project.title}
          </h3>

          <p
            className="mt-1.5 text-xs font-medium"
            style={{
              color: project.accent,
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs leading-6 text-slate-400">
          {project.description}
        </p>

        {/* Features */}
        <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="group/feature flex items-center gap-2.5 text-[10px] text-slate-500 transition-colors hover:text-slate-300"
            >
              <span
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
                style={{
                  borderColor: `${project.accent}35`,
                  background: `${project.accent}08`,
                }}
              >
                <Check
                  size={9}
                  style={{
                    color: project.accent,
                  }}
                />
              </span>

              {feature}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-white/[0.06]" />

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1 font-mono text-[9px] text-slate-500 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          {/* Live Demo */}
          {project.live ? (
            <button
              type="button"
              onClick={() => onLiveDemo(project)}
              className="group/live flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[10px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                color: '#040811',
                backgroundColor: project.accent,
              }}
            >
              <ExternalLink size={12} />

              <span>Live Demo</span>

              <ArrowUpRight
                size={11}
                className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
              />
            </button>
          ) : (
            <span className="flex cursor-not-allowed items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2.5 text-[10px] text-slate-700">
              <ExternalLink size={12} />
              Live Demo
            </span>
          )}

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/github flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2.5 text-[10px] font-medium text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.18] hover:bg-white/[0.05] hover:text-white"
          >
            <Github
              size={12}
              className="transition-transform duration-300 group-hover/github:rotate-6"
            />

            <span>GitHub</span>

            <ArrowUpRight
              size={10}
              className="opacity-50 transition-all duration-300 group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5 group-hover/github:opacity-100"
            />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function LiveDemoModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && project.live && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#02050a]/90 p-4 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose()
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-6xl overflow-hidden rounded-[24px] border border-white/[0.12] bg-[#07101c] shadow-2xl shadow-black/50"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.025] px-4 py-3 sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: project.accent,
                    boxShadow: `0 0 12px ${project.accent}`,
                  }}
                />

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-semibold text-white">
                      {project.title}
                    </span>

                    <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600 sm:inline">
                      {project.category}
                    </span>
                  </div>

                  <p className="truncate text-[10px] text-slate-500">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close live demo"
                className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.07] hover:text-white"
              >
                <X size={17} />
              </button>
            </div>

            {/* Video */}
            <div className="relative bg-black">
              <video
                key={project.live}
                src={project.live}
                className="max-h-[72vh] w-full object-contain"
                controls
                autoPlay
                muted
                playsInline
              />
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col gap-3 border-t border-white/[0.07] bg-white/[0.02] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600">
                  Project {project.number}
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-700" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
                  Live Preview
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[10px] font-medium text-slate-400 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white"
              >
                <ArrowLeft size={12} />
                Back to Projects
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        )

  const openLiveDemo = (project: Project) => {
    setSelectedProject(project)
  }

  const closeLiveDemo = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative overflow-hidden py-20 md:py-24"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#080f1e]/20" />

        <div
          className="absolute right-0 top-16 h-[420px] w-[420px] rounded-full blur-[150px]"
          style={{
            background: 'rgba(34, 211, 238, 0.035)',
          }}
        />

        <div
          className="absolute bottom-10 left-0 h-[300px] w-[300px] rounded-full blur-[140px]"
          style={{
            background: 'rgba(167, 139, 250, 0.025)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{ duration: 0.7 }}
            className="mb-9"
          >
            {/* Section label */}
            <div className="mb-4 flex items-center gap-3">
              <Sparkles
                size={15}
                className="text-cyan-400"
              />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400/70">
                Selected Work
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
                  Products I&apos;ve
                  <br />
                  <span className="text-slate-500">
                    built &amp; shipped.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
                  Real-world applications combining thoughtful
                  UI, scalable backend systems and AI-powered
                  features.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-3.5 py-2 text-[11px] font-medium transition-all duration-300 ${
                      activeFilter === filter
                        ? 'border-white bg-white text-[#040811] shadow-lg shadow-white/5'
                        : 'border-white/[0.08] bg-white/[0.02] text-slate-500 hover:border-white/[0.18] hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Cards */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
                onLiveDemo={openLiveDemo}
              />
            ))}
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="h-px flex-1 bg-white/[0.06]" />

            <p className="text-center font-mono text-[9px] uppercase tracking-[0.25em] text-slate-700">
              More ideas. More products. More to build.
            </p>

            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>
        </div>
      </section>

      {/* Live Demo Modal */}
      <LiveDemoModal
        project={selectedProject}
        onClose={closeLiveDemo}
      />
    </>
  )
}
