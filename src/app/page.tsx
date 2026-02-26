'use client'
import { useState, ChangeEvent, MouseEvent, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { CheckCircle, ArrowRight, Sparkles, Shield, Zap, TrendingUp, MessageCircle, Lightbulb, Database, ChevronRight, PlayCircle, Building2, Stethoscope, Landmark, ShoppingCart, Star, Mail, Phone, MapPin, Send, Clock, Twitter, Linkedin, Instagram, Globe } from 'lucide-react'

interface Partner {
  name: string;
  src: string;
}

// ══════════════════════════════════════════════════════════════════════════════
// INTRO ANIMATION
// ══════════════════════════════════════════════════════════════════════════════
function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    setSize()
    window.addEventListener('resize', setSize)

    const TUBE_SEGS = 30, RING_SEGS = 60
    type NDot = { nu: number; nv: number; cosV: number; sinV: number; cosU: number; sinU: number }
    const ndots: NDot[] = []
    for (let i = 0; i < TUBE_SEGS; i++) {
      for (let j = 0; j < RING_SEGS; j++) {
        const u = (j / RING_SEGS) * Math.PI * 2, v = (i / TUBE_SEGS) * Math.PI * 2
        ndots.push({ nu: u, nv: v, cosV: Math.cos(v), sinV: Math.sin(v), cosU: Math.cos(u), sinU: Math.sin(u) })
      }
    }

    const project = (nd: NDot, R: number, r: number, cx: number, cy: number, rotX: number, rotZ: number) => {
      const x = (R + r * nd.cosV) * nd.cosU, y = (R + r * nd.cosV) * nd.sinU, z = r * nd.sinV
      const cX = Math.cos(rotX), sX = Math.sin(rotX), y1 = y * cX - z * sX, z1 = y * sX + z * cX
      const cZ = Math.cos(rotZ), sZ = Math.sin(rotZ), x2 = x * cZ - y1 * sZ, y2 = x * sZ + y1 * cZ
      const fov = Math.max(canvas.width, canvas.height) * 3.5, sc = fov / (fov + z1 + R * 0.6)
      return { px: cx + x2 * sc, py: cy + y2 * sc, scale: sc, zf: z1, depth: (z1 + R + r) / ((R + r) * 2) }
    }

    const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
    const T1 = 300, T2 = 1700, T3 = 2200, T4 = 3000
    let startTs = 0; const TILT = -0.42; let rotZ = 0

    const drawFinal = (ts: number) => {
      if (!startTs) startTs = ts
      const t = ts - startTs
      if (t > T4) { onComplete(); return }
      const W = canvas.width, H = canvas.height, cx = W * 0.5, cy = H * 0.5, diag = Math.hypot(cx, cy)
      const growP = t < T1 ? 0 : t < T2 ? (t - T1) / (T2 - T1) : 1
      rotZ += 0.012 + growP * 0.022
      const size = t < T1 ? 0 : t < T2 ? easeInOutCubic((t - T1) / (T2 - T1)) : 1
      const opacity = t < T1 ? easeOutExpo(t / T1) : t > T3 ? 1 - easeOutQuart((t - T3) / (T4 - T3)) : 1
      const seedR = Math.min(W, H) * 0.032, seedr = seedR * 0.5, fullR = diag * 0.748, fullr = diag * 0.374
      const R = seedR + (fullR - seedR) * size, r = seedr + (fullr - seedr) * size
      ctx.clearRect(0, 0, W, H); ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, W, H)
      const pts = ndots.map((nd, idx) => ({ idx, nd, ...project(nd, R, r, cx, cy, TILT, rotZ) }))
      pts.sort((a, b) => a.zf - b.zf)
      const baseDotR = Math.max(1.8, R * 0.028)
      ctx.save(); ctx.globalAlpha = opacity
      for (const p of pts) {
        const outerFace = (p.nd.cosV + 1) / 2
        if (outerFace < 0.07) continue
        const lightDir = p.depth * 0.55 + outerFace * 0.45, alpha = Math.pow(lightDir, 0.65) * (0.3 + outerFace * 0.7)
        const brightness = 0.15 + lightDir * 0.85
        if (p.depth > 0.58 && outerFace > 0.45) { ctx.shadowColor = `rgba(16,185,129,${alpha * 0.30})`; ctx.shadowBlur = baseDotR * p.scale * 2.2 } else { ctx.shadowBlur = 0 }
        ctx.fillStyle = `rgba(${Math.round(4 + brightness * 12)},${Math.round(55 + brightness * 130)},${Math.round(25 + brightness * 105)},${alpha})`
        ctx.beginPath(); ctx.arc(p.px, p.py, Math.max(0.9, baseDotR * p.scale * (0.55 + p.depth * 0.55)), 0, Math.PI * 2); ctx.fill()
      }
      ctx.shadowBlur = 0; ctx.restore()
      animRef.current = requestAnimationFrame(drawFinal)
    }
    animRef.current = requestAnimationFrame(drawFinal)
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', setSize) }
  }, [onComplete])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, background: '#ffffff', overflow: 'hidden', touchAction: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════════════════════
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCounter({ num, label }: { num: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const numeric = parseInt(num.replace(/\D/g, ''))
  const suffix = num.replace(/[0-9]/g, '')
  const count = useCountUp(numeric, 1800, started)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="stat-card text-center p-8 rounded-[2rem] border border-slate-100 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-transparent to-teal-50/0 group-hover:from-emerald-50/60 group-hover:to-teal-50/40 transition-all duration-700 rounded-[2rem]"></div>
      <div className="relative z-10">
        <div className="text-5xl lg:text-6xl font-black mb-2 text-slate-900 tracking-tight font-display">{started ? count : 0}{suffix}</div>
        <p className="text-emerald-600 font-bold uppercase tracking-[0.18em] text-[10px]">{label}</p>
      </div>
    </div>
  )
}

const LogoCard = ({ partner }: { partner: Partner }) => {
  const [hasError, setHasError] = useState(false)
  if (hasError) {
    return (
      <div className="flex items-center justify-center h-12 px-5 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all duration-300 group">
        <span className="text-[11px] font-bold text-slate-600 group-hover:text-emerald-700 tracking-tight whitespace-nowrap transition-colors">{partner.name}</span>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center w-36 h-14 relative group transition-all duration-300 hover:scale-110">
      <Image src={partner.src} alt={partner.name} fill className="object-contain" onError={() => setHasError(true)} unoptimized />
    </div>
  )
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms` }}>
      {children}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ══════════════════════════════════════════════════════════════════════════════
export default function HomePage() {
  const [introVisible, setIntroVisible] = useState(true)
  const [pageVisible, setPageVisible] = useState(false)
  const handleIntroComplete = useCallback(() => { setPageVisible(true); setTimeout(() => setIntroVisible(false), 300) }, [])

  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [aboutImgSrc, setAboutImgSrc] = useState("/2149160928.png")
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [cursorHover, setCursorHover] = useState(false)

  useEffect(() => {
    let rafId: number
    const move = (e: globalThis.MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY })
      })
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    const els = document.querySelectorAll('a, button, [data-hover]')
    const on = () => setCursorHover(true), off = () => setCursorHover(false)
    els.forEach(el => { el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off) })
    return () => els.forEach(el => { el.removeEventListener('mouseenter', on); el.removeEventListener('mouseleave', off) })
  }, [])

  const partnerCategories = [
    {
      title: "Global & Sovereign Cloud Infrastructure", partners: [
        { name: 'AWS', src: '/partners/aws.png' }, { name: 'Google Cloud', src: '/partners/google.webp' },
        { name: 'Microsoft Azure', src: '/partners/azure.png' }, { name: 'Akamai', src: '/partners/akamai.png' },
        { name: 'E2E Cloud', src: '/partners/E2E.png' }, { name: 'GPU AS A SERVICE', src: '/partners/GPU AS A SERVICE.png' },
        { name: 'neevcloud', src: '/partners/Neev-Cloud-Logo.png' }
      ]
    },
    {
      title: "The AI & GPU Powerhouse", partners: [
        { name: 'ElevenLabs', src: '/partners/elevenlabs.png' }, { name: 'Databricks', src: '/partners/databricks.png' },
        { name: 'Podstack', src: '/partners/GPU AS A SERVICE.png' }, { name: 'Snowflake', src: '/partners/snowflake.png' }
      ]
    },
    {
      title: "Enterprise Security & Compliance", partners: [
        { name: 'Sophos', src: '/partners/sophos-logo.png' }, { name: 'Cybercube', src: '/partners/cybercube-logo.png' },
        { name: 'fortifyroot', src: '/partners/fortifyroot.jpg' }, { name: 'Norton', src: '/partners/norton-logo.png' }
      ]
    },
    {
      title: "Modern Workplace & Productivity", partners: [
        { name: 'Google Workspace', src: '/partners/google-workspace-logo.webp' },
        { name: 'Microsoft 365', src: '/partners/microsoft-365-logo.png' },
        { name: 'Adobe Creative Cloud', src: '/partners/adobe-creative-cloud-logo.png' }
      ]
    },
    {
      title: "Business Operations & FinOps", partners: [
        { name: 'Aquila Clouds', src: '/partners/aquila-clouds-logo.jpg' }, { name: 'Razorpay', src: '/partners/razorpay-logo.webp' },
        { name: 'PhonePe', src: '/partners/phonepe-logo.webp' }, { name: 'Aplos', src: '/partners/aplos-logo.png' },
        { name: 'Raisely', src: '/partners/raisely-logo.png' }, { name: 'Keela', src: '/partners/keela-logo.png' }
      ]
    },
    {
      title: "Strategic Ecosystem & Managed Services", partners: [
        { name: 'Redington', src: '/partners/redington.png' }, { name: 'iValue', src: '/partners/iValue.avif' },
        { name: 'i2k2', src: '/partners/i2k2-logo.jpg' }, { name: 'Emergent', src: '/partners/emergent-logo.jpg' }
      ]
    }
  ]

  const clients = [
    { name: 'Sumo Save', logo: '/partners/Sumo Save.png', service: 'Delivery Management', country: 'India', color: '#c53030', url: 'https://sumosave.com' },
    { name: 'Lumov', logo: '/partners/lumov-health.jpg', service: 'Google Workspace', country: 'India', color: '#c05621', url: 'https://lumov.com' },
    { name: 'MP Government', logo: '/partners/mp.png', service: 'Project Management', country: 'India', color: '#92660a', url: 'https://mp.gov.in' },
    { name: 'Aspen Surgical', logo: '/partners/Aspen Surgical.png', service: 'Inventory Management', country: 'USA', color: '#9b2335', url: 'https://aspensurgical.com' },
    { name: 'Conninter', logo: '/partners/Conninter.png', service: 'Healthcare Community', country: 'India', color: '#1a4b8c', url: 'https://conninter.com' },
    { name: 'Kaushalam Balam', logo: '/partners/narayan.jpg', service: 'Digital Transformation', country: 'India', color: '#276749', url: 'https://kaushalambalam.in' },
    { name: 'Podstack', logo: '/partners/GPU AS A SERVICE.png', service: 'GPU as a Service', country: 'India', color: '#b7440a', url: 'https://podstack.ai' },
    { name: 'Pixorar', logo: '/partners/Pixorar.png', service: 'Workspace', country: 'USA', color: '#2d3748', url: 'https://pixorar.com' },
  ]

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const allPartners = partnerCategories.flatMap(c => c.partners)

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        * { cursor: none !important; }
        .font-display { font-family: 'Sora', system-ui, sans-serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }

        .cursor-dot { position:fixed; top:0; left:0; pointer-events:none; z-index:99999; width:10px; height:10px; background:#10b981; border-radius:50%; will-change:transform; transition:width 0.25s,height 0.25s; }
        .cursor-ring { position:fixed; top:0; left:0; pointer-events:none; z-index:99998; width:36px; height:36px; border:1.5px solid rgba(16,185,129,0.45); border-radius:50%; will-change:transform; transition:width 0.35s cubic-bezier(.25,.8,.25,1),height 0.35s cubic-bezier(.25,.8,.25,1),border-color 0.35s; }
        .cursor-hover .cursor-dot { width:16px; height:16px; mix-blend-mode:multiply; }
        .cursor-hover .cursor-ring { width:56px; height:56px; border-color:rgba(16,185,129,0.7); }

        .noise-overlay { position:absolute; inset:0; pointer-events:none; z-index:1; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"); background-size:160px; mix-blend-mode:overlay; }

        @keyframes mesh-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .hero-mesh { background:linear-gradient(135deg,#f0fdf9 0%,#ecfdf5 20%,#f8fafc 40%,#f0fdfa 60%,#ecfdf5 80%,#f8fafc 100%); background-size:400% 400%; animation:mesh-shift 12s ease infinite; }

        .orb { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; animation:orb-float 9s ease-in-out infinite; }
        @keyframes orb-float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-24px) scale(1.04)} }

        @keyframes badge-float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
        .badge-float-1 { animation:badge-float 7s ease-in-out infinite; }
        .badge-float-2 { animation:badge-float 7s ease-in-out 3.5s infinite; }

        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-track { display:flex; width:max-content; animation:marquee 45s linear infinite; }
        .marquee-track:hover { animation-play-state:paused; }
        .marquee-wrap { overflow:hidden; mask-image:linear-gradient(to right,transparent 0%,black 6%,black 94%,transparent 100%); }

        /* ══ BUTTONS ══ */
        .btn-connect {
          position:relative; overflow:hidden;
          background:linear-gradient(135deg,#059669 0%,#10b981 50%,#34d399 100%);
          background-size:200% 200%; animation:btn-grad 3s ease infinite;
          box-shadow:0 8px 28px rgba(16,185,129,0.38);
        }
        @keyframes btn-grad { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .btn-connect::after { content:''; position:absolute; top:-50%; left:-60%; width:40%; height:200%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent); transform:skewX(-20deg); transition:left 0.55s ease; }
        .btn-connect:hover::after { left:130%; }
        .btn-connect:hover { box-shadow:0 14px 42px rgba(16,185,129,0.52); }

        .btn-demo {
          background:transparent; border:2px solid rgba(16,185,129,0.45); color:#059669;
          transition:all 0.3s ease;
        }
        .btn-demo:hover { background:rgba(16,185,129,0.07); border-color:#10b981; color:#047857; box-shadow:0 6px 20px rgba(16,185,129,0.18); }

        .btn-primary { position:relative; overflow:hidden; background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%); }
        .btn-primary::after { content:''; position:absolute; top:-50%; left:-60%; width:40%; height:200%; background:linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent); transform:skewX(-20deg); transition:left 0.6s ease; }
        .btn-primary:hover::after { left:130%; }

        /* ══ SERVICE CARDS ══ */
        .service-card { position:relative; background:#0A1A22; border-radius:2rem; overflow:hidden; transition:transform 0.45s cubic-bezier(.25,.8,.25,1),box-shadow 0.45s; }
        .service-card::before { content:''; position:absolute; inset:-2px; border-radius:2.15rem; z-index:0; background:conic-gradient(from 0deg,transparent 0%,transparent 70%,#10b981 80%,#34d399 90%,transparent 100%); opacity:0; transition:opacity 0.5s; animation:border-spin 4s linear infinite paused; }
        .service-card:hover::before { opacity:1; animation-play-state:running; }
        @keyframes border-spin { to{transform:rotate(360deg)} }
        .service-card::after { content:''; position:absolute; inset:2px; border-radius:calc(2rem - 2px); background:#0A1A22; z-index:1; }
        .service-card .card-content { position:relative; z-index:2; }
        .service-card:hover { transform:translateY(-6px); box-shadow:0 30px 60px rgba(0,0,0,0.25); }

        /* ══ CLIENT CARDS — light emerald glow on hover ══ */
        .client-card { background:#ffffff; border:2px solid #e2e8f0; border-radius:16px; overflow:hidden; transition:all 0.3s cubic-bezier(.25,.8,.25,1); display:flex; flex-direction:column; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
        .client-card:hover { border-color:#6ee7b7; box-shadow:0 0 0 4px rgba(110,231,183,0.2), 0 0 24px rgba(16,185,129,0.18), 0 12px 32px rgba(0,0,0,0.08); transform:translateY(-4px); }
        .client-logo-wrap { position:relative; width:100%; height:160px; background:#f8fafc; display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .client-service-bar { padding:12px 14px 6px; font-size:11px; font-weight:800; color:#fff; text-transform:uppercase; letter-spacing:0.08em; line-height:1.3; font-family:'Sora',system-ui,sans-serif; text-align:center; }
        .client-country { padding:0 14px 12px; font-size:12px; font-weight:500; color:rgba(255,255,255,0.85); font-family:'DM Sans',system-ui,sans-serif; text-align:center; }

        /* ══ PROCESS / HOW WE WORK ══ */
        .process-card { position:relative; background:white; padding:2.5rem; border-radius:2rem; border:1px solid #f1f5f9; box-shadow:0 2px 16px rgba(0,0,0,0.04); overflow:hidden; transition:all 0.5s cubic-bezier(.25,.8,.25,1); height:100%; }
        .process-card:hover { transform:translateY(-8px); box-shadow:0 32px 64px rgba(16,185,129,0.1),0 8px 32px rgba(0,0,0,0.07); border-color:rgba(16,185,129,0.18); }
        .step-bg-num { position:absolute; bottom:-20px; right:-8px; font-size:8rem; font-family:'Sora',sans-serif; font-weight:900; color:rgba(16,185,129,0.04); line-height:1; pointer-events:none; user-select:none; transition:color 0.5s; }
        .process-card:hover .step-bg-num { color:rgba(16,185,129,0.08); }
        .process-icon-ring { width:56px; height:56px; border-radius:18px; display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem; transition:transform 0.4s cubic-bezier(.25,.8,.25,1),box-shadow 0.4s; }
        .process-card:hover .process-icon-ring { transform:scale(1.1) rotate(-5deg); }
        .process-bottom-bar { position:absolute; bottom:0; left:0; right:0; height:3px; transform:scaleX(0); transform-origin:left; transition:transform 0.5s cubic-bezier(.25,.8,.25,1); }
        .process-card:hover .process-bottom-bar { transform:scaleX(1); }
        .process-connector { display:none; position:absolute; top:4.5rem; left:calc(33.33% + 12px); right:calc(33.33% + 12px); height:2px; }
        @media(min-width:1024px){.process-connector{display:block;}}

        /* ══ MISC ══ */
        .stat-card { background:white; }
        .glass-badge { background:rgba(255,255,255,0.7); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.8); box-shadow:0 8px 32px rgba(0,0,0,0.06),0 1px 0 rgba(255,255,255,0.9) inset; }
        .glass-badge-dark { background:rgba(15,23,42,0.85); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.07); box-shadow:0 20px 40px rgba(0,0,0,0.18); }
        .label-pill { display:inline-flex; align-items:center; gap:6px; background:linear-gradient(135deg,rgba(16,185,129,0.08),rgba(52,211,153,0.06)); border:1px solid rgba(16,185,129,0.2); border-radius:100px; padding:6px 14px; font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#059669; }
        .industry-card { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); transition:background 0.35s,border-color 0.35s,transform 0.35s; }
        .industry-card:hover { background:rgba(16,185,129,0.06); border-color:rgba(16,185,129,0.2); transform:translateY(-4px); }
        .testimonial-card { position:relative; overflow:hidden; background:white; border:1px solid #f1f5f9; transition:box-shadow 0.35s,transform 0.35s; }
        .testimonial-card::before { content:'"'; position:absolute; top:-20px; left:16px; font-size:160px; font-family:'Sora',sans-serif; font-weight:800; color:rgba(16,185,129,0.06); line-height:1; pointer-events:none; }
        .testimonial-card:hover { box-shadow:0 20px 50px rgba(0,0,0,0.06); transform:translateY(-3px); }

        /* ══ CONTACT FORM ══ */
        .form-input { width:100%; padding:13px 16px; font-size:14px; background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; transition:all 0.25s; font-family:'DM Sans',system-ui,sans-serif; color:#0f172a; }
        .form-input::placeholder { color:#94a3b8; }
        .form-input:focus { outline:none; border-color:#10b981; background:white; box-shadow:0 0 0 4px rgba(16,185,129,0.1); }
        .form-label { display:block; font-size:11px; font-weight:700; color:#475569; margin-bottom:7px; letter-spacing:0.1em; text-transform:uppercase; font-family:'Sora',system-ui,sans-serif; }

        /* ══ FOOTER ══ */
        .footer-link { display:inline-flex; align-items:center; gap:5px; color:#94a3b8; font-size:13.5px; transition:color 0.25s; }
        .footer-link:hover { color:#34d399; }
        .footer-social { width:40px; height:40px; border-radius:11px; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); transition:all 0.3s; }
        .footer-social:hover { background:#10b981; border-color:#10b981; transform:translateY(-2px); box-shadow:0 8px 20px rgba(16,185,129,0.3); }

        html { scroll-behavior:smooth; }
      `}} />

      {introVisible && <IntroAnimation onComplete={handleIntroComplete} />}

      <div style={{ opacity: pageVisible ? 1 : 0, transition: 'opacity 0.7s ease', visibility: pageVisible ? 'visible' : 'hidden' }}>
        <div className={`cursor-dot ${cursorHover ? 'cursor-hover' : ''}`} style={{ transform: `translate(calc(${cursorPos.x}px - 50%), calc(${cursorPos.y}px - 50%))` }} />
        <div className={`cursor-ring ${cursorHover ? 'cursor-hover' : ''}`} style={{ transform: `translate(calc(${cursorPos.x}px - 50%), calc(${cursorPos.y}px - 50%))` }} />

        <main className="min-h-screen font-body bg-[#F8FAFC] text-slate-900 overflow-x-hidden selection:bg-emerald-500/30">

          {/* ── 1. HERO ── */}
          <section className="relative pt-24 pb-28 lg:pt-32 lg:pb-36 overflow-hidden hero-mesh">
            <div className="noise-overlay"></div>
            <div className="orb w-[520px] h-[520px] bg-emerald-200/30 top-[-100px] left-[-80px]" style={{ animationDelay: '0s' }}></div>
            <div className="orb w-[350px] h-[350px] bg-teal-200/25 bottom-[-80px] right-[10%]" style={{ animationDelay: '4s' }}></div>
            <div className="orb w-[200px] h-[200px] bg-emerald-300/20 top-[30%] right-[20%]" style={{ animationDelay: '2s' }}></div>
            <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.06) 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>

            <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
                <div className="lg:col-span-6 space-y-8">
                  <Reveal>
                    <div className="label-pill w-fit"><Sparkles className="w-3 h-3" />AI-Powered Enterprise Solutions</div>
                  </Reveal>
                  <Reveal delay={80}>
                    <h1 className="font-display text-5xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold text-slate-900 leading-[1.08] tracking-[-0.02em]">
                      Future-Proof<br />
                      <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400">Your Business</span>
                        <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" preserveAspectRatio="none" fill="none">
                          <path d="M0 6 Q75 1 150 5 Q225 9 300 4" stroke="url(#sg)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                          <defs><linearGradient id="sg" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#10b981" /><stop offset="1" stopColor="#2dd4bf" /></linearGradient></defs>
                        </svg>
                      </span>
                    </h1>
                  </Reveal>
                  <Reveal delay={160}>
                    <p className="text-lg text-slate-500 leading-relaxed font-normal max-w-xl">
                      Empowering enterprises with cutting-edge AI, robust security, and intelligent cloud solutions that drive transformation and sustainable growth.
                    </p>
                  </Reveal>
                  <Reveal delay={240}>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      {/* ── Let's Connect — vibrant emerald gradient ── */}
                      <a href="#contact" className="btn-connect group px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 text-sm font-display tracking-tight hover:-translate-y-1">
                        Let&apos;s Connect
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </a>
                      {/* ── Watch Demo — crisp emerald outline ── */}
                      <button className="btn-demo group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2.5 font-display">
                        <div className="w-8 h-8 rounded-full border border-emerald-400/60 group-hover:border-emerald-500 flex items-center justify-center transition-colors">
                          <PlayCircle className="w-4 h-4" />
                        </div>
                        Watch Demo
                      </button>
                    </div>
                  </Reveal>
                  <Reveal delay={320}>
                    <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-200/70">
                      {[
                        { icon: Shield, text: 'Enterprise Secure', sub: 'SOC 2 Ready' },
                        { icon: Zap, text: 'Ultra Fast', sub: '99.9% Uptime' },
                        { icon: TrendingUp, text: 'Infinitely Scalable', sub: 'Global Cloud' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-emerald-500" />
                          </div>
                          <div>
                            <div className="font-semibold text-[13px] text-slate-800 tracking-tight font-display">{item.text}</div>
                            <div className="text-[11px] text-slate-400">{item.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                <Reveal delay={120} className="lg:col-span-6 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
                  <div className="relative w-full max-w-[560px] aspect-[4/3]">
                    <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.08)] z-10">
                      <Image src="/hero-image.png" alt="AI Solutions Expert" width={560} height={420} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" unoptimized priority />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/20 pointer-events-none"></div>
                    </div>
                    <div className="absolute inset-[-12px] rounded-[3rem] border border-emerald-200/40 z-0"></div>
                    <div className="absolute inset-[-24px] rounded-[3.5rem] border border-emerald-100/30 z-0"></div>
                    <div className="badge-float-1 absolute -bottom-8 -left-4 md:-left-14 z-20 glass-badge p-5 pr-8 rounded-2xl flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-xl flex-shrink-0">🤝</div>
                      <div>
                        <div className="text-2xl font-black text-slate-900 font-display tracking-tight">50+</div>
                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.16em]">Associated Partners</div>
                      </div>
                    </div>
                    <div className="badge-float-2 absolute top-10 -right-4 md:-right-10 z-20 glass-badge-dark p-5 pr-8 rounded-2xl">
                      <div className="text-3xl font-black text-white font-display tracking-tight">30+</div>
                      <div className="text-[11px] font-semibold text-emerald-400 mt-1">Years Team Experience</div>
                    </div>
                    <div className="absolute top-4 left-4 z-20 glass-badge flex items-center gap-2 px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse block"></span>
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Live Monitoring</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ── 2. PARTNERS ── */}
          <section id="partners" className="py-20 bg-white border-y border-slate-100">
            <div className="marquee-wrap mb-16 py-6 border-y border-slate-100/80 bg-white">
              <div className="marquee-track">
                {[...allPartners, ...allPartners].map((p, i) => (
                  <div key={i} className="mx-12 flex items-center justify-center w-32 h-12">
                    <LogoCard partner={p} />
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12">
              <Reveal>
                <div className="text-center mb-12">
                  <div className="label-pill mx-auto w-fit mb-3">Our Ecosystem</div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Powered by World-Class Partners</h2>
                  <p className="text-slate-500 mt-3 text-[15px]">{allPartners.length} technology partners across {partnerCategories.length} strategic categories</p>
                </div>
              </Reveal>
              <div className="grid gap-10">
                {partnerCategories.map((category, idx) => (
                  <Reveal key={idx} delay={idx * 50}>
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-16 items-start border-b border-slate-100 pb-10 last:border-0 last:pb-0">
                      <div className="md:w-1/3 shrink-0">
                        <h3 className="font-display text-base font-bold text-slate-900 leading-snug">{category.title}</h3>
                        <div className="w-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mt-3 rounded-full"></div>
                        <p className="text-[11px] text-slate-400 mt-2 font-medium">{category.partners.length} partner{category.partners.length > 1 ? 's' : ''}</p>
                      </div>
                      <div className="md:w-2/3 flex flex-wrap gap-8 lg:gap-12 items-center">
                        {category.partners.map((partner, pIdx) => (
                          <div key={pIdx}><LogoCard partner={partner} /></div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── 3. CLIENTS — with link + emerald glow hover ── */}
          <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12">
              <Reveal>
                <div className="text-center mb-12">
                  <div className="label-pill mx-auto w-fit mb-4">Success Stories</div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Companies We Empower</h2>
                  <p className="text-slate-500 mt-4 max-w-lg mx-auto text-[15px]">Trusted by leading organizations across industries to deliver measurable outcomes.</p>
                </div>
              </Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {clients.map((customer, i) => (
                  <Reveal key={customer.name} delay={i * 60}>
                    <a href={customer.url} target="_blank" rel="noreferrer" className="client-card group block">
                      <div className="client-logo-wrap">
                        <Image src={customer.logo} alt={customer.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" style={{ padding: '18px' }} unoptimized />
                      </div>
                      <div style={{ backgroundColor: customer.color }}>
                        <p className="client-service-bar">{customer.service}</p>
                        <p className="client-country">{customer.country}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. SERVICES ── */}
          <section id="services" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full filter blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-8">
                <Reveal>
                  <div>
                    <div className="label-pill mb-4">What We Offer</div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.15] tracking-tight max-w-xl">Comprehensive Solutions<br />for Modern Challenges</h2>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <button className="group px-6 py-3 rounded-xl font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:text-emerald-600 transition-all flex items-center gap-2 text-sm">
                    View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Reveal>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
                {[
                  { icon: '🤖', num: '05', title: 'AI Development & Integration', desc: 'Harness artificial intelligence to automate operations, optimize workflows, and unlock unprecedented growth through intelligent systems.' },
                  { icon: Shield, num: '03', title: 'Cyber Security', desc: 'Comprehensive security solutions protecting your digital assets from evolving threats across cloud and enterprise endpoints.' },
                  { icon: Zap, num: '02', title: 'Software Development', desc: "Enterprise-grade applications built with cutting-edge technology to scale with your organization's demands and vision." },
                  { icon: Lightbulb, num: '01', title: 'Prototype & MVP', desc: 'Transform abstract ideas into tangible reality rapidly with agile methodology and rapid prototyping frameworks for startup speed.' },
                  { icon: '☁️', num: '06', title: 'Cloud Infrastructure', desc: 'Scalable, resilient cloud solutions designed to grow seamlessly with your business across global hyperscalers and sovereign clouds.' },
                  { icon: Database, num: '04', title: 'Data Analytics', desc: 'Turn raw data into actionable insights with advanced data engineering, analytics, and business intelligence pipelines.' }
                ].map((svc, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <div className="service-card p-8 lg:p-10 min-h-[280px] flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
                      <div className="card-content">
                        <div className="flex justify-between items-start mb-8">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                            {typeof svc.icon === 'string' ? svc.icon : <svc.icon className="w-5 h-5 text-white" />}
                          </div>
                          <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-white/8 text-slate-400 tracking-[0.2em] border border-white/8">{svc.num}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">{svc.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">{svc.desc}</p>
                      </div>
                      <div className="card-content flex items-center gap-2 font-semibold text-emerald-400 mt-8 text-sm">
                        <span>Learn More</span>
                        <div className="w-7 h-7 rounded-full border border-emerald-500/30 flex items-center justify-center">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. INDUSTRIES ── */}
          <section id="industries" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="noise-overlay"></div>
            <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              <Reveal>
                <div className="text-center mb-14">
                  <div className="label-pill mx-auto w-fit mb-4" style={{ background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.2)', color: '#34d399' }}>Industries</div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">Tailored Sector Expertise</h2>
                  <p className="text-slate-400 mt-4 max-w-xl mx-auto text-[15px]">Deep domain knowledge across verticals to solve industry-specific challenges.</p>
                </div>
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { icon: Landmark, title: 'Finance & Fintech', desc: 'Secure data pipelines and fraud detection models for financial institutions.' },
                  { icon: Stethoscope, title: 'Healthcare', desc: 'HIPAA-compliant infrastructure and patient analytics at enterprise scale.' },
                  { icon: Building2, title: 'Public Sector', desc: 'Robust, scalable solutions for government entities and smart cities.' },
                  { icon: ShoppingCart, title: 'Retail & E-commerce', desc: 'High-availability architectures for seamless global commerce.' }
                ].map((ind, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className="industry-card p-8 rounded-2xl flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                        <ind.icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h3 className="font-display text-[15px] font-bold mb-3 tracking-tight">{ind.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{ind.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── 6. ABOUT ── */}
          <section id="about" className="py-24 bg-white">
            <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <Reveal className="relative order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-[3rem] transform -rotate-3 scale-[1.04]"></div>
                  <div className="absolute inset-0 bg-white rounded-[3rem] transform -rotate-1 scale-[1.02]"></div>
                  <div className="relative w-full aspect-[4/3] rounded-[3rem] shadow-[0_30px_70px_rgba(0,0,0,0.08)] overflow-hidden z-10">
                    <Image src={aboutImgSrc} alt="Growth" fill className="object-cover" onError={() => setAboutImgSrc("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop")} unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-transparent"></div>
                  </div>
                </Reveal>
                <Reveal delay={100} className="space-y-7 order-1 lg:order-2">
                  <div>
                    <div className="label-pill mb-4">Our Story</div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-[1.15]">Driving Revenue Through<br />Technology & Innovation</h2>
                  </div>
                  <p className="text-[15px] text-slate-500 leading-relaxed">We combine operational expertise, strategic insight, and human-centered design to help organizations transform their industries. With 30+ years of collective team experience, we&apos;ve seen what truly works.</p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {['Quality Products & Services', 'Competitive Pricing', 'Excellent Customer Service', 'Innovation & Creativity'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                        <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span className="text-slate-800 font-semibold text-[13px] tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { num: '30+', label: 'Years of Experience' },
                  { num: '20+', label: 'Technology Partners' },
                  { num: '10+', label: 'Industry Verticals' },
                  { num: '200+', label: 'Expert Team Members' },
                ].map((stat) => <StatCounter key={stat.label} num={stat.num} label={stat.label} />)}
              </div>
            </div>
          </section>

          {/* ── 7. HOW WE WORK — ANIMATED ── */}
          <section className="py-28 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[1px] bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-100/40 rounded-full filter blur-[90px]"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-teal-100/40 rounded-full filter blur-[90px]"></div>
            </div>

            <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
              <Reveal>
                <div className="text-center mb-16">
                  <div className="label-pill mx-auto w-fit mb-4">Our Approach</div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">How We Work</h2>
                  <p className="text-slate-500 mt-4 max-w-lg mx-auto text-[15px]">A proven, three-phase methodology that consistently delivers exceptional outcomes.</p>
                </div>
              </Reveal>

              <div className="relative">
                {/* Connector line */}
                <div className="process-connector bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 opacity-30 rounded-full"></div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: MessageCircle,
                      num: '01',
                      title: 'Discovery & Strategy',
                      desc: 'We deep dive into your business goals and craft a tailored, future-proof digital transformation roadmap aligned with your vision.',
                      gradient: 'from-emerald-500 to-teal-500',
                      tags: ['Requirements', 'Roadmap', 'KPIs'],
                      barClass: 'from-emerald-500 to-teal-500'
                    },
                    {
                      icon: Lightbulb,
                      num: '02',
                      title: 'Design & Development',
                      desc: 'Agile execution with continuous feedback loops ensuring perfect alignment. Iterative sprints, transparent progress, pixel-perfect delivery.',
                      gradient: 'from-teal-500 to-cyan-500',
                      tags: ['Agile', 'Sprints', 'Feedback'],
                      barClass: 'from-teal-500 to-cyan-500'
                    },
                    {
                      icon: Database,
                      num: '03',
                      title: 'Deploy & Optimize',
                      desc: 'Seamless implementation with ongoing monitoring, performance tuning, and proactive scaling to handle any growth challenges.',
                      gradient: 'from-cyan-500 to-emerald-500',
                      tags: ['Launch', 'Monitor', 'Scale'],
                      barClass: 'from-cyan-500 to-emerald-500'
                    }
                  ].map((step, i) => (
                    <Reveal key={i} delay={i * 150}>
                      <div className="process-card">
                        <div className="step-bg-num">{step.num}</div>

                        {/* Icon */}
                        <div className={`process-icon-ring bg-gradient-to-br ${step.gradient} shadow-lg`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Step indicator */}
                        <div className="flex items-center gap-3 mb-5">
                          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br ${step.gradient} text-white text-[11px] font-black font-display shadow-sm`}>
                            {parseInt(step.num)}
                          </span>
                          <div className={`h-px flex-1 bg-gradient-to-r ${step.gradient} opacity-25 rounded-full`}></div>
                        </div>

                        <h3 className="font-display text-xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">{step.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-sm mb-6">{step.desc}</p>

                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag, ti) => (
                            <span key={ti} className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200/80">{tag}</span>
                          ))}
                        </div>

                        <div className={`process-bottom-bar bg-gradient-to-r ${step.barClass}`}></div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 8. TESTIMONIALS ── */}
          <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12">
              <Reveal>
                <div className="text-center mb-14">
                  <div className="label-pill mx-auto w-fit mb-4">Social Proof</div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Trusted by Executives</h2>
                </div>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { text: 'AnoCloud entirely revamped our cloud architecture. Their deep expertise and agile approach allowed us to scale without a single hour of downtime. Truly exceptional partners.', name: 'David M.', role: 'CTO, Fintech Solutions', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop' },
                  { text: 'The prototype they built for our internal data analytics tool was flawless. Highly professional team that delivers exactly what they promise — on time, every time.', name: 'Sarah L.', role: 'VP of Engineering, Global Retail', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop' }
                ].map((t, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className="testimonial-card p-8 rounded-[2rem]">
                      <div className="flex gap-1 mb-5">{[...Array(5)].map((_, si) => <Star key={si} className="fill-amber-400 stroke-amber-400 w-4 h-4" />)}</div>
                      <p className="text-[15px] text-slate-700 italic mb-8 leading-relaxed relative z-10">{t.text}</p>
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-full overflow-hidden relative ring-2 ring-emerald-100">
                          <Image src={t.img} alt={t.name} fill className="object-cover" unoptimized />
                        </div>
                        <div>
                          <p className="font-display font-bold text-slate-900 text-sm">{t.name}</p>
                          <p className="text-[12px] text-slate-500">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── 9. CTA BANNER ── */}
          <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
            <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12">
              <Reveal>
                <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 p-12 lg:p-16 text-center">
                  <div className="noise-overlay"></div>
                  <div className="absolute -left-24 -top-24 w-64 h-64 bg-emerald-600/20 rounded-full filter blur-[60px] pointer-events-none"></div>
                  <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-teal-600/15 rounded-full filter blur-[60px] pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="label-pill mx-auto w-fit mb-6" style={{ background: 'rgba(16,185,129,0.12)', borderColor: 'rgba(16,185,129,0.25)', color: '#34d399' }}>Ready to Transform?</div>
                    <h2 className="font-display text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4">Start Your Journey Today</h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-[15px] mb-10">Join 200+ enterprises that trust AnoCloud to build their digital future.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="#contact" className="btn-connect group px-8 py-4 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-3 font-display hover:-translate-y-1 transition-all duration-300">
                        Book a Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a href="#services" className="px-8 py-4 rounded-2xl font-semibold text-white border border-white/20 hover:border-emerald-400 hover:bg-white/5 transition-all duration-300 text-sm flex items-center justify-center gap-2">Explore Services</a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── 10. CONTACT FORM — IMPROVED ── */}
          <section id="contact" className="py-24 bg-[#F8FAFC] border-t border-slate-200">
            <div className="max-w-[85rem] mx-auto px-6 sm:px-8 lg:px-12">
              <Reveal>
                <div className="text-center mb-14">
                  <div className="label-pill mx-auto w-fit mb-4">Get In Touch</div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Let&apos;s Start a Conversation</h2>
                  <p className="text-[15px] text-slate-500 max-w-xl mx-auto">Ready to transform your business? Our engineering experts are here to help you scale.</p>
                </div>
              </Reveal>

              <div className="grid lg:grid-cols-5 gap-10 items-start">
                {/* Left: contact info */}
                <Reveal delay={60} className="lg:col-span-2">
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: 'Email Us', value: 'hello@anocloud.in', href: 'mailto:hello@anocloud.in', sub: 'Reply within 2 hours' },
                      { icon: Phone, label: 'Call Us', value: '+91-8674864189 / +91-6366338242', href: 'tel:+918674864189', sub: 'Mon–Fri, 9AM–7PM IST' },
                      { icon: MapPin, label: 'Our Office', value: 'C/67, Vijay Nagar, Jamshedpur - 831009', href: '#', sub: 'Agrico P.O, Jharkhand, India' },
                      { icon: Clock, label: 'Response Time', value: 'Under 24 Hours', href: '#', sub: 'Average first response' },
                    ].map((info, i) => (
                      <a key={i} href={info.href} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all duration-300 group">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{info.label}</p>
                          <p className="font-semibold text-slate-900 text-[14px] font-display group-hover:text-emerald-600 transition-colors">{info.value}</p>
                          <p className="text-[12px] text-slate-400 mt-0.5">{info.sub}</p>
                        </div>
                      </a>
                    ))}

                    {/* Social */}
                    <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Follow AnoCloud</p>
                      <div className="flex gap-3">
                        {[
                          { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                          { icon: Twitter, href: 'https://twitter.com', label: 'X / Twitter' },
                          { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                          { icon: Globe, href: 'https://anocloud.in', label: 'Website' },
                        ].map((s, i) => (
                          <a key={i} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                            className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                            <s.icon className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Right: form */}
                <Reveal delay={120} className="lg:col-span-3">
                  <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-[0_24px_64px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
                    {/* Top color bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400"></div>

                    {/* Success overlay */}
                    {formSubmitted && (
                      <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center rounded-[2rem]">
                        <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                          <CheckCircle className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Message Sent! 🎉</h3>
                        <p className="text-slate-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
                      </div>
                    )}

                    <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Send us a message</h3>

                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">First Name *</label>
                          <input suppressHydrationWarning type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="form-input" />
                        </div>
                        <div>
                          <label className="form-label">Last Name *</label>
                          <input suppressHydrationWarning type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="form-input" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Work Email *</label>
                          <input suppressHydrationWarning type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="form-input" />
                        </div>
                        <div>
                          <label className="form-label">Phone</label>
                          <input suppressHydrationWarning type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Company</label>
                          <input suppressHydrationWarning type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="form-input" />
                        </div>
                        <div>
                          <label className="form-label">Budget Range</label>
                          <div className="relative">
                            <select suppressHydrationWarning name="budget" value={formData.budget} onChange={handleChange} className="form-input appearance-none pr-10">
                              <option value="" disabled>Select budget</option>
                              <option value="lt10k">Under $10K</option>
                              <option value="10-50k">$10K – $50K</option>
                              <option value="50-100k">$50K – $100K</option>
                              <option value="100k+">$100K+</option>
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Service Interest *</label>
                        <div className="relative">
                          <select suppressHydrationWarning name="service" value={formData.service} onChange={handleChange} className="form-input appearance-none pr-10">
                            <option value="" disabled>Choose a service</option>
                            <option value="prototype">Prototype & MVP Development</option>
                            <option value="software">Software Development</option>
                            <option value="security">Cyber Security</option>
                            <option value="cloud">Cloud Infrastructure</option>
                            <option value="analytics">Data Analytics</option>
                            <option value="ai">AI Development & Integration</option>
                          </select>
                          <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Your Message *</label>
                        <textarea suppressHydrationWarning name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project — goals, timeline, and requirements..." rows={5} className="form-input resize-none" />
                      </div>

                      <button onClick={handleSubmit}
                        className="btn-connect w-full py-4 rounded-xl font-bold text-white text-sm tracking-wide flex items-center justify-center gap-3 group font-display hover:-translate-y-0.5 transition-transform duration-300">
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        Send Message
                      </button>
                      <p className="text-center text-[12px] text-slate-400">🔒 Your information is 100% secure and never shared.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}