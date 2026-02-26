"use client";

import { useState } from 'react';
import { ChevronDown, MessageCircle, Shield, Database, Zap, Cloud } from 'lucide-react';
import SlideInSection from '@/components/SlideInSection';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div;

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Artificial Intelligence Development & Integration?",
      answer: "Artificial Intelligence (AI) services represent a powerful and rapidly evolving field within the technology industry. At AnoCloud, we specialize in developing and integrating AI solutions that drive intelligent decision-making, automation, and innovation across your business operations.",
      icon: Zap,
    },
    {
      question: "How does Cloud and Infrastructure Modernization work?",
      answer: "We empower your business by leveraging cloud capabilities to modernize applications and drive accelerated outcomes. Our process involves assessing your current infrastructure, planning a seamless migration, and optimizing for scalability, security, and cost-efficiency using platforms like AWS, Azure, and Google Cloud.",
      icon: Cloud,
    },
    {
      question: "What services do you offer for Cyber Security & Risk Management?",
      answer: "Our Cyber Security & Risk Management services focus on mitigating risks through innovative technology and expert analysts. We provide comprehensive assessments, threat detection, compliance solutions, and proactive defense strategies to safeguard your digital assets.",
      icon: Shield,
    },
    {
      question: "What is Data Analytics & Data Engineering?",
      answer: "Data Analytics & Data Engineering involves analyzing data to extract insights and patterns for informed decision-making, using statistical techniques and software tools. We build robust data pipelines, implement advanced analytics, and deliver actionable intelligence to fuel your business growth.",
      icon: Database,
    },
    {
      question: "How is Prototype and MVP Development conducted?",
      answer: "We validate your ideas, gather user feedback, and bring your product vision to life with Prototype and MVP Development services. Our agile approach ensures rapid iteration, cost-effective validation, and a clear path to full-scale development.",
      icon: MessageCircle,
    },
    {
      question: "What is involved in Software & Application Development?",
      answer: "We design, code, test, deploy, and maintain user-friendly applications for various platforms, emphasizing functionality and security. From custom software to enterprise apps, our end-to-end process delivers scalable solutions tailored to your needs.",
      icon: Zap,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <SlideInSection>
        <section className="py-20" style={{ backgroundColor: '#eef3f2' }}>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#003b2d] leading-tight">
                Frequently Asked <br className="hidden md:block" />
                <span className="text-[#005241]"> Questions</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover answers to common inquiries about our AI, cloud, security, and development services. Can't find what you're looking for? Reach out to us directly.
              </p>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* FAQ Content Section */}
      <SlideInSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
              {/* Left - Section Label */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block sticky top-20 self-start"
              >
                <h2 className="text-6xl font-bold text-[#1d2c2f] rotate-[-90deg] whitespace-nowrap">FAQ</h2>
              </MotionDiv>

              {/* Right - Accordion */}
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Still Have Questions?</h2>
                  <p className="text-gray-600 mb-8 max-w-lg">
                    We're here to help. Whether you have questions about our services, need assistance, or want to explore potential collaborations, reach out via the form below.
                  </p>
                </div>

                <ContactForm defaultService="Support Inquiry" title="Still Have Questions?" />
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
  );
}