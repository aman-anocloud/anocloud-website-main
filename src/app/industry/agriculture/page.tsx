"use client"

import React from 'react'
import Image from 'next/image'
import { Linkedin, Instagram, X, Grid3X3, Sprout, Shield, Tractor, Cloud, ArrowRight, LineChart } from 'lucide-react'
import { motion } from 'framer-motion'
import SlideInSection from '@/components/SlideInSection'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

export default function AgriculturePage() {
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
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                  alt="Smart Agriculture Technology"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </MotionDiv>

            {/* Right Content */}
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#003b2d] leading-tight">
                Agriculture <span className="text-[#005241]">Innovation</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                AnoCloud empowers the agriculture sector with data-driven solutions. Our AI and data science expertise optimize crop yields, enhance livestock management, and streamline supply chains. Robust cybersecurity safeguards your operations, while custom software development caters to your specific needs.
              </p>

              {/* Social Share */}
              <div className="pt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Share on:</h2>
                <div className="flex gap-4">
                  <div className="p-3 bg-[#1d2c2f] rounded-full cursor-pointer hover:bg-[#005241] transition-colors">
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
              <h1 className="text-3xl md:text-4xl font-bold text-[#1d2c2f] leading-tight">
                Harvesting the Power of Data: <span className="text-[#005241]">AI-Driven Solutions for Agriculture</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                The agriculture sector, a cornerstone of global economies, is undergoing a digital revolution. From small-scale farmers to large-scale agribusinesses, organizations are increasingly recognizing the potential of data science, artificial intelligence (AI), and technology to enhance productivity, sustainability, and profitability. AnoCloud, with its expertise in these domains, is uniquely positioned to help agricultural organizations harness the power of data and AI to drive growth and innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This comprehensive guide explores the diverse applications of AnoCloud's services across the agricultural landscape, encompassing precision agriculture, livestock management, supply chain optimization, and more. By delving into specific use cases and highlighting the potential benefits, we aim to demonstrate how AnoCloud can be a strategic partner in transforming agricultural practices.
              </p>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#003b2d] flex items-center gap-3">
                    <Sprout className="w-6 h-6 text-[#005241]" />
                    Precision Agriculture: Optimizing Yields and Resource Efficiency
                  </h2>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Data-Driven Crop Management:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Soil Analysis:</strong> Utilize advanced analytics to assess soil composition and moisture content to optimize fertilization and irrigation schedules.</li>
                      <li><strong>Yield Prediction:</strong> Analyze historical data and weather patterns to forecast crop yields and plan effectively.</li>
                      <li><strong>Crop Health Monitoring:</strong> Use image processing and machine learning to detect crop diseases early and recommend treatments.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Smart Irrigation and Fertilization:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Real-time Moisture Monitoring:</strong> Use IoT sensors and analytics to optimize water usage based on weather and soil conditions.</li>
                      <li><strong>Nutrient Management:</strong> Analyze soil and plant data to recommend optimal fertilizer usage with minimal environmental impact.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900">Drone-Based Data Acquisition:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Aerial Imagery Analysis:</strong> Process drone images to map fields and monitor crop conditions.</li>
                      <li><strong>Vegetation Indices:</strong> Calculate metrics to assess crop vigor and water stress.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#003b2d] flex items-center gap-3">
                    <Tractor className="w-6 h-6 text-[#005241]" />
                    Livestock Management: Improving Animal Health and Productivity
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Animal Health Monitoring:</strong> Track behavior using sensors and detect health anomalies early.</li>
                    <li><strong>Feed Optimization:</strong> Analyze consumption data to improve feed formulations and reduce costs.</li>
                    <li><strong>Reproductive Management:</strong> Use AI to predict optimal breeding times and improve herd genetics.</li>
                    <li><strong>Livestock Traceability:</strong> Implement blockchain to track animals from farm to fork for transparency.</li>
                    <li><strong>Demand Forecasting:</strong> Use market trends to optimize production and distribution strategies.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#003b2d] flex items-center gap-3">
                    <LineChart className="w-6 h-6 text-[#005241]" />
                    Supply Chain Optimization: Enhancing Efficiency and Sustainability
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Real-time Tracking:</strong> Monitor goods movement using IoT and GPS technology.</li>
                    <li><strong>Inventory Management:</strong> Optimize inventory levels to prevent stockouts and excess waste.</li>
                    <li><strong>Predictive Analytics:</strong> Forecast demand based on historical and market data patterns.</li>
                    <li><strong>Carbon Footprint Analysis:</strong> Identify sustainability improvements in supply chain operations.</li>
                    <li><strong>Product Traceability:</strong> Track origin and journey of products using blockchain technology.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#003b2d] flex items-center gap-3">
                    <Shield className="w-6 h-6 text-[#005241]" />
                    Cybersecurity: Protecting Critical Agricultural Infrastructure
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Vulnerability and Risk Assessment:</strong> Identify weaknesses and evaluate cyber threats to agricultural systems.</li>
                    <li><strong>Intrusion Detection and Prevention:</strong> Safeguard systems from unauthorized access and cyberattacks.</li>
                    <li><strong>Endpoint Protection:</strong> Defend IoT devices and farm equipment from malware and ransomware.</li>
                    <li><strong>Data Encryption:</strong> Secure sensitive agricultural data from breaches and unauthorized access.</li>
                    <li><strong>Incident Response Planning:</strong> Ensure quick recovery from cyberattacks with robust response protocols.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#003b2d] flex items-center gap-3">
                    <Cloud className="w-6 h-6 text-[#005241]" />
                    Software Development: Tailored Solutions for Agriculture
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Farm Management Software:</strong> Comprehensive tools for crop tracking, livestock monitoring, and financial management.</li>
                    <li><strong>Mobile Apps for Farmers:</strong> Access to market prices, weather updates, and expert agricultural guidance.</li>
                    <li><strong>Supply Chain Applications:</strong> Connect and coordinate supply chain partners efficiently for seamless operations.</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 mt-6">
                  AnoCloud is committed to empowering the agriculture sector through the application of data science, AI, and cybersecurity. By leveraging our expertise, agricultural organizations can optimize operations, enhance productivity, and build resilience in the face of climate change and market challenges.
                </p>

                <p className="text-lg font-semibold text-gray-900 mt-4">
                  We invite you to explore how AnoCloud can be your partner in driving agricultural transformation. Contact us today to unlock the full potential of your agricultural business.
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
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80"
                  alt="Desert Agriculture Innovation"
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80"
                  alt="Automated Crop Sorting"
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                  alt="Smart Farming Technology"
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
              <a href="/industry/retail" className="text-xl font-semibold text-gray-700 hover:text-[#005241] transition-colors cursor-pointer">
                Retail
              </a>
              <div className="flex justify-center">
                <Grid3X3 className="text-[#005241] w-8 h-8" />
              </div>
              <a href="/industry/healthcare" className="text-xl font-semibold text-[#005241] hover:text-gray-700 transition-colors cursor-pointer">
                Healthcare
              </a>
            </div>
          </div>
        </section>
      </SlideInSection>

      {/* Services Teaser */}
      <SlideInSection>
        <section className="py-20" style={{ backgroundColor: '#1d2b29' }}>
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Expert Consulting Services"
                fill
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </MotionDiv>

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
                className="inline-flex items-center gap-2 bg-[#005241] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#003b2d] transition shadow-lg cursor-pointer"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Contact Form Section */}
      <SlideInSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
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
                  <ContactForm defaultService="Agriculture Inquiry" title="Let's get in touch" />
                </div> 
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="pt-10 md:pt-0"
              >
                <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
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