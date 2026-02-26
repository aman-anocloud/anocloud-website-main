"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Brain, Sparkles, Cpu, Eye, Database, Zap, Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import SlideInSection from '@/components/SlideInSection'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

const faqs = [
  {
    question: "What services does your business consultant company offer?",
    answer: "Our business consultant company offers a comprehensive range of services, including strategic planning, market research, process optimization, financial analysis, and organizational development. We tailor our services to address the specific needs and goals of each client, ensuring a customized approach to drive success.",
    icon: Sparkles,
  },
  {
    question: "How can your business consultants assist in improving operational efficiency?",
    answer: "Our experienced consultants specialize in identifying operational bottlenecks and inefficiencies. Through in-depth analysis, process mapping, and technology integration, we develop targeted strategies to streamline operations, reduce costs, and enhance overall efficiency, resulting in increased productivity and profitability.",
    icon: Zap,
  },
  {
    question: "What is the typical process for developing a growth strategy with your consultants?",
    answer: "Developing a growth strategy involves several key steps. Initially, our consultants work closely with your team to understand your current market position, competitive landscape, and growth aspirations. We then conduct a thorough analysis to identify growth opportunities and potential obstacles. With this information, we collaboratively create a tailored growth strategy encompassing market expansion.",
    icon: Brain,
  },
  {
    question: "How do your consultants assist in creating a strong digital presence for businesses?",
    answer: "Our consultants recognize the importance of a robust digital presence in today's business landscape. Our team then develops a comprehensive digital strategy that encompasses social media engagement, search engine optimization (SEO), content marketing, and website optimization.",
    icon: Bot,
  },
]

export default function AIPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }


  

  const services = [
    { title: "Cloud and Infrastructure Modernisation", path: "/services/cloud-infrastructure", icon: Database },
    { title: "Data Analytics & Data Engineering", path: "/services/data-analytics", icon: Eye },
    { title: "Cyber Security & Risk Management", path: "/services/cybersecurity-risk", icon: Zap },
    { title: "Software & Application Development", path: "/services/software-development", icon: Cpu },
    { title: "Prototype & MVP Development", path: "/services/prototype-mvp", icon: Sparkles },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <SlideInSection>
        <section className="relative py-32 site-hero">
          <div className="relative max-w-7xl mx-auto px-4 text-center z-10 site-hero-content">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-green-dark leading-tight">
                Artificial Intelligence <br />
                <span className="text-green-primary">Development & Integration</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Harnessing the power of AI to solve complex problems, automate tasks, and drive innovation across your organization.
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
                  <a
                    key={index}
                    href={item.path}
                    className="group block text-white text-base py-4 border-b border-gray-600 last:border-b-0 flex items-center gap-3 hover:text-green-primary transition-colors hover:bg-gray-800/30 rounded-lg px-2 cursor-pointer"
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{item.title}</span>
                  </a>
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
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                    alt="AI Development and Integration"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Main Heading & Intro */}
                <div className="space-y-6 bg-gray-50 p-8 rounded-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-green-dark leading-tight">
                    Transforming Business with Intelligent Solutions
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    These services encompass a wide range of offerings designed to harness the capabilities of AI technologies to solve complex problems, enhance decision-making, automate tasks, and drive innovation. AI services are continually advancing, and their applications are virtually limitless.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    These services empower businesses and organizations across various industries to leverage AI's capabilities and unlock new opportunities for growth, efficiency, and innovation in the digital age.
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
                  <h2 className="text-2xl font-bold text-green-dark mb-6 flex items-center gap-3">
                    <Brain className="w-7 h-7 text-green-primary" />
                    Why AI is Important
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    AI, or Artificial Intelligence, holds significant importance across various domains due to its transformative capabilities. It brings several benefits that contribute to higher standards. Its importance lies in its capacity to revolutionize problem-solving through analytical research. Its impact can be observed in several key areas:
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-green-primary" />
                        Analytical Research for Problem Findings
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        AI holds paramount significance in contemporary society due to its transformative potential across various domains. It excels at processing and analyzing vast amounts of data to uncover patterns and insights that drive innovation.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-primary" />
                        Ensure Quality Services
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        AI can process vast amounts of data swiftly, identifying patterns and trends that might be overlooked by humans, ensuring consistent quality and accuracy in service delivery.
                      </p>
                    </div>
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-green-dark mb-6 flex items-center gap-3">
                    <Cpu className="w-7 h-7 text-green-primary" />
                    What We Do and Focus On
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    In our AI service we focus on these services encompass a wide range of offerings designed to harness the capabilities of AI technologies to solve complex problems, enhance decision-making, automate tasks, and drive innovation. Below, we delve into the details of AI services and the ways they can benefit individuals, businesses, and organizations:
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Machine Learning and Predictive Analytics:", desc: "AI services often leverage machine learning algorithms to analyze vast datasets and extract valuable insights. This enables predictive analytics, helping businesses make data-driven decisions, identify trends, and anticipate future outcomes." },
                      { strong: "Personalization and Recommendation Engines:", desc: "AI services excel in creating personalized user experiences by analyzing user behavior and preferences. Recommendation engines power content recommendations on platforms like Netflix and product recommendations on e-commerce websites." },
                      { strong: "Natural Language Processing (NLP):", desc: "NLP is a subset of AI that focuses on enabling computers to understand, interpret, and generate human language. AI services in NLP can be applied in chatbots, sentiment analysis, language translation, and content generation." },
                      { strong: "Virtual Assistants and Chatbots:", desc: "AI-driven virtual assistants and chatbots are increasingly common in customer service, offering real-time support, answering queries, and providing information to users." },
                      { strong: "Computer Vision:", desc: "AI-driven computer vision services enable machines to interpret and understand visual information from images and videos. This technology is used in facial recognition, object detection, autonomous vehicles, and medical imaging." },
                      { strong: "Healthcare and Life Sciences:", desc: "In healthcare, AI services aid in disease diagnosis, drug discovery, patient care, and genomic analysis. AI-driven algorithms can analyze medical images, detect anomalies, and assist in medical research." },
                    ].map((item, idx) => (
                      <li key={idx} className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                        <span className="text-green-primary font-bold mt-1 flex-shrink-0">✓</span>
                        <span>
                          <strong className="text-gray-900">{item.strong}</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-base text-gray-700 leading-relaxed">
                    AI services are continually advancing, and their applications are virtually limitless. These services empower businesses and organizations across various industries to leverage AI's capabilities and unlock new opportunities for growth, efficiency, and innovation. Whether you're seeking to automate routine tasks, gain insights from data, or enhance customer experiences, AI services have the potential to transform the way you operate and succeed in the digital age.
                  </p>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-green-dark mb-6 flex items-center gap-3">
                    <Bot className="w-7 h-7 text-green-primary" />
                    Benefits & Results
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    In our AI service we focus on these services encompass a wide range of offerings designed to harness the capabilities of AI technologies to solve complex problems, enhance decision-making, automate tasks, and drive innovation. Below, we delve into the details of AI services and the ways they can benefit individuals, businesses, and organizations:
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Enhanced Efficiency:", desc: "AI services automate repetitive tasks, allowing businesses to complete them faster and with fewer errors, leading to increased operational efficiency." },
                      { strong: "Improved Decision-Making:", desc: "AI analyzes vast datasets and provides valuable insights, aiding organizations in making data-driven decisions that lead to better outcomes." },
                      { strong: "Cost Savings:", desc: "By automating tasks and processes, AI services reduce labor costs and optimize resource allocation, resulting in significant cost savings." },
                      { strong: "Enhanced Security:", desc: "AI-driven cybersecurity services detect and respond to threats in real-time, protecting businesses and sensitive data from cyberattacks." },
                      { strong: "24/7 Availability:", desc: "AI-powered chatbots and virtual assistants provide round-the-clock customer support, improving accessibility and responsiveness." },
                      { strong: "Predictive Maintenance:", desc: "In manufacturing and industrial settings, AI services predict equipment failures and maintenance needs, minimizing downtime and reducing costs." },
                      { strong: "Personalization:", desc: "AI services analyze user behavior and preferences to deliver personalized content, product recommendations, and services, enhancing the customer experience." },
                      { strong: "Innovation and Competitive Edge:", desc: "Businesses that embrace AI services gain a competitive advantage by leveraging technology to innovate, adapt to market changes, and stay ahead of competitors." },
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

                {/* FAQ Section */}
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="pt-8 border-t border-gray-200 space-y-6"
                >
                  <h2 className="text-3xl font-bold text-green-dark mb-8">Frequently Asked Questions</h2>
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-green-primary transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-md"
                      onClick={() => toggle(index)}
                    >
                      <MotionDiv
                        animate={{ height: openIndex === index ? 'auto' : 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-between items-start gap-4"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <faq.icon className="w-6 h-6 text-green-primary mt-1 flex-shrink-0" />
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
                        <p className="text-gray-700 leading-relaxed pl-10 border-l-2 border-green-primary">
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
              
              {/* Left: Contact Form */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's get in touch</h2>
                  <p className="text-gray-700 mb-8 max-w-lg">
                    We value your feedback and inquiries. Whether you have questions about our services, need assistance, or want to explore potential collaborations, we're here to assist you.
                  </p>
                </div>

                  <div className="space-y-6">
                    <ContactForm defaultService={'AI Development & Integration'} />
                  </div>
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