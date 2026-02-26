'use client';
import { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Users,
  Zap,
  Shield,
  Cloud,
  CheckCircle,
} from 'lucide-react';

// Matching homepage color palette
const colors = {
  primary: '#059669', // emerald-600
  secondary: '#10b981', // emerald-500
  tertiary: '#047857', // emerald-700
};

const partners = [
  {
    title: 'Google Cloud',
    slug: 'google-cloud',
    img: '/partners/google.webp',
    href: 'https://cloud.google.com',
  },
  {
    title: 'Microsoft Azure',
    slug: 'microsoft-azure',
    img: '/partners/azure.jpg',
    href: 'https://azure.microsoft.com',
  },
  {
    title: 'Amazon Web Services',
    slug: 'amazon-web-services',
    img: '/partners/aws.png',
    href: 'https://aws.amazon.com',
  },
  {
    title: 'Databricks',
    slug: 'databricks',
    img: '/partners/databricks.png',
    href: 'https://databricks.com',
  },
  {
    title: 'Adobe',
    slug: 'adobe',
    img: '/partners/adobe.png',
    href: 'https://www.adobe.com',
  },
  { title: 'Aquila', slug: 'aquila', img: '/partners/aquila.webp', href: '#' },
  {
    title: 'E2E Cloud',
    slug: 'e2e-cloud',
    img: '/partners/e2ecloud.png',
    href: '#',
  },
  {
    title: 'Redington',
    slug: 'redington',
    img: '/partners/redington.png',
    href: '#',
  },
  { title: 'IValue', slug: 'ivalue', img: '/partners/ivalue.avif', href: '#' },
  {
    title: 'Google for Education',
    slug: 'google-education',
    img: '/partners/googleforeducation.png',
    href: '#',
  },
];

const partnershipTypes = [
  {
    id: '01',
    title: 'Technology Partners',
    desc: 'Collaborate on integrations with leading cloud providers like Google Cloud and AWS to deliver scalable AI solutions.',
    icon: Cloud,
  },
  {
    id: '02',
    title: 'Channel Partners',
    desc: 'Expand reach through resellers like Redington and IValue, enabling joint go-to-market strategies.',
    icon: Users,
  },
  {
    id: '03',
    title: 'Strategic Alliances',
    desc: 'Form deep collaborations with innovators like Databricks for advanced analytics and Adobe for creative workflows.',
    icon: Zap,
  },
  {
    id: '04',
    title: 'Solution Providers',
    desc: 'Partner with specialists like E2E Cloud and Aquila for end-to-end infrastructure and security.',
    icon: Shield,
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Innovation Access',
    desc: 'Tap into cutting-edge technologies from global leaders to accelerate your solutions.',
  },
  {
    icon: CheckCircle,
    title: 'Market Expansion',
    desc: 'Leverage our ecosystem for broader reach and co-marketing opportunities.',
  },
  {
    icon: CheckCircle,
    title: 'Expert Support',
    desc: 'Benefit from joint enablement, training, and dedicated success resources.',
  },
  {
    icon: CheckCircle,
    title: 'Revenue Growth',
    desc: 'Unlock new streams through reselling, integrations, and strategic alliances.',
  },
];

export default function PartnersPage() {
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
                Trusted Ecosystem
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Our <span style={{ color: colors.primary }}>Partners</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We collaborate with 20+ leading platform and solution providers,
              including Google Cloud, Microsoft Azure, and AWS, to deliver
              innovative AI, cloud, and security solutions that empower
              businesses worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                style={{ backgroundColor: colors.primary }}
              >
                Explore Partners
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Trusted Ecosystem
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Our Strategic Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join forces with industry leaders to co-innovate and scale your
              solutions. From cloud giants to analytics powerhouses, our
              partnerships drive mutual success.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.slug}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-[140px]"
              >
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                >
                  <img
                    src={partner.img}
                    alt={partner.title}
                    className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
            <div>
              <span
                className="font-semibold text-sm uppercase tracking-wider"
                style={{ color: colors.primary }}
              >
                Partnership Models
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Tailored Collaboration Paths
              </h2>
            </div>

            <button
              className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: colors.primary }}
            >
              Apply to Partner
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipTypes.map((type) => (
              <div
                key={type.id}
                className="group p-8 rounded-xl bg-white border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: colors.primary }}
                >
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <div
                  className="text-sm font-bold mb-2 px-3 py-1 rounded-full bg-emerald-50 inline-block"
                  style={{ color: colors.primary }}
                >
                  {type.id}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Partner Benefits
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock growth through our proven ecosystem, expert support, and
              shared innovation with 20+ global leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: colors.primary }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Join Our Partner Network?
              </h2>

              <p className="text-lg text-emerald-100 leading-relaxed">
                Partner with AnoCloud to unlock new opportunities, drive
                innovation, and grow your business through our trusted ecosystem
                of technology leaders.
              </p>

              <button className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white/10 border border-white/20 hover:bg-white/20 inline-flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-semibold">Partner Success</h3>
                <blockquote className="text-emerald-100 italic border-l-4 border-white/40 pl-4">
                  "Partnering with AnoCloud has accelerated our cloud adoption
                  and unlocked new revenue streams through innovative
                  integrations."
                </blockquote>
                <div className="text-right">
                  <p className="font-semibold">Industry Leader</p>
                  <p className="text-sm text-emerald-200">Strategic Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Ready to Collaborate?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Join our ecosystem of innovators. Fill out the form, and our
                  partnerships team will connect to explore synergies.
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
                    Partnership Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select a partnership type</option>
                    <option value="technology">Technology Partner</option>
                    <option value="channel">Channel Partner</option>
                    <option value="strategic">Strategic Alliance</option>
                    <option value="solution">Solution Provider</option>
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
                    placeholder="Tell us about your partnership goals..."
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: colors.primary }}
                >
                  Send Partnership Inquiry
                </button>
              </div>
            </div>

            {/* Right: Info Card */}
            <div className="md:pt-0">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Partnership Opportunities
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: colors.primary }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Co-Innovation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Collaborate on cutting-edge solutions with our technical
                        teams
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: colors.primary }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Market Access
                      </h4>
                      <p className="text-sm text-gray-600">
                        Expand your reach through our established customer base
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: colors.primary }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Joint Marketing
                      </h4>
                      <p className="text-sm text-gray-600">
                        Co-branded campaigns and thought leadership
                        opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: colors.primary }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Revenue Growth
                      </h4>
                      <p className="text-sm text-gray-600">
                        Unlock new revenue streams through strategic
                        collaboration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
