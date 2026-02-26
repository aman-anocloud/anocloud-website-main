"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Cloud, Server, Layers, Zap, Shield, Globe, Sparkles, Database } from 'lucide-react'
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
    icon: Globe,
  },
  {
    question: "How do your consultants assist in creating a strong digital presence for businesses?",
    answer: "Our consultants recognize the importance of a robust digital presence in today's business landscape. Our team then develops a comprehensive digital strategy that encompasses social media engagement, search engine optimization (SEO), content marketing, and website optimization.",
    icon: Server,
  },
]

export default function CloudPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }


  

  const services = [
    { title: "Artificial Intelligence Development & Integration", path: "/services/ai-development", icon: Sparkles },
    { title: "Data Analytics & Data Engineering", path: "/services/data-analytics", icon: Database },
    { title: "Cyber Security & Risk Management", path: "/services/cybersecurity-risk", icon: Shield },
    { title: "Software & Application Development", path: "/services/software-development", icon: Server },
    { title: "Prototype and MVP Development", path: "/services/prototype-mvp", icon: Zap },
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
              <h1 className="text-5xl md:text-6xl font-bold text-[#003b2d] leading-tight">
                Cloud and Infrastructure <br />
                <span className="text-[#005241]">Modernisation</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Transforming your infrastructure with scalable, secure, and cost-effective cloud solutions.
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
                className="bg-[#1d2c2f] rounded-2xl p-6 space-y-1 shadow-xl"
              >
                {services.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="group block text-white text-base py-4 border-b border-gray-600 last:border-b-0 flex items-center gap-3 hover:text-[#005241] transition-colors hover:bg-gray-800/30 rounded-lg px-2 cursor-pointer"
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
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                    alt="Cloud Infrastructure"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Main Heading & Intro */}
                <div className="space-y-6 bg-gray-50 p-8 rounded-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#1d2c2f] leading-tight">
                    Empowering Business Through Cloud Excellence
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    It allows users to access and utilize resources and software remotely. This innovative approach eliminates the need for physical infrastructure and local storage, enabling businesses and individuals to scale their operations with ease.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    They offer flexibility, cost-effectiveness, and seamless collaboration, as multiple users can access and work on shared documents or projects in real-time, transforming how organizations operate in the digital age.
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
                    <Cloud className="w-7 h-7 text-[#005241]" />
                    Importance of Cloud Solutions
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    Cloud solutions play a pivotal role in modernizing and optimizing various aspects of business operations and personal computing. Multiple users can access and work on shared documents or projects in real-time. Here are some key importance:
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#005241]" />
                        Disaster Recovery and Business Continuity
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        In the event of a catastrophic event, businesses can quickly recover their data and operations, minimizing downtime and potential financial losses through robust cloud-based recovery systems.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-[#005241]" />
                        Accessibility and Mobility
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        This accessibility fosters collaboration among geographically dispersed teams and allows for remote work, enabling organizations to tap into global talent pools and maintain productivity from anywhere.
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
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <Server className="w-7 h-7 text-[#005241]" />
                    What We Do and Focus On
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    The primary emphasis of Cloud Solutions is to leverage virtualized computing resources and services over the internet, enabling organizations to scale, innovate, and optimize their operations. This approach offers flexibility, cost-efficiency, and accessibility, allowing businesses to adapt swiftly to changing demands and technologies.
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Scalable Infrastructure:", desc: "Leverage the power of cloud computing to offer scalable solutions that can adapt to the evolving needs of businesses, ensuring optimal performance and cost efficiency." },
                      { strong: "Security and Compliance:", desc: "Implement robust security measures and compliance protocols to safeguard sensitive data and meet industry-specific regulatory requirements, instilling trust and confidence in our clients." },
                      { strong: "Cost Optimization:", desc: "Employ cloud cost management strategies to help clients optimize their spending, ensuring they get the most value from their cloud investments without overspending on unnecessary resources." },
                      { strong: "High Availability and Disaster Recovery:", desc: "Design resilient architectures that provide high availability and robust disaster recovery capabilities, minimizing downtime and ensuring business continuity in the face of unforeseen events." },
                      { strong: "Hybrid and Multi-Cloud Solutions:", desc: "Offer expertise in integrating and managing hybrid and multi-cloud environments, allowing clients to leverage the strengths of different cloud providers and technologies for a tailored approach." },
                      { strong: "Innovative Cloud Services:", desc: "Stay at the forefront of cloud technology by offering innovative services such as serverless computing, containerization, and AI/ML solutions, enabling clients to drive innovation and gain a competitive edge." },
                    ].map((item, idx) => (
                      <li key={idx} className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                        <span className="text-[#005241] font-bold mt-1 flex-shrink-0">✓</span>
                        <span>
                          <strong className="text-gray-900">{item.strong}</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-base text-gray-700 leading-relaxed">
                    Cloud Solutions encompass a wide array of services, including storage, computing power, databases, networking, analytics, and more. By leveraging the cloud, businesses can enhance agility, security, and collaboration while reducing the need for on-premises infrastructure and maintenance.
                  </p>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <Layers className="w-7 h-7 text-[#005241]" />
                    Benefits & Results
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    Cloud solutions offer numerous advantages across various aspects of business and technology. These benefits collectively make cloud solutions an attractive option for businesses looking to enhance their operations, reduce costs, and increase agility in today's rapidly evolving technological landscape.
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Scalability and Flexibility:", desc: "Cloud solutions offer the ability to scale resources up or down based on the user's needs. This means businesses can easily adapt to changing workloads and demands without the need for significant infrastructure changes." },
                      { strong: "Cost-Efficiency:", desc: "Cloud solutions often follow a pay-as-you-go model, which means users only pay for the resources they consume. This eliminates the need for large upfront capital expenditures on hardware and allows for more predictable and manageable operational expenses." },
                      { strong: "Accessibility and Collaboration:", desc: "Cloud solutions enable users to access their data and applications from anywhere with an internet connection. This promotes greater collaboration among teams, allowing them to work together seamlessly, even if they are geographically dispersed." },
                      { strong: "Data Security and Backup:", desc: "Reputable IT companies employ advanced security measures to protect data stored in the cloud. This includes encryption, firewalls, and regular security audits. Additionally, cloud providers typically have robust backup and disaster recovery mechanisms in place, ensuring data integrity and availability." },
                      { strong: "Automatic Updates and Maintenance:", desc: "Cloud solutions are managed by the IT company, which means users don't have to worry about the hassle of hardware maintenance or software updates. This ensures that systems are always up-to-date with the latest features and security patches." },
                      { strong: "Environmental Impact:", desc: "Cloud solutions often leverage data centers with advanced energy-efficient technologies. By utilizing shared resources in a data center, users can reduce their own environmental footprint, as cloud providers can achieve higher levels of efficiency compared to on-premises infrastructure." },
                    ].map((item, idx) => (
                      <li key={idx} className="text-base text-gray-700 leading-relaxed flex items-start gap-2">
                        <span className="text-[#005241] font-bold mt-1 flex-shrink-0">✓</span>
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
              
              {/* Left: Contact Form */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's get in touch</h2>
                  <p className="text-gray-300 mb-8 max-w-lg">
                    We value your feedback and inquiries. Whether you have questions about our services, need assistance, or want to explore potential collaborations, we're here to assist you.
                  </p>
                </div>

                  <div className="space-y-6">
                    <ContactForm defaultService={'Cloud & Infrastructure Modernization'} />
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