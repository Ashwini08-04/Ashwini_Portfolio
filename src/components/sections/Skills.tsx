'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  GitBranch,
  ArrowUpRight,
  Sparkles,
  Layers3,
} from 'lucide-react'

const skillGroups = [
  {
    number: '01',
    title: 'Frontend',
    subtitle: 'Interfaces & Experience',
    icon: Code2,
    skills: [
      {
        name: 'React.js',
        desc: 'Component-based interfaces',
      },
      {
        name: 'JavaScript',
        desc: 'Interactive web functionality',
      },
      {
        name: 'HTML5',
        desc: 'Semantic web structure',
      },
      {
        name: 'CSS3',
        desc: 'Responsive visual styling',
      },
      {
        name: 'Tailwind CSS',
        desc: 'Modern utility-first styling',
      },
    ],
  },
  {
    number: '02',
    title: 'Backend',
    subtitle: 'Logic & APIs',
    icon: Server,
    skills: [
      {
        name: 'Node.js',
        desc: 'Server-side application logic',
      },
      {
        name: 'Express.js',
        desc: 'Backend & API development',
      },
      {
        name: 'REST APIs',
        desc: 'Application communication',
      },
      {
        name: 'JWT / Authentication',
        desc: 'Secure user authentication',
      },
    ],
  },
  {
    number: '03',
    title: 'Database',
    subtitle: 'Data & Architecture',
    icon: Database,
    skills: [
      {
        name: 'MongoDB',
        desc: 'NoSQL application database',
      },
      {
        name: 'Mongoose',
        desc: 'MongoDB data modeling',
      },
      {
        name: 'Database Design',
        desc: 'Structured application data',
      },
    ],
  },
  {
    number: '04',
    title: 'AI & Tools',
    subtitle: 'Intelligence & Workflow',
    icon: BrainCircuit,
    skills: [
      {
        name: 'AI API Integration',
        desc: 'AI-powered application features',
      },
      {
        name: 'Git & GitHub',
        desc: 'Version control & collaboration',
      },
      {
        name: 'Postman',
        desc: 'API testing & development',
      },
      {
        name: 'VS Code',
        desc: 'Development environment',
      },
    ],
  },
]

const additionalSkills = [
  'Python',
  'Java',
  'C',
  'Git',
  'GitHub',
  'Postman',
  'Responsive Design',
  'API Integration',
  'Authentication',
  'Problem Solving',
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.03] py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#040811]" />

      <div className="absolute left-[12%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/[0.025] blur-[130px]" />

      <div className="absolute bottom-[5%] right-[-5%] h-80 w-80 rounded-full bg-violet-500/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.75,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-14 flex items-end justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.035]">
              <Layers3
                size={17}
                className="text-cyan-400"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-[0.3em] text-cyan-400/60">
                  02
                </span>

                <span className="h-px w-7 bg-cyan-400/20" />

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                  Skills / Expertise
                </p>
              </div>

              <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                What I build
                <span className="text-cyan-400"> with.</span>
              </h2>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
              04 Categories
            </span>

            <span className="h-px w-10 bg-white/[0.06]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
              Technical Stack
            </span>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
        >
          <p className="max-w-2xl text-sm leading-7 text-slate-500 md:text-[15px]">
            A practical technology stack focused on building responsive
            interfaces, scalable backend systems, reliable data layers and
            intelligent web experiences.
          </p>

          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
              Continuously learning
            </span>
          </div>
        </motion.div>

        {/* Main Skill Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map(
            ({
              number,
              title,
              subtitle,
              icon: Icon,
              skills,
            }, groupIndex) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
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
                  delay: 0.18 + groupIndex * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] transition-all duration-500 hover:border-cyan-400/15 hover:bg-white/[0.028]"
              >
                {/* Card Glow */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.025] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.08]" />

                {/* Side Accent */}
                <div className="absolute bottom-0 left-0 top-0 w-px origin-bottom scale-y-0 bg-gradient-to-t from-cyan-400/70 to-transparent transition-transform duration-500 group-hover:scale-y-100" />

                <div className="relative p-6">

                  {/* Card Header */}
                  <div className="mb-7 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05] transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.08]">
                        <Icon
                          size={17}
                          className="text-cyan-400"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[8px] text-cyan-400/40">
                            {number}
                          </span>

                          <h3 className="font-display text-base font-semibold text-white">
                            {title}
                          </h3>
                        </div>

                        <p className="mt-1 text-[10px] text-slate-600">
                          {subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </div>

                  {/* Technologies */}
                  <div className="divide-y divide-white/[0.045]">
                    {skills.map(({ name, desc }, skillIndex) => (
                      <motion.div
                        key={name}
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        animate={
                          isInView
                            ? {
                                opacity: 1,
                                x: 0,
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.4,
                          delay:
                            0.3 +
                            groupIndex * 0.1 +
                            skillIndex * 0.06,
                        }}
                        className="group/skill relative flex items-center justify-between gap-4 py-4"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center">
                            <span className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400/30 transition-all duration-300 group-hover/skill:h-2 group-hover/skill:w-2 group-hover/skill:bg-cyan-400 group-hover/skill:shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                          </span>

                          <div className="min-w-0">
                            <p className="text-sm font-medium text-slate-300 transition-colors duration-300 group-hover/skill:text-white">
                              {name}
                            </p>

                            <p className="mt-0.5 truncate text-[10px] text-slate-700 transition-colors duration-300 group-hover/skill:text-slate-500">
                              {desc}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={12}
                          className="shrink-0 text-transparent transition-all duration-300 group-hover/skill:-translate-y-0.5 group-hover/skill:translate-x-0.5 group-hover/skill:text-cyan-400/70"
                        />

                        <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400/30 transition-all duration-500 group-hover/skill:w-full" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.045] pt-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
                      {skills.length} technologies
                    </span>

                    <span className="font-mono text-[8px] text-slate-700">
                      / {number}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="mt-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] p-6"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

            {/* Supporting Skills Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.025]">
                <Wrench
                  size={15}
                  className="text-slate-400"
                />
              </div>

              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600">
                  Supporting Skills
                </p>

                <h3 className="mt-1 font-display text-sm font-semibold text-white">
                  More in the toolkit
                </h3>
              </div>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 lg:max-w-3xl lg:justify-end">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.3,
                    delay: 0.7 + index * 0.035,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="cursor-default rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-2 font-mono text-[9px] text-slate-500 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-400"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stack Signature */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 0.85,
          }}
          className="mt-14 border-t border-white/[0.05] pt-7"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] text-slate-700">
                STACK
              </span>

              <span className="h-px w-8 bg-cyan-400/20" />

              <div className="flex items-center gap-2">
                <GitBranch
                  size={12}
                  className="text-cyan-400/60"
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
                  React · Node · Express · MongoDB · AI
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
                Build
              </span>

              <span className="text-cyan-400/50">·</span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
                Learn
              </span>

              <span className="text-cyan-400/50">·</span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
                Improve
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}