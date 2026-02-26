'use client'

import { Linkedin, Instagram, X, Grid3X3, Shield, Database, Cloud, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SlideInSection from '@/components/SlideInSection'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <SlideInSection>
        <section className="relative py-32 site-hero" style={{ backgroundColor: '#eef3f2' }}>
          <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-10 site-hero-content">
            {/* Left Image */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/healthcare-robot.png"
                alt="Healthcare Robot"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
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
                Healthcare <span className="text-green-primary">Innovation</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                AnoCloud empowers healthcare organizations with data science, AI, cybersecurity, and software development to deliver better patient care, reduce costs, and drive innovation.
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
                Empowering Healthcare with <span className="text-green-primary">Advanced Tech</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                The healthcare industry is undergoing a transformative shift, driven by a surge in data generation, technological advancements, and a growing demand for personalized medicine. AnoCloud is well-positioned to address these challenges and empower healthcare organizations to achieve operational excellence, improve patient outcomes, and drive innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This explores how AnoCloud's comprehensive suite of services—data science, AI, cybersecurity, and software development—benefits stakeholders across the healthcare sector.
              </p>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Database className="w-6 h-6 text-green-primary" />
                    Data Science and AI for Enhanced Decision-Making
                  </h2>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Hospitals and Health Systems:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Predictive Analytics:</strong> Develop models to anticipate readmissions, complications, and optimize resources.</li>
                      <li><strong>Clinical Decision Support:</strong> Suggest evidence-based treatments using AI analysis.</li>
                      <li><strong>Patient Flow Management:</strong> Optimize operations with real-time data insights.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Pharmaceutical Companies:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Drug Discovery:</strong> Analyze genomic data to identify drug targets.</li>
                      <li><strong>Clinical Trials:</strong> Use AI to select patient groups and accelerate trials.</li>
                      <li><strong>Pharmacovigilance:</strong> Monitor real-world data for early adverse event detection.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Medical Insurance:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Fraud Detection:</strong> Identify patterns and personalize premiums.</li>
                      <li><strong>Disease Management:</strong> Target high-risk patients for cost reduction.</li>
                      <li><strong>Claims Automation:</strong> Streamline processing with AI-driven efficiency.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-primary" />
                    Cybersecurity: Protecting Sensitive Data
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Vulnerability assessments and penetration testing.</li>
                    <li>SIEM systems for real-time threat detection.</li>
                    <li>Secure data policies and compliance frameworks.</li>
                    <li>Employee training for cybersecurity awareness.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Cloud className="w-6 h-6 text-green-primary" />
                    Software Development: Innovative Solutions
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Telehealth Platforms:</strong> Secure remote care solutions.</li>
                    <li><strong>Patient Engagement:</strong> Portals for tracking and communication.</li>
                    <li><strong>Medical Imaging:</strong> AI-powered analysis for diagnostics.</li>
                    <li><strong>Remote Monitoring:</strong> Real-time vital signs tracking.</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 mt-6">
                  By leveraging AnoCloud's services, healthcare organizations can improve efficiency, enhance patient safety, drive innovation, and stay compliant with regulations.
                </p>

                <p className="text-lg font-semibold text-gray-900 mt-4">
                  Contact AnoCloud today to discuss your specific requirements and learn how we can help you achieve your healthcare transformation goals.
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
                  src="/surgery-robot.png"
                  alt="Robotic Surgery"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/elderly-care.png"
                  alt="Elderly Care with Robot"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/bionic-leg.png"
                  alt="Bionic Leg Medical Tech"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
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
              <Link href="/industry/retail" className="text-xl font-semibold text-gray-700 hover:text-green-primary transition-colors">
                Retail
              </Link>
              <div className="flex justify-center">
                <Grid3X3 className="text-green-primary w-8 h-8" />
              </div>
              <Link href="/industry/education" className="text-xl font-semibold text-green-primary hover:text-gray-700 transition-colors">
                Education
              </Link>
            </div>
          </div>
        </section>
      </SlideInSection>

      {/* Services Teaser */}
      <SlideInSection>
        <section className="py-20" style={{ backgroundColor: '#1d2b29' }}>
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/consultant.webp"
                alt="Services"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </MotionDiv>

            {/* Right Text Block */}
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
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-green-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-green-dark transition shadow-lg"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Contact Form Section */}
      <SlideInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Left: Contact Form */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Let’s get in touch</h2>
                  <p className="text-gray-600 mb-8 max-w-lg">
                    We value your feedback and inquiries. Whether you have questions about our services, need assistance, or want to explore potential collaborations, we're here to assist you.
                  </p>
                </div>

                <ContactForm defaultService="Healthcare Inquiry" title="Let’s get in touch" />
              </MotionDiv>

              {/* Right: Quote Section */}
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