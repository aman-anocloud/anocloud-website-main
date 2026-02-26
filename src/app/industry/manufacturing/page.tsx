"use client"

import React from 'react'
import Image from 'next/image'
import { Linkedin, Instagram, X, Grid3X3, Database, Shield, Cog, ArrowRight, Factory, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import SlideInSection from '@/components/SlideInSection'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

export default function ManufacturingPage() {
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
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80"
                  alt="Advanced Manufacturing Facility"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
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
                Manufacturing <span className="text-green-primary">Revolution</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                AnoCloud empowers manufacturers with data science, AI, cybersecurity, and software development to optimize operations, reduce downtime, and drive intelligent production.
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
                Empowering Manufacturers with <span className="text-green-primary">Advanced Technology</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                The manufacturing sector is undergoing a significant transformation fueled by advancements in data science, artificial intelligence (AI), cybersecurity, and software development. Manufacturers are no longer competing solely on product quality and price. They now require a data-driven approach to optimize operations, improve efficiency, and gain a competitive edge.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                AnoCloud, a leading data science, AI, and software consulting company, is here to empower manufacturers with a comprehensive suite of solutions designed to address their specific needs. Here's how AnoCloud can transform your manufacturing operations across various industry segments.
              </p>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Database className="w-6 h-6 text-green-primary" />
                    Unlocking Hidden Potential: Data Science and AI for Smarter Manufacturing
                  </h2>

                  <p className="text-gray-700">
                    In today's data-rich environment, manufacturers have access to vast amounts of information from production lines, sensors, and customer data. AnoCloud's data science expertise helps you harness this data to gain actionable insights.
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Predictive Maintenance:</strong> Develop predictive maintenance models that anticipate equipment failures before they occur—minimizing downtime and reducing repair costs.</li>
                    <li><strong>Process Optimization:</strong> Analyze production data to identify inefficiencies and develop AI-powered solutions to improve throughput and reduce waste.</li>
                    <li><strong>Quality Control Enhancement:</strong> Use AI to detect product defects in real-time with high accuracy.</li>
                    <li><strong>Demand Forecasting:</strong> Leverage historical data and customer behavior to generate accurate demand forecasts.</li>
                    <li><strong>Product Innovation:</strong> Analyze market trends and customer feedback to identify new product opportunities and design innovations.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-primary" />
                    Securing Your Competitive Edge: Cybersecurity Solutions
                  </h2>
                  <p className="text-gray-700">
                    As manufacturers increasingly rely on interconnected systems, cybersecurity threats have become a critical concern. AnoCloud provides end-to-end solutions to secure your infrastructure and sensitive data.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Vulnerability Assessment & Penetration Testing:</strong> Identify and patch vulnerabilities with expert-led simulations.</li>
                    <li><strong>SIEM (Security Information and Event Management):</strong> Real-time infrastructure monitoring for rapid threat detection and response.</li>
                    <li><strong>Zero-Trust Security:</strong> Implement identity-based verification models for secure access control.</li>
                    <li><strong>Data Security & Privacy:</strong> Ensure regulatory compliance and protect critical IP and customer data.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Cog className="w-6 h-6 text-green-primary" />
                    Building the Future of Manufacturing: Software Development Expertise
                  </h2>
                  <p className="text-gray-700">
                    AnoCloud's development team builds tailored tools to improve manufacturing efficiency and visibility across operations.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>MES (Manufacturing Execution Systems):</strong> Real-time production insights to aid in planning and resource allocation.</li>
                    <li><strong>ERP (Enterprise Resource Planning):</strong> Integrated platforms to manage manufacturing, finance, HR, and supply chains.</li>
                    <li><strong>Industrial Automation:</strong> Robotics and software to automate repetitive or precision-based tasks.</li>
                    <li><strong>Data Visualization Dashboards:</strong> Visualize KPIs and production data clearly for better decision-making.</li>
                    <li><strong>Mobile Applications:</strong> On-the-go monitoring for shop-floor operations and real-time alerts.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Factory className="w-6 h-6 text-green-primary" />
                    AnoCloud Serves Diverse Manufacturing Segments
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Discrete Manufacturing:</strong> Optimizing production of units like electronics, automobiles, and machinery.</li>
                    <li><strong>Process Manufacturing:</strong> Enhancing production lines for chemicals and continuous flows.</li>
                    <li><strong>Food & Beverage:</strong> Ensuring safety, quality, and customization at scale.</li>
                    <li><strong>Pharmaceutical:</strong> Streamlining R&D, quality control, and regulatory compliance.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-green-primary" />
                    Beyond Core Manufacturing
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Supply Chain Optimization:</strong> AI-driven demand planning, inventory control, and supplier insights.</li>
                    <li><strong>Customer Relationship Management (CRM):</strong> Improve customer targeting, satisfaction, and retention via data-driven insights.</li>
                    <li><strong>Business Intelligence:</strong> Convert real-time production and sales data into actionable strategies.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#003b2d]">The AnoCloud Advantage</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Industry Expertise:</strong> Deep knowledge of sector-specific challenges and goals.</li>
                    <li><strong>End-to-End Services:</strong> One-stop-shop for AI, software, and security solutions.</li>
                    <li><strong>Scalable Architecture:</strong> Built to grow with your manufacturing business.</li>
                    <li><strong>Security & Compliance:</strong> Industry-best practices for protecting sensitive data.</li>
                    <li><strong>ROI-Focused:</strong> Measurable, business-aligned outcomes that maximize value.</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 mt-6">
                  We work side-by-side with clients to understand their business, engineer precise solutions, and ensure results that drive measurable improvements in efficiency and competitiveness.
                </p>

                <p className="text-lg font-semibold text-gray-900 mt-4">
                  The future of manufacturing is intelligent, secure, and efficient. Partner with AnoCloud to unlock your full operational potential. Contact us today to get started.
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="3D Printing Technology"
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                  alt="Automated Warehouse"
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80"
                  alt="Smart Factory Floor"
                  fill
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
                alt="Expert Consulting Services"
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
                At AnoCloud, we provide a comprehensive suite of consulting services designed to help businesses excel in today's fast-paced and competitive environment. Our expert team leverages cutting-edge technology and industry insights to deliver tailored solutions that drive growth and innovation.
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
                    We value your feedback and inquiries. Whether you have questions about our services, need assistance, or want to explore potential collaborations, we're here to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <ContactForm defaultService={'Manufacturing Solutions'} title="Let's get in touch" />
                </div> 
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="pt-10 md:pt-0"
              >
                <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">Let's discuss your project</h3>
                  <blockquote className="text-gray-700 italic border-l-4 border-green-primary pl-4">
                    "Our dedicated team of IT experts is committed to understanding your unique requirements and crafting tailored solutions that align with your business objectives."
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