'use client';
import {
  CheckCircle,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Lightbulb,
} from 'lucide-react';

// Matching homepage color palette
const colors = {
  primary: '#059669', // emerald-600
  secondary: '#10b981', // emerald-500
  tertiary: '#047857', // emerald-700
};

export default function AboutPage() {
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
                  About AnoCloud
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Who We Are
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                AnoCloud is a trusted partner for AI, data, cloud and security
                solutions. We combine deep technical expertise with industry
                knowledge to help organizations modernize systems, unlock
                insights from data, and secure their infrastructure.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  Our Method
                </button>

                <button
                  className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  Our Team
                </button>

                <button className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gray-300 text-gray-700">
                  Careers
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/navigating-success.jpg"
                alt="About AnoCloud"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Our Foundation
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Our Approach',
                desc: 'We combine strategy and engineering to deliver measurable outcomes across cloud, AI, and security domains.',
              },
              {
                icon: Globe,
                title: 'Industries',
                desc: 'We serve education, healthcare, finance, manufacturing, retail and agriculture with domain-aware solutions.',
              },
              {
                icon: Heart,
                title: 'Culture',
                desc: 'Our team values collaboration, learning and delivering secure, reliable software that creates impact.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/2149160928.jpg"
                alt="Mission"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
                <Lightbulb
                  className="w-4 h-4"
                  style={{ color: colors.primary }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: colors.tertiary }}
                >
                  Our Mission
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                Driving Innovation Through Technology Excellence
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We empower organizations to thrive in the digital age by
                delivering cutting-edge solutions that transform challenges into
                opportunities. Our commitment to excellence, innovation, and
                partnership drives everything we do.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Client-Centric Approach',
                  'Technical Excellence',
                  'Continuous Innovation',
                  'Sustainable Growth',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200"
                  >
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: colors.primary }}
                    />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
              By The Numbers
            </h2>
            <p className="text-lg text-emerald-100">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, num: '30+', label: 'Years of Experience' },
              { icon: Users, num: '200+', label: 'Expert Team Members' },
              { icon: Globe, num: '10+', label: 'Industry Verticals' },
              { icon: Shield, num: '20+', label: 'Technology Partners' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-black mb-2 text-white">
                  {stat.num}
                </div>
                <p className="text-emerald-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Our Differentiators
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Why Organizations Choose AnoCloud
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: 'Security First',
                  desc: 'Enterprise-grade security baked into every solution we build',
                },
                {
                  icon: Zap,
                  title: 'Rapid Innovation',
                  desc: 'Agile methodologies that deliver results faster without compromising quality',
                },
                {
                  icon: TrendingUp,
                  title: 'Scalable Solutions',
                  desc: 'Architecture designed to grow with your business needs',
                },
                {
                  icon: Users,
                  title: 'Expert Team',
                  desc: '200+ certified professionals with deep domain expertise',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 group">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <img
                src="/team-members-talking.webp"
                alt="Team"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how AnoCloud can help you achieve your technology
            goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: colors.primary }}
            >
              Get In Touch
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
