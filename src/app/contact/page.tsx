'use client';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  User,
} from 'lucide-react';

// Using the same color palette as homepage
const colors = {
  primary: '#059669', // emerald-600
  secondary: '#10b981', // emerald-500
  tertiary: '#047857', // emerald-700
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'hello@anocloud.com',
      link: 'mailto:hello@anocloud.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Innovation Hub, Tech City',
      link: null,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full"
            style={{ backgroundColor: colors.secondary, filter: 'blur(100px)' }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
            style={{ backgroundColor: colors.primary, filter: 'blur(120px)' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
              <MessageSquare
                className="w-4 h-4"
                style={{ color: colors.primary }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: colors.tertiary }}
              >
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Let's Start a Conversation
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Have a question or want to work together? Reach out to our team —
              we're happy to help transform your business with innovative
              solutions
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a
                href="mailto:hello@anocloud.com"
                className="px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: colors.primary }}
              >
                Email Us
              </a>
              <a
                href="tel:+15551234567"
                className="px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <info.icon
                    className="w-6 h-6"
                    style={{ color: colors.primary }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {info.detail}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form + Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <span
                  className="font-semibold text-sm uppercase tracking-wider"
                  style={{ color: colors.primary }}
                >
                  Contact Form
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Let's Get In Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We value your feedback and inquiries. Whether you have
                  questions about our services, need assistance, or want to
                  explore potential collaborations, we're here to assist you.
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
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Right: Quote Section - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                {/* Quote Card */}
                <div
                  className="p-8 rounded-2xl text-white shadow-xl mb-6"
                  style={{ backgroundColor: colors.tertiary }}
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 leading-tight">
                      Let's Discuss Your Project
                    </h3>
                    <p className="text-emerald-100 leading-relaxed text-lg">
                      "Our dedicated team of IT experts is committed to
                      understanding your unique requirements and crafting
                      tailored solutions that align with your business
                      objectives."
                    </p>
                  </div>

                  <div className="border-t border-white/20 pt-6">
                    <p className="font-bold text-white text-lg mb-1">
                      Vishal Kumar Gupta
                    </p>
                    <p className="text-emerald-200">Founder, AnoCloud</p>
                  </div>
                </div>

                {/* Additional Info Card */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${colors.primary}10` }}
                    >
                      <Clock
                        className="w-5 h-5"
                        style={{ color: colors.primary }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Response Time
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We typically respond within 24 hours during business
                        days
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-semibold text-gray-900">
                        Business Hours:
                      </span>
                      <br />
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="p-12 rounded-2xl text-white text-center relative overflow-hidden"
            style={{ backgroundColor: colors.tertiary }}
          >
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">
                Prefer to Talk Directly?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Schedule a consultation with our experts to discuss your
                specific needs
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  className="px-8 py-4 rounded-lg font-semibold bg-white hover:shadow-xl transition-all duration-300"
                  style={{ color: colors.tertiary }}
                >
                  Schedule Consultation
                </button>
                <a
                  href="tel:+15551234567"
                  className="px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
