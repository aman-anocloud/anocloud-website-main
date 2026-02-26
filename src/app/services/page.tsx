'use client';
import { useState } from 'react';
import {
  CheckCircle,
  Sparkles,
  ArrowRight,
  Check,
  ChevronDown,
  Code,
  Database,
  Cloud,
  Lock,
  Brain,
  Rocket,
} from 'lucide-react';

// Matching homepage color palette
const colors = {
  primary: '#059669', // emerald-600
  secondary: '#10b981', // emerald-500
  tertiary: '#047857', // emerald-700
};

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      id: '01',
      icon: Rocket,
      title: 'Prototype and MVP Development',
      desc: "Validate your ideas, gather user feedback, and bring your product vision to life with AnoCloud's Prototype and MVP Development services.",
      href: '/services/prototype-mvp',
    },
    {
      id: '02',
      icon: Code,
      title: 'Software & Application Development',
      desc: 'Design, code, test, deploy, and maintain user-friendly applications for various platforms, with functionality, and security.',
      href: '/services/software-development',
    },
    {
      id: '03',
      icon: Lock,
      title: 'Cyber Security & Risk Management',
      desc: 'Mitigating risk through innovative technology and expert analysts.',
      href: '/services/cybersecurity-risk',
    },
    {
      id: '04',
      icon: Database,
      title: 'Data Analytics & Data Engineering',
      desc: 'Analyzing data to extract insights and patterns for decision-making, using statistical techniques and software tools.',
      href: '/services/data-analytics',
    },
    {
      id: '05',
      icon: Brain,
      title: 'Artificial Intelligence Development & Integration',
      desc: 'Artificial Intelligence (AI) services represent a powerful and rapidly evolving field within the technology industry.',
      href: '/services/ai-development',
    },
    {
      id: '06',
      icon: Cloud,
      title: 'Cloud and Infrastructure Modernisation',
      desc: 'Empower your business by leveraging cloud capabilities to modernize applications and drive accelerated outcomes.',
      href: '/services/cloud-infrastructure',
    },
  ];

  const faqs = [
    {
      question: 'How do I get started with your consulting and services?',
      answer:
        'To begin, please reach out to us via our contact form or phone number on our website. We will schedule an initial consultation to discuss your specific requirements and create a tailored strategy for your business.',
    },
    {
      question:
        'Can you provide examples of successful projects or case studies?',
      answer:
        'Yes, we can provide references and case studies upon request. Feel free to contact us for more information.',
    },
    {
      question: 'What types of custom software development do you offer?',
      answer:
        'We provide custom software development services tailored to your specific needs. Whether you need a web application, mobile app, or enterprise software, we can design, develop, and maintain the software solution that aligns with your business goals.',
    },
    {
      question: 'What kind of Cybersecurity solutions do you offer?',
      answer:
        'Our Cybersecurity Solutions encompass a range of services, including risk assessments, security audits, threat detection and response, and employee training. We help protect your data, systems, and networks from cyber threats and breaches.',
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
                <Sparkles
                  className="w-4 h-4"
                  style={{ color: colors.primary }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: colors.tertiary }}
                >
                  Professional Services
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Our Services
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                We design, build and operate modern software solutions that help
                organizations scale, reduce risk, and unlock new value using
                cloud, data and AI.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  Explore Services
                </button>

                <button className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gray-300 text-gray-700">
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/business-office.webp"
                alt="Services"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div
              className="text-6xl md:text-8xl font-bold"
              style={{ color: colors.primary }}
            >
              30+
            </div>

            <div className="text-2xl md:text-4xl font-semibold leading-tight text-gray-900">
              <p>Years</p>
              <p>consolidated</p>
              <p>team</p>
              <p>experience</p>
            </div>

            <div className="text-base md:text-lg leading-relaxed text-gray-600">
              By conducting comprehensive assessments and implementing
              streamlined workflows, we empower your business to minimize costs,
              enhance productivity, and achieve long-term success.
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              What We Offer
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Comprehensive Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50"
                    style={{ color: colors.primary }}
                  >
                    {service.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.desc}
                </p>

                <div
                  className="flex items-center gap-2 font-semibold"
                  style={{ color: colors.primary }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Advisory Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Global business advisory: <br />
            empowering success through <br />
            expert consultation
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Our seasoned experts collaborate with you to navigate the intricate
            landscape of modern business, offering insights that drive success
            across industries and borders.
          </p>

          <button
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: colors.primary }}
          >
            Get a Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Strategic Allies Section */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text & Features */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Strategic Business <br /> Allies
              </h2>

              <ul className="space-y-4">
                {[
                  'Quality Products or Services',
                  'Competitive Pricing',
                  'Excellent Customer Service',
                  'Innovation and Creativity',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-white w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 border border-white/20 hover:bg-white/20">
                About Us
              </button>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <img
                src="/business-office.webp"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ color: colors.tertiary }}
            >
              <Check className="w-7 h-7" style={{ color: colors.primary }} />
              What We Do and Focus On
            </h2>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              We design, build and operate modern software solutions that help
              organizations scale, reduce risk, and unlock new value using
              cloud, data and AI.
            </p>
            <ul className="space-y-4">
              {[
                {
                  strong: 'Strategy & Consulting:',
                  desc: 'Business strategy, roadmaps and digital transformation planning.',
                },
                {
                  strong: 'Custom Software Development:',
                  desc: 'End-to-end product engineering and platform delivery.',
                },
                {
                  strong: 'Cloud & Infrastructure:',
                  desc: 'Cloud migration, platform modernization and managed operations.',
                },
                {
                  strong: 'AI & Data:',
                  desc: 'Data engineering, analytics and AI model development.',
                },
                {
                  strong: 'Security & Compliance:',
                  desc: 'Risk assessments, security engineering and regulatory compliance.',
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="text-base text-gray-700 leading-relaxed flex items-start gap-3"
                >
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: colors.primary }}
                  />
                  <span>
                    <strong className="text-gray-900">{item.strong}</strong>{' '}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
            FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between text-xl font-semibold text-gray-900 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    style={{ color: colors.primary }}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? 'max-h-[500px] mt-4 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-600">
                  Ready to transform your business? Fill out the form below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="prototype">
                      Prototype & MVP Development
                    </option>
                    <option value="software">Software Development</option>
                    <option value="security">Cyber Security</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="analytics">Data Analytics</option>
                    <option value="ai">AI Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: colors.primary }}
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Right: Quote Section */}
            <div className="md:pt-16">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Let's discuss your project
                </h3>
                <blockquote
                  className="text-gray-700 italic border-l-4 pl-4"
                  style={{ borderColor: colors.primary }}
                >
                  "Our dedicated team of IT experts is committed to
                  understanding your unique requirements and crafting tailored
                  solutions that align with your business objectives."
                </blockquote>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    Vishal Kumar Gupta
                  </p>
                  <p className="text-sm" style={{ color: colors.primary }}>
                    Founder, AnoCloud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
