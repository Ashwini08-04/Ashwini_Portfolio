'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const statuses = [
  'Initializing interface',
  'Loading experience',
  'Connecting components',
  'Almost ready',
]

export default function Preloader() {
  const [statusIndex, setStatusIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#040811] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.65,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.055] blur-[140px]"
        animate={{
          scale: [0.9, 1.08, 0.9],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Top left */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="absolute left-6 top-6 md:left-10 md:top-8"
      >
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500">
            Portfolio / 2026
          </span>
        </div>
      </motion.div>

      {/* Top right */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="absolute right-6 top-6 md:right-10 md:top-8"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
          01 / 01
        </span>
      </motion.div>

      {/* Main */}
      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="flex w-full max-w-xl flex-col items-center">
          {/* Monogram */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Outer ring */}
            <motion.div
              className="absolute -inset-5 rounded-full border border-white/[0.045]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Orbit dot */}
            <motion.div
              className="absolute -inset-5"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            </motion.div>

            {/* Logo */}
            <div className="relative flex h-24 w-24 items-center justify-center rounded-[26px] border border-white/[0.1] bg-white/[0.025] shadow-2xl shadow-cyan-500/[0.04] backdrop-blur-xl md:h-28 md:w-28">
              <div className="absolute inset-[1px] rounded-[25px] bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-violet-500/[0.08]" />

              <span className="relative font-display text-3xl font-semibold tracking-[-0.08em] text-white md:text-4xl">
                A<span className="text-cyan-400">S</span>
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 text-center"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-cyan-400/60">
              Creative Developer
            </p>

            <h1 className="mt-3 font-display text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
              Ashwini Sonawane
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: '100%',
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="mt-8 h-px max-w-[280px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
          />

          {/* Status */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.5,
            }}
            className="mt-7 flex w-full max-w-[280px] flex-col items-center"
          >
            <div className="flex w-full items-center justify-between">
              <motion.span
                key={statuses[statusIndex]}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600"
              >
                {statuses[statusIndex]}
              </motion.span>

              <span className="font-mono text-[9px] text-slate-700">
                100%
              </span>
            </div>

            {/* Progress */}
            <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 2,
                  ease: [0.65, 0, 0.35, 1],
                }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-violet-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
          duration: 0.5,
        }}
        className="absolute bottom-6 left-6 md:bottom-8 md:left-10"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-700">
          Building digital experiences
        </span>
      </motion.div>

      {/* Bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
          duration: 0.5,
        }}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-10"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-700">
          Jalgaon · India
        </span>
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-white/[0.06]" />

      <div className="absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-t from-transparent to-white/[0.06]" />
    </motion.div>
  )
}