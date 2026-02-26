'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Search, UserPlus, Clock, TrendingUp, X,
  Sparkles, Award, Eye, BookOpen, Star, Filter, ChevronDown,
} from 'lucide-react';
import SlideInSection from '@/components/SlideInSection';
import ContactForm from '@/components/ContactForm';
import { motion, useScroll, useTransform, AnimatePresence, cubicBezier } from 'framer-motion';

const MotionDiv = motion.div;

/* ─── Slug map ────────────────────────────────────────────────────── */
const postSlugs: Record<number, string> = {
  1: 'ai-quality-control-solution-blueprint',
  2: 'innovate-faster-with-google-cloud',
  3: 'azure-blueprint-scalability-cost-optimization',
  4: 'unleashing-insights-with-advanced-analytics',
  5: 'safeguarding-your-data-comprehensive-security-solutions',
  6: 'digital-workspace-remote-productivity',
};
const slug = (id: number) => postSlugs[id] ?? 'blog-post';

/* ─── Categories ────────────────────────────────────────────────────── */
const categories = [
  { id: 'ai',       name: 'AI & ML',       icon: '🤖', accent: '#7c3aed', light: '#f5f3ff', dark: '#4c1d95', count: 3 },
  { id: 'cloud',    name: 'Cloud',          icon: '☁️', accent: '#0369a1', light: '#e0f2fe', dark: '#0c4a6e', count: 3 },
  { id: 'security', name: 'Security',       icon: '🔒', accent: '#b91c1c', light: '#fef2f2', dark: '#7f1d1d', count: 1 },
  { id: 'data',     name: 'Data',           icon: '📊', accent: '#047857', light: '#ecfdf5', dark: '#064e3b', count: 1 },
];
const getCat = (id: string) => categories.find(c => c.id === id) ?? categories[0];

/* ─── Posts ────────────────────────────────────────────────────────── */
const posts = [
  {
    id: 1, featured: true, recommended: true,
    title: "AI Quality Control Blueprint: How We Hit >99% Defect Detection",
    excerpt: "A hands-on breakdown of AnoCloud's multi-cloud computer vision pipeline — from camera ingestion to real-time rejection, achieving industry-leading accuracy.",
    date: 'Sep 1, 2025', readTime: '5 min', category: 'ai', author: 'AnoCloud Team', views: '12.5k',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&h=800&fit=crop&q=90',
    tags: ['AI', 'Computer Vision', 'Manufacturing'],
  },
  {
    id: 2, featured: false, recommended: false,
    title: 'Google Cloud Deep Dive: GKE, BigQuery & Vertex AI in Production',
    excerpt: "Real-world architecture patterns for shipping faster on GCP — Kubernetes autoscaling, petabyte analytics, and managed ML pipelines that actually work.",
    date: 'May 8, 2025', readTime: '7 min', category: 'cloud', author: 'Vishal Gupta', views: '8.2k',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=500&fit=crop&q=85',
    tags: ['Google Cloud', 'Kubernetes', 'MLOps'],
  },
  {
    id: 3, featured: false, recommended: true,
    title: 'Azure Cost Mastery: Cut Your Cloud Bill by 40% Without Compromise',
    excerpt: "Reserved instances, Spot VMs, Hybrid Benefit, and autoscaling — the exact playbook we use to slash Azure spend while improving SLAs.",
    date: 'May 7, 2025', readTime: '6 min', category: 'cloud', author: 'Vivek Gupta', views: '9.7k',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&h=500&fit=crop&q=85',
    tags: ['Azure', 'FinOps', 'Scalability'],
  },
  {
    id: 4, featured: false, recommended: false,
    title: 'Beyond Dashboards: Real-Time Business Intelligence with Generative AI',
    excerpt: "Why traditional BI tools are failing modern orgs, and how embedding LLMs into your data stack unlocks questions nobody thought to ask.",
    date: 'May 6, 2025', readTime: '4 min', category: 'data', author: 'AnoCloud Team', views: '6.3k',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=500&fit=crop&q=85',
    tags: ['AI', 'Business Intelligence', 'Analytics'],
  },
  {
    id: 5, featured: false, recommended: true,
    title: 'Zero-Trust Cloud Security: The Architecture Every CTO Needs in 2025',
    excerpt: "Beyond perimeter firewalls — building identity-first security with microsegmentation, continuous verification, and automated threat response.",
    date: 'May 5, 2025', readTime: '8 min', category: 'security', author: 'Anish Kumar', views: '11.1k',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&h=500&fit=crop&q=85',
    tags: ['Zero-Trust', 'IAM', 'Cloud Security'],
  },
  {
    id: 6, featured: false, recommended: false,
    title: 'The Modern Digital Workspace Stack: Tools That Actually Scale',
    excerpt: "How leading remote-first companies architect their collaboration infrastructure — from async-first communication to AI-powered productivity layers.",
    date: 'May 3, 2025', readTime: '5 min', category: 'cloud', author: 'AnoCloud Team', views: '5.9k',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=500&fit=crop&q=85',
    tags: ['Remote Work', 'Productivity', 'Collaboration'],
  },
];

/* ─── Motion presets ────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1), delay: i * 0.08 } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

/* ─── Ticker ────────────────────────────────────────────────────────── */
function BreakingTicker() {
  const items = [
    '🔥 AI hits >99% defect detection in manufacturing',
    '☁️ Cloud costs cut 40% with Azure Reserved Instances',
    '🔒 Zero-Trust adoption surges in enterprise 2025',
    '📊 Generative AI reshapes real-time analytics',
    '🚀 GKE autoscaling cuts latency by 60%',
  ];
  return (
    <div className="bg-[#005241] h-9 flex items-center overflow-hidden">
      <div className="flex-shrink-0 px-4 h-full flex items-center bg-[#56c48f] z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#003b2d]">TRENDING</span>
      </div>
      <div className="overflow-hidden flex-1 relative">
        <div className="flex gap-12 whitespace-nowrap animate-ticker text-white text-xs font-medium">
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className="flex-shrink-0">{item} &nbsp;•</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Category pill ─────────────────────────────────────────────────── */
function CatBadge({ cat, sm }: { cat: ReturnType<typeof getCat>; sm?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-bold uppercase tracking-widest rounded-sm ${sm ? 'text-[9px] px-2 py-0.5' : 'text-[11px] px-2.5 py-1'}`}
      style={{ background: cat.light, color: cat.accent, border: `1.5px solid ${cat.accent}30` }}
    >
      <span>{cat.icon}</span>{cat.name}
    </span>
  );
}

/* ─── Featured card ─────────────────────────────────────────────────── */
function FeaturedCard({ post }: { post: typeof posts[0] }) {
  const cat = getCat(post.category);
  return (
    <Link href={`/resources/blog/${slug(post.id)}`} className="group block">
      <div className="relative grid lg:grid-cols-[1.4fr_1fr] rounded-2xl overflow-hidden border border-gray-900/5 shadow-2xl min-h-[520px] bg-[#0c0f0e]">
        {/* Image */}
        <div className="relative overflow-hidden min-h-[300px]">
          <Image src={post.image} alt={post.title} fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width:1024px) 100vw, 58vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0c0f0e]/10 to-[#0c0f0e]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f0e]/70 to-transparent lg:hidden" />
          {/* Editor badge */}
          <div className="absolute top-5 left-5 flex items-center gap-1.5 bg-amber-400 text-amber-900 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
            <Star size={10} className="fill-amber-900" /> Editor's Pick
          </div>
          {/* Views */}
          <div className="absolute bottom-5 left-5 flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
            <Eye size={11} /> {post.views}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-8 lg:p-10 z-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#56c48f] bg-[#56c48f]/10 px-3 py-1 rounded-full border border-[#56c48f]/20">
                ✦ Cover Story
              </span>
              <CatBadge cat={cat} sm />
            </div>
            <h2 className="font-display text-white text-2xl lg:text-[1.65rem] font-black leading-[1.18] tracking-tight mb-4 group-hover:text-[#56c48f] transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
          </div>
          <div className="flex flex-wrap gap-2 my-6">
            {post.tags.map(t => (
              <span key={t} className="text-[10px] text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">#{t}</span>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-2.5 text-xs text-gray-500 mb-5">
              <span className="font-bold text-gray-300">{post.author}</span>
              <span>·</span><span>{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
            </div>
            <div className="inline-flex items-center gap-2 text-[#56c48f] font-bold text-sm group/btn">
              Read full article
              <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── Article card ──────────────────────────────────────────────────── */
function ArticleCard({ post, index }: { post: typeof posts[0]; index: number }) {
  const cat = getCat(post.category);
  return (
    <MotionDiv variants={fadeUp} custom={index} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
      <Link href={`/resources/blog/${slug(post.id)}`} className="group flex flex-col h-full rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="relative overflow-hidden h-[196px] flex-shrink-0">
          <Image src={post.image} alt={post.title} fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            sizes="(max-width:768px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 left-3"><CatBadge cat={cat} sm /></div>
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-full">
            <Eye size={9} />{post.views}
          </div>
        </div>
        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-3">
            <span>{post.date}</span><span>·</span>
            <Clock size={9} /><span>{post.readTime} read</span>
          </div>
          <h3 className="font-display font-black text-gray-900 text-[15px] leading-snug mb-2.5 line-clamp-2 group-hover:text-[#005241] transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 2).map(t => (
              <span key={t} className="text-[10px] text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full">{t}</span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3.5 border-t border-gray-100">
            <span className="text-[11px] font-semibold text-gray-600">{post.author}</span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#005241] group-hover:gap-2 transition-all duration-200">
              Read <ArrowRight size={11} />
            </span>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}

/* ─── Sidebar recommended card ──────────────────────────────────────── */
function SideCard({ post, index }: { post: typeof posts[0]; index: number }) {
  const cat = getCat(post.category);
  return (
    <MotionDiv variants={fadeUp} custom={index} whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
      <Link href={`/resources/blog/${slug(post.id)}`} className="group flex gap-3.5 p-3.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-200">
        <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs" style={{ background: cat.light, color: cat.accent }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1"><CatBadge cat={cat} sm /><span className="text-[9px] text-gray-400">{post.readTime} read</span></div>
          <h4 className="font-bold text-gray-900 text-xs leading-snug line-clamp-2 group-hover:text-[#005241] transition-colors">{post.title}</h4>
          <div className="flex items-center gap-1.5 mt-1 text-[10px] text-gray-400"><Eye size={9} />{post.views} · {post.date}</div>
        </div>
        <div className="flex-shrink-0 relative w-14 h-14 rounded-lg overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" sizes="56px" />
        </div>
      </Link>
    </MotionDiv>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════════ */
export default function BlogPage() {
  const [search, setSearch]     = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const [showGuest, setShowGuest] = useState(false);
  const [email, setEmail]       = useState('');
  const [subbed, setSubbed]     = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const featured     = posts.find(p => p.featured)!;
  const recommended  = posts.filter(p => p.recommended).slice(0, 4);
  const filteredGrid = posts.filter(p => {
    const q = search.toLowerCase();
    return !p.featured
      && (p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
      && (activeCat === 'all' || p.category === activeCat);
  });

  return (
    <div className="min-h-screen bg-[#f6f5f1] font-body">

      {/* ─ Global styles ─ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=Instrument+Sans:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Fraunces', Georgia, serif; }
        .font-body    { font-family: 'Instrument Sans', system-ui, sans-serif; }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
        .animate-ticker { animation: ticker 30s linear infinite; }
        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        .float-slow { animation: float-slow 5s ease-in-out infinite; }
        .scrollbar-hide::-webkit-scrollbar{display:none}
        .scrollbar-hide{-ms-overflow-style:none;scrollbar-style:none}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:#f0f0ec}
        ::-webkit-scrollbar-thumb{background:#005241;border-radius:4px}
        .hero-bg {
          background: linear-gradient(150deg, #011a14 0%, #005241 50%, #012f24 100%);
        }
        .grid-lines {
          background-image: linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* ─ Ticker ─ */}
      <BreakingTicker />

      {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
      <motion.section
        ref={heroRef}
        className="relative hero-bg overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        {/* Parallax layer */}
        <motion.div className="absolute inset-0 pointer-events-none grid-lines" style={{ y: heroY }} />

        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#56c48f]/8 blur-[90px]" />
          <div className="absolute bottom-0 -left-10 w-96 h-96 rounded-full bg-[#003b2d]/60 blur-[70px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#56c48f]/5 blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
              <div className="w-10 h-[2px] bg-[#56c48f]" />
              <span className="text-[#56c48f] text-[10px] font-black uppercase tracking-[0.35em]">AnoCloud Knowledge Hub</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp}
              className="font-display text-white font-black leading-[1.04] tracking-tight max-w-3xl mb-5"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
            >
              Tech.<br />
              <span className="text-[#56c48f] italic">Trends.</span><br />
              Tomorrow.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-lg leading-relaxed mb-10">
              Practitioner-grade deep dives into AI, cloud engineering, cybersecurity, and digital transformation.
            </motion.p>

            {/* Search + CTA */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
              <div className="relative flex-1">
                <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Search articles, topics…"
                  className="w-full pl-11 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#56c48f] text-sm transition-all"
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                    <X size={15} />
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowGuest(true)}
                className="flex items-center justify-center gap-2 bg-white text-[#005241] px-7 py-4 rounded-xl font-bold hover:bg-[#56c48f] hover:text-white transition-all shadow-xl text-sm flex-shrink-0"
              >
                <UserPlus size={15} /> Submit Article
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-10 mt-14">
              {[['50+', 'Articles'], ['20+', 'Authors'], ['10k+', 'Monthly Readers']].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="font-display text-[2.4rem] font-black text-white leading-none">{val}</div>
                  <div className="text-[#56c48f]/70 text-[10px] uppercase tracking-[0.28em] mt-1">{lbl}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40"
        >
          <div className="w-px h-8 bg-white" />
          <ChevronDown size={16} className="text-white" />
        </motion.div>
      </motion.section>

      {/* ══ STICKY NAV ═════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-30 bg-white/96 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-3">
            {/* All */}
            <button onClick={() => setActiveCat('all')}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${activeCat === 'all' ? 'bg-[#005241] text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
              All ({posts.length})
            </button>
            {/* Categories */}
            {categories.map(c => (
              <button key={c.id} onClick={() => setActiveCat(c.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${activeCat === c.id ? 'text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
                style={activeCat === c.id ? { background: c.accent } : {}}>
                <span>{c.icon}</span>{c.name}
                <span className="opacity-50 text-[9px]">({c.count})</span>
              </button>
            ))}
            {/* Submit CTA */}
            <div className="ml-auto flex-shrink-0">
              <button onClick={() => setShowGuest(true)}
                className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#005241] text-white text-xs font-bold hover:bg-[#003b2d] transition-colors shadow-sm">
                <UserPlus size={12} /> Write for Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══ MAIN CONTENT ═══════════════════════════════════════════════════ */}
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        {/* ─ Featured ─ */}
        {activeCat === 'all' && !search && (
          <SlideInSection>
            <div className="mb-14">
              <div className="flex items-center gap-2.5 mb-6">
                <Award size={15} className="text-[#005241]" />
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#005241]">This Week's Cover</span>
              </div>
              <FeaturedCard post={featured} />
            </div>
          </SlideInSection>
        )}

        {/* ─ Two-col layout ─ */}
        <div className="grid lg:grid-cols-[1fr_328px] gap-14">

          {/* Articles */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <TrendingUp size={15} className="text-[#005241]" />
                <h2 className="font-display text-2xl font-black text-gray-900">Latest</h2>
              </div>
              <span className="text-[11px] text-gray-400">{filteredGrid.length} article{filteredGrid.length !== 1 ? 's' : ''}</span>
            </div>

            {filteredGrid.length > 0 ? (
              <motion.div initial="hidden" animate="visible" variants={stagger} className="grid sm:grid-cols-2 gap-6">
                {filteredGrid.map((p, i) => <ArticleCard key={p.id} post={p} index={i} />)}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-24 rounded-2xl border-2 border-dashed border-gray-200 bg-white text-center">
                <Search size={32} className="text-gray-300 mb-3" />
                <p className="text-gray-500 font-bold">No articles found</p>
                <p className="text-gray-400 text-sm mt-1">Try different keywords or browse all</p>
                <button onClick={() => { setSearch(''); setActiveCat('all'); }}
                  className="mt-4 text-[#005241] text-sm font-bold underline underline-offset-2">Clear filters</button>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-7">

            {/* Editor's picks */}
            <SlideInSection>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                  <Star size={13} className="text-amber-500 fill-amber-500" />
                  <h3 className="font-black text-xs uppercase tracking-wider text-gray-800">Editor's Picks</h3>
                </div>
                <motion.div initial="hidden" animate="visible" variants={stagger} className="divide-y divide-gray-50/80">
                  {recommended.map((p, i) => <SideCard key={p.id} post={p} index={i} />)}
                </motion.div>
              </div>
            </SlideInSection>

            {/* Newsletter */}
            <SlideInSection>
              <div className="relative bg-[#005241] rounded-2xl overflow-hidden p-6 text-white">
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#56c48f]/10 blur-3xl" />
                <Sparkles size={18} className="mb-3 text-[#56c48f] float-slow" />
                <h3 className="font-display text-[1.55rem] font-black mb-2 leading-tight">Stay ahead<br />of the curve</h3>
                <p className="text-gray-300 text-xs mb-5 leading-relaxed">Weekly insights from the frontlines of cloud & AI, free.</p>
                {subbed ? (
                  <div className="flex items-center gap-2 bg-[#56c48f]/20 border border-[#56c48f]/30 rounded-xl p-4 text-[#56c48f] text-xs font-bold">
                    <Star size={13} /> You're in! Check your inbox.
                  </div>
                ) : (
                  <div className="space-y-2">
                    <input type="email" placeholder="your@email.com" value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#56c48f]" />
                    <button onClick={() => email && setSubbed(true)}
                      className="w-full bg-[#56c48f] text-[#003b2d] py-3 rounded-xl font-black text-xs hover:bg-[#4bb07a] transition-colors">
                      Subscribe — it's free →
                    </button>
                  </div>
                )}
                <p className="text-gray-500 text-[10px] mt-3 text-center">No spam · Unsubscribe anytime</p>
              </div>
            </SlideInSection>

            {/* Topics */}
            <SlideInSection>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                  <Filter size={12} className="text-gray-400" />
                  <h3 className="font-black text-xs uppercase tracking-wider text-gray-800">Browse Topics</h3>
                </div>
                <div className="p-4 grid grid-cols-2 gap-2">
                  {categories.map(c => (
                    <button key={c.id}
                      onClick={() => setActiveCat(c.id === activeCat ? 'all' : c.id)}
                      className="flex flex-col items-start gap-1 p-3.5 rounded-xl border text-left transition-all duration-200"
                      style={{
                        background: activeCat === c.id ? c.accent : c.light,
                        borderColor: activeCat === c.id ? c.accent : `${c.accent}25`,
                        color: activeCat === c.id ? 'white' : c.accent,
                      }}>
                      <span className="text-xl">{c.icon}</span>
                      <span className="text-[11px] font-black">{c.name}</span>
                      <span className="text-[10px] opacity-55">{c.count} articles</span>
                    </button>
                  ))}
                </div>
              </div>
            </SlideInSection>

            {/* Contribute */}
            <SlideInSection>
              <div className="border-2 border-dashed border-[#005241]/25 rounded-2xl p-6 text-center bg-white">
                <div className="w-10 h-10 rounded-full bg-[#005241]/8 flex items-center justify-center mx-auto mb-3">
                  <BookOpen size={17} className="text-[#005241]" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1.5">Write for AnoCloud</h4>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">Share your expertise with 10k+ tech professionals.</p>
                <button onClick={() => setShowGuest(true)}
                  className="inline-flex items-center gap-1.5 bg-[#005241] text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#003b2d] transition-colors">
                  <UserPlus size={11} /> Submit Article
                </button>
              </div>
            </SlideInSection>

          </aside>
        </div>
      </main>

      {/* ══ FULL-WIDTH NEWSLETTER BANNER ════════════════════════════════════ */}
      <SlideInSection>
        <section className="relative bg-[#0a0d0c] overflow-hidden py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#005241]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-64 bg-[#56c48f]/8 rounded-full blur-[80px]" />
            <div className="absolute inset-0 grid-lines opacity-100" />
          </div>
          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 text-[#56c48f] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                <TrendingUp size={12} /> 10,000+ Innovators Already Subscribed
              </div>
              <h2 className="font-display text-white font-black mb-5 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}>
                Don't miss what's<br /><span className="text-[#56c48f] italic">next in tech</span>
              </h2>
              <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
                Weekly deep-dives, trend reports, and exclusive resources — straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email address"
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#56c48f]" />
                <button className="px-7 py-3.5 bg-[#56c48f] text-[#003b2d] rounded-xl font-black text-sm hover:bg-[#4bb07a] transition-colors flex-shrink-0">
                  Subscribe Free →
                </button>
              </div>
              <p className="text-gray-600 text-[11px] mt-4">No spam, ever. Unsubscribe in one click.</p>
            </motion.div>
          </div>
        </section>
      </SlideInSection>

      {/* ══ GUEST POST MODAL ════════════════════════════════════════════════ */}
      <AnimatePresence>
        {showGuest && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowGuest(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}>

              <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white rounded-t-2xl z-10">
                <div>
                  <h3 className="font-display text-xl font-black text-gray-900">Submit Your Article</h3>
                  <p className="text-gray-500 text-xs mt-0.5">Share your expertise with our readers</p>
                </div>
                <button onClick={() => setShowGuest(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
                  <X size={17} />
                </button>
              </div>

              <div className="p-6">
                <ContactForm initialService="Guest Post" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}