'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Download,
  ArrowUpRight,
} from 'lucide-react'

const links = [
  { number: '01', label: 'About', href: '#about' },
  { number: '02', label: 'Skills', href: '#skills' },
  { number: '03', label: 'Experience', href: '#experience' },
  { number: '04', label: 'Projects', href: '#projects' },
  { number: '05', label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY

      setScrolled(scrollY > 45)

      const sections = links.map((link) => link.href.slice(1))

      for (const id of [...sections].reverse()) {
        const element = document.getElementById(id)

        if (
          element &&
          scrollY >= element.offsetTop - 220
        ) {
          setActive(id)
          break
        }
      }

      if (scrollY < 300) {
        setActive('')
      }
    }

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const goHome = () => {
    setOpen(false)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Desktop navbar */}
      <motion.nav
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:px-5 ${
            scrolled
              ? 'border-white/[0.08] bg-[#07101c]/85 py-2.5 shadow-2xl backdrop-blur-2xl'
              : 'border-white/[0.04] bg-[#07101c]/35 py-3 backdrop-blur-xl'
          }`}
        >

          {/* Logo */}
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={goHome}
            className="group flex items-center gap-2"
            aria-label="Go to home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.08]">
              <span className="font-display text-sm font-bold tracking-tight text-white">
                AS
              </span>
            </div>

            <div className="hidden sm:block">
              <span className="font-display text-sm font-semibold tracking-tight text-white">
                Ashwini
              </span>

              <span className="font-mono text-xs text-cyan-400">
                .
              </span>
            </div>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const id = link.href.slice(1)
              const isActive = active === id

              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`group relative flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-white/[0.04] text-white'
                      : 'text-slate-500 hover:bg-white/[0.025] hover:text-slate-200'
                  }`}
                >
                  <span
                    className={`font-mono text-[8px] transition-colors ${
                      isActive
                        ? 'text-cyan-400'
                        : 'text-slate-700 group-hover:text-slate-500'
                    }`}
                  >
                    {link.number}
                  </span>

                  <span className="text-xs tracking-wide">
                    {link.label}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute bottom-1 left-3 right-3 h-px bg-cyan-400"
                      style={{
                        boxShadow:
                          '0 0 8px rgba(34,211,238,0.7)',
                      }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Resume */}
          <div className="hidden md:block">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-3.5 py-2 text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400 hover:text-[#040811]"
            >
              <Download size={13} />

              <span>Resume</span>

              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </div>

          {/* Mobile button */}
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:border-cyan-400/30 hover:text-cyan-400 md:hidden"
            aria-label={
              open
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={open}
          >
            {open ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}
            className="fixed left-4 right-4 top-[76px] z-40 overflow-hidden rounded-2xl border border-white/10 bg-[#07101c]/95 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="p-4">

              {/* Mobile heading */}
              <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-slate-600">
                    Navigation
                  </p>

                  <p className="mt-1 font-display text-sm text-white">
                    Explore the portfolio
                  </p>
                </div>

                <span className="font-mono text-[9px] text-cyan-400/60">
                  05 sections
                </span>
              </div>

              {/* Mobile links */}
              <div className="flex flex-col">
                {links.map((link, index) => {
                  const id = link.href.slice(1)
                  const isActive = active === id

                  return (
                    <motion.button
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.045,
                      }}
                      onClick={() => scrollTo(link.href)}
                      className={`group flex items-center justify-between border-b border-white/[0.05] py-3.5 text-left transition-colors ${
                        isActive
                          ? 'text-cyan-400'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-mono text-[9px] ${
                            isActive
                              ? 'text-cyan-400'
                              : 'text-slate-700'
                          }`}
                        >
                          {link.number}
                        </span>

                        <span className="text-sm">
                          {link.label}
                        </span>
                      </div>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                      )}
                    </motion.button>
                  )
                })}
              </div>

              {/* Mobile resume */}
              <motion.a
                href="/resume.pdf"
                download
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-xs font-semibold text-[#040811] transition-colors hover:bg-cyan-300"
              >
                <Download size={14} />
                Download Resume
                <ArrowUpRight size={13} />
              </motion.a>

              {/* Mobile footer */}
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
                  ASHWINI.DEV
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-700">
                  MERN / AI
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}