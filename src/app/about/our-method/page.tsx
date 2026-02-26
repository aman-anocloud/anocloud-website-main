'use client'

import Image from "next/image"
import Link from 'next/link'
import { ArrowDownRight, CheckCircle, Users, Lightbulb, Zap, Cloud, Shield } from 'lucide-react'
import SlideInSection from '@/components/SlideInSection'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Banner Section */}
      <SlideInSection>
        <section className="relative py-32 site-hero" style={{ backgroundColor: '#eef3f2' }}>
          <div className="absolute inset-0">
            <Image
              src="/background-network.png"
              alt="Digital Network Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/35 pointer-events-none" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 text-center z-10 site-hero-content">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#FFFFFF] leading-tight">
                Confidently Navigating <br />
                <span className="text-[#ffffff]">Through Change</span>
              </h1>
              <p className="text-xl text-[#FFFFFF] max-w-3xl mx-auto">
                Our experts empower businesses to adapt, innovate, and thrive amid digital transformations with secure, intelligent solutions.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#005241] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#003b2d] transition shadow-lg"
              >
                Discover Our Expertise
                <ArrowDownRight className="w-5 h-5" />
              </Link>
            </MotionDiv>
          </div>
          {/* Green accent border at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#005241] to-[#003b2d]"></div>
        </section>
      </SlideInSection>

      {/* Stats Section */}
      <SlideInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { num: '30+', label: 'Years of Applied Experience', icon: Cloud },
                { num: '20+', label: 'Associated Solution Partners', icon: Users },
                { num: '10+', label: 'Industry Applications', icon: Lightbulb },
                { num: '200+', label: 'Subject Matter Experts', icon: Zap },
              ].map((stat, index) => (
                <MotionDiv
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4 p-4 rounded-xl border border-gray-200 hover:border-[#005241] transition-colors"
                >
                  <stat.icon className="w-12 h-12 text-[#005241] mx-auto" />
                  <h2 className="text-4xl md:text-5xl font-bold text-[#003b2d]">{stat.num}</h2>
                  <p className="text-gray-700 text-lg">{stat.label}</p>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Side-by-Side Images */}
      <SlideInSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-white hover:border-[#005241] transition-colors"
            >
              <Image
                src="/vr-interface.jpg"
                alt="VR Interaction"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-white hover:border-[#005241] transition-colors"
            >
              <Image
                src="/developer-screens.jpg"
                alt="Developer at work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Unlock Potential Section */}
      <SlideInSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_80px] items-start gap-12">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1d2c2f] max-w-4xl">
                Collaborate with us to unlock your <span className="text-[#005241]">potential</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
                At AnoCloud, transparency is our foundation. From client communications to strategic decisions, we deliver forthright insights and innovative solutions that drive real transformation.
              </p>
              <div className="flex flex-wrap gap-8 text-lg font-medium">
                {[
                  { icon: CheckCircle, label: 'Strategic Expertise' },
                  { icon: CheckCircle, label: 'Customized Solutions' },
                  { icon: CheckCircle, label: 'Full-Service Delivery' },
                ].map((item, index) => (
                  <MotionDiv
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="text-[#005241] w-6 h-6" />
                    <span>{item.label}</span>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

            {/* Arrow Section */}
            <Link href="/services">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#1d2c2f] h-20 w-20 flex items-center justify-center rounded-full hover:bg-[#2a3b3e] cursor-pointer transition-colors"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <ArrowDownRight className="text-white w-6 h-6" />
              </MotionDiv>
            </Link>
          </div>
        </section>
      </SlideInSection>

      {/* Grid Section with Images and Text */}
      <SlideInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-white hover:border-[#005241] transition-colors"
              >
                <Image
                  src="/collaboration1.webp"
                  alt="Collaboration discussion"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 p-6 border-2 border-gray-200 rounded-2xl flex items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#005241] transition-all"
              >
                <div className="space-y-4">
                  <Shield className="w-12 h-12 text-[#005241] mx-auto" />
                  <h3 className="text-xl font-bold text-[#003b2d]">Flexible and Understanding</h3>
                  <p className="text-gray-700">
                    We adapt to your unique challenges, providing dynamic solutions that evolve with your business needs.
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-white hover:border-[#005241] transition-colors"
              >
                <Image
                  src="/collaboration2.webp"
                  alt="Business discussion"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 p-6 border-2 border-gray-200 rounded-2xl flex items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#005241] transition-all order-1 sm:order-none"
              >
                <div className="space-y-4">
                  <Lightbulb className="w-12 h-12 text-[#005241] mx-auto" />
                  <h3 className="text-xl font-bold text-[#003b2d]">Growth & Development</h3>
                  <p className="text-gray-700">
                    Fueling personal and organizational advancement through cutting-edge AI and cloud innovations.
                  </p>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-white hover:border-[#005241] transition-colors"
              >
                <Image
                  src="/collaboration3.webp"
                  alt="Team celebration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gray-50 p-6 border-2 border-gray-200 rounded-2xl flex items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#005241] transition-all"
              >
                <div className="space-y-4">
                  <Users className="w-12 h-12 text-[#005241] mx-auto" />
                  <h3 className="text-xl font-bold text-[#003b2d]">Open & Transparent</h3>
                  <p className="text-gray-700">
                    Building trust through clear communication, ethical practices, and collaborative partnerships.
                  </p>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>
      </SlideInSection>

      {/* Contact Form Section */}
      <SlideInSection>
        <section className="py-20 bg-white text-gray-800">
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

                <ContactForm defaultService="General Inquiry" title="Let's get in touch" />
              </MotionDiv>

              {/* Right: Quote Section */}
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="pt-10 md:pt-0"
              >
                <div className="bg-gray-50 p-8 rounded-2xl space-y-6 border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900">Let's discuss your project</h3>
                  <blockquote className="text-gray-700 italic border-l-4 border-[#005241] pl-4">
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