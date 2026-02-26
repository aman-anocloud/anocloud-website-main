"use client"

import React from 'react'
import Image from 'next/image'
import { Linkedin, Instagram, X, Grid3X3, Database, Shield, Cloud, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SlideInSection from '@/components/SlideInSection'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

export default function RetailPage() {


  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <SlideInSection>
        <section className="relative py-32 site-hero" style={{ backgroundColor: '#eef3f2' }}>
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center site-hero-content">
            {/* Left Image */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="Next-Gen Retail Experience with AI & Omnichannel"
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </MotionDiv>

            {/* Right Content */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-green-dark leading-tight">
                Retail <span className="text-green-primary">Reinvented</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                AnoCloud powers modern retail with AI-driven personalization, real-time analytics, secure omnichannel platforms, and intelligent supply chain automation.
              </p>

              {/* Social Share */}
              <div className="pt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Share on:</h2>
                <div className="flex gap-4">
                  <div className="p-3 bg-green-dark rounded-full cursor-pointer hover:bg-green-primary transition-colors">
                    <Linkedin className="text-white w-5 h-5" />
                  </div>
                  <div className="p-3 bg-[#1d2c2f] rounded-full cursor-pointer hover:bg-[#005241] transition-colors">
                    <Instagram className="text-white w-5 h-5" />
                  </div>
                  <div className="p-3 bg-[#1d2c2f] rounded-full cursor-pointer hover:bg-[#005241] transition-colors">
                    <X className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Main Content Section */}
      <SlideInSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Left Scrollable Content */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 pr-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-green-dark leading-tight">
                Transforming Retail with <span className="text-green-primary">Intelligent Technology</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today's consumers demand seamless, personalized, and instant experiences — across online, mobile, and in-store. Legacy systems can't keep up. AnoCloud helps retailers build the future with AI, data science, secure cloud platforms, and custom software solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From global chains to boutique brands, we enable smarter inventory, hyper-personalized marketing, fraud-proof payments, and unified customer journeys.
              </p>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Database className="w-6 h-6 text-green-primary" />
                    AI & Data Science for Smarter Retail
                  </h2>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">E-commerce & Omnichannel Brands:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Demand Forecasting & Inventory Optimization:</strong> Reduce stockouts and overstock with 95%+ accurate predictions.</li>
                      <li><strong>Hyper-Personalized Recommendations:</strong> Boost AOV and loyalty with real-time AI engines.</li>
                      <li><strong>Customer Lifetime Value Prediction:</strong> Identify VIPs early and reduce churn proactively.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Physical & Hybrid Retailers:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Computer Vision Analytics:</strong> Foot traffic heatmaps, queue management, theft prevention.</li>
                      <li><strong>Dynamic Pricing Engines:</strong> Adjust prices in real-time based on demand, competitor data, and weather.</li>
                      <li><strong>Smart Shelf & Supply Chain Visibility:</strong> IoT + AI for automated replenishment.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-primary" />
                    Cybersecurity: Securing Customer Trust
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>PCI-DSS compliant payment systems and tokenization.</li>
                    <li>Real-time fraud detection using behavioral biometrics.</li>
                    <li>Zero-trust architecture for POS, e-commerce, and mobile apps.</li>
                    <li>Regular penetration testing and compliance automation.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Cloud className="w-6 h-6 text-green-primary" />
                    Software Development: Seamless Experiences
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Unified Omnichannel Platforms:</strong> One backend for web, app, and in-store.</li>
                    <li><strong>Loyalty & Gamification Apps:</strong> Drive repeat purchases with personalized rewards.</li>
                    <li><strong>AR Try-On & Virtual Stores:</strong> Next-gen shopping experiences.</li>
                    <li><strong>Headless Commerce Architecture:</strong> Future-proof, fast, and flexible.</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 mt-6">
                  Whether you're a fast-growing D2C brand or an established retail giant, AnoCloud delivers measurable results: higher conversions, lower costs, and unbreakable customer trust.
                </p>

                <p className="text-lg font-semibold text-gray-900 mt-4">
                  Let's build the future of retail — together.
                </p>
              </div>
            </MotionDiv>

            {/* Right Images */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="Augmented Reality Shopping Experience"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80"
                  alt="AI-Powered Smart Store"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
                  alt="Seamless Omnichannel Journey"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Industry Navigation */}
      <SlideInSection>
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto border-t border-b border-gray-200">
            <div className="grid grid-cols-3 items-center text-center gap-8 py-6">
              <a href="/industry/finance" className="text-xl font-semibold text-gray-700 hover:text-green-primary transition-colors cursor-pointer">
                Finance
              </a>
              <div className="flex justify-center">
                <Grid3X3 className="text-green-primary w-8 h-8" />
              </div>
              <a href="/industry/healthcare" className="text-xl font-semibold text-green-primary hover:text-gray-700 transition-colors cursor-pointer">
                Healthcare
              </a>
            </div>
          </div>
        </section>
      </SlideInSection>

      {/* Services Teaser */}
      <SlideInSection>
        <section className="py-20" style={{ backgroundColor: '#1d2b29' }}>
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Expert Consulting Team"
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Explore More</p>
              <h1 className="text-4xl font-bold text-white">Our Services</h1>
              <p className="text-gray-300 leading-relaxed">
                From AI strategy to full-stack development and cloud transformation — we deliver end-to-end solutions that drive real business impact.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-green-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-green-dark transition shadow-lg cursor-pointer"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Contact Form Section */}
      <SlideInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Let's get in touch</h2>
                  <p className="text-gray-600 mb-8 max-w-lg">
                    Ready to transform your retail business? Tell us about your goals — big or small.
                  </p>
                </div>

                <div className="space-y-6">
                  <ContactForm defaultService={'Retail Solutions'} title="Let's get in touch" />
                </div> 
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="pt-10 md:pt-0"
              >
                <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Let's build your retail advantage</h3>
                  <blockquote className="text-gray-700 italic border-l-4 border-green-primary pl-4">
                    "We don't just implement technology — we help you win customers, outsmart competitors, and future-proof your business."
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">Vishal Kumar Gupta</p>
                    <p className="text-sm text-gray-500">Founder, AnoCloud</p>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>
      </SlideInSection>
    </main>
  )
}