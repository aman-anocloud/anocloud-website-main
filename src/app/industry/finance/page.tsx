"use client"

import React from 'react'
import Image from 'next/image'
import { Linkedin, Instagram, X, Grid3X3, Shield, TrendingUp, Lock, Brain, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

export default function FinancePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
        <section className="relative py-32 site-hero" style={{ backgroundColor: '#eef3f2' }}>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/finance-banner.png"
                alt="Finance Banner"
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
              Finance <span className="text-green-primary">Innovation</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Unleash the power of data science, AI, and software to unlock a secure and thriving financial future. AnoCloud empowers financial institutions with cutting-edge solutions for fraud detection, risk management, and digital transformation.
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

      {/* Main Content Section */}
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
              The Innovation Imperative: <span className="text-green-primary">Why Financial Institutions Need AnoCloud</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              The financial sector is undergoing a significant transformation driven by data science, Artificial Intelligence (AI), robust cybersecurity, and cutting-edge software development. AnoCloud is well-positioned to empower financial institutions of all sizes with solutions that unlock new opportunities, enhance efficiency, and mitigate risks.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This explores how AnoCloud's suite of services can be leveraged by various financial institutions to gain a competitive advantage in today's dynamic landscape.
            </p>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-primary" />
                  Understanding the Needs of Financial Institutions
                </h2>
                <p className="text-gray-700">
                  Financial institutions encompass a diverse range of organizations, including banks, insurance companies, investment firms, wealth management firms, and payment processors. Each institution has unique challenges and goals. Here are common areas where our solutions provide significant value:
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Key Challenge Areas:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Fraud Detection and Prevention:</strong> Build robust fraud detection models that analyze historical data and real-time transactions to identify suspicious patterns.</li>
                    <li><strong>Risk Management and Credit Scoring:</strong> Use alternative data sources to create holistic risk profiles, improving decision-making processes.</li>
                    <li><strong>Customer Segmentation and Targeting:</strong> Segment customers based on demographics, financial behaviors, and preferences for personalized offerings.</li>
                    <li><strong>Algorithmic Trading:</strong> Optimize trading strategies and portfolio management with AI and machine learning solutions.</li>
                    <li><strong>Regulatory Compliance:</strong> Automate compliance processes and provide real-time analysis of regulatory data to mitigate risk.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-primary" />
                  Tailored Solutions for Different Institutions
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Banks:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Fraud Detection:</strong> Real-time transaction monitoring and pattern analysis.</li>
                    <li><strong>Credit Scoring:</strong> Advanced AI models for accurate creditworthiness assessment.</li>
                    <li><strong>Customer Segmentation:</strong> Personalized banking experiences through data analytics.</li>
                    <li><strong>Regulatory Compliance:</strong> Automated compliance reporting and monitoring.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Insurance Companies:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Risk Assessment:</strong> Data-driven models for accurate premium pricing.</li>
                    <li><strong>Claims Processing:</strong> AI-powered automation for faster settlements.</li>
                    <li><strong>Fraud Detection:</strong> Advanced analytics to identify fraudulent claims.</li>
                    <li><strong>Cybersecurity:</strong> Robust protection for sensitive customer data.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Investment Firms:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Algorithmic Trading:</strong> ML-powered trading strategies for optimal returns.</li>
                    <li><strong>Portfolio Optimization:</strong> Data-driven asset allocation and rebalancing.</li>
                    <li><strong>Market Risk Analysis:</strong> Predictive models for risk assessment.</li>
                    <li><strong>Sentiment Analysis:</strong> Real-time market sentiment tracking.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Payment Processors:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Real-time Fraud Detection:</strong> Instant transaction verification.</li>
                    <li><strong>Secure Platforms:</strong> End-to-end encryption and security.</li>
                    <li><strong>Transaction Monitoring:</strong> 24/7 surveillance for suspicious activities.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                  <Brain className="w-6 h-6 text-green-primary" />
                  Beyond Technology: Building Strategic Partnerships
                </h2>
                <p className="text-gray-700">
                  AnoCloud understands that digital transformation requires more than just technology. Our consultative approach means we work closely with financial institutions to understand their challenges and business goals, offering solutions tailored to your unique needs.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-green-dark flex items-center gap-3">
                  <Lock className="w-6 h-6 text-green-primary" />
                  Investing in the Future of Finance
                </h2>
                <p className="text-gray-700">
                  Investing in data science, AI, cybersecurity, and software development is not optional—it's a necessity in today's fast-evolving financial landscape. By partnering with AnoCloud, financial institutions can improve operational efficiency, enhance customer experience, ensure regulatory compliance, and gain competitive advantage through innovation.
                </p>
              </div>

              <p className="text-lg font-semibold text-gray-900 mt-6">
                Contact AnoCloud today to schedule a consultation and discuss how we can help you unlock the full potential of your financial institution.
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
                src="/financial-dashboard.png"
                alt="Financial Dashboard"
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/financial-analytics.png"
                alt="Financial Analytics"
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Industry Navigation */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto border-t border-b border-gray-200">
          <div className="grid grid-cols-3 items-center text-center gap-8 py-6">
            <a href="/industry/healthcare" className="text-xl font-semibold text-gray-700 hover:text-green-primary transition-colors cursor-pointer">
              Healthcare
            </a>
            <div className="flex justify-center">
              <Grid3X3 className="text-green-primary w-8 h-8" />
            </div>
            <a href="/industry/retail" className="text-xl font-semibold text-green-primary hover:text-gray-700 transition-colors cursor-pointer">
              Retail
            </a>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
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
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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

      {/* Contact Form Section */}
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
                <ContactForm defaultService="Finance Inquiry" title="Let's get in touch" />
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
    </main>
  )
}