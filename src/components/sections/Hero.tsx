'use client'

import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  BrainCircuit,
  Layers3,
  Sparkles,
} from 'lucide-react'

const stack = [
  { number: '01', name: 'React.js', icon: Code2 },
  { number: '02', name: 'Node.js', icon: Layers3 },
  { number: '03', name: 'MongoDB', icon: Database },
  { number: '04', name: 'AI Integration', icon: BrainCircuit },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#040811]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="absolute left-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.055] blur-[140px]" />

        <div className="absolute bottom-[-15%] right-[-5%] h-[550px] w-[550px] rounded-full bg-violet-500/[0.06] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-28 lg:px-12 xl:px-16">

        {/* Editorial number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute left-6 top-32 hidden lg:block"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400/60">
              01
            </span>

            <span className="h-px w-8 bg-cyan-400/20" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">
              Introduction
            </span>
          </div>
        </motion.div>

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.12fr_0.88fr]">

          {/* Main introduction */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <motion.div variants={item}>
              <div className="mb-7 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-cyan-400/50" />

              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                Creative Developer
              </p>
            </motion.div>

            <motion.h1
  variants={item}
  className="font-display text-[3.4rem] font-medium leading-[0.94] tracking-[-0.045em] text-white sm:text-[4.3rem] md:text-[5rem] lg:text-[5.6rem] xl:text-[6rem]"
>
  Ashwini
  <br />

  <span className="relative inline-block">
    <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
      Sonawane
    </span>

    <span className="absolute -right-3 top-1 text-lg font-normal tracking-normal text-cyan-400 sm:text-xl">
      .
    </span>
  </span>
</motion.h1>
            <motion.div
              variants={item}
              className="mt-8 flex max-w-2xl items-start gap-5"
            >
              <div className="mt-2 hidden h-14 w-px bg-gradient-to-b from-cyan-400 to-transparent sm:block" />

              <div>
                <p className="text-xl leading-relaxed text-slate-200 sm:text-2xl">
                  I turn ideas into{' '}
                  <span className="text-cyan-400">
                    digital experiences.
                  </span>
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Full-stack developer focused on building thoughtful,
                  scalable and intelligent web applications with modern
                  technologies.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#projects')}
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#040811] transition-all hover:bg-cyan-300"
              >
                Explore My Work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-slate-300 backdrop-blur-md transition-all hover:border-cyan-400/30 hover:text-white"
              >
                Resume

                <span className="text-slate-600 transition-colors group-hover:text-cyan-400">
                  ↓
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-3"
            >
              <a
                href="https://github.com/Ashwini08-04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-white"
              >
                <Github size={15} />
              </a>

              <a
                href="https://www.linkedin.com/in/ashwini-sonawane-231b0637b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-white"
              >
                <Linkedin size={15} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sonawaneashwini0406@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:text-white"
              >
                <Mail size={15} />
              </a>

              <span className="ml-2 h-px w-12 bg-white/10" />

              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
                Jalgaon · India
              </span>
            </motion.div>
          </motion.div>

          {/* Creative developer card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-full max-w-[440px]">

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 0.3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101c]/80 shadow-2xl backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.035] via-transparent to-violet-500/[0.045]" />

                <div className="relative p-7">

                  {/* Card header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
                        Digital Studio
                      </p>

                      <p className="mt-1 font-display text-sm font-medium text-white">
                        AS / 01
                      </p>
                    </div>

                    <Sparkles
                      size={17}
                      className="text-cyan-400/70"
                    />
                  </div>

                  {/* Monogram */}
                  <div className="relative mt-8 flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-black/20">
                    <div className="absolute h-40 w-40 rounded-full border border-cyan-400/10" />

                    <div className="absolute h-28 w-28 rounded-full border border-dashed border-cyan-400/20" />

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute h-32 w-32 rounded-full border border-transparent border-t-cyan-400/50 border-r-violet-400/30"
                    />

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/20 bg-[#07101c] shadow-[0_0_45px_rgba(34,211,238,0.08)]">
                      <span className="font-display text-4xl font-semibold tracking-tight text-white">
                        AS
                      </span>

                      <span className="absolute -right-1 top-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    </div>

                    <span className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-[0.25em] text-slate-700">
                      Creative / Digital
                    </span>

                    <span className="absolute right-4 top-4 font-mono text-[8px] text-slate-700">
                      2026
                    </span>
                  </div>

                  {/* Identity */}
                  <div className="mt-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-display text-xl font-semibold text-white">
                          Full-Stack
                        </p>

                        <p className="font-display text-xl font-semibold text-cyan-400">
                          Developer
                        </p>
                      </div>

                      <p className="font-mono text-[9px] text-slate-600">
                        / 04.0
                      </p>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="mt-6 border-t border-white/5 pt-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                        Core Stack
                      </span>

                      <span className="text-[9px] text-slate-700">
                        04 technologies
                      </span>
                    </div>

                    <div className="space-y-1">
                      {stack.map((tech) => {
                        const Icon = tech.icon

                        return (
                          <motion.div
                            key={tech.name}
                            whileHover={{ x: 5 }}
                            className="group flex items-center justify-between rounded-lg px-2 py-2.5 transition-colors hover:bg-white/[0.025]"
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-[9px] text-slate-700">
                                {tech.number}
                              </span>

                              <Icon
                                size={14}
                                className="text-cyan-400/70 transition-colors group-hover:text-cyan-400"
                              />

                              <span className="text-xs text-slate-400 transition-colors group-hover:text-white">
                                {tech.name}
                              </span>
                            </div>

                            <ArrowUpRight
                              size={12}
                              className="text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                            />
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Bottom stats */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                      <p className="font-mono text-[8px] uppercase tracking-wider text-slate-600">
                        Projects
                      </p>

                      <p className="mt-1 font-display text-lg font-semibold text-white">
                        03+
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.02] p-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        <p className="font-mono text-[8px] uppercase tracking-wider text-slate-600">
                          Status
                        </p>
                      </div>

                      <p className="mt-1 text-xs font-medium text-emerald-400">
                        Open to Work
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating label */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-6 top-20 rounded-xl border border-cyan-400/15 bg-[#08121e]/95 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
                  Focus
                </p>

                <p className="mt-1 text-xs font-medium text-cyan-400">
                  Web × AI
                </p>
              </motion.div>

              {/* Floating index */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-5 -left-6 rounded-xl border border-white/10 bg-[#08121e]/95 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
                  Currently
                </p>

                <p className="mt-1 flex items-center gap-2 text-xs font-medium text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Building
                </p>
              </motion.div>

              <div className="absolute -inset-12 -z-10 rounded-full bg-cyan-400/[0.035] blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-6 right-6 flex items-center justify-between lg:left-12 lg:right-12 xl:left-16 xl:right-16"
        >
          <div className="hidden items-center gap-3 md:flex">
            <span className="font-mono text-[9px] text-slate-700">
              © 2026
            </span>

            <span className="h-px w-8 bg-white/5" />

            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-700">
              Ashwini Sonawane
            </span>
          </div>

          <button
            onClick={() => scrollTo('#about')}
            className="group mx-auto flex flex-col items-center gap-2 text-slate-600 transition-colors hover:text-cyan-400 md:mx-0"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]">
              Scroll to explore
            </span>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </button>

          <div className="hidden md:block">
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-700">
              MERN / AI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}