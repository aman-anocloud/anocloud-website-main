 'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Download, Shield, Star, Award, Users, Zap } from 'lucide-react'
import SlideInSection from '@/components/SlideInSection'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

export default function BadgesPage() {
  const [activeTab, setActiveTab] = useState('badges')

  const badges = [
    {
      id: 'partner',
      title: 'AnoCloud Partner',
      description: 'Showcase your official partnership with AnoCloud on your website, marketing materials, or client proposals.',
      preview: '/badges/partner-badge.svg',
      formats: ['PNG', 'SVG', 'EPS'],
      guidelines: 'Use on light or dark backgrounds; maintain minimum size of 100px width.',
      icon: Users,
    },
    {
      id: 'gold',
      title: 'Gold Partner',
      description: 'Highlight your elite status and deep integration with AnoCloud solutions for premium clients.',
      preview: '/badges/gold-partner-badge.svg',
      formats: ['PNG', 'SVG', 'EPS'],
      guidelines: 'Preferred for co-marketing; pair with AnoCloud logo; do not alter colors.',
      icon: Star,
    },
    {
      id: 'certified',
      title: 'Certified Integrator',
      description: 'Demonstrate your certified expertise in deploying AnoCloud AI and cloud technologies.',
      preview: '/badges/certified-integrator-badge.svg',
      formats: ['PNG', 'SVG'],
      guidelines: 'Display alongside certification numbers; valid for 12 months.',
      icon: Shield,
    },
    {
      id: 'technology',
      title: 'Technology Alliance',
      description: 'Emphasize your collaborative tech integrations and joint innovations with AnoCloud.',
      preview: '/badges/technology-alliance-badge.svg',
      formats: ['PNG', 'SVG', 'EPS'],
      guidelines: 'Use in technical docs and webinars; include partnership start date if applicable.',
      icon: Zap,
    },
    {
      id: 'powered-by',
      title: 'Powered by AnoCloud',
      description: 'Indicate that your solution is built on AnoCloud\'s secure and scalable infrastructure.',
      preview: '/badges/powered-by-anocloud.svg',
      formats: ['PNG', 'SVG'],
      guidelines: 'Mandatory for product pages; do not use standalone without context.',
      icon: Award,
    },
  ]

  const resources = [
    {
      title: 'Brand Guidelines PDF',
      description: 'Comprehensive guide on logo usage, color palettes, and messaging best practices.',
      icon: Download,
      url: '/resources/anocloud-brand-guidelines.pdf',
    },
    {
      title: 'Usage Checklist',
      description: 'Quick reference for compliant badge application and do\'s/don\'ts.',
      icon: Shield,
      url: '/resources/badge-usage-checklist.pdf',
    },
    {
      title: 'Creative Toolkit',
      description: 'Additional assets like icons, templates, and email signatures.',
      icon: Star,
      url: '/resources/creative-toolkit.zip',
    },
  ]

  const handleDownload = (badgeId: string, format: string) => {
    // Simulate download; in real app, trigger actual download
    console.log(`Downloading ${badgeId} in ${format} format`)
    // window.open(`/api/download-badge/${badgeId}?format=${format}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <SlideInSection>
        <section className="py-20 bg-gradient-to-br from-[#eef3f2] to-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#003b2d]">
                Partner <span className="text-[#005241]">Badges & Logos</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Elevate your brand by showcasing your AnoCloud partnership. Download official badges, follow our guidelines, and build trust with clients through consistent, professional branding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#badges"
                  className="inline-flex items-center gap-2 bg-[#005241] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#003b2d] transition shadow-lg"
                >
                  Download Badges
                  <Download className="w-5 h-5" />
                </Link>
                <Link
                  href="/partners"
                  className="border-2 border-[#005241] text-[#005241] px-8 py-4 rounded-full font-semibold hover:bg-[#005241] hover:text-white transition shadow-lg"
                >
                  Learn About Partnerships
                </Link>
              </div>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Tabs Section */}
      <SlideInSection>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full shadow-lg flex border border-gray-200">
                {[
                  { id: 'badges', label: 'Badges', icon: Award },
                  { id: 'resources', label: 'Resources', icon: Download },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-[#005241] text-white shadow-md'
                        : 'text-gray-600 hover:text-[#005241]'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Badges Tab */}
            {activeTab === 'badges' && (
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                id="badges"
              >
                {badges.map((badge, index) => (
                  <MotionDiv
                    key={badge.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-[#005241] transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <badge.icon className="w-8 h-8 text-[#005241] group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#005241] transition-colors">
                          {badge.title}
                        </h3>
                      </div>
                      <div className="mb-4">
                        <Image
                          src={badge.preview}
                          alt={`${badge.title} preview`}
                          width={400}
                          height={128}
                          className="w-full h-32 object-contain bg-gray-100 rounded-lg group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{badge.description}</p>
                      <div className="space-y-2 mb-6">
                        <p className="text-sm font-medium text-gray-500">Available Formats:</p>
                        <div className="flex gap-2 flex-wrap">
                          {badge.formats.map((format) => (
                            <button
                              key={format}
                              onClick={() => handleDownload(badge.id, format)}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition"
                            >
                              {format}
                            </button>
                          ))}
                        </div>
                      </div>
                      <details className="mb-4">
                        <summary className="text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700">
                          Usage Guidelines
                        </summary>
                        <p className="text-xs text-gray-600 mt-2 pl-2 border-l-2 border-gray-300">
                          {badge.guidelines}
                        </p>
                      </details>
                      <button
                        onClick={() => handleDownload(badge.id, 'PNG')}
                        className="w-full bg-[#005241] text-white py-3 rounded-lg font-semibold hover:bg-[#003b2d] transition flex items-center justify-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download Badge
                      </button>
                    </div>
                  </MotionDiv>
                ))}
              </MotionDiv>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {resources.map((resource, index) => (
                  <MotionDiv
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 p-6 text-center"
                  >
                    <resource.icon className="w-12 h-12 text-[#005241] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{resource.title}</h3>
                    <p className="text-gray-600 mb-6">{resource.description}</p>
                    <Link
                      href={resource.url}
                      className="inline-flex items-center gap-2 bg-[#005241] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#003b2d] transition"
                    >
                      Download
                      <Download className="w-4 h-4" />
                    </Link>
                  </MotionDiv>
                ))}
              </MotionDiv>
            )}
          </div>
        </section>
      </SlideInSection>

      {/* Guidelines Section */}
      <SlideInSection>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-[#003b2d]">Branding Best Practices</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ensure your usage aligns with our standards to maintain trust and consistency. Always review the full guidelines before implementation.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <Shield className="w-8 h-8 text-green-500 mx-auto" />
                  <h3 className="font-semibold">Do&apos;s</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Use official assets only</li>
                    <li>• Maintain proportions and colors</li>
                    <li>• Credit AnoCloud in context</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <Zap className="w-8 h-8 text-red-500 mx-auto" />
                  <h3 className="font-semibold">Don&apos;ts</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Alter or animate badges</li>
                    <li>• Use on unauthorized materials</li>
                    <li>• Combine with conflicting brands</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <Star className="w-8 h-8 text-blue-500 mx-auto" />
                  <h3 className="font-semibold">Tips</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Test on various backgrounds</li>
                    <li>• Seek approval for custom uses</li>
                    <li>• Update badges annually</li>
                  </ul>
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* CTA Section */}
      <SlideInSection>
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Need Custom Badges?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For tailored branding or questions on usage, reach out to our partner success team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#005241] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#003b2d] transition shadow-lg"
            >
              Contact Us
              <Users className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </SlideInSection>
    </main>
  )
}