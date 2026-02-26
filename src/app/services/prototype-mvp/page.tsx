'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Zap, Lightbulb, Users, Database, Shield, Cloud } from "lucide-react"
import SlideInSection from '@/components/SlideInSection'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const faqs = [
  {
    question: "What is the difference between a prototype and an MVP?",
    answer: "A prototype is an early, often non-functional model to visualize and test concepts, while an MVP is a functional product with core features to validate market demand and gather real user feedback.",
    icon: Lightbulb,
  },
  {
    question: "How long does it take to develop an MVP with AnoCloud?",
    answer: "Timelines vary by complexity, but our agile process typically delivers an MVP in 4-12 weeks, including discovery, development, and iteration based on your specific requirements.",
    icon: Zap,
  },
  {
    question: "What technologies do you use for prototypes and MVPs?",
    answer: "We leverage modern stacks like React for front-end, Node.js/Python for back-end, and cloud services (AWS, Azure, GCP) for scalability, ensuring rapid prototyping and deployment.",
    icon: Cloud,
  },
  {
    question: "How do you ensure user feedback is incorporated?",
    answer: "Through iterative cycles of usability testing, A/B experiments, and analytics integration, we refine the product continuously to align with user needs and business goals.",
    icon: Users,
  },
]

export default function PrototypePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const services = [
    { title: "Cloud and Infrastructure Modernisation", path: "/services/cloud-infrastructure", icon: Cloud },
    { title: "Artificial Intelligence Development & Integration", path: "/services/ai-development", icon: Zap },
    { title: "Data Analytics & Data Engineering", path: "/services/data-analytics", icon: Database },
    { title: "Cyber Security & Risk Management", path: "/services/cybersecurity-risk", icon: Shield },
    { title: "Software & Application Development", path: "/services/software-development", icon: Lightbulb },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <SlideInSection>
        <section className="relative py-32 site-hero" style={{ backgroundColor: '#eef3f2' }}>
          <div className="relative max-w-7xl mx-auto px-4 text-center z-10 site-hero-content">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-green-dark leading-tight">
                Prototype and MVP <br />
                <span className="text-green-primary">Development</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Transform your ideas into actionable realities with our expert prototyping and MVP services.
              </p>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Main Layout Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12">
            
            {/* Sidebar Section */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-green-dark rounded-2xl p-6 space-y-1 shadow-xl"
              >
                {services.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="group block text-white text-base py-4 border-b border-gray-600 last:border-b-0 flex items-center gap-3 hover:text-green-primary transition-colors hover:bg-gray-800/30 rounded-lg px-2"
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </MotionDiv>
            </aside>

            {/* Main Content Section */}
            <main className="space-y-16">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Image */}
                <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/mvp-meeting.jpg" 
                    alt="MVP Meeting"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Main Heading & Intro */}
                <div className="space-y-6 bg-gray-50 p-8 rounded-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-green-dark leading-tight">
                    Bringing Your Ideas to Life
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At AnoCloud, we understand the transformative power of innovative ideas. But translating those ideas into a real-world product can be a daunting task. This is where our Prototype and MVP Development services come in. We partner with you to turn your vision into a tangible prototype or Minimum Viable Product (MVP), allowing you to validate your concept, gather user feedback, and make informed decisions about your product's future.
                  </p>
                </div>
              </MotionDiv>

              {/* Content Sections */}
              <div className="space-y-12">
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <Lightbulb className="w-7 h-7 text-green-primary" />
                    What is a Prototype?
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A prototype is a basic, functional representation of your product idea. It focuses on core functionalities and allows you to test the core user experience. Prototypes can range from low-fidelity sketches and wireframes to high-fidelity interactive prototypes that mimic the final product's look and feel.
                  </p>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <Zap className="w-7 h-7 text-green-primary" />
                    What is an MVP?
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed">
                    A Minimum Viable Product (MVP) is a functional product with a limited set of features that targets a specific set of early users. It allows you to gather valuable user feedback and iterate on your product based on real-world data. The MVP serves as the foundation for your future product development roadmap.
                  </p>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <Users className="w-7 h-7 text-green-primary" />
                    Why Choose AnoCloud?
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    At AnoCloud, we bring a unique blend of data science expertise and software development prowess to the table. This allows us to not only build prototypes and MVPs but also leverage data insights to inform their development.
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Data-Driven Approach:", desc: "We leverage data analytics to understand your target audience, their needs, and potential pain points." },
                      { strong: "Agile Development:", desc: "We employ agile methodologies for iterative development, continuous testing, and rapid feedback loops." },
                      { strong: "Expert Team:", desc: "Our data scientists, designers, and developers combine technical expertise with user-centered design." },
                      { strong: "Cost-Effective:", desc: "We define scope to deliver maximum value within your budget constraints." },
                    ].map((item, idx) => (
                      <li key={idx} className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                        <span className="text-green-primary font-bold mt-1 flex-shrink-0">✓</span>
                        <span>
                          <strong className="text-gray-900">{item.strong}</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <Cloud className="w-7 h-7 text-[#005241]" />
                    Our Development Process
                  </h2>
                  <ol className="space-y-4 pl-6">
                    {[
                      { strong: "Discovery Workshop:", desc: "Understand your vision, audience, and goals through brainstorming and analysis." },
                      { strong: "User Research:", desc: "Conduct surveys, interviews, and market research to identify needs." },
                      { strong: "Definition:", desc: "Collaboratively define scope and core features for maximum value." },
                      { strong: "Design:", desc: "Create user-centric wireframes, mockups, or interactive prototypes." },
                      { strong: "Development:", desc: "Build with scalable technologies for seamless future growth." },
                      { strong: "Testing:", desc: "Rigorous usability testing and feedback collection via surveys and A/B tests." },
                      { strong: "Iteration:", desc: "Refine based on feedback in continuous cycles until optimized." },
                    ].map((item, idx) => (
                      <li key={idx} className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                        <span className="text-green-primary font-bold mt-1 flex-shrink-0">{idx + 1}.</span>
                        <span>
                          <strong className="text-gray-900">{item.strong}</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ol>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <Database className="w-7 h-7 text-[#005241]" />
                    Beyond Development
                  </h2>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Product Roadmap:", desc: "Data-informed prioritization of features based on user needs and trends." },
                      { strong: "Investment Pitch:", desc: "Craft compelling pitches using validated feedback and market analysis." },
                      { strong: "Go-to-Market Strategy:", desc: "Position your product effectively to reach and engage your audience." },
                    ].map((item, idx) => (
                      <li key={idx} className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                        <span className="text-[#005241] font-bold mt-1 flex-shrink-0">•</span>
                        <span>
                          <strong className="text-gray-900">{item.strong}</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </MotionDiv>

                {/* FAQ Section */}
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="pt-8 border-t border-gray-200 space-y-6"
                >
                  <h2 className="text-3xl font-bold text-[#003b2d] mb-8">Frequently Asked Questions</h2>
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#005241] transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-md"
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
            </main>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <SlideInSection>
        <section className="py-20 bg-white text-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* Left: Contact Form (shared component) */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <ContactForm defaultService={'Prototype & MVP Development'} />
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