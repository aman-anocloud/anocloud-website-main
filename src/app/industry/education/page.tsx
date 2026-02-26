"use client"

import React from 'react'
import { Linkedin, Instagram, X, Grid3X3, Database, Shield, Cloud, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SlideInSection from '@/components/SlideInSection'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

export default function EducationPage() {
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
                  src="/education-industry.png"
                  alt="Education Industry"
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
                Education <span className="text-green-primary">Transformation</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                AnoCloud is your partner in transforming education. We leverage data science, AI, and cybersecurity to optimize learning, enhance administration, and protect your institution.
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
                Unleashing the Power of <span className="text-green-primary">Data in Education</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                The education sector is undergoing a digital revolution. With the increasing volume of data generated, the need for advanced analytics and intelligent solutions is paramount. AnoCloud, as a data science, AI, and software consulting company, is uniquely positioned to help educational institutions harness the power of data to drive innovation, improve outcomes, and create a more efficient and personalized learning environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This comprehensive guide explores the diverse applications of AnoCloud's services within the education sector, demonstrating how we can empower schools, universities, and other educational organizations to achieve their goals.
              </p>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Database className="w-6 h-6 text-green-primary" />
                    Data Science for Education
                  </h2>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Student Success and Retention:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Predictive Analytics:</strong> Identify students at risk of academic failure or dropout through early warning systems based on historical data and behavioral patterns.</li>
                      <li><strong>Personalized Learning:</strong> Analyze student performance data to tailor learning experiences to individual needs and preferences, optimizing learning outcomes.</li>
                      <li><strong>Student Engagement:</strong> Measure engagement levels through data (attendance, activity, grades) to identify areas for improvement.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Academic Performance and Curriculum Optimization:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Performance Analysis:</strong> Evaluate teaching methods and curriculum using student performance data.</li>
                      <li><strong>Curriculum Optimization:</strong> Identify knowledge gaps and improve curriculum using insights.</li>
                      <li><strong>Resource Allocation:</strong> Optimize allocation based on enrollment, performance, and workload.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Administrative Efficiency:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Enrollment Management:</strong> Predict trends and improve retention using data strategies.</li>
                      <li><strong>Financial Analysis:</strong> Find cost-saving opportunities and improve budgeting.</li>
                      <li><strong>Facility Management:</strong> Optimize facility use and energy through data.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Cloud className="w-6 h-6 text-green-primary" />
                    Artificial Intelligence (AI) in Education
                  </h2>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Intelligent Tutoring Systems:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Adaptive Learning:</strong> Build AI tutoring systems that adapt to student styles.</li>
                      <li><strong>Personalized Feedback:</strong> Give real-time, AI-based feedback and guidance.</li>
                      <li><strong>Skill Assessment:</strong> Use AI to assess knowledge and skills more accurately.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Administrative Automation:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Chatbots and Virtual Assistants:</strong> Automate tasks and support for students/staff.</li>
                      <li><strong>Intelligent Process Automation:</strong> Improve efficiency and reduce errors in admin tasks.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-primary" />
                    Cybersecurity in Education
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Advanced Threat Detection:</strong> Detect phishing, malware, and ransomware attacks.</li>
                    <li><strong>Network Security:</strong> Secure institutional networks from unauthorized access.</li>
                    <li><strong>Data Protection:</strong> Implement robust privacy and security protocols.</li>
                    <li><strong>Compliance Management:</strong> Ensure GDPR, CCPA, and other regulations are followed.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#003b2d] flex items-center gap-3">
                    <Cloud className="w-6 h-6 text-[#005241]" />
                    Software Development for Education
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Custom LMS Development:</strong> Build LMS tailored to specific institution needs.</li>
                    <li><strong>Mobile Applications:</strong> Enable access to grades, events, updates, and communication tools.</li>
                    <li><strong>Data Analytics Platforms:</strong> Empower educators with dashboards and insight tools.</li>
                    <li><strong>Campus Management Apps:</strong> Provide services like maps, calendars, and support.</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 mt-6">
                  AnoCloud is committed to empowering educational institutions through data science, AI, cybersecurity, and software development. By leveraging our expertise, schools and universities can enhance student success, optimize operations, and safeguard digital assets.
                </p>

                <p className="text-lg font-semibold text-gray-900 mt-4">
                  Contact AnoCloud today to discuss your specific requirements and learn how we can help you achieve your educational transformation goals.
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
                  src={encodeURI('/robo kids education.png')}
                  alt="Robot Kids Education"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={encodeURI('/Global School.png')}
                  alt="Global School"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/education-industry.png"
                  alt="Education Technology"
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
              <Link href="/industry/agriculture" className="text-xl font-semibold text-gray-700 hover:text-green-primary transition-colors">
                Agriculture
              </Link>
              <div className="flex justify-center">
                <Grid3X3 className="text-green-primary w-8 h-8" />
              </div>
              <Link href="/industry/healthcare" className="text-xl font-semibold text-green-primary hover:text-gray-700 transition-colors">
                Healthcare
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Let's get in touch</h2>
                  <p className="text-gray-600 mb-8 max-w-lg">
                    We value your feedback and inquiries. Whether you have questions about our services, need assistance, or want to explore potential collaborations, we're here to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <ContactForm defaultService="Education Inquiry" title="Let's get in touch" />
                </div> 
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