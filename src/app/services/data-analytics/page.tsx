'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, BarChart3, TrendingUp, Database, Brain, Lightbulb, Eye, Layers, Activity } from 'lucide-react'
import { motion } from 'framer-motion'
import SlideInSection from '@/components/SlideInSection'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

const faqs = [
  {
    question: "What services does your business consultant company offer?",
    answer: "Our business consultant company offers a comprehensive range of services, including strategic planning, market research, process optimization, financial analysis, and organizational development. We tailor our services to address the specific needs and goals of each client, ensuring a customized approach to drive success.",
    icon: Lightbulb,
  },
  {
    question: "How can your business consultants assist in improving operational efficiency?",
    answer: "Our experienced consultants specialize in identifying operational bottlenecks and inefficiencies. Through in-depth analysis, process mapping, and technology integration, we develop targeted strategies to streamline operations, reduce costs, and enhance overall efficiency, resulting in increased productivity and profitability.",
    icon: Activity,
  },
  {
    question: "What is the typical process for developing a growth strategy with your consultants?",
    answer: "Developing a growth strategy involves several key steps. Initially, our consultants work closely with your team to understand your current market position, competitive landscape, and growth aspirations. We then conduct a thorough analysis to identify growth opportunities and potential obstacles. With this information, we collaboratively create a tailored growth strategy encompassing market expansion.",
    icon: TrendingUp,
  },
  {
    question: "How do your consultants assist in creating a strong digital presence for businesses?",
    answer: "Our consultants recognize the importance of a robust digital presence in today's business landscape. Our team then develops a comprehensive digital strategy that encompasses social media engagement, search engine optimization (SEO), content marketing, and website optimization.",
    icon: Eye,
  },
]

export default function DataAnalyticsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }


  

  const services = [
    { title: "Cloud and Infrastructure Modernisation", path: "/services/cloud-infrastructure", icon: Layers },
    { title: "Artificial Intelligence Development & Integration", path: "/services/ai-development", icon: Brain },
    { title: "Cyber Security & Risk Management", path: "/services/cybersecurity-risk", icon: Database },
    { title: "Software & Application Development", path: "/services/software-development", icon: Activity },
    { title: "Prototype & MVP Development", path: "/services/prototype-mvp", icon: Lightbulb },
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
                Data Analytics & Data <br />
                <span className="text-[#005241]">Engineering</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Transforming raw data into actionable insights that drive strategic decisions and business growth.
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
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                    alt="Data Analytics Dashboard"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Main Heading & Intro */}
                <div className="space-y-6 bg-gray-50 p-8 rounded-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#1d2c2f] leading-tight">
                    Unlocking the Power of Your Data
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Data analytics is the process of examining raw data to uncover meaningful insights, trends, and patterns. It involves the application of various techniques and tools to extract valuable information from large sets of information. This practice plays a pivotal role in aiding businesses and organizations in making informed decisions.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    By employing statistical analysis, data mining, and visualization techniques, analysts can distill complex data into comprehensible, actionable knowledge that drives innovation and competitive advantage.
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
                    <BarChart3 className="w-7 h-7 text-[#005241]" />
                    Why Data Analytics is Important
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    Data analytics has found extensive applications across diverse fields, including finance, healthcare, marketing, and more, providing invaluable insights that drive innovation and efficiency in today's data-driven world.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-[#005241]" />
                        Innovation and Product Development
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        By analyzing customer feedback, market trends, and competitor offerings, organizations can identify opportunities for innovation and develop products that meet evolving customer needs and exceed market expectations.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-[#005241]" />
                        Performance Monitoring
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        Data analytics provides real-time insights into business performance. This allows for timely adjustments to strategies and tactics to ensure goals are met and resources are optimally allocated.
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
                    <Database className="w-7 h-7 text-[#005241]" />
                    What We Do and Focus On
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    By employing statistical techniques, machine learning algorithms, and visualization tools, data analytics uncovers patterns, trends, and correlations, empowering organizations to optimize operations, enhance customer experiences, and drive strategic growth.
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Advanced Data Visualization:", desc: "Creating intuitive and insightful visual representations of complex data sets to facilitate easy understanding and decision-making." },
                      { strong: "Predictive Analytics:", desc: "Leveraging machine learning algorithms and statistical models to forecast future trends, enabling proactive decision-making based on data-driven insights." },
                      { strong: "Data Governance and Compliance:", desc: "Ensuring that data is managed, stored, and utilized in compliance with relevant regulations and industry standards, safeguarding privacy and security." },
                      { strong: "Real-time Data Processing:", desc: "Developing systems and processes to handle and analyze data in real-time, enabling immediate responses to changing business conditions." },
                      { strong: "Customized Data Solutions:", desc: "Tailoring data analytics solutions to meet specific business needs, integrating seamlessly with existing systems and workflows." },
                      { strong: "Actionable Business Intelligence:", desc: "Transforming raw data into meaningful, actionable insights that drive strategic decisions and provide a competitive edge in the market." },
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
                    The primary emphasis in data analytics lies in extracting valuable insights from vast sets of data. This process involves examining, cleansing, transforming, and interpreting data to make informed decisions. It's crucial in various industries like business, healthcare, finance, and more.
                  </p>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <TrendingUp className="w-7 h-7 text-[#005241]" />
                    Benefits & Results
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    By employing advanced analytical techniques, companies can identify trends, patterns, and correlations within their data, offering a clear understanding of customer behavior, market trends, and operational efficiencies.
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      { strong: "Informed Decision-Making:", desc: "Data analytics provides valuable insights into various aspects of a business, enabling informed and strategic decision-making. This helps users make choices based on concrete evidence rather than relying solely on intuition." },
                      { strong: "Optimized Operations:", desc: "Through the analysis of data, users can identify inefficiencies, bottlenecks, and areas for improvement within their operations. This leads to streamlined processes, reduced costs, and improved overall efficiency." },
                      { strong: "Personalized User Experiences:", desc: "By leveraging data analytics, IT companies can better understand their users' preferences, behavior, and needs. This allows for the customization of products, services, and interactions, resulting in a more engaging and satisfying experience for the user." },
                      { strong: "Improved Product Development:", desc: "Data analytics enables companies to gain insights into market trends, customer demands, and emerging technologies. This information is invaluable for creating products or services that are not only innovative but also aligned with what the users truly want." },
                      { strong: "Enhanced Security and Compliance:", desc: "Data analytics plays a crucial role in identifying and mitigating potential security threats and compliance risks. It helps in proactively identifying anomalies and suspicious activities, ensuring a higher level of data security for users." },
                      { strong: "Predictive Maintenance and Support:", desc: "By analyzing data from various sources, IT companies can predict when equipment or systems are likely to fail. This allows for proactive maintenance, reducing downtime and ensuring uninterrupted service for users." },
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
                  <ContactForm defaultService={'Data Analytics & Data Engineering'} />
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