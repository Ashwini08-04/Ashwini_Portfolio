'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sonawaneashwini073@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030609] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display text-2xl font-bold">
              <span className="text-white">AS</span>
              <span className="text-cyan-400">.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building scalable, modern web applications with passion and precision.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-400/20 transition-all"
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-slate-700 group-hover:bg-cyan-400 group-hover:w-6 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:sonawaneashwini073@gmail.com" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                sonawaneashwini073@gmail.com
              </a>
              <a href="tel:+919209037865" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                +91 9209037865
              </a>
              <p className="text-slate-500 text-sm">Jalgaon, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-mono">
            © {new Date().getFullYear()} Ashwini Sonawane. Crafted with ❤️ &amp; React.
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/10 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
