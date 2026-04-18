'use client'

import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#040811]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated logo */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="w-24 h-24 rounded-2xl border border-cyan-400/30 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-600/10" />
            <span className="font-display text-3xl font-bold text-cyan-400">AS</span>
            {/* Orbiting dot */}
            <motion.div
              className="absolute w-3 h-3 bg-cyan-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{ top: -4, left: '50%', marginLeft: -6, transformOrigin: '6px 52px' }}
            />
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="font-mono text-sm text-cyan-400/60 tracking-[0.3em] uppercase">
            Initializing Portfolio
          </p>
          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-violet-600 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Background glow */}
        <div className="absolute inset-0 -z-10 blur-3xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full" />
        </div>
      </div>
    </motion.div>
  )
}
