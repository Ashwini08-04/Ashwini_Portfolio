'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MapPin,
  Code2,
  BrainCircuit,
  Zap,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    number: '01',
    label: 'Full-Stack Development',
    desc: 'Building responsive interfaces, REST APIs and scalable application architecture.',
  },
  {
    icon: BrainCircuit,
    number: '02',
    label: 'AI Integration',
    desc: 'Adding practical AI capabilities to modern web applications and products.',
  },
  {
    icon: Zap,
    number: '03',
    label: 'Problem Solving',
    desc: 'Breaking complex requirements into clean, simple and usable solutions.',
  },
]

const certifications = [
  {
    name: 'Full-Stack Web Development',
    org: 'Self-Learning',
    year: '2024',
  },
  {
    name: 'Python Programming',
    org: 'Coursera',
    year: '2023',
  },
  {
    name: 'Industrial Training',
    org: 'Dhoot Automotive',
    year: '2025',
  },
]

const stats = [
  {
    value: '03+',
    label: 'Full-Stack Projects',
  },
  {
    value: '10+',
    label: 'Technologies',
  },
  {
    value: '02',
    label: 'Industrial Trainings',
  },
  {
    value: 'BE',
    label: 'E&TC Engineering',
  },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.03] py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040811] via-[#07101c]/50 to-[#040811]" />

      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-cyan-500/[0.035] blur-[120px]" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-violet-500/[0.04] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">

        {/* Section Heading */}
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
          transition={{
            duration: 0.75,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-14 flex items-end justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.035]">
              <Sparkles
                size={17}
                className="text-cyan-400"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-[0.3em] text-cyan-400/60">
                  01
                </span>

                <span className="h-px w-7 bg-cyan-400/20" />

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                  About / Profile
                </p>
              </div>

              <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                A little about
                <span className="text-cyan-400"> me.</span>
              </h2>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">
              2026
            </span>

            <span className="h-px w-10 bg-white/[0.06]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
              Developer Profile
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Location */}
            <div className="mb-7 flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
                <MapPin
                  size={12}
                  className="text-cyan-400"
                />

                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                  Jalgaon, India
                </span>
              </div>

              <span className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.025] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

                <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400/80">
                  Open to opportunities
                </span>
              </span>
            </div>

            {/* Main Intro */}
            <div className="max-w-2xl">
              <p className="font-display text-2xl font-medium leading-relaxed tracking-[-0.02em] text-slate-200 md:text-3xl">
                I build{' '}
                <span className="text-cyan-400">
                  thoughtful digital products
                </span>{' '}
                that combine clean design, solid engineering and intelligent
                functionality.
              </p>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500 md:text-[15px]">
                <p>
                  I&apos;m an aspiring{' '}
                  <span className="font-medium text-slate-300">
                    Full-Stack Developer
                  </span>{' '}
                  with hands-on experience building modern web applications
                  using React, Node.js, Express.js, MongoDB and AI technologies.
                </p>

                <p>
                  I enjoy working across the complete product journey — from
                  responsive interfaces and reusable components to backend APIs,
                  authentication, databases and AI-powered features.
                </p>

                <p>
                  My approach is simple:{' '}
                  <span className="text-slate-300">
                    understand the problem, build with purpose and keep
                    improving.
                  </span>{' '}
                  I&apos;m continuously learning and looking for opportunities
                  to work on products that solve meaningful real-world problems.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-10 space-y-3">
              {highlights.map(
                ({ icon: Icon, number, label, desc }, index) => (
                  <motion.div
                    key={label}
                    initial={{
                      opacity: 0,
                      x: -20,
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
                      duration: 0.55,
                      delay: 0.3 + index * 0.1,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.018] p-4 transition-all duration-300 hover:border-cyan-400/15 hover:bg-white/[0.035]"
                  >
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05]">
                        <Icon
                          size={16}
                          className="text-cyan-400"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[8px] text-cyan-400/40">
                            {number}
                          </span>

                          <p className="font-display text-sm font-semibold text-white">
                            {label}
                          </p>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-600">
                          {desc}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                      />
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="space-y-5"
          >

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(
                ({ value, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{
                      opacity: 0,
                      y: 15,
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
                      duration: 0.5,
                      delay: 0.3 + index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/15 hover:bg-white/[0.035]"
                  >
                    <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-cyan-400/[0.025] blur-2xl transition-all duration-500 group-hover:bg-cyan-400/[0.07]" />

                    <p className="relative font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                      {value}
                    </p>

                    <p className="relative mt-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-600">
                      {label}
                    </p>

                    <div className="mt-4 h-px w-8 bg-cyan-400/30 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-400/60" />
                  </motion.div>
                )
              )}
            </div>

            {/* Education */}
            <motion.div
              whileHover={{
                y: -3,
              }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-white/[0.018] p-6 transition-all duration-300 hover:border-cyan-400/20"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/[0.035] blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/[0.07]">
                      <GraduationCap
                        size={17}
                        className="text-cyan-400"
                      />
                    </div>

                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600">
                        Education
                      </p>

                      <h3 className="mt-0.5 font-display text-sm font-semibold text-white">
                        Academic Background
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono text-[9px] text-slate-700">
                    01
                  </span>
                </div>

                <div className="relative pl-5">
                  <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />

                  <div className="absolute -left-[3px] top-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />

                  <p className="font-display text-base font-semibold text-white">
                    Bachelor of Engineering
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    Electronics & Telecommunication Engineering
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="rounded-md border border-cyan-400/10 bg-cyan-400/[0.05] px-2 py-1 font-mono text-[9px] text-cyan-400">
                      BE
                    </span>

                    <span className="text-[10px] text-slate-700">
                      Engineering
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              whileHover={{
                y: -3,
              }}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-6 transition-all duration-300 hover:border-white/[0.1]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-slate-600">
                    Learning
                  </p>

                  <h3 className="mt-1 font-display text-sm font-semibold text-white">
                    Certifications & Training
                  </h3>
                </div>

                <span className="text-lg">📜</span>
              </div>

              <div className="space-y-0">
                {certifications.map(
                  ({ name, org, year }, index) => (
                    <motion.div
                      key={name}
                      initial={{
                        opacity: 0,
                        x: 15,
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
                        duration: 0.45,
                        delay: 0.4 + index * 0.08,
                      }}
                      className="group flex items-center justify-between gap-4 border-b border-white/[0.05] py-3 last:border-0"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <CheckCircle2
                          size={13}
                          className="mt-0.5 shrink-0 text-cyan-400/50 transition-colors group-hover:text-cyan-400"
                        />

                        <div className="min-w-0">
                          <p className="truncate text-xs font-medium text-slate-300 transition-colors group-hover:text-white">
                            {name}
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-600">
                            {org}
                          </p>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-md border border-white/[0.05] bg-white/[0.025] px-2 py-1 font-mono text-[9px] text-slate-600 transition-colors group-hover:border-cyan-400/10 group-hover:text-cyan-400">
                        {year}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            delay: 0.6,
          }}
          className="mt-16 border-t border-white/[0.05] pt-7"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-xs leading-6 text-slate-600">
              Curious by nature, focused on building useful things and always
              looking for the next problem worth solving.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400/20" />

              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-700">
                Build · Learn · Improve
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}