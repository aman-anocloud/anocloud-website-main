'use client'
import { useState } from 'react'
import { BookOpen, Award, HelpCircle, ArrowRight, FileText, Lightbulb, Users, Search } from 'lucide-react'

// Using the same color palette as homepage
const colors = {
  primary: '#059669', // emerald-600
  secondary: '#10b981', // emerald-500
  tertiary: '#047857', // emerald-700
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Blog & Articles",
      desc: "Stay updated with the latest insights, trends, and best practices in AI, cloud, and cybersecurity",
      link: "/resources/blog",
      color: colors.primary
    },
    {
      icon: Award,
      title: "Certifications & Badges",
      desc: "Explore our certification programs and partner recognition badges",
      link: "/resources/badges",
      color: colors.secondary
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      desc: "Find quick answers to common questions about our services and solutions",
      link: "/resources/FAQs",
      color: colors.tertiary
    }
  ]

  const featuredResources = [
    {
      category: "Guide",
      title: "AI Implementation Roadmap for Enterprise",
      desc: "A comprehensive guide to successfully implementing AI solutions in your organization",
      readTime: "12 min read",
      tag: "Popular"
    },
    {
      category: "Case Study",
      title: "Cloud Migration Success: 60% Cost Reduction",
      desc: "How we helped a Fortune 500 company migrate to cloud infrastructure",
      readTime: "8 min read",
      tag: "Featured"
    },
    {
      category: "Technical",
      title: "Data Engineering Best Practices 2024",
      desc: "Essential practices for building robust data pipelines and architectures",
      readTime: "15 min read",
      tag: "New"
    },
    {
      category: "Security",
      title: "Zero Trust Architecture Implementation",
      desc: "Step-by-step guide to implementing zero trust security framework",
      readTime: "10 min read",
      tag: "Trending"
    }
  ]

  const quickLinks = [
    { icon: FileText, title: "Documentation", desc: "Technical guides and API references" },
    { icon: Lightbulb, title: "Best Practices", desc: "Industry standards and methodologies" },
    { icon: Users, title: "Community", desc: "Join our developer community" },
  ]

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full" style={{ backgroundColor: colors.secondary, filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full" style={{ backgroundColor: colors.primary, filter: 'blur(120px)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
              <BookOpen className="w-4 h-4" style={{ color: colors.primary }} />
              <span className="text-sm font-semibold" style={{ color: colors.tertiary }}>Knowledge Hub</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Resources & Learning Center
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our comprehensive collection of guides, case studies, and technical resources to help you succeed with modern technology solutions
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, guides, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category, i) => (
              <div
                key={i}
                className="group relative p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {category.desc}
                </p>

                <div className="flex items-center gap-2 font-semibold" style={{ color: colors.primary }}>
                  <span>Explore</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: colors.primary }}>
                Featured Content
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Latest Insights & Guides
              </h2>
            </div>

            <button 
              className="px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: colors.primary }}
            >
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredResources.map((resource, i) => (
              <div
                key={i}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}
                  >
                    {resource.category}
                  </span>
                  <span 
                    className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50"
                    style={{ color: colors.tertiary }}
                  >
                    {resource.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {resource.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {resource.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.readTime}</span>
                  <div className="flex items-center gap-2 font-semibold" style={{ color: colors.primary }}>
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: colors.primary }}>
              Quick Access
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              More Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link, i) => (
              <div
                key={i}
                className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <link.icon className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm">{link.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white relative overflow-hidden" style={{ backgroundColor: colors.tertiary }}>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to answer your questions and guide you through any challenge
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold bg-white hover:shadow-xl transition-all duration-300"
              style={{ color: colors.tertiary }}
            >
              Contact Support
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}