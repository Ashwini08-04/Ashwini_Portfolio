'use client'

import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  ArrowUpRight,
} from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    icon: Github,
    href: 'https://github.com/Ashwini08-04',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ashwini-sonawane-231b0637b/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:sonawaneashwini073@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollTo = (href: string) => {
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040811] to-[#02050a]" />

      <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-b border-white/5 py-20"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">

            <div className="max-w-2xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                  Available for opportunities
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Let&apos;s build something
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  {' '}meaningful.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Open to full-stack development, AI-powered applications,
                internships, and entry-level opportunities.
              </p>

            </div>

            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#040811] transition-all hover:bg-cyan-300"
            >
              Get In Touch

              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.button>

          </div>
        </motion.div>

        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-3">

          {/* Brand */}
          <div>

            <div className="font-display text-2xl font-bold">
              <span className="text-white">AS</span>
              <span className="text-cyan-400">.</span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Full-stack developer focused on building modern,
              scalable, and meaningful digital products.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-3">

              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
                >
                  <Icon size={16} />
                </motion.a>
              ))}

            </div>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Navigation
            </h4>

            <div className="grid grid-cols-2 gap-y-3">

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="group flex w-fit items-center gap-2 text-left text-sm text-slate-400 transition-colors hover:text-cyan-400"
                >
                  <span className="h-px w-3 bg-slate-700 transition-all duration-200 group-hover:w-5 group-hover:bg-cyan-400" />

                  {link.label}
                </button>
              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Contact
            </h4>

            <div className="space-y-4">

              <a
                href="mailto:sonawaneashwini073@gmail.com"
                className="group block"
              >
                <span className="text-xs text-slate-600">
                  Email
                </span>

                <span className="mt-1 block break-all text-sm text-slate-300 transition-colors group-hover:text-cyan-400">
                  sonawaneashwini073@gmail.com
                </span>
              </a>

              <a
                href="tel:+919209037865"
                className="group block"
              >
                <span className="text-xs text-slate-600">
                  Phone
                </span>

                <span className="mt-1 block text-sm text-slate-300 transition-colors group-hover:text-cyan-400">
                  +91 9209037865
                </span>
              </a>

              <div>
                <span className="text-xs text-slate-600">
                  Location
                </span>

                <p className="mt-1 text-sm text-slate-300">
                  Jalgaon, India
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 sm:flex-row">

          <p className="font-mono text-[10px] text-slate-600 sm:text-xs">
            © {new Date().getFullYear()} Ashwini Sonawane. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <span className="hidden text-[10px] text-slate-700 sm:block">
              Designed & Built with React
            </span>

            <motion.button
              onClick={scrollTop}
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 transition-all hover:bg-cyan-400/10"
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </motion.button>

          </div>

        </div>

      </div>
    </footer>
  )
}