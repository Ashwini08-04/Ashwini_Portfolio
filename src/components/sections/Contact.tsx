'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = async () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1800))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080f1e]/60 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-10 h-10 rounded-lg glass border border-cyan-400/20 flex items-center justify-center">
            <Mail size={18} className="text-cyan-400" />
          </div>
          <div>
            <p className="font-mono text-xs text-cyan-400/60 tracking-widest uppercase mb-1">06 / contact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Let&apos;s Connect</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/20 to-transparent ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-400/20 bg-green-400/5 text-green-400 text-xs font-mono mb-4">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Available for opportunities
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Let&apos;s Build Something Useful</h3>
              <p className="text-slate-400 leading-relaxed">
                Open to data analytics, full-stack development, AI/ML projects, and internship or entry-level roles.
                I&apos;d love to connect if you&apos;re working on something impactful.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-3">
              {[
                { icon: Mail, label: 'sonawaneashwini073@gmail.com', href: 'mailto:sonawaneashwini073@gmail.com' },
                { icon: Phone, label: '+91 9209037865', href: 'tel:+919209037865' },
                { icon: MapPin, label: 'Jalgaon, India', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-cyan-400/20 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 bg-cyan-400/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                    <Icon size={16} className="text-cyan-400" />
                  </div>
                  <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{label}</span>
                </a>
              ))}
            </div>

            {/* Social buttons */}
            <div className="flex gap-3">
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-cyan-400/30 text-slate-300 hover:text-white text-sm transition-all duration-200"
                >
                  <Icon size={15} /> {label}
                </motion.a>
              ))}
            </div>

            {/* Note */}
            <div className="glass rounded-xl p-4 border border-cyan-400/10 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                I respond to all messages within 24 hours. Feel free to reach out for collaborations,
                job opportunities, or just a friendly chat about tech!
              </p>
            </div>
          </motion.div>

          {/* Right – Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-12 border border-green-400/20 flex flex-col items-center text-center gap-5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  <CheckCircle size={56} className="text-green-400" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-neon px-6 py-2.5 rounded-xl text-sm font-semibold mt-2"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <div className="glass rounded-2xl p-8 border border-white/5 space-y-5">
                <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>

                {/* Name & Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={`w-full bg-[#0d1829] border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={`w-full bg-[#0d1829] border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Hello Ashwini, I'd like to discuss..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className={`w-full bg-[#0d1829] border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10'}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-cyan-400 text-[#040811] py-3.5 rounded-xl font-semibold text-sm hover:bg-cyan-300 transition-all disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-[#040811]/30 border-t-[#040811] rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
