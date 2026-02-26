'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  Zap,
  Lightbulb,
  Users,
  Database,
  Shield,
  Cloud,
  Code,
  Cog,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SlideInSection from '@/components/SlideInSection';
import ContactForm from '@/components/ContactForm';

const MotionDiv = motion.div;

const faqs = [
  {
    question: 'What services does your business consultant company offer?',
    answer:
      'Our business consultant company offers a comprehensive range of services, including strategic planning, market research, process optimization, financial analysis, and organizational development. We tailor our services to address the specific needs and goals of each client, ensuring a customized approach to drive success.',
    icon: Lightbulb,
  },
  {
    question:
      'How can your business consultants assist in improving operational efficiency?',
    answer:
      'Our experienced consultants specialize in identifying operational bottlenecks and inefficiencies. Through in-depth analysis, process mapping, and technology integration, we develop targeted strategies to streamline operations, reduce costs, and enhance overall efficiency, resulting in increased productivity and profitability.',
    icon: Cog,
  },
  {
    question:
      'What is the typical process for developing a growth strategy with your consultants?',
    answer:
      'Developing a growth strategy involves several key steps. Initially, our consultants work closely with your team to understand your current market position, competitive landscape, and growth aspirations. We then conduct a thorough analysis to identify growth opportunities and potential obstacles. With this information, we collaboratively create a tailored growth strategy encompassing market expansion.',
    icon: Users,
  },
  {
    question:
      'How do your consultants assist in creating a strong digital presence for businesses?',
    answer:
      "Our consultants recognize the importance of a robust digital presence in today's business landscape. Our team then develops a comprehensive digital strategy that encompasses social media engagement, search engine optimization (SEO), content marketing, and website optimization.",
    icon: Zap,
  },
];

export default function SoftwarePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      title: 'Cloud and Infrastructure Modernisation',
      path: '/services/cloud-infrastructure',
      icon: Cloud,
    },
    {
      title: 'Artificial Intelligence Development & Integration',
      path: '/services/ai-development',
      icon: Zap,
    },
    {
      title: 'Data Analytics & Data Engineering',
      path: '/services/data-analytics',
      icon: Database,
    },
    {
      title: 'Cyber Security & Risk Management',
      path: '/services/cybersecurity-risk',
      icon: Shield,
    },
    {
      title: 'Prototype and MVP Development',
      path: '/services/prototype-mvp',
      icon: Lightbulb,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <SlideInSection>
        <section
          className="relative py-32 site-hero"
          style={{ backgroundColor: '#eef3f2' }}
        >
          <div className="relative max-w-7xl mx-auto px-4 text-center z-10 site-hero-content">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#003b2d] leading-tight">
                Software & Application <br />
                <span className="text-[#005241]">Development</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Creating, designing, coding, testing, and maintaining computer
                programs and applications tailored to your business needs.
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Software Development Team"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Main Heading & Intro */}
                <div className="space-y-6 bg-gray-50 p-8 rounded-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#1d2c2f] leading-tight">
                    Transforming Ideas into Powerful Software Solutions
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Software development is the process of creating, designing,
                    coding, testing, and maintaining computer programs and
                    applications. Developers code using diverse languages and
                    frameworks, instructing computers for specific tasks. This
                    requires expertise in algorithms, data structures, and
                    software architecture.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Collaboration and communication skills are vital, as
                    teamwork is common. Rigorous testing and debugging ensure
                    reliable, efficient software that meets business objectives
                    and delivers exceptional user experiences.
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
                    <Code className="w-7 h-7 text-[#005241]" />
                    Why Software Development is Important
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    Software development fuels innovation, enabling
                    organizations to adopt cutting-edge technologies and stay
                    competitive in rapidly evolving markets. It's the backbone
                    of digital transformation and business growth.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Adaptability to Market Changes
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        In fast-paced markets, businesses must adapt swiftly.
                        Custom software offers the flexibility to respond to
                        market changes, customer demands, and emerging
                        opportunities with agility.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Improved Communication
                      </h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        It facilitates seamless communication within teams and
                        across different departments in an organization,
                        breaking down silos and enabling better collaboration.
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
                    <Lightbulb className="w-7 h-7 text-[#005241]" />
                    What We Do and Focus On
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    By centering your efforts on Software Development, your
                    company likely fosters a culture of continuous learning and
                    staying abreast of the latest industry trends. This approach
                    ensures that your team remains well-equipped to address the
                    evolving needs and challenges of your clients.
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      {
                        strong: 'Customized Solutions:',
                        desc: 'Tailoring software to meet specific client needs and objectives, ensuring it aligns perfectly with their business processes.',
                      },
                      {
                        strong: 'Cutting-Edge Technologies:',
                        desc: 'Staying at the forefront of technology trends, leveraging the latest tools and frameworks to create innovative and efficient software solutions.',
                      },
                      {
                        strong: 'Agile Development Methodology:',
                        desc: 'Embracing an iterative approach to development, allowing for flexibility, rapid prototyping, and quick response to changing requirements.',
                      },
                      {
                        strong: 'Robust Testing and Quality Assurance:',
                        desc: 'Implementing thorough testing processes to guarantee the reliability, security, and performance of the software.',
                      },
                      {
                        strong: 'Scalability and Future-Readiness:',
                        desc: "Designing software architectures that can grow with the client's business, ensuring they remain relevant and effective in the long term.",
                      },
                      {
                        strong: 'User-Centric Design:',
                        desc: 'Prioritizing user experience and interface design to create intuitive, user-friendly software that maximizes adoption and productivity.',
                      },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-base text-gray-700 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#005241] font-bold mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            {item.strong}
                          </strong>{' '}
                          {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-base text-gray-700 leading-relaxed">
                    Moreover, this focused approach may allow your company to
                    establish strong partnerships with clients, becoming a
                    trusted advisor in their technology journey. This could
                    result in long-term relationships and recurring business.
                  </p>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-[#003b2d] mb-6 flex items-center gap-3">
                    <Zap className="w-7 h-7 text-[#005241]" />
                    Benefits & Results
                  </h2>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    Software Development plays a pivotal role in today's digital
                    landscape, offering users a multitude of benefits. It
                    enables the creation of tailored solutions that cater to
                    specific needs and requirements.
                  </p>
                  <ul className="space-y-4 pl-6">
                    {[
                      {
                        strong: 'Customization:',
                        desc: 'Tailored software solutions meet the specific needs of the user, enhancing efficiency and productivity.',
                      },
                      {
                        strong: 'Cost-Efficiency:',
                        desc: 'Outsourcing software development often reduces operational costs compared to in-house development.',
                      },
                      {
                        strong: 'Access to Expertise:',
                        desc: 'IT companies bring a wealth of experience and expertise to the table, ensuring high-quality and up-to-date solutions.',
                      },
                      {
                        strong: 'Time Savings:',
                        desc: 'Professional developers accelerate project timelines, delivering solutions faster than internal teams.',
                      },
                      {
                        strong: 'Scalability:',
                        desc: 'Software can easily adapt to changing business requirements and growth, ensuring long-term value.',
                      },
                      {
                        strong: 'Support and Maintenance:',
                        desc: 'IT companies provide ongoing support and maintenance, ensuring software remains reliable and secure.',
                      },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-base text-gray-700 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#005241] font-bold mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>
                          <strong className="text-gray-900">
                            {item.strong}
                          </strong>{' '}
                          {item.desc}
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
                  <h2 className="text-3xl font-bold text-[#003b2d] mb-8">
                    Frequently Asked Questions
                  </h2>
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#005241] transition-all cursor-pointer overflow-hidden shadow-sm hover:shadow-md"
                      onClick={() => toggle(index)}
                    >
                      <MotionDiv
                        animate={{
                          height: openIndex === index ? 'auto' : 'auto',
                        }}
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
                        animate={{
                          height: openIndex === index ? 'auto' : 0,
                          opacity: openIndex === index ? 1 : 0,
                        }}
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
              {/* Left: Contact Form (replaced with shared component) */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <ContactForm
                    defaultService={'Software & Application Development'}
                  />
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
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Let's discuss your project
                  </h3>
                  <blockquote className="text-gray-700 italic border-l-4 border-[#005241] pl-4">
                    "Our dedicated team of IT experts is committed to
                    understanding your unique requirements and crafting tailored
                    solutions that align with your business objectives."
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      Vishal Kumar Gupta
                    </p>
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
