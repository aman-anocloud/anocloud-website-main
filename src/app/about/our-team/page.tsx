'use client'

import Image from 'next/image'
import { ChevronDown, Users, Zap, Shield, Database } from 'lucide-react'
import SlideInSection from '@/components/SlideInSection'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

const faqs = [
  {
    question: "What expertise does the founding team bring to AnoCloud?",
    answer: "Our founders combine decades of experience in technology leadership, business strategy, and customer success. Vishal Gupta drives business growth, Vivek Gupta leads technical innovation, and Anish Kumar ensures exceptional client outcomes through tailored solutions.",
    icon: Users,
  },
  {
    question: "How does the team approach AI and cloud projects?",
    answer: "We leverage agile methodologies and deep domain knowledge to deliver scalable AI integrations and cloud modernizations. From ideation to deployment, our collaborative process ensures alignment with your business goals and seamless execution.",
    icon: Zap,
  },
  {
    question: "What makes AnoCloud's team stand out in cybersecurity?",
    answer: "With certified experts in risk management and threat detection, our team implements proactive defenses using advanced tools like SIEM and XDR. We focus on zero-trust architectures to protect your assets in multi-cloud environments.",
    icon: Shield,
  },
  {
    question: "How does the team support data-driven decisions?",
    answer: "Our specialists in data engineering and analytics build robust pipelines with tools like BigQuery and Databricks, transforming raw data into actionable insights for enhanced operational efficiency and strategic foresight.",
    icon: Database,
  },
]

export default function OurTeamPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const teamMembers = [
    {
      name: 'Vishal Gupta',
      role: 'Founder & Business Head',
      image: '/team/vishal.jpeg',
      bio: 'Visionary leader with 15+ years in IT consulting, specializing in strategic partnerships and business transformation.',
    },
    {
      name: 'Vivek Gupta',
      role: 'Founder & Technology Head',
      image: '/team/vivek.jpeg',
      bio: 'Expert in cloud architecture and AI development, driving innovative solutions for enterprise scalability.',
    },
    {
      name: 'Anish Kumar',
      role: 'Co-founder & Customer Success Lead',
      image: '/team/anish.jpeg',
      bio: 'Customer-centric innovator focused on delivering measurable ROI through personalized service and agile delivery.',
    },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Banner Section */}
      <SlideInSection>
        <section className="relative py-32 site-hero" style={{ backgroundColor: '#eef3f2' }}>
          <div className="absolute inset-0">
            <Image
              src="/team-banner.png"
              alt="Our Team Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 text-center z-10 site-hero-content">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Our <span className="text-[#005241]">Team</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                A collective of passionate innovators dedicated to powering your success with cutting-edge AI, cloud, and security expertise.
              </p>
            </MotionDiv>
          </div>
          {/* Green accent border at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#005241] to-[#003b2d]"></div>
        </section>
      </SlideInSection>

      {/* Founding Members Section */}
      <SlideInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-sm text-gray-500 uppercase tracking-wide">Founding Members</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003b2d] mb-4">Pioneers in Innovation</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Meet the visionaries behind AnoCloud, blending strategic insight with technical prowess to deliver transformative IT solutions.
              </p>
            </MotionDiv>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <MotionDiv
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-[#005241] transition-all overflow-hidden"
                >
                  <div className="relative mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="mx-auto rounded-2xl object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#005241]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-[#003b2d] mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-3 font-semibold">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>
      </SlideInSection>

      {/* FAQs Section */}
      <SlideInSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[240px_1fr] gap-12 items-start">
              {/* Left Section – Heading */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block sticky top-20 self-start"
              >
                <h2 className="text-5xl font-bold text-[#1d2c2f] rotate-[-90deg] whitespace-nowrap">FAQs</h2>
              </MotionDiv>

              {/* Right Section – Questions */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#005241] transition-colors cursor-pointer overflow-hidden"
                    onClick={() => toggle(index)}
                  >
                    <MotionDiv
                      animate={{ height: openIndex === index ? 'auto' : 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-between items-start gap-4"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <faq.icon className="w-6 h-6 text-[#005241] mt-1 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-gray-900 leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <MotionDiv
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="h-6 w-6 text-gray-500" />
                      </MotionDiv>
                    </MotionDiv>
                    <MotionDiv
                      initial={false}
                      animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden mt-4"
                    >
                      <p className="text-gray-700 leading-relaxed pl-10 border-l-2 border-[#005241]">
                        {faq.answer}
                      </p>
                    </MotionDiv>
                  </div>
                ))}
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Connect with Our Team</h2>
                  <p className="text-gray-600 mb-8 max-w-lg">
                    Ready to collaborate? Share your vision, and let's discuss how our experts can bring it to life.
                  </p>
                </div>

                <ContactForm defaultService="Team Inquiry" title="Connect with Our Team" />
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