'use client';

import { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  ArrowDownRight,
  Layers,
  ShieldCheck,
  Users,
  Headphones,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
} from 'lucide-react';

const colors = {
  primary: '#059669',
  secondary: '#10b981',
  tertiary: '#047857',
};

export default function GoogleWorkspaceProductPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  Google Workspace Partner
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Google Workspace Subscriptions
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Purchase and manage Google Workspace through Anocloud with
                transparent plans, guided onboarding and ongoing support
                tailored to your business
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  Get Started Today
                </button>

                <button
                  className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  View Pricing
                </button>
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                {[
                  { icon: Shield, text: 'Secure Setup' },
                  { icon: Zap, text: 'Quick Migration' },
                  { icon: TrendingUp, text: 'Scalable Plans' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: colors.primary }}
                      />
                    </div>
                    <span className="font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Google Workspace"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Anocloud Section */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2">
                <span className="text-emerald-100 font-semibold">
                  Authorized Google Partner
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Why Buy Through Anocloud?
              </h2>

              <p className="text-lg text-emerald-100 leading-relaxed">
                Combine official Google Workspace licensing with local,
                responsive support and advisory from the Anocloud team
              </p>

              <div className="grid md:grid-cols-3 gap-4 pt-4">
                {[
                  {
                    icon: '🎯',
                    title: 'Official Licenses',
                    desc: 'Full authenticity & compliance',
                  },
                  {
                    icon: '⚡',
                    title: 'Quick Setup',
                    desc: 'Migration from day one',
                  },
                  {
                    icon: '🔒',
                    title: 'Ongoing Support',
                    desc: 'Always here to help',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-emerald-200 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <button
                className="w-32 h-48 rounded-2xl flex items-center justify-center cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: colors.secondary }}
              >
                <ArrowDownRight className="text-white w-10 h-10" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Flexible Options
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Choose Your Google Workspace Plan
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              From startups to enterprises, we have the right plan for every
              team size
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: '01',
                title: 'Business Starter',
                badge: 'For Startups',
                desc: 'Core collaboration tools with predictable pricing while you establish your operations',
                icon: '🚀',
                features: [
                  '30 GB cloud storage per user',
                  'Professional email',
                  'Standard security',
                  'Meet video conferencing',
                ],
              },
              {
                id: '02',
                title: 'Business Standard / Plus',
                badge: 'For Growing Teams',
                desc: 'More storage, security options and meeting capabilities for scaling organisations',
                icon: '📈',
                features: [
                  '2-5 TB cloud storage',
                  'Enhanced security controls',
                  'Advanced Meet features',
                  'Shared drives',
                ],
              },
              {
                id: '03',
                title: 'Enterprise Editions',
                badge: 'For Enterprises',
                desc: 'Advanced security, compliance and admin controls tailored to complex environments',
                icon: '🏢',
                features: [
                  'Unlimited storage',
                  'Advanced security & compliance',
                  'Enterprise support',
                  'Data loss prevention',
                ],
              },
            ].map((plan) => (
              <div
                key={plan.id}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{plan.icon}</div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50"
                    style={{ color: colors.primary }}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {plan.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {plan.desc}
                </p>

                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: colors.primary }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="flex items-center gap-2 font-semibold"
                  style={{ color: colors.primary }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Complete Package
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              What's Included
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: 'Flexible Plans',
                desc: 'Editions for startups, SMEs and enterprises with the ability to mix licences across teams',
              },
              {
                icon: ShieldCheck,
                title: 'Secure Onboarding',
                desc: 'Guided setup, domain verification, security baselines and migration support',
              },
              {
                icon: Headphones,
                title: 'Ongoing Support',
                desc: 'Help with user management, renewals, upgrades and troubleshooting',
              },
              {
                icon: Users,
                title: 'User Management',
                desc: 'Simple admin controls to add, remove and manage users across your organization',
              },
              {
                icon: Shield,
                title: 'Data Protection',
                desc: 'Advanced security features including 2FA, encryption and data loss prevention',
              },
              {
                icon: Zap,
                title: 'Quick Migration',
                desc: 'Seamless transition from your existing email and collaboration tools',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <feature.icon
                    className="w-6 h-6"
                    style={{ color: colors.primary }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Individual Product Pages You Can Trust
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Each Anocloud product has a dedicated page so customers can
                quickly understand what it does, how it is priced and when it is
                the right fit
              </p>

              <div className="grid gap-4">
                {[
                  'Detailed product descriptions to explain capabilities in plain language',
                  'Key features and specifications listed in a simple, scannable format',
                  'Pricing plans and subscription options for different usage patterns',
                  'Use cases mapped to startups, mid-market and enterprise scenarios',
                  'Support, SLAs and onboarding information clearly outlined',
                  'Links to related services for implementation and managed support',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: colors.primary }}
                    />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Get Started
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Talk to Our Google Workspace Team
            </h2>
            <p className="text-lg text-gray-600">
              Let's find the perfect Workspace plan for your organization
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees
                </label>
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="">Select range</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your Google Workspace needs..."
                rows={5}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: colors.primary }}
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 text-white"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="font-bold text-2xl mb-4">AnoCloud</h3>
              <p className="text-emerald-100 text-sm leading-relaxed mb-4">
                Authorized Google Workspace partner delivering enterprise
                solutions with local support.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Products</h4>
              <ul className="space-y-2 text-emerald-100 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Google Workspace
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Google Cloud
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Microsoft 365
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Security Solutions
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-emerald-100 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Support
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Partners
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-emerald-100 text-sm">
                &copy; 2024 AnoCloud. All rights reserved.
              </p>
              <div className="flex gap-6 text-emerald-100 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
