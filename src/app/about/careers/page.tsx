'use client';
import { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  Award,
  Globe,
} from 'lucide-react';

const colors = {
  primary: '#059669',
  secondary: '#10b981',
  tertiary: '#047857',
};

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const jobs = [
    {
      title: 'Machine Learning Engineer',
      category: 'AI & ML',
      description:
        'Build and deploy advanced ML models on cloud platforms, collaborating with cross-functional teams to solve real-world challenges.',
      remote: true,
      type: 'Full Time',
      location: 'Remote',
    },
    {
      title: 'Data Scientist',
      category: 'Data Engineering',
      description:
        'Leverage Azure and Google Cloud to develop data pipelines and insights, turning complex datasets into actionable strategies.',
      remote: true,
      type: 'Full Time',
      location: 'Remote',
    },
    {
      title: 'Azure Cloud Architect',
      category: 'Cloud Infrastructure',
      description:
        'Design scalable, secure cloud architectures on Azure, optimizing for performance, cost, and compliance in hybrid environments.',
      remote: true,
      type: 'Full Time',
      location: 'Remote',
    },
    {
      title: 'Cybersecurity Analyst',
      category: 'Security & Risk',
      description:
        'Implement threat detection and risk management frameworks, ensuring robust protection for cloud-native applications.',
      remote: true,
      type: 'Full Time',
      location: 'Remote',
    },
    {
      title: 'Full Stack Developer',
      category: 'Software Development',
      description:
        'Create responsive web applications using modern frameworks, working closely with design and product teams.',
      remote: true,
      type: 'Full Time',
      location: 'Remote',
    },
    {
      title: 'DevOps Engineer',
      category: 'Infrastructure',
      description:
        'Automate deployment pipelines and maintain CI/CD workflows, ensuring reliability and scalability of our systems.',
      remote: true,
      type: 'Full Time',
      location: 'Remote',
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Remote First',
      desc: 'Work from anywhere with flexible hours',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      desc: 'Clear paths for advancement and mentorship',
    },
    {
      icon: Award,
      title: 'Learning Budget',
      desc: 'Annual budget for courses and certifications',
    },
    {
      icon: Shield,
      title: 'Health Coverage',
      desc: 'Comprehensive health and wellness benefits',
    },
    {
      icon: Users,
      title: 'Great Culture',
      desc: 'Collaborative and inclusive environment',
    },
    {
      icon: Zap,
      title: 'Latest Tech',
      desc: 'Work with cutting-edge tools and technologies',
    },
  ];

  const values = [
    {
      number: '01',
      title: 'Excellence',
      description:
        'We deliver superior AI and cloud solutions that exceed expectations through rigorous quality and client-centric innovation.',
      icon: Target,
    },
    {
      number: '02',
      title: 'Integrity',
      description:
        'Transparency and ethical practices guide every decision, building lasting trust with clients, partners, and our team.',
      icon: Shield,
    },
    {
      number: '03',
      title: 'Innovation',
      description:
        'We pioneer resilient technologies in AI, security, and data engineering to keep businesses ahead in the digital landscape.',
      icon: Lightbulb,
    },
    {
      number: '04',
      title: 'Learning',
      description:
        'Empowering our team with ongoing training and knowledge sharing to adapt and thrive in evolving tech ecosystems.',
      icon: Users,
    },
  ];

  const faqs = [
    {
      question:
        'What opportunities are available for AI and cloud specialists?',
      answer:
        'We offer roles in machine learning engineering, data science, and cloud architecture, focusing on innovative projects in AI integration and multi-cloud environments. Join us to work on cutting-edge solutions that drive business transformation.',
    },
    {
      question: 'How does AnoCloud support professional growth?',
      answer:
        'We foster continuous learning through mentorship programs, certifications in AWS/Azure/GCP, and access to industry conferences. Our culture emphasizes innovation and skill development to accelerate your career trajectory.',
    },
    {
      question: 'What is the hiring process like?',
      answer:
        'Our process includes an initial screening, technical assessment, interviews with the team, and a final discussion on cultural fit. We prioritize collaborative problem-solving and alignment with our values.',
    },
    {
      question: 'Are remote positions available?',
      answer:
        'Yes, many of our roles support fully remote work, with flexible hours to promote work-life balance. We provide tools for seamless collaboration across distributed teams.',
    },
  ];

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
                  Join Our Team
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Build Your Career with AnoCloud
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Join a dynamic team shaping the future of AI, cloud, and
                security. Grow your career while delivering impactful solutions
                that transform industries.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#positions"
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  View Open Positions
                </a>

                <a
                  href="#culture"
                  className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2"
                  style={{ borderColor: colors.primary, color: colors.primary }}
                >
                  Learn Our Culture
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                {[
                  { icon: Globe, text: 'Remote First' },
                  { icon: TrendingUp, text: 'Career Growth' },
                  { icon: Award, text: 'Great Benefits' },
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
                src="/team-members-talking.webp"
                alt="Team Collaboration"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Why AnoCloud
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                  <benefit.icon
                    className="w-7 h-7"
                    style={{ color: colors.primary }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: colors.tertiary }}
        id="culture"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="text-emerald-100 font-semibold text-sm uppercase tracking-wider">
              Our Foundation
            </span>
            <h2 className="text-4xl font-bold mt-2">Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="text-3xl font-black"
                    style={{ color: colors.secondary }}
                  >
                    {value.number}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-emerald-100 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50" id="positions">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Open Positions
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Join the Innovation Team
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore exciting opportunities across AI, cloud, security, and
              software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50"
                      style={{ color: colors.primary }}
                    >
                      {job.category}
                    </span>
                    {job.remote && (
                      <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">
                        Remote
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {job.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                      />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase
                        className="w-4 h-4"
                        style={{ color: colors.primary }}
                      />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  <button
                    className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '200+', label: 'Team Members' },
              { num: '30+', label: 'Countries' },
              { num: '95%', label: 'Employee Satisfaction' },
              { num: '4.8★', label: 'Glassdoor Rating' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div
                  className="text-4xl font-black mb-2"
                  style={{ color: colors.primary }}
                >
                  {stat.num}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Questions?
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-emerald-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4"
                >
                  <span className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-light text-gray-400 flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p
                      className="text-gray-600 leading-relaxed border-l-2 pl-4"
                      style={{ borderColor: colors.primary }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: colors.primary }}
            >
              Apply Now
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-600">
              Submit your application and our talent team will reach out to
              discuss opportunities.
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
                  placeholder="john@example.com"
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
                Position of Interest
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
              >
                <option value="">Select a position</option>
                {jobs.map((job) => (
                  <option key={job.title} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Resume/CV URL
              </label>
              <input
                type="url"
                name="resume"
                value={formData.resume}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Why do you want to join AnoCloud?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about yourself and why you're interested..."
                rows={5}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.primary }}
            >
              Submit Application
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-white relative overflow-hidden"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            We're always looking for talented individuals. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>
          <button
            className="px-8 py-4 rounded-lg font-semibold bg-white hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            style={{ color: colors.tertiary }}
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
