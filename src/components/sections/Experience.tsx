'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'

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
    tech: [
      'Quality Control',
      'Process Analysis',
      'Documentation',
    ],
  },
  {
    company: 'Hitachi Astemo India Pvt. Ltd.',
    role: 'Industrial Trainee',
    period: 'Jun 2024 – Aug 2024',
    location: 'Manesar, India',
    type: 'Internship',
    color: '#a78bfa',
    highlights: [
      'Observed and contributed to automotive component testing and verification procedures',
      'Gained understanding of industry-standard quality metrics and KPI tracking',
      'Worked alongside senior engineers to understand system integration workflows',
      'Developed discipline, attention to detail, and systematic problem-solving approach',
    ],
    tech: [
      'Component Testing',
      'KPI Tracking',
      'System Integration',
    ],
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden py-20 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#080f1e]/20" />

      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-violet-600/[0.035] blur-3xl" />

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
          className="mb-10 flex items-center gap-4"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04]">
            <Briefcase
              size={17}
              className="text-cyan-400"
            />
          </div>

          <div>
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400/60">
              03 / experience
            </p>

            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Experience
            </h2>
          </div>

          <div className="ml-2 h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
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
            delay: 0.1,
          }}
          className="mb-10 max-w-2xl text-sm leading-7 text-slate-500"
        >
          Industry exposure that helped me develop a practical
          understanding of quality, process, teamwork and
          systematic problem solving.
        </motion.p>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/25 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
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
                  delay: 0.2 + index * 0.15,
                }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                }`}
              >

                {/* Timeline Dot */}
                <div
                  className="absolute left-[1px] top-7 z-20 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#040811] md:left-1/2 md:-translate-x-1/2"
                  style={{
                    backgroundColor: exp.color,
                    boxShadow: `0 0 14px ${exp.color}55`,
                  }}
                />

                {/* Card Wrapper */}
                <div
                  className={`ml-8 w-[calc(100%-2rem)] md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? 'md:pr-8'
                      : 'md:pl-8'
                  }`}
                >

                  {/* Card */}
                  <div
                    className="group relative overflow-hidden rounded-2xl border bg-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      borderColor: `${exp.color}18`,
                    }}
                  >

                    {/* Glow */}
                    <div
                      className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        backgroundColor: `${exp.color}15`,
                      }}
                    />

                    {/* Top Row */}
                    <div className="relative mb-4 flex items-start justify-between gap-4">

                      <div>
                        <span
                          className="mb-2 inline-flex rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider"
                          style={{
                            color: exp.color,
                            backgroundColor: `${exp.color}12`,
                            border: `1px solid ${exp.color}20`,
                          }}
                        >
                          {exp.type}
                        </span>

                        <h3 className="font-display text-base font-semibold leading-6 text-white md:text-lg">
                          {exp.company}
                        </h3>

                        <p
                          className="mt-1 text-xs font-medium md:text-sm"
                          style={{
                            color: exp.color,
                          }}
                        >
                          {exp.role}
                        </p>
                      </div>

                      <span
                        className="hidden font-mono text-[9px] tracking-widest md:block"
                        style={{
                          color: `${exp.color}70`,
                        }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 border-y border-white/[0.05] py-3 font-mono text-[10px] text-slate-600">

                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        {exp.period}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2.5">
                      {exp.highlights.map(
                        (highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="flex items-start gap-2.5 text-xs leading-5 text-slate-400"
                          >
                            <span
                              className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                              style={{
                                backgroundColor: exp.color,
                              }}
                            />

                            <span>
                              {highlight}
                            </span>
                          </li>
                        )
                      )}
                    </ul>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-white/[0.06] bg-black/20 px-2 py-1 font-mono text-[9px] text-slate-500 transition-colors hover:text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <div
                      className="absolute bottom-5 right-5 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                      style={{
                        color: exp.color,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </div>

                  </div>
                </div>

                {/* Empty opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />

              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
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
            duration: 0.7,
            delay: 0.7,
          }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/[0.06]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-700">
            Learn • Apply • Improve
          </span>

          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

      </div>
    </section>
  )
}