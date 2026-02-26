"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Shield, Lock, AlertTriangle, Users, Database, Cloud, Eye, Server } from 'lucide-react'
import { motion } from 'framer-motion'
import SlideInSection from '@/components/SlideInSection'

import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

const faqs = [
  {
    question: "What services does your business consultant company offer?",
    answer: "Our business consultant company offers a comprehensive range of services, including strategic planning, market research, process optimization, financial analysis, and organizational development. We tailor our services to address the specific needs and goals of each client, ensuring a customized approach to drive success.",
    icon: Users,
  },
  {
    question: "How can your business consultants assist in improving operational efficiency?",
    answer: "Our experienced consultants specialize in identifying operational bottlenecks and inefficiencies. Through in-depth analysis, process mapping, and technology integration, we develop targeted strategies to streamline operations, reduce costs, and enhance overall efficiency, resulting in increased productivity and profitability.",
    icon: Server,
  },
  {
    question: "What is the typical process for developing a growth strategy with your consultants?",
    answer: "Developing a growth strategy involves several key steps. Initially, our consultants work closely with your team to understand your current market position, competitive landscape, and growth aspirations. We then conduct a thorough analysis to identify growth opportunities and potential obstacles. With this information, we collaboratively create a tailored growth strategy encompassing market expansion.",
    icon: Database,
  },
  {
    question: "How do your consultants assist in creating a strong digital presence for businesses?",
    answer: "Our consultants recognize the importance of a robust digital presence in today's business landscape. Our team then develops a comprehensive digital strategy that encompasses social media engagement, search engine optimization (SEO), content marketing, and website optimization.",
    icon: Eye,
  },
]

export default function CybersecurityPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }


  

  const services = [
    { title: "Cloud and Infrastructure Modernisation", path: "/services/cloud-infrastructure", icon: Cloud },
    { title: "Artificial Intelligence Development & Integration", path: "/services/ai-development", icon: Database },
    { title: "Data Analytics & Data Engineering", path: "/services/data-analytics", icon: Server },
    { title: "Software & Application Development", path: "/services/software-development", icon: Database },
    { title: "Prototype & MVP Development", path: "/services/prototype-mvp", icon: Eye },
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
                Cyber Security & Risk <br />
                <span className="text-[#005241]">Management</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Safeguarding your digital assets with comprehensive security measures and proactive risk management.
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
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                    alt="Cybersecurity Operations"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Main Heading & Intro */}
                <div className="space-y-6 bg-gray-50 p-8 rounded-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#1d2c2f] leading-tight">
                    Protecting Your Digital World
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Cybersecurity is a critical aspect of our increasingly digital world. It encompasses a range of practices, technologies, and measures designed to safeguard sensitive information, systems, and networks from unauthorized access, attacks, and damage.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With the proliferation of interconnected devices and the ever-evolving threat landscape, maintaining robust cybersecurity is paramount to protecting your business assets and maintaining customer trust.
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
                    <AlertTriangle className="w-7 h-7 text-[#005241]" />
                    Why Cyber Security is Important
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    Cybersecurity is vital in safeguarding digital assets and sensitive information from unauthorized access, theft, or damage. The significance of cybersecurity cannot be overstated. Without robust cybersecurity measures:
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#005241]" />
                        National Security Risks
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        In the context of governments and critical infrastructure, cyberattacks can pose serious threats to national security, potentially disrupting essential services and compromising sensitive information.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-[#005241]" />
                        Intellectual Property Theft
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        Valuable intellectual property can be stolen, compromising a company's competitive edge and resulting in significant financial losses and reputational damage.
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
                    <Shield className="w-7 h-7 text-[#005241]" />
                    What We Do and Focus On
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    It's great to hear that your IT company places a significant emphasis on cybersecurity. This is a critical area in today's digital landscape. By prioritizing cybersecurity, your company is taking proactive steps to protect valuable assets and sensitive information.
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Threat Intelligence and Monitoring:", desc: "Implement advanced threat intelligence systems to proactively identify and analyze potential cyber threats. Continuously monitor networks and systems for suspicious activities and anomalies." },
                      { strong: "Vulnerability Assessment and Patch Management:", desc: "Conduct regular vulnerability assessments to identify weaknesses in software, hardware, and configurations. Develop and execute a robust patch management strategy to swiftly address identified vulnerabilities." },
                      { strong: "Endpoint Security:", desc: "Employ comprehensive endpoint security solutions to protect devices (e.g., computers, smartphones) from malware, ransomware, and other cyber threats. Implement strong access controls and encryption measures." },
                      { strong: "Incident Response and Recovery:", desc: "Establish a well-defined incident response plan to efficiently handle security incidents. Conduct regular drills and simulations to ensure readiness in case of a cyber-attack." },
                      { strong: "Security Awareness and Training:", desc: "Provide ongoing cybersecurity awareness training for employees to educate them about best practices and potential risks. Foster a culture of security consciousness within the organization." },
                      { strong: "Compliance and Regulatory Adherence:", desc: "Stay up-to-date with industry-specific compliance requirements (e.g., GDPR, HIPAA) and regulatory standards. Ensure that the company's cybersecurity practices align with these requirements." },
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
                    This approach not only safeguards your clients' data but also builds trust and credibility in the industry. Remember, staying updated with the latest security trends and technologies is key to maintaining a strong defense against evolving cyber threats.
                  </p>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <Database className="w-7 h-7 text-[#005241]" />
                    Benefits & Results
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    Cybersecurity is crucial in safeguarding your digital world. It provides you with peace of mind, knowing that your sensitive information is shielded from potential threats. By implementing robust cybersecurity measures, you can confidently navigate the online realm, conducting transactions, communicating, and storing data securely.
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Protection Against Data Breaches:", desc: "Cybersecurity measures safeguard sensitive information, such as personal data or financial records, from unauthorized access, preventing costly data breaches that could lead to financial losses and reputation damage." },
                      { strong: "Prevention of Malware and Attacks:", desc: "Robust cybersecurity protocols identify and neutralize malware and ransomware threats, ensuring that systems remain operational and data remains intact, thereby avoiding potential disruptions to business operations." },
                      { strong: "Safe Online Transactions:", desc: "For businesses and individuals, cybersecurity ensures secure online transactions by encrypting sensitive information, such as credit card details, making it significantly more difficult for cybercriminals to intercept and misuse this information." },
                      { strong: "Maintaining Trust and Reputation:", desc: "A strong cybersecurity posture instills confidence in clients and customers, assuring them that their data is handled responsibly. This trust is vital for maintaining a positive reputation and building long-term relationships." },
                      { strong: "Compliance with Regulatory Standards:", desc: "Many industries have specific regulatory requirements regarding data protection and privacy. Effective cybersecurity practices ensure compliance with these standards, reducing the risk of fines or legal penalties." },
                      { strong: "Business Continuity and Disaster Recovery:", desc: "In the event of a cyber attack, having robust cybersecurity measures in place allows for swift recovery and minimizes downtime. This ensures that business operations can resume promptly, reducing potential financial losses." },
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
                    <ContactForm defaultService={'Cyber Security & Risk Management'} />
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