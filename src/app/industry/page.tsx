'use client';
import { useState } from 'react';
import {
  Sparkles,
  Heart,
  Factory,
  GraduationCap,
  ShoppingBag,
  DollarSign,
  ArrowRight,
} from 'lucide-react';

// Matching homepage color palette
const colors = {
  primary: '#059669', // emerald-600
  secondary: '#10b981', // emerald-500
  tertiary: '#047857', // emerald-700
};

const industries = [
  {
    title: 'Healthcare',
    description: 'Strategy / Planning',
    image: '/industries/healthcare.png',
    icon: Heart,
  },
  {
    title: 'Finance',
    description: 'Success / Strategy',
    image: '/industries/finance.png',
    icon: DollarSign,
  },
  {
    title: 'Retail',
    description: 'Planning / Strategy',
    image: '/industries/retail.png',
    icon: ShoppingBag,
  },
  {
    title: 'Manufacturing',
    description: 'Success / Strategy',
    image: '/industries/manufacturing.jpg',
    icon: Factory,
  },
  {
    title: 'Agriculture',
    description: 'Success / Planning',
    image: '/industries/agriculture.png',
    icon: Sparkles,
  },
  {
    title: 'Education',
    description: 'Strategy / Success',
    image: '/industries/education.png',
    icon: GraduationCap,
  },
];

export default function IndustryPage() {
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

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4" style={{ color: colors.primary }} />
              <span
                className="text-sm font-semibold"
                style={{ color: colors.tertiary }}
              >
                Industries We Serve
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Industry
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore a curated collection of our projects and case studies,
              each a testament to our commitment to excellence and innovation
              across diverse sectors
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group cursor-pointer rounded-xl overflow-hidden border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-sm">
                    <industry.icon
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p
                    className="text-sm font-medium mb-2"
                    style={{ color: colors.primary }}
                  >
                    {industry.description}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <div
                    className="flex items-center gap-2 font-semibold"
                    style={{ color: colors.primary }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Improve your business and make your work easy
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Partner with us to transform your industry challenges into
                opportunities for growth and innovation
              </p>

              <button
                className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: colors.primary }}
              >
                Book Free Consultation
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/hero-person.webp"
                alt="Business Consultant"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Let's get in touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
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
                    Industry
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select an industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="education">Education</option>
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
            <div className="md:pt-0">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
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
