'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Linkedin, Twitter, Facebook, Instagram,
  Mail, Phone, MapPin, Globe, Send, ChevronRight,
} from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      {/* Ambient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full filter blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-900/10 rounded-full filter blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-12 gap-10 pt-16 pb-12 border-b border-white/[0.05]">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Image
                src="/anoclouddesign_logo.png"
                alt="AnoCloud Logo"
                width={120}
                height={32}
                className="object-contain object-left"
                style={{ maxWidth: '100%', height: 'auto' }}
                unoptimized
              />
            </div>
            <p className="text-slate-400 text-[14px] leading-relaxed mb-6 max-w-xs">
              Empowering enterprises with AI, cloud, and security solutions.
              Building the digital infrastructure of tomorrow, today.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mb-8">
              {[
                { icon: Linkedin, href: 'https://linkedin.com/company/anocloud', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com/anocloud', label: 'Twitter' },
                { icon: Facebook, href: 'https://facebook.com/anocloud', label: 'Facebook' },
                { icon: Instagram, href: 'https://instagram.com/anocloud', label: 'Instagram' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/[0.07] text-slate-400 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,185,129,0.3)]"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.18em] mb-3">
                Stay in the Loop
              </p>
              {subscribed ? (
                <p className="text-emerald-400 text-sm font-semibold">✓ You&apos;re subscribed!</p>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-[13px] bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <button
                    onClick={() => { if (email) setSubscribed(true) }}
                    aria-label="Subscribe"
                    className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-all duration-300 hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase text-[10px] tracking-[0.22em]">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Software Dev', href: '/services' },
                { label: 'Cloud Infra', href: '/services' },
                { label: 'Cyber Security', href: '/services' },
                { label: 'AI Development', href: '/services' },
                { label: 'Data Analytics', href: '/services' },
                { label: 'Prototype & MVP', href: '/services' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-slate-400 text-[13.5px] hover:text-emerald-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase text-[10px] tracking-[0.22em]">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Partners', href: '/partners' },
                { label: 'Industries', href: '/industry' },
                { label: 'Blog', href: '/resources/blog' },
                { label: 'Resources', href: '/resources' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-slate-400 text-[13.5px] hover:text-emerald-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-white mb-6 uppercase text-[10px] tracking-[0.22em]">Get In Touch</h4>
            <ul className="space-y-4 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'hello@anocloud.in', href: 'mailto:hello@anocloud.in' },
                { icon: Phone, label: 'Phone', value: '+91-8674864189 / +91-6366338242', href: 'tel:+918674864189' },
                { icon: MapPin, label: 'Office', value: 'C/67 Vijay Nagar, Jamshedpur 831009', href: '#' },
                { icon: Globe, label: 'Website', value: 'www.anocloud.in', href: 'https://www.anocloud.in' },
              ].map((info) => (
                <li key={info.label}>
                  <a href={info.href} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-300">
                      <info.icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">{info.label}</p>
                      <p className="text-[13px] text-slate-300 group-hover:text-emerald-400 transition-colors">{info.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Compliance badges */}
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.18em] mb-3">Compliance</p>
              <div className="flex flex-wrap gap-2">
                {['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA'].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 text-emerald-400/70 bg-emerald-500/5 tracking-widest"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} AnoCloud Technologies Pvt. Ltd. All rights reserved. Built with ❤️ in India.
          </p>
          <div className="flex gap-6 text-slate-500 text-xs">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
              { label: 'Sitemap', href: '/sitemap.xml' },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-slate-300 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}