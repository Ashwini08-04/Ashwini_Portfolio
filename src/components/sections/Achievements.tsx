'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Trophy,
  Code2,
  Building2,
  Lightbulb,
  ArrowUpRight,
  Check,
} from 'lucide-react'

const achievements = [
  {
    number: '01',
    icon: Building2,
    title: 'Industrial Training',
    desc: 'Completed industrial training at Dhoot Automotive Systems and Hitachi Astemo, gaining practical exposure to automotive engineering and quality processes.',
    color: '#22d3ee',
    label: 'Industry Exposure',
  },
  {
    number: '02',
    icon: Code2,
    title: 'Full-Stack Projects',
    desc: 'Built end-to-end applications covering responsive interfaces, backend APIs, database integration, authentication and AI-powered features.',
    color: '#a78bfa',
    label: 'Project Experience',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Problem Solving',
    desc: 'Enjoy breaking complex requirements into practical solutions and continuously improving application functionality and user experience.',
    color: '#f59e0b',
    label: 'Core Strength',
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Engineering Mindset',
    desc: 'Developed a structured approach to quality, documentation, teamwork and systematic problem solving through academic and industrial exposure.',
    color: '#ec4899',
    label: 'Professional Growth',
  },
]

const strengths = [
  'End-to-end full-stack development',
  'Hands-on industrial exposure',
  'Strong problem-solving mindset',
  'Clean and maintainable code',
  'Fast learner & technology adaptable',
]

export default function Achievements() {
  const ref = useRef<HTMLElement>(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#080f1e]/20" />

      <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />

      <div className="absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-violet-500/[0.025] blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
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
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-[9px] tracking-[0.3em] text-cyan-400/50">
              05
            </span>

            <div className="h-px w-8 bg-cyan-400/30" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-cyan-400/70">
              Achievements
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
                Highlights of my
                <br />
                <span className="text-slate-500">
                  journey so far.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                A few milestones, experiences and strengths that
                represent my journey from academic learning to
                practical software development.
              </p>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                Growth in progress
              </span>
            </div>
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map(
            (
              {
                number,
                icon: Icon,
                title,
                desc,
                color,
                label,
              },
              index
            ) => (
              <motion.article
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
                  duration: 0.6,
                  delay: 0.12 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.035] hover:shadow-2xl hover:shadow-black/20"
              >
                {/* Accent line */}
                <div
                  className="absolute left-0 right-0 top-0 h-px opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  }}
                />

                {/* Ambient glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    backgroundColor: `${color}25`,
                  }}
                />

                {/* Top row */}
                <div className="relative flex items-center justify-between">
                  <span
                    className="font-mono text-[9px] tracking-[0.25em]"
                    style={{
                      color: `${color}80`,
                    }}
                  >
                    {number}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="opacity-30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    style={{
                      color,
                    }}
                  />
                </div>

                {/* Icon */}
                <div className="relative mt-8">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 group-hover:scale-105"
                    style={{
                      borderColor: `${color}28`,
                      backgroundColor: `${color}0d`,
                      boxShadow: `0 0 0 transparent`,
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color,
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-6 flex flex-1 flex-col">
                  <p
                    className="mb-2 font-mono text-[8px] uppercase tracking-[0.25em]"
                    style={{
                      color: `${color}90`,
                    }}
                  >
                    {label}
                  </p>

                  <h3 className="font-display text-lg font-semibold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    {title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="relative mt-5 h-px w-0 transition-all duration-500 group-hover:w-full">
                  <div
                    className="h-full"
                    style={{
                      background: color,
                      boxShadow: `0 0 10px ${color}`,
                    }}
                  />
                </div>
              </motion.article>
            )
          )}
        </div>

        {/* What I Bring */}
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
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mt-5 overflow-hidden rounded-[24px] border border-cyan-400/10 bg-cyan-400/[0.015] p-6 md:p-7"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.04] blur-[80px]" />

          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            {/* Left */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400/60">
                  What I bring
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Ready to build,
                <br />
                <span className="text-slate-500">
                  learn & improve.
                </span>
              </h3>

              <p className="mt-3 max-w-md text-xs leading-6 text-slate-500 md:text-sm">
                I combine technical learning with practical
                project experience to build useful, maintainable
                and thoughtful applications.
              </p>
            </div>

            {/* Strengths */}
            <div className="grid gap-2.5 sm:grid-cols-2">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength}
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
                    delay: 0.65 + index * 0.07,
                  }}
                  className="group/strength flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3.5 py-3 transition-all duration-300 hover:border-cyan-400/15 hover:bg-white/[0.04]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.05]">
                    <Check
                      size={10}
                      className="text-cyan-400"
                    />
                  </span>

                  <span className="text-xs text-slate-400 transition-colors duration-300 group-hover/strength:text-slate-200">
                    {strength}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
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
            duration: 0.7,
            delay: 0.9,
          }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/[0.06]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-700">
            Build • Learn • Grow
          </span>

          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>
      </div>
    </section>
  )
}